const getScroll = () => {
  if (window.pageYOffset) {
    return {
      scrollTop: window.pageYOffset,
      scrollLeft: window.pageXOffset,
    };
  }
  const elem = document.documentElement.clientHeight ? document.documentElement : document.body;
  return {
    scrollTop: elem.scrollTop,
    scrollLeft: elem.scrollLeft,
  };
};

export default getScroll;
