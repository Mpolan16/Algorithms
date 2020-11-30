shift(){
    //if there are no nodes, return undifinded
    //store the current head property in a variable
    // set the head property to be the current head's next property
    //decrement the length by 1
    // return the value fo the node removed

    if(!this.head) return undefined;
    var currentHead = this.head;

    newHead = currentHead.next;
    this.length--;
    return currentHead;

}