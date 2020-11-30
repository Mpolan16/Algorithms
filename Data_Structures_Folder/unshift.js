//thisfunction should accept a value
//creat a new node using the value passed to the function
// if there is no head property on the List, set the head and tail to be the newly created Node
//otherwise set the newly created node's next property to be the current head property on the list
//set the head property on th elist th ebe that newly created node
//increment the length of th elist by 1
//return the linked list

unshift(val){
    var newNode = new Node(val);

    if(!this.head){
        this.head = newNode;
        this.tail = this.head;
    } else{
        newNode.next = this.head;
        this.head = newNode;

        this.length++;
        return this;
    }
}