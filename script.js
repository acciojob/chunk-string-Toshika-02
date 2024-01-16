function stringChop(str, size) {
  // your code here
	if(str===null){
		return [];
	}
	 const res = []
	 for(let i=0; i<str.length; i+=size){
		 let chunk = "";
		 for(let j=0; j<size && i+j<str.length; j++){
			 chunk += str[i+j]
		 }
		  res.push(chunk)
	 }
	  return res;
	
	
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
