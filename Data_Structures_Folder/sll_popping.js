class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }

}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
pop(){
    //if there is no nodes in the list, return undifined
    if(!this.head) return undifined;
    //loop through the list until you reach the tail
    var current = this.head;
    var newTail = current;
    while(current.next){
        newTail = current;
        current = current.next;
    }
    // console.log(current.val)
    // console.log(newTail.val)

    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    //edge case , need to set head and tail ==null in order to not continue to have a head and a tail...it will persist if you do not do the following...
    if(this.length === 0){
        this.head = null;
        this.tail = null;
    }
    return current;

    //set the next property of the 2nd to last node to be null
    // set the tail to be the 2nd to last Nodedecrement the length of the list by 1
    // return the value of the node removed
}

//instances
list = new SinglyLinkedList()
