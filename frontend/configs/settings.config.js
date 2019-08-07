const settings = {
  server: {
    protocol: 'http',
    hostname: 'localhost',
    port: 3000,
  },
};

settings.server.fullhost = `${settings.server.protocol}://${settings.server.hostname}${settings.port === 80 ? '' : `:${settings.server.port}`}`;

export default settings;
