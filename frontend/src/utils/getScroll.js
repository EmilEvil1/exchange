import truetype from './truetype';

const getScroll = () => {
  if (!truetype.isFalse(window.pageYOffset)) {
    return {
      scrollTop: window.pageYOffset,
      scrollLeft: window.pageXOffset
    };
  }
  const Element = (document.documentElement.clientHeight
    ? document.documentElement
    : document.body);
  return {
    scrollTop: Element.scrollTop,
    scrollLeft: Element.scrollLeft
  };
}

export default getScroll;
