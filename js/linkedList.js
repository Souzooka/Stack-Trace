/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  var _head = null;
  var _tail = null;
  var _length = 0;

  function getHead() {
    return _head;
  }

  function getTail() {
    return _tail;
  }

  function getLength() {
    return _length;
  }

  function add(value) {
    if (_head === null) {
      _head = {
        value: value,
        next: null
      };
      _tail = _head;
    } else {
      _tail.next = {
        value: value,
        next: null
      };
      _tail = _tail.next;
    }
    _length++;
    return _tail;
  }

  function remove(number) {
    var currentNode = get(number);
    var previousNode = get(number - 1);

    if (currentNode === false) {
      return false;
    }

    if (number === 0) {
      _head = currentNode.next;
    }

    if (currentNode.next === null) {
      _tail = previousNode;
    }

    _length--;
    previousNode.next = currentNode.next;
  }

  function get(number) {
    var current = 0;
    var currentNode = _head;

    if (_head === null) {
      return false;
    }

    while (current !== number) {
      if (currentNode.next === null) {
        return false;
      }
      currentNode = currentNode.next;
      current++;
    }

    return currentNode;
  }

  function insert(value, number) {
    if (number === 0) {
      _head = {
        value: value,
        next: _head
      };
    }

    var currentNode = get(number - 1);
    var nextNode = currentNode.next;

    if (currentNode === false) {
      return false;
    }

    currentNode.next = {
      value: value,
      next: nextNode
    };

  }

  return {
    getHead,
    getTail,
    add,
    remove,
    get,
    insert
  };
}

var list = linkedListGenerator();
list.add("1");
list.remove(0);
console.log(list.getHead());
console.log(list.getTail());