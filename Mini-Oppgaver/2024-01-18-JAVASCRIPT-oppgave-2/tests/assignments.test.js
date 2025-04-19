import { describe, expect, test } from "vitest";
import {
	start,
	oddOrEven,
	makeMeLoud,
	greeter,
	arrayTrimmer,
	cleanAndFun,
	marvelEditor,
	coolMaker,
	addOrRemove
} from "../main.js";


describe("Testing your code 😊", () => {
	/******************************************************************************
	 * Oppgave 1
	 ******************************************************************************/
	test("Testing the start function..", () => {
		expect(start()).toBe(true);
	});

	/******************************************************************************
	 * Oppgave 1
	 ******************************************************************************/
	test("Testing the oddOrEven function..", () => {
		expect(oddOrEven(4)).toBe("Even");
		expect(oddOrEven(3)).toBe("Odd");
		expect(oddOrEven(367)).toBe("Odd");
		expect(oddOrEven(12)).toBe("Even");
	});

	/******************************************************************************
	 * Oppgave 2
	 ******************************************************************************/
	test("Testing the makeMeLoud function..", () => {
		expect(makeMeLoud("I'm feeling good")).toBe("I'M FEELING GOOD!");
		expect(makeMeLoud("I'm awesome at coding")).toBe("I'M AWESOME AT CODING!");
		expect(makeMeLoud("let's be quiet")).toBe("LET'S BE QUIET!");
		expect(makeMeLoud("hello")).toBe("HELLO!");
	});

	/******************************************************************************
	 * Oppgave 3
	 ******************************************************************************/
	test("Testing the greeter function..", () => {
		expect(greeter("Berit", -3)).toBe("Invalid time");
		expect(greeter("Olav", 1)).toBe("Good night Olav");
		expect(greeter("Rolf", 7)).toBe("Good morning Rolf");
		expect(greeter("Ida", 17)).toBe("Good day Ida");
		expect(greeter("Arne", 22)).toBe("Good evening Arne");
		expect(greeter("Pia", 26)).toBe("Invalid time");
	});

	/******************************************************************************
	 * Oppgave 4
	 ******************************************************************************/
	test("Testing the arrayTrimmer function..", () => {
		expect(arrayTrimmer(["Red", "Green", "Blue", "Yellow"])).toStrictEqual([
			"Green",
			"Blue"
		]);
		expect(
			arrayTrimmer(["One", "Two", "Three", "Four", "Five", "Six"])
		).toStrictEqual(["Two", "Three", "Four", "Five"]);
		expect(arrayTrimmer(["Hello", "there", "my", "friend"])).toStrictEqual([
			"there",
			"my"
		]);
	});

	/******************************************************************************
	 * Oppgave 5
	 ******************************************************************************/
	test("Testing the cleanAndFun function..", () => {
		expect(cleanAndFun("  Javascript is hard   ")).toBe("Javascript is fun");
		expect(cleanAndFun(" It's hard to use methods ")).toBe(
			"It's fun to use methods"
		);
		expect(cleanAndFun("   hard        ")).toBe("fun");
	});

	/******************************************************************************
	 * Oppgave 6
	 ******************************************************************************/
	test("Testing the marvelEditor function..", () => {
		const heroes = [
			"Spider-Man",
			"Thor",
			"Hulk",
			"Doctor Strange",
			"Iron Man",
			"Black Widow"
		];
		expect(marvelEditor(heroes)).toBe(
			"Captain America💪Skrull💪Iron Man💪Black Widow"
		);
	});

	/******************************************************************************
	 * Oppgave 7 EXTRA CHALLENGE
	 ******************************************************************************/
	test("Testing the coolMaker function..", () => {
		expect(coolMaker("hello")).toBe("😎hello😎");
		expect(coolMaker(4)).toBe("😎8😎");
		expect(coolMaker(true)).toBe("😎Yeah😎");
		expect(coolMaker(false)).toBe("😎Chill😎");
		expect(coolMaker(["Array", "test"])).toBe("😎Primitive values only😎");
		expect(coolMaker({ object: "test" })).toBe("😎Primitive values only😎");
	});

	/******************************************************************************
	 * Oppgave 8 EXTRA CHALLENGE #2
	 ******************************************************************************/
	test("Testing the addOrRemove function..", () => {
		expect(addOrRemove(["Red", "Green"], "Blue")).toStrictEqual([
			"Red",
			"Green",
			"Blue"
		]);
		expect(addOrRemove(["Red", "Green", "Blue"], "Green")).toStrictEqual([
			"Red",
			"Blue"
		]);
		expect(addOrRemove(["One", "Two", "Three"], "Four")).toStrictEqual([
			"One",
			"Two",
			"Three",
			"Four"
		]);
		expect(addOrRemove(["One", "Two", "Three"], "Two")).toStrictEqual([
			"One",
			"Three"
		]);
	});
});
