var theBeatlesPlay = function(musicians,instruments){
  var newArray = []
  for(var i = 0; i < musicians.length; i++){
    var statement = musicians[i]+" plays "+instruments[i];
    newArray.push(statement);
  }
  return newArray;
}

var johnLennonFacts = function(facts){
  var i = 0;
  while(i < facts.length -1){
    facts = facts[i] + "!!!";
    i++
  }
  return facts
}

/*
var iLoveTheBeatles = function(number){
  var emptyArray = [];
  do{
    emptyArray.push("I love the Beatles! ")
  }
  while (number < 15) {
    number++
  }
  return emptyArray;
}
*/
