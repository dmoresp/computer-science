/* Implementation of data structures in JS ES6 */
let set = new Set();
let map = new Map();


/* Implementation of ArrayList */
class ArrayList {
  constructor(items = {}) {
    this.length = items.length || 0;
    this.data = items;
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
  }
  pop() {
    let item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
  get(index) {
    return this.data[index];
  }
  delete(index) {
    delete this.data[index];
    this.length--;
    this._collapseTo(index);
  }

  _collapseTo(index) {
    for (let i = index; i < this.length; i++) {
      if (i === this.length - 1) delete this.data[i]; 
      this.data[i] = this.data[i + 1];
    }
  }
}

// unit tests
// do not modify the below code
// describe('ArrayList', function() {
//   const range = length => Array.apply(null, {length: length}).map(Number.call, Number);
//   const abcRange = length => range(length).map( num => String.fromCharCode( 97 + num ) );
//   let list;
  
//   beforeEach( () => {
//     list = new ArrayList();
//   })
  
//   it('constructor', () => {
//     expect(list).toEqual(jasmine.any(ArrayList));
//   });
  
//   it('push', () => {
//     abcRange(26).map( character => list.push(character) );
//     expect(list.length).toEqual(26);
//   });
  
//   it('pop', () => {
//     abcRange(13).map( character => list.push(character) );
//     expect(list.length).toEqual(13);
//     range(10).map( () => list.pop() );
//     expect(list.length).toEqual(3);
//     expect(list.pop()).toEqual('c');
//   });
  
//   it('get', () => {
//     list.push('first');
//     expect(list.get(0)).toEqual('first');
//     list.push('second');
//     expect(list.get(1)).toEqual('second');
//     expect(list.get(0)).toEqual('first');
//     abcRange(26).map( character => list.push(character));
//     expect(list.get(27)).toEqual('z');
//     expect(list.get(0)).toEqual('first');
//     expect(list.get(9)).toEqual('h');
//     list.pop();
//     expect(list.get(list.length-1)).toEqual('y');
//   });
  
//   it('delete', () => {
//     abcRange(26).map( character => list.push(character) );
//     list.delete(13);
//     expect(list.length).toEqual(25);
//     expect(list.get(12)).toEqual('m');
//     expect(list.get(13)).toEqual('o');
//     list.delete(0);
//     expect(list.length).toEqual(24);
//     expect(list.get(0)).toEqual('b');
//   });
// });

/* Implementation of LinkedList */
class Node {
  constructor(value) {
    this.nextIndex = nextIndex;
    this.value = value;
    this.type = typeof value;
  }
}
class LinkedList {
  constructor(data = {}) {
    this.data = data;
    this.length = data.length || 0;
    this.head = data.indexOf(0);
    this.tail = data.indexOf(-1);
  }
  push(value) {
    this.data[this.head - 1] = new Node(value, null, this.head);
    this.length++;
  }
  pop() {
    let item = this.data[this.tail];
    delete this.data[this.tail];
    this.data[this.tail]['nextIndex'] = null;
    return item;
  }
  _find(value, test = this._test) {

  }
  _test(a, b) {
    return a === b;
  }
  _testIndex(search, __, i) {
    return search === i;
  }
  get(index) {}
  delete(index) {}

}
// unit tests
// do not modify the below code
describe('LinkedList', function() {
  const range = length => Array.apply(null, {length: length}).map(Number.call, Number);
  const abcRange = length => range(length).map( num => String.fromCharCode( 97 + num ) );
  let list;
  
  beforeEach( () => {
    list = new LinkedList();
  })
  
  it('constructor', () => {
    expect(list).toEqual(jasmine.any(LinkedList));
  });
  
  it('push', () => {
    abcRange(26).map( character => list.push(character) );
    expect(list.length).toEqual(26);
  });
  
  it('pop', () => {
    abcRange(13).map( character => list.push(character) );
    expect(list.length).toEqual(13);
    range(10).map( () => list.pop() );
    expect(list.length).toEqual(3);
    expect(list.pop()).toEqual('c');
  });
  
  it('get', () => {
    list.push('first');
    expect(list.get(0)).toEqual('first');
    list.push('second');
    expect(list.get(1)).toEqual('second');
    expect(list.get(0)).toEqual('first');
    abcRange(26).map( character => list.push(character));
    expect(list.get(27)).toEqual('z');
    expect(list.get(0)).toEqual('first');
    expect(list.get(9)).toEqual('h');
    list.pop();
    expect(list.get(list.length-1)).toEqual('y');
  });
  
  it('delete', () => {
    abcRange(26).map( character => list.push(character) );
    list.delete(13);
    expect(list.length).toEqual(25);
    expect(list.get(12)).toEqual('m');
    expect(list.get(13)).toEqual('o');
    list.delete(0);
    expect(list.length).toEqual(24);
    expect(list.get(0)).toEqual('b');
  });
  
});