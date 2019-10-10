((arr) => {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('closest')) {
      return;
    }
    Object.defineProperty(item, 'closest', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function closest(css) {
        var node = this;
        while (node) {
          if (node.matches(css)) return node;
          else node = node.parentElement;
        }
        return null;
      },
    });
  });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);
((arr) => {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('append')) {
      return;
    }
    Object.defineProperty(item, 'append', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function append() {
        var argArr = Array.prototype.slice.call(arguments),
            docFrag = document.createDocumentFragment();
        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });
        this.appendChild(docFrag);
      }
    });
  });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);
((arr) => {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('prepend')) {
      return;
    }
    Object.defineProperty(item, 'prepend', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function prepend() {
        var argArr = Array.prototype.slice.call(arguments),
            docFrag = document.createDocumentFragment();

        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });

        this.insertBefore(docFrag, this.firstChild);
      }
    });
  });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);
((arr) => {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('before')) {
      return;
    }
    Object.defineProperty(item, 'before', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function before() {
        var argArr = Array.prototype.slice.call(arguments),
            docFrag = document.createDocumentFragment();
        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });
        this.parentNode.insertBefore(docFrag, this);
      }
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
((arr) => {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('after')) {
      return;
    }
    Object.defineProperty(item, 'after', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function after() {
        var argArr = Array.prototype.slice.call(arguments),
            docFrag = document.createDocumentFragment();
        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });
        this.parentNode.insertBefore(docFrag, this.nextSibling);
      }
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
((arr) => {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('remove')) {
      return;
    }
    Object.defineProperty(item, 'remove', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function remove() {
        if (this.parentNode === null) {
          return;
        }
        this.parentNode.removeChild(this);
      }
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
((arr) => {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('replaceWith')) {
      return;
    }
    Object.defineProperty(item, 'replaceWith', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function replaceWith() {
        'use-strict';
        var parent = this.parentNode, i = arguments.length, currentNode;
        if (!parent) return;
        if (!i)
          parent.removeChild(this);
        while (i--) {
          currentNode = arguments[i];
          if (typeof currentNode !== 'object'){
            currentNode = this.ownerDocument.createTextNode(currentNode);
          } else if (currentNode.parentNode){
            currentNode.parentNode.removeChild(currentNode);
          }
          if (!i)
            parent.replaceChild(currentNode, this);
          else
            parent.insertBefore(currentNode, this.previousSibling);
        }
      }
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
