// index.ts
import { ArraySorter } from './ArraySorter';
import { StringSorter } from './StringSorter';
import { LinkedListSorter } from './LinkedListSorter';
import { ListNode } from './ListNode';

// Example usage for Array:
const arraySorter = new ArraySorter();
const array = [4, 2, 7, 1, 3];

console.log('Original Array:');
console.log(array);

const sortedArray = arraySorter.sort(array);

console.log('Sorted Array:');
console.log(sortedArray);

// Example usage for String:
const stringSorter = new StringSorter();
const string = 'dcba';

console.log('Original String:');
console.log(string);

const sortedString = stringSorter.sort(string);

console.log('Sorted String:');
console.log(sortedString);

// Example usage for Linked List:
// Create a sample linked list: 4 -> 2 -> 1 -> 3
const node1 = new ListNode(4);
const node2 = new ListNode(2);
const node3 = new ListNode(1);
const node4 = new ListNode(3);

node1.next = node2;
node2.next = node3;
node3.next = node4;

console.log('Original Linked List:');
ListNode.printList(node1);

const linkedListSorter = new LinkedListSorter();
const sortedHead = linkedListSorter.sort(node1);

console.log('Sorted Linked List:');
ListNode.printList(sortedHead);
