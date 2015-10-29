//this is a Linked List implementation in Java

public class Node {

	//defined variables as private => we will be using the getter methods below to access them
	private int data; //data will be of type int
	private Node nextNode; //pointer to next linked list element
	
	//constructor
	public Node(int data) {
		this.data = data;	//construct the node with its data as the data we insert
	}
	
	
	//methods for returning the values
	public int getData() {
		return this.data;	//return the node's data
	}
	public Node getNextNode() {
		return this.nextNode;	//return the next node
	}
	
	//methods to set the values
	public void setData(int data) {
		this.data = data;	//our node's data gets the required data
	}
	public void setNextNode (Node nextNode)	{
		this.nextNode = nextNode;	//our node's next node gets the upcoming node
	}
	
	//override the toString method from the official documenation and return the data of the current node
	@Override
	public String toString () {
		return "Data " + this.data;
		
	}
}
