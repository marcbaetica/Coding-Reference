//this is a Linked List implementation in Java

public class LinkedListDemo {
	public static void main (String[] args) {
		
		LinkedList list = new LinkedList(); //create a LinkedList object
		
		//insert a bunch of values at the beginning of the linked list
		list.insertAtHead(5);
		list.insertAtHead(10);
		list.insertAtHead(2);
		list.insertAtHead(12);
		list.insertAtHead(19);
		list.insertAtHead(20);
		
		System.out.println("The total length for this linked list is: " + list.getLength());
		
		
		System.out.println(list); //print the whole list at the end
		
		if (list.deleteHead()) {
			System.out.println("The first element of the list has been removed. The length is now " + list.getLength() + " and the list looks like: " + list);
		}
		
		System.out.println("Found: " + list.isData(2));

		
	}
}
