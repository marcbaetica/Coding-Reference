function Stack () {

	var topNode = null;	//the value for the top node
	var count = 0;

	//return the number of elements in the queue
	this.getCount = function () {
		console.log("The current count on the stack is: " + count + "\n");
		return count;
	}

	//methods

	//PUSH
	this.Push = function (data) {

		//creates a node object containing the data and a reference to the next item
		var node = {
			data: data,
			next: null
		};

		console.log("node created: " + JSON.stringify(node));

		//links the current node to the top node. If the stack is empty it will have null as refference
		node.next = topNode;
		console.log("next node: " + JSON.stringify(node.next));

		//makes the current node as the top node
		topNode = node;
		console.log("top node: " + JSON.stringify(topNode) + "\n");

		//increases the count
		count++;

	}


	//PEEK - returns null if empty
	this.Peek = function () {

		if (topNode === null) {
			return null;
		}
		else {
			console.log("After peeking at the top element: " + topNode.data + "\n");

		}

	}


	//POP
	this.Pop = function () {
	
		//if there are still items on the stack
		if (count > 0) {

			//assign top to a temp variable
			var out = topNode;
		
			//make topNode as next node
			topNode = topNode.next;

			//log the value that was removed
			console.log("The value that was removed was: " + JSON.stringify(out.data) + "\n");
			count--;
		
		}

		else {
			console.log("The stack is empty so there was nothing left to remove. The top value on the stack is null.\n");
		}
	
	}


	//DISPLAY_ALL
	this.Display_All = function () {

		if (count > 0) {

			//store everything into an array and iterate through it
			var results = new Array();

			//create a node to move through the stack
			var currentNode = topNode;

			//move through the stack until you reach the bottom item
			for (var i = 0; i < count; i++) {
				results[i] = currentNode.data;
				currentNode = currentNode.next;
			}

			console.log("Displaying the full stack from top to bottom: [" + results + "]\n");

		}

		else {
			console.log("The stack is empty. There is no element to display.");
		}


	}

}


//execution
var ourStack = new Stack();
ourStack.Push("Hello!");
ourStack.Peek();
ourStack.Push("Hello Again!");
ourStack.Peek();
ourStack.Push("This is the third hello!");
ourStack.Peek();
ourStack.Display_All();
ourStack.getCount();
ourStack.Pop();
ourStack.Display_All();