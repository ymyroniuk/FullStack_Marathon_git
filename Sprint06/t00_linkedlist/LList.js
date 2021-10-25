'use strict'

const { LLData } = require("./LLData");

exports.LList = class {
    first = null;
    last = null;
    _count;

    getFirst() {
        return this.first;
    }

    getLast() {
        return this.last;
    }

    add(value) {
        const newElem = new LLData(value);
        if(this.last) {
            this.last.next = newElem;
            this.last = newElem;
            return;
        }
        if(!this.first) {
            this.first = newElem;
        }
        this.last = newElem;
     }

    addFromArray(arrayOfData) {
        arrayOfData.map((item) => {
            return this.add(item)
        })
    }
    
    remove(value) {
        if(!this.first || this.first === this.last) {
            return false;
        }
        if(this.first.data === value) {
            this.first = this.first.next;
            return true;
        }
        let current = this.first;
        while(current.next) {
            if(current.next.data === value) {
                if(this.last === current.next) {
                    this.last = current;
                }
                current.next = current.next.next;
                return true;
            } else {
                current = current.next;
            }
        }
        return false;
    }

    removeAll(value) {
        do {} while (this.remove(value));
    }


    contains(value) {
        if (!this.first) {
            return false
        }
        let current = this.first
        while (current) {
            if (current.data === value) {
                return true
            }
            current = current.next
        }
        return false
    }


    clear() {
        // this.first = this.last = null;
        this.first = null
    }

    toString(){
        let nodes = [];
        let currentNode = this.head
        while(currentNode){
          nodes.push(currentNode.data)
          currentNode = currentNode.next;
        }
        return nodes.join(', ');
      }

    filter(callback) {
        if(!this.first) {
            return null;
        }
        let newList = Object.assign(Object.create(this), JSON.parse(JSON.stringify(this)));
        let current = newList.first;
        while(current) {
            if(!callback(current.data)) {
                newList.remove(current.data);
            }
            current = current.next;
        }
        return newList;
    }

    *[Symbol.iterator]() {
        if(!this.first) {
            return;
        }
        let current = this.first;
        while(current) {
            yield current.data;
            current = current.next;
        }
    }
    _next = this[Symbol.iterator]();
    next() {
        return this._next.next();
    }
    getIterator() {
        return this[Symbol.iterator]();
    }

 }


const {LList} = require('./LList');

const list = new LList();

list.addArray([100, 1, 2, 3, 100, 4, 5, 100]);

list.add(10);

const onlySmallList = list.filter((data) => {
     return data < 18
});

let sumOfAll = 0;

for(const data of list){
    sumOfAll += data;
}

console.log([...list]) // [ 100, 1, 2, 3, 100, 4, 5, 100]
console.log([...onlySmallList]) // [ 1, 2, 3, 4, 5, 10]
console.log(sumOfAll) // 325
console.log(list.contains(10)) // true
console.log(list.contains(22)) // false

list.clear();

console.log([...list]) // []