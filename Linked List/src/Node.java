//this is a Linked List implementation in Java

public class Node {

	//defined variables as private => we will be using the getter methods below to access them
	private int data; //data will be of type int
	private Node nextNode; //pointer to next linked list element
	
	//constructor
	public Node(int data) {
		this.data = data;
	}
	
	
	//methods for returning the values
	public int getData() {
		return this.data;
	}
	public Node getNextNode() {
		return this.nextNode;
	}
	
	//methods to set the values
	public void setData(int data) {
		this.data = data;
	}
	public void setNextNode (Node nextNode)	{
		this.nextNode = nextNode;
	}
	
	//override the toString method and return the data of the current node
	@Override
	public String toString () {
		return "Data " + this.data;
		
	}
}
