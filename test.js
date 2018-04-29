/**
 * @typedef
 */
"use strict";

/**
 * Returns a hard-coded book
 * @param  {*} param
 * @return {book}
 */
function a_cool_func(param) {
    let book = new Book("The Last Battle", "CS Louis");
    return book;
}

/**
 * Test constructor
 * @constructor
 * @param {string} title
 * @param {string} author
 * @param {string} somethig
 */
function Book(title, author) {
    this.title = title;
    this.author = author;

    /**
     * A function for printing book information
     * @return {string} 
     */
    this.printBook = () => {
        let str = this.title + " written by " + this.author;
        return str;
    };
}

let lww = new Book("Lion Witch Wardrobe", "CS Louis");
lww.printBook();

let tmn = new Book("The Magician's Nephew", "CS Louis");
tmn.printBook();

let a = a_cool_func(0);
a.printBook();

/*
// no 'use strict'

// function def type 1
function f(asdf) {
	var a = asdf + "jkl" // dropped my semicolon
	return a;
};; // so that's where I dropped it!

// function def type 2
let g = (lemons) => "lemonade";

// var defs
var lion = "Aslan";
let witch = "Ice Queen";
const wardrobe = "my uncle's wardrobe";

// conflicting var defs/scoping
function theLastBattle(lion) {
	lion = "Puzzle";
	console.log(lion);
}

// Puzzle or Aslan?
console.log(lion);

// infinite recursion!
function gotoInfinity(base, unusedArg) {
	return base * gotoInfinity(base+1, unusedArg);
}

f("asdf");
g(99);
 */