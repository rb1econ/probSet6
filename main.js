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


console.log(secondGreatLow([3, 2]));