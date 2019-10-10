import queryString from 'query-string';
import truetype from 'src/utils/truetype';
import jsonparse from 'src/utils/jsonparse';

export const buildQueryString = object => {
  const result = queryString.stringify(object);
  if (result.length > 0) {
    return `?${result}`;
  }
  return '';
};

export const parseQueryString = string => queryString.parse(string);

const xhr = settings => {
  const {endpoint, method = 'GET', payload, token} = settings;
  const fetchSettings = {
    endpoint,
    options: {
      method,
      headers: {
        accept: 'application/json',
      },
    },
  };
  if (truetype.isString(token)) {
    fetchSettings.options.headers.authorization = `Bearer ${token}`;
  }
  if (method === 'GET' && !truetype.isUndefined(payload)) {
    fetchSettings.endpoint = `${fetchSettings.endpoint}${buildQueryString(payload)}`;
  }
  if (method === 'POST' && !truetype.isUndefined(payload)) {
    if (!(payload instanceof FormData)) {
      fetchSettings.options.headers['content-type'] = 'application/json';
      fetchSettings.options.body = JSON.stringify(payload);
    } else {
      fetchSettings.options.body = payload;
    }
  }
  const startAt = Date.now();

  return new Promise((resolve, reject) =>
    fetch(fetchSettings.endpoint, fetchSettings.options)
      .then(response => {
        if (response.status >= 400) {
          const error = new Error(response.statusText);
          error.response = response;
          throw error;
        } else {
          return response;
        }
      })
      .then(response => {
        const contentType = response.headers.get('content-type');
        if (truetype.isString(contentType) && contentType.includes('application/json')) {
          return response.text().then(text => {
            const json = jsonparse(text);
            if (json === undefined) {
              return resolve({
                status: response.status,
                payload: text,
                afterAt: Date.now() - startAt,
              })
            }
            return resolve({
              status: response.status,
              payload: json,
              afterAt: Date.now() - startAt,
            })
          });
        }
        return response.text().then(() =>
          resolve({
            status: response.status,
            afterAt: Date.now() - startAt,
          })
        );
      })
      .catch(error => {
        if (!truetype.isUndefined(error.response)) {
          const contentType = error.response.headers.get('content-type');
          if (truetype.isString(contentType) && contentType.includes('application/json')) {
            return error.response.text().then(text => {
              const json = jsonparse(text);
              if (json === undefined) {
                return reject({
                  status: error.response.status,
                  message: text,
                  afterAt: Date.now() - startAt,
                });
              }
              return reject({
                status: error.response.status,
                message: json.message || error.message,
                afterAt: Date.now() - startAt,
              });
            });
          }
          return error.response.text().then(() =>
            reject({
              status: error.response.status,
              message: error.message,
              afterAt: Date.now() - startAt,
            })
          );
        }
        return reject({
          message: error.message,
          afterAt: Date.now() - startAt,
        });
      })
  );
};

export default xhr;
