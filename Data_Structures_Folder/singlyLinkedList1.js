//piece of data - val
//reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }

}

// var first = new Node ("Hi")
// first.next = new Node("there")
// first.next.next = new Node ("there")

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //create a function the accepts a value
    push(val){
        // if (val.length == 0){
        //     this.head = val;
        //     this.tail = val;
        // } else if (val.length > 0){
        //     list.push(val);

        //create a new node using the value passed to the function
        var newNode = new Node(val)
        //if there is no head property on the list, set the head and tail to be the newly created node
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }
        //otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        //increment to length
        this.length++;
        //return the list
        return this;

        }
    }
}
//instance
list = new SinglyLinkedList()
list.push("Hello")
list.push("goodbye")