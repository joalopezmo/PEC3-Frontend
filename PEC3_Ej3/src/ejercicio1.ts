//Sustituye /***/ por las instrucciones adeacuadas que cumplan las operaciones 
//y salidas indicadas en los comentarios.


function printArray(array:Array<number>):void{
	//code to print the array on console
       /***/
       return (console.log(array));
}

let array:number[]=[2,3,4];
console.log(array.shift()); //2
printArray(array); // 3,4
array.push(5);
printArray(array); // 3,4,5
console.log(array.pop()); //5
printArray(array); // 3,4
array.push(1);
printArray(array); // 3,4,1
array.splice(0,0,8);
printArray(array); // 8,3,4,1
let everyisgreater:boolean=array.every(function(element){
       return element>3;
});
console.log(everyisgreater);  //false
let everyisless:boolean=array.every(function(element){
       return element<10;
});
console.log(everyisless);  //true
console.log(array.sort()); // 1,3,4,8
console.log(array.reverse()); //8,4,3,1