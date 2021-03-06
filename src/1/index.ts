import {readFileSync} from 'fs';
import {join} from 'path';

/**
 * Get the sum of two numbers.
 * @param a First addend to use
 * @param b Second addend to use
 * @returns The sum of `a` and `b`
 */
function sum(a: number, b: number): number {
	return a + b;
}

/**
 * Calculates the amount of fuel required to launch a module.
 * @param mass The mass of the module
 * @returns The amount of fuel required to launch the module
 */
export function calculateFuelRequirement(mass: number): number {
	return Math.floor(mass / 3) - 2;
}

/**
 * Calculates the amount of fuel required to launch a module including the amount of fuel needed to compensate for the extra fuel.
 * @param mass The mass of the module
 * @returns The amount of fuel required to launch the module
 */
export function calculateFuelRequirementRecursive(mass: number): number {
	if (mass <= 0) {
		return 0;
	}

	const fuelRequirementForMass = Math.max(calculateFuelRequirement(mass), 0);

	return fuelRequirementForMass + calculateFuelRequirementRecursive(fuelRequirementForMass);
}

/**
 * Gets the solution for day 1 part 1.
 * @param inputPath The path to the file to use as input
 * @returns The sum of the fuel requirements
 */
export function part1(inputPath: string = join(__dirname, 'input.txt')): number {
	const lines = readFileSync(inputPath, 'utf-8').split('\n');
	const fuelRequirements = lines.map(line => calculateFuelRequirement(Number.parseInt(line, 10)));
	return fuelRequirements.reduce(sum);
}

/**
 * Gets the solution for day 1 part 2.
 * @param inputPath The path to the file to use as input
 * @returns The sum of the fuel requirements
 */
export function part2(inputPath: string = join(__dirname, 'input.txt')): number {
	const lines = readFileSync(inputPath, 'utf-8').split('\n');
	const fuelRequirements = lines.map(line => calculateFuelRequirementRecursive(Number.parseInt(line, 10)));
	return fuelRequirements.reduce(sum);
}
