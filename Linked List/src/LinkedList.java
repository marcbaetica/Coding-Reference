//this is a Linked List implementation in Java

public class LinkedList {
	private Node head; //in it's simplest form a linked list contains just the first element.. also known as the HEAD

	
	
	//method for inserting the and element at the head
	public void insertAtHead (int data) {
		Node newNode = new Node (data); //this is the new element that we insert
		newNode.setNextNode(this.head); //in order to avoid leaks first point the new element to the head and then point the head to the new element
		this.head = newNode; //pointing the head to the newly inserted element
		
	} 
	
	//override the toString method and return the whole data of the LinkedList
	@Override
	public String toString () {
		String result = "{";
		Node current = this.head; //pass the head pointer into another Node instance
		
		while (current != null) { //while the node is not pointing at the end of the list
			result += current.toString() + ","; //add to the result string the Data + this.data
			current = current.getNextNode(); //moves the pointer to the next node 
		}
		result += "}";
		
		return result; //returns this whole concatenated linked list 'train'
	}
	
	//returns the length of the linked list
	public int getLength () {
		int length = 0; //for counting the length
		Node currentNode = this.head; //starts from the first node
		while (currentNode != null) {	//repeat every time we're not at the end of the linked list
			length++;
			currentNode = currentNode.getNextNode();	
		}
		return length; //returns the count once the current node is not the ending of the linked list
	}
	
	//deletes the linked list's head and makes that entity eligible for garbage collection
	public boolean deleteHead () {
		this.head = this.head.getNextNode(); //moved the head to the next entity
		return true;
	}
	
	//returns the node with a wanted value
	public Node isData (int data) {
		Node node = this.head;
		while (node != null) {
			if (node.getData() == data) {
				return node;	//also breaks the while loop
			}
		node = node.getNextNode();	
		}
		return null; //no node has been found to contain this value
	}
	
	
	
}
