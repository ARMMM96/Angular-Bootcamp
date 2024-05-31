import { Sorter } from './Sorter';

export class StringSorter extends Sorter<string> {
	sort(input: string): string {
		return input.split('').sort().join('');
	}
}
