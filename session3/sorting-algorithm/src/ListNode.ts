export class ListNode {
	value: number;
	next: ListNode | null;

	constructor(value: number, next: ListNode | null = null) {
		this.value = value;
		this.next = next;
	}

	// Method to print the list starting from the current node
	static printList(head: ListNode | null): void {
		let current = head;
		let output = '';

		while (current) {
			output += current.value + ' -> ';
			current = current.next;
		}
		console.log('null');
		console.log(output);
	}
}
