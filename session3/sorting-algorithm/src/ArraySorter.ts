// ArraySorter.ts
import { Sorter } from './Sorter';

export class ArraySorter extends Sorter<number[]> {
	sort(input: number[]): number[] {
		if (input.length <= 1) {
			return input;
		}

		const pivot = input[Math.floor(input.length / 2)];
		const left = input.filter((x) => x < pivot);
		const middle = input.filter((x) => x === pivot);
		const right = input.filter((x) => x > pivot);

		return [...this.sort(left), ...middle, ...this.sort(right)];
	}
}
