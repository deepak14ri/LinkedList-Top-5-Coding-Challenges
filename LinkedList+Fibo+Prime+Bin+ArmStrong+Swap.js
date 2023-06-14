// ============Linked List==========

class Node{
	constructor(val){
		this.val = val;
		this.next = null;
	}
}

const a = new Node(0);
const b = new Node(1);
const c = new Node(2);
const d = new Node(3);

/*
const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
*/

a.next = b;
b.next = c;
c.next = d;


// =====Sum of the nodes Normal Method====


const revLinkedList = (head) => {
	let prev = null;
	let current = head;
	while(current != null){
		const next = current.next;
		current.next = prev;
		prev = current;
		current = next;
	}
	return prev;
};
console.log(revLinkedList(a));



// =====Sum of the nodes Recursive Method====

const revLinkedList = (head, prev=null) => {
	if(head===null) return prev;
	let next = head.next;
	head.next = prev;
	return revLinkedList(prev, head);
};
console.log(revLinkedList(a));



// =====Find Target No. Normal Method====

const valFind = (head, target) => {
	let current = head;
	while(current.val!=null){
		if(current.val===target) return true;
		current = current.next;
	}
	return false;
}
console.log(valFind(a, 2));



// =====Find Target No. Recursive Method====

const valFind = (head, target) => {
	if(head===null) return false;
	if(head.val===target) return true;
	return valFind(head.next, target);
}
console.log(valFind(a, 2));



// =====Sum of the nodes Normal Method====

const sum = (head) => {
	let sum = 0;
	var current = head;
	while(current!=null){
		sum += current.val;
		current = current.next
	}
	return sum;
}



// =====Sum of the nodes Recursive Method====

const sumNodes = (head) => {
	if(head===null) return 0;
	return head.val + sumNodes(head.next);
}
console.log("Sum of the nodes is : ", sumNodes(a));



// =====Print all nodes Normal Method====

const printLinkedList = (head) => {
	var current = head;
	process.stdout.write("Linked List is : ");
	while(current != null){
		process.stdout.write(current.val+" => ");
		current = current.next;
	}
	process.stdout.write(" null");
}
printLinkedList(a);



// =====Print all nodes Recursive Method====

process.stdout.write("Linked List is : ");
const printLinkedList = (head) => {
	if(head === null) return;
	process.stdout.write(head.val+" => ");
	printLinkedList(head.next);
}
printLinkedList(a);
process.stdout.write(" null");



// =====Print all nodes Recursive Method====

process.stdout.write("Linked List is : ");
var values = [];
const printLinkedList = (head) => {
	if(head === null) return;
	values.push(head.val);
	printLinkedList(head.next);
	return values;
}

console.log(printLinkedList(a)); //Linked List is : [ 'A', 'B', 'C', 'D' ]



// ============Fibo Series no. using Memo==========

const fibo = (n, memo = []) => {
	if(n in memo) return memo[n];
	if(n<=2) return 1; //1 1 2 ....

	memo[n] = fibo(n-1, memo)+fibo(n-2, memo);

	return memo[n];
}
console.log(fibo(5));
console.log(fibo(6));
console.log(fibo(7));
console.log(fibo(8));
console.log(fibo(88));
console.log(fibo(888));



// ============Find Armstrong No.==========
const isArmStrong = (n) => {
	var nStr= n.toString();
	var len = nStr.length;
	var res = (n) => {
		var result = 0;
		while(n>0){
			var rem = n%10;
			result = result+Number(Math.pow(rem, len));
			n = Math.floor(n/10);
		}
		return result;
	}
	if(res(n)===n){
		console.log(`${n} is an ArmStrong no.`);
	}else{
		console.log(`${n} is not an ArmStrong no.`);
	}
	return;
}
isArmStrong(153); //true
isArmStrong(88); //false
isArmStrong(12); //false
isArmStrong(9); //true




// ============Swapping without using 3rd var==========

var a = "Hello";
var b = "World";
[a,b] = [b,a]
console.log(a, b);




// ============Find Prime Number==========

const primeNumber = (n) => {
	var isPrime = (num) => {
		for(let i=2;i<n;i++){
			if(num%i===0) return false;
		}
		return true;
	}
	if(n>1){
		if(isPrime(n)){
				console.log(`${n} is prime number.`);
		}else{
				console.log(`${n} is not prime number.`)
		}
	}
	return;
}

console.log(primeNumber(10));
console.log(primeNumber(11));
console.log(primeNumber(12));
console.log(primeNumber(13));
console.log(primeNumber(14));
console.log(primeNumber(9));





// ============Decimal to Binary Convn==========
const bin = (num) =>{
	var bimSum = '';
	while(num != 0){
		bimSum = num%2 + bimSum;
		num = Math.floor(num/2);
	}
	return bimSum;
}

console.log(bin(10)); //1010

