class Node {
    constructor(data, next = null ) {
        this.data = data,
        this.next = next
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0
    }
  add(value) {
      let node = new Node(value);
      let current;
        if(this.head == null )
        this.head = node
        else {
            current = this.head;
        while (current.next)
            current = current.next
            current.next = node;
        }
        this.size++
  }
  remove(value) {
      let current = this.head;
      let perem = null;

      while(current != null) {
          if(current.data === value) {
              if(perem == null) 
                 this.head = current.next;
                 
             else 
                 perem.next = current.next;
                 this.size--;
          }
          perem = current;
          current = current.next;
      }
  }
  contains(value) {
      let current = this.head;
       
      while(current != null) {
          if(current.data === value) {
              return true;
          }
          current = current.next;
      }
      return false;
  }
  [Symbol.iterator] =  function* () {
      for(let current = this.head; current != null; current = current.next) {
          yield current.data;
      }
  }
  clear() {
      let current = this.head;
       while(current != null) {
           if(current.data) {
               this.head = current.next;
               this.size--;
           }
           current = current.next;
       }
  }
  count() {
      return true;
  }
  log() {
      let current;
      let str = "";
      if(this.head != null) {
          current = this.head;
        while(current){
            str += current.data;
        if(current.next)
        str += ", ";
        current = current.next
        }
      }
      console.log(str);
  }
}
function createLinkedList(arr) {
    let i = 0;
    let list = new LinkedList() 
    
    while(arr[i]) {
        list.add(arr[i])
        i++
    }
    return list;
}
const ll = createLinkedList([100, 1, 2, 3, 100, 4, 5, 100]);
ll.log();
// " 100, 1, 2, 3, 100, 4, 5, 100 "
while(ll.remove(100));
ll.log();
// " 1, 2, 3, 4, 5"
ll.add(10);
ll.log();
// "1, 2, 3, 4, 5, 10"
console.log(ll.contains(10));
//"true"
let sum = 0;
for(const n of ll) {
    sum += n;
}
console.log(sum);
//"25"
ll.clear();
ll.log();
// ""