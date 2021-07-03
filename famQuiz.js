var readlineSync = require('readline-sync');
var score=0;
var userName = readlineSync.question("What's your Name? ");
console.log("Hello " +userName + ", Welcome to this quiz!");
console.log("This quiz has all general questions (friends,GK etc) ");

var highScore = [{
  name: "Abhishek",
  score: 3,},
{  name: "Mit",
  score: 5,},
{  name: "Radha",
  score: 7,}]


console.log("Following are High Scorers: ");
for(j=0; j<highScore.length; j++){
  currentPerson=highScore[j]
  console.log("One of the High scorer is " +currentPerson.name + " with score of: " +currentPerson.score );}


function game(question,answer){
userAnswer=readlineSync.question(question);
if (userAnswer.toUpperCase() === answer.toUpperCase()){
  score++;
  console.log("Correct! Your score is "+score);

  if(score===2){console.log("Congratulations! You have reached level 2")}
  else {}
  if(score===3){console.log("Congratulations!!! You are new high Scorer. Please send screenshot so it can be updated here.");}
  else {}

  if(score===4){console.log("Congratulations! You have reached level 3");}
  else {}
  if(score===5){console.log("Congratulations!!! You are one of new high Scorers. Please send screenshot so it can be updated here.");}

  if(score===6){console.log("Congratulations! You have reached level 4");}
  else {}
if(score===7){console.log("Congratulations!!! You are a new high Scorer once again. Please send screenshot so it can be updated here.");}
if(score===8){console.log("Congratulations!!! You are the new highest Scorer once in this game. Please send screenshot so it can be updated here.");}

  else {}

}else{console.log("Oops Wrong! Your score is "+score);} }



var questions =[{
  ques:"Name the national animal of India? ",
  ans:"tiger",},
{  ques:"Pink city of India? ",
  ans:"jaipur",},
{ ques:"Orange city of India? ",
  ans:"Nagpur",},
{ques:"Ross loves whom? ",
  ans:"Rachel",},
{  ques:"Chandler's wife first name? ",
  ans:"Monica",},
{  ques:"Who doesn't share his food? ",
  ans:"Joey",},
  {ques: "What was the friends cafe name? ",
  ans: "Central Perk",},
 { ques:"Who sang the sone smelly cat? ",
  ans:"Phoebe",},
{  ques:"Capital of India? ",
  ans:"New Delhi",}]

for (var i=0; i<questions.length; i++)
{var currentQ = questions[i];
  game (currentQ.ques,currentQ.ans)}

  console.log("Thank you for playing this game");