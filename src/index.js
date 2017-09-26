module.exports = function multiply(first, second) {
	  var result=[];
	  var length;
	  var a;
	  
	  length = first.length + second.length - 1;
	  for(var i = 0; i < length; i++){
	    result[i] = 0;
	  }
	  for(var i = 0; i < first.length; i++){
	    for(var j = 0; j < second.length; j++){
	      result[i+j] += first[i] * second[j];
	    }
	  }
	  for(var i = result.length - 1; i >= 0; i--){
	      if(i != 0){
	        a = Math.floor(result[i]/10);
	        result[i] %= 10;
	        result[i-1] += a;    
	      }
	  }
	  
	  return result.join('');
}
