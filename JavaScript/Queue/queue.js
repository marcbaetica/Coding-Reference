function Queue () {

	var head = null;	//where data enters
	var tail = null;	//where data exits
	var count = 0;	//number of items in the queue

	//returns the number of items in the queue
	this.getCount = function () {
		console.log(count);
	}

	this.Enqueue = function (data) {
	
		//create node with data
		var node = {data: data, next: head};	//next points to value straight way. If head is null, it wont be a problem.

		if (head == null) {		//if first also add this to the tail
			tail = node;
		}

		//defining the node as the new head and increasing the count
		head = node;
		count++;

		//output
		console.log('Data "' + data + '" was succesfully inserted in the queue.');
		console.log(head);
	}

}





var queue = new Queue();
queue.getCount();
queue.Enqueue('This is the first item in the queue!');
queue.Enqueue('This is the second item in the queue!');