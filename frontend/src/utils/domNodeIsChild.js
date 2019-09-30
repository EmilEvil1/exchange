const domNodeIsChild = (parentNode, childNode) => {
    if (!childNode.parentNode) {
        return false;
    }

    if (childNode.parentNode === parentNode) {
        return true;
    }
    return domNodeIsChild(parentNode, childNode.parentNode);
};

export default domNodeIsChild;
