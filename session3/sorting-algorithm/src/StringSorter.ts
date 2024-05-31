import { Sorter } from './Sorter';

export class StringSorter extends Sorter<string> {
	sort(input: string): string {
		// Separate lowercase and uppercase letters
		const lowerCaseChars = input
			.split('')
			.filter((char) => char >= 'a' && char <= 'z');
		const upperCaseChars = input
			.split('')
			.filter((char) => char >= 'A' && char <= 'Z');

		// Sort each group individually
		lowerCaseChars.sort();
		upperCaseChars.sort();

		// Combine the sorted groups
		return lowerCaseChars.join('') + upperCaseChars.join('');
	}
}
