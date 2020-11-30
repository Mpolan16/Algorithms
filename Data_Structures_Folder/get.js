//this function should accept an index
//if the index is less than zero or greater than or equal to the length of the list, return null
//loop through the list until you reach the index and return the node at the specidic index--counter

get(index){
    if(index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;

    while(counter !== index){
        current = current.next;
        counter++;
    }
    return current;
}