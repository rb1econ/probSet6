var secondGreatLow = function(numArr){

  var sortd = numArr.sort();

  if(sortd.length === 3){
    sortd.shift();
    return sortd.join(' ');
  }
  else if(sortd.length === 2){
    return sortd.join(' ');
  }
  else{
    sortd.pop();
    sortd.shift();
  
    var twoNums = ""+sortd[0]+" "+sortd[sortd.length-1]+"";
  }

  return twoNums;

};


// console.log(secondGreatLow([3, 2]));

var timeConvert = function(num){
  var hours = num/60;
  var minDec = hours%1;
  var minutes = Math.ceil((minDec*60));
  return Math.floor(hours)+':'+minutes;
};

console.log(timeConvert(124));

var bracketMatcher = function(string){
  var splitd = string.split('');
  var left = [];
  var right = [];
  splitd.map(function(e){
    if(e==='('){left.push(e)}
    else if(e===')'){right.push(e)}
  });
  if(left.length === right.length){
    return 'Brackets Match!!!';
  }
  else{return 'there are '+left.length+' left brackets and '+right.length+' right brackets';}
};




var aString = '(hey ) what is ((( gooing onnnn))))'


console.log(bracketMatcher(aString));