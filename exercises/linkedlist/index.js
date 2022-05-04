// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  insertFirst(data){
   this.head = new Node(data, this.head);
  }

  size(){
    let counter = 0;
    while(this.head){
      counter++;
      this.head = this.head.next;
    }
    return counter;
  }

  getFirst(){
    return this.head;
  }

  getLast(){
     while(this.head){
       if(!this.head.next) return this.head;
       this.head = this.head.next;
     }
  }

  clear(){
      this.head = null;
  }

  removeFirst(){
  if(!this.head){
    return;
  }
  this.head = this.head.next;  
  }

  removeLast(){
    if(!this.head){
      return;
    }

    if(!this.head.next){
      this.head = null;
      return;
    }
     
    let previous = this.head;
    let node = this.head.next;

    while(node.next){
      previous= node;
      node = node.next;
    }
     previous.next = null;
  }


  insertLast(data){
    const last = this.getLast();
    if(last){
      last.next = new Node(data);
    }else{
      this.head = new Node(data);
    }
  }
}

module.exports = { Node, LinkedList };
