import truetype from 'src/utils/truetype';

const getDOMroot = () => {
  const body = document.querySelector('body');
  {
    const root = document.getElementById('root');
    if (truetype.isElement(root)) {
      return root;
    }
  }
  {
    const root = document.createElement('div');
    root.id = 'root';
    body.append(root);
    return getDOMroot();
  }
};

export default getDOMroot;
