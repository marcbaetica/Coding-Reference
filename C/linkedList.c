//this is a simple linked list written in C with 10 ints from 0 to 9
//Marc-Alexandru Baetica

#include <stdio.h>
#include <stdlib.h> //since we are using memory allocation


struct list 
	{
		int data; //typically 4 bits
		struct list *ptr;
	};



main() {
	struct list *clist;
	struct list *top;
	struct list *tmpptr;
	int i;

	clist = (struct list *)malloc(sizeof(struct list *));
	top = clist;
	for (i=0; i<10; i++){
		clist->data = i;
		tmpptr = (struct list *)malloc(sizeof(struct list *));
		clist->ptr = tmpptr;
		clist = tmpptr;
	}
	for (clist=top; clist->ptr; clist=clist->ptr) {
		printf("%d\n",clist->data);
	}
}
