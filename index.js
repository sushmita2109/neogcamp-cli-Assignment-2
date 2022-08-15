var readlineSync = require('readline-sync');
var score=0;

var quiz=[{
question:'How many Infinity Stones are there? ',
answer:'six'
},
{
 question:'Where is Captain America from? ',
 answer:'Brooklyn'
},
{
 question:'What does S.H.I.E.L.D. stand for?',
 answer:'Strategic Homeland Intervention, Enforcement and Logistics Division'
},
 {
 question:'Who was able to pick up Thor’s hammer in Endgame? ',
 answer:'Captain America'
}, 
{
 question:'In which movie did Spider-Man make his first appearance in the MCU? ',
 answer:'Captain America: Civil War'
}, 
{
 question:'Wanda and her brother Pietro are from where? ',
 answer:'Sokovia'
}, 
{
 question:'On what planet was the Soul Stone in Infinity War? ',
 answer:'Vormir'
}, 
{
 question:'Which movie kicked off the Marvel Cinematic Universe? ',
 answer:'Iron Man'
}, 
{
 question:'Black Panther is set in which fictional country? ',
 answer:'Wakanda'
}, 
{
 question:'Hawkeye has how many children?',
 answer:'Three'
},   
]

console.log("Welcome to the quiz");

function levelUp(score)
  {
    if(score===5)
    {
      console.log('Congrats U have entered Level 2');
      console.log("__________________");
    }
    else if(score===10)
    {
      console.log('Congrats U have entered Level 3');
       console.log("__________________");
    }
      
  }

function play(question,answer){
  var useranswer=readlineSync.question(question);
    if(useranswer===answer)
    {
      console.log('You are correct');
      score=score+1;
    }
    else
    {
      console.log('Answer is wrong');
      score=score-1;
    }
    console.log('Your score is ' +score);
    console.log('_____________________')
    levelUp(score);
}
for(var i=0; i<quiz.length;i++)
  {
    var currentQuestion=quiz[i];
    play(currentQuestion.question,currentQuestion.answer);
  }
