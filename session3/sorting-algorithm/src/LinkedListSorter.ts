import { Sorter } from './Sorter';
import { ListNode } from './ListNode';

export class LinkedListSorter extends Sorter<ListNode | null> {
	// Function to sort the linked list using merge sort
	sort(head: ListNode | null): ListNode | null {
		if (!head || !head.next) {
			return head;
		}

		const middle = this.getMiddle(head);
		const nextToMiddle = middle.next;

		middle.next = null;

		const left = this.sort(head);
		const right = this.sort(nextToMiddle);

		const sortedList = this.sortedMerge(left, right);
		return sortedList;
	}

	// Utility function to merge two sorted linked lists
	private sortedMerge(
		a: ListNode | null,
		b: ListNode | null
	): ListNode | null {
		if (!a) return b;
		if (!b) return a;

		let result: ListNode | null = null;

		if (a.value <= b.value) {
			result = a;
			result.next = this.sortedMerge(a.next, b);
		} else {
			result = b;
			result.next = this.sortedMerge(a, b.next);
		}
		return result;
	}

	// Function to get the middle of the linked list
	private getMiddle(head: ListNode): ListNode {
		let slow: ListNode = head;
		let fast: ListNode = head;

		while (fast.next && fast.next.next) {
			if (slow.next) {
				slow = slow.next;
			}
			fast = fast.next.next;
		}

		return slow;
	}
}
