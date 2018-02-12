const Board = require('./board');
const Solver = require('./solver');

/*
let board = new Board(11, 8);
board.data = [
	0, 0, 0, 0, 0, 0, 0, 0,
	0, 1, 1, 1, 1, 0, 0, 0,
	0, 1, 1, 1, 1, 1, 1, 0,
	0, 1, 1, 0, 0, 1, 1, 0,
	0, 1, 1, 0, 0, 1, 1, 0,
	0, 1, 1, 1, 1, 1, 1, 0,
	0, 1, 1, 1, 1, 0, 0, 0,
	0, 1, 1, 0, 0, 0, 0, 0,
	0, 1, 1, 0, 0, 0, 0, 0,
	0, 1, 1, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0
];
*/

let board = new Board(15, 15);
let rowClues = [
	[ 1, 4 ],
	[ 4, 1, 1, 1 ],
	[ 1, 5, 1, 1 ],
	[ 1, 1, 3 ],
	[ 1, 1, 2 ],
	[ 4, 1, 1 ],
	[ 1, 1 ],
	[],
	[ 1, 1, 1, 1 ],
	[ 1, 1, 1, 1, 1, 1 ],
	[ 1, 1, 1, 1, 1, 1 ],
	[ 1, 1, 1, 1, 1, 1, 1 ],
	[ 1, 1, 1, 1 ],
	[ 1, 1 ],
	[ 1 ]
];
let colClues = [
	[ 5, 2 ],
	[ 1, 1, 1, 1 ],
	[ 1, 1, 1, 1 ],
	[ 1, 1, 1, 1 ],
	[ 2 ],
	[ 1, 2 ],
	[ 1, 1, 1 ],
	[ 5, 1, 1 ],
	[ 1, 1, 1 ],
	[ 1, 2 ],
	[ 2 ],
	[ 7, 1, 1 ],
	[ 1, 2, 1, 1 ],
	[ 1, 1, 1, 1, 1 ],
	[ 3, 1, 2 ]
];
board.rowClues = rowClues.map((a) => a.map((b) => { return { value: 1, run: b }; }) );
board.colClues = colClues.map((a) => a.map((b) => { return { value: 1, run: b }; }) );
board.clearData();
board.set(0, 7, 1);
board.set(0, 13, 1);
board.set(3, 10, 0);
board.set(5, 10, 0);
board.set(6, 0, 0);
board.set(6, 14, 1);
board.set(8, 6, 0);
//board.set(8, 8, 0);
//board.set(9, 4, 1);
//board.set(9, 7, 0);
//board.set(9, 10, 1);
board.set(10, 2, 0);
board.set(10, 5, 0);
board.set(10, 12, 0);
board.set(11, 0, 0);
board.set(11, 14, 0);
board.set(13, 13, 0);
board.set(14, 7, 1);

//board.buildCluesFromData();

console.log('Full:');
board.printBoard(' ', '?');
//board.clearData();
console.log('Cleared:');
board.printBoard(' ', '?');
let solver = new Solver(board);
console.log('simpleSolveBatch result', solver.simpleSolveBatch());
console.log('Simple solve batch:');
board.printBoard(' ', '?');

