var scores = [100, 90, 80, 70, 60];
var sum = 0;
for(var i = 0; i < scores.length; i++){
  sum += scores[i];
}

var average = sum / scores.length ;

console.log('合計値:' + sum);
console.log('平均値:' + average);