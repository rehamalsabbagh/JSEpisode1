/**************************************************************
* pairs(names):
*
* - It accepts an array of names:
*       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish'])
*
* - It returns a randomized pairing of names:
*       [['Mishmish', 'Asis'], ['Fawas', 'Hamsa']]
*
* - It can handle an odd number of names:
*       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish', 'Hussein])
*       returns [['Mishmish', 'Fawas'], ['Asis', 'Hussein'], ['Hamsa']]
*
* - It returns an empty array if it gets passed an empty array:
*       pairs([]) returns []
*
* - It returns an empty array if it gets passed nothing:
*       pairs() returns []
****************************************************************/
function pairs(names) {
  if (names){
  	if (names.length==0){
  		return [];
  	}
  	else if(names.length==2){
  		//names = names.getRandom();
  		let arr = [];
  		arr.push(names);
  		return arr;
  	}
  	else if(names.length%2==0){
  		names = names.getRandom();
  		let arr = [];
  		for(var i=0; i<names.length ; i=i+2){
  			var pair = [names[i],names[i+1]];
  			arr.push(pair);
  		}
  		return arr;
  	}
   	else if(names.length%2==1){
   		names = names.getRandom();
   		let last = names[names.length-1];
   		last = [last];
  		let arr = [];
  		for(var i=0; i<names.length ; i=i+2){
  			var pair = [names[i],names[i+1]];
  			arr.push(pair);
  		}
  		arr.push(last);
  		return arr;
  	}
  }
  else{
  	return [];
  }
}

export default pairs


/**********************************************
* READ ME!!!!
*
* We've including this handy method for you.
* It will remove a random element from an array
* and return it to you.
*
* Example Usage:
*
* let numbers = [1, 2, 3, 4];
* let random = numbers.getRandom();  // randomly returns something from the array. e.g. 3
* console.log(random); // 3 (the random element)
* console.log(numbers);  // [1, 2, 4] (missing the random element)
************************************************/
Array.prototype.getRandom = function () {
  return this.splice(Math.floor(Math.random()*this.length), 1)[0];
}
