var start = document.getElementById("startBtn");
var answer1 = document.createElement("button");
var answer2 = document.createElement("button");
var answer3 = document.createElement("button");
var timerEl = document.getElementById("timeLeft");
var timeLeft = 60;
var score = 0;
let answerTrue = document.getElementById("answer");

document.getElementById("initialEntry").style.display = "none";
document.getElementById('scoreboard').style.display = 'none';
document.getElementById('scoreboardList').style.display = 'none';

function question1() {
//question 1//

    //array of the answers for question 1
    const question1Answers = ['HyperText Markup Language', 'Human Type Machine Learning', 'HyperText Manual Lexicon'];

    //change the intro words to the question
    document.getElementById("intro").textContent = 'What is HTML an acronym for?';
    
    //changes the button to the answers in the array
    answer1.textContent = question1Answers[0];
    answer2.textContent = question1Answers[1];
    answer3.textContent = question1Answers[2];

    //sets those changes on the page
    document.body.appendChild(answer1);
    document.body.appendChild(answer2);
    document.body.appendChild(answer3);

    //changes style of button 
    answer1.setAttribute("id", "ansBtn");
    answer2.setAttribute("id", "ansBtn");
    answer3.setAttribute("id", "ansBtn");

  //right answer
  answer1.onclick = function() {
    answerTrue.textContent = "Correct!";
    score = score + 10;
    question2();
  }

  //wrong answer
  answer2.onclick = function() {
    answerTrue.textContent = "WRONG!";
    timeLeft = timeLeft - 5;
    question2();

  }

  answer3.onclick = function() {
    answerTrue.textContent = "WRONG!";
    timeLeft = timeLeft - 5;
    question2();
  }

};

function question2() {

  //nulls the old response to user's answer
  //answerTrue.textContent = ""
  
  //question 2//

    const question2Answers = ['Styles the color of text and background', 'Displays data in a chosen format', 'Both of these answers are correct'];
      
    document.getElementById("intro").textContent = 'What does CSS do to an HTML page?';
            
      answer1.textContent = question2Answers[0];
      answer2.textContent = question2Answers[1];
      answer3.textContent = question2Answers[2];

      answer1.onclick = function() {
        answerTrue.textContent = "WRONG!";
        timeLeft = timeLeft - 5;
        question3();
      };

      answer2.onclick = function() {
        answerTrue.textContent = "WRONG!";
        timeLeft = timeLeft - 5;
        question3();
      };

      answer3.onclick = function() {
        answerTrue.textContent = "Correct!"
        question3();
        score = score + 10;
      };
      
};


function question3() {
  const question3Answers = ['<image>', '<a ref="">', 'a href="">'];
      
  document.getElementById("intro").textContent = 'Which element tag represents an image through a hyperlink?';
          
    answer1.textContent = question3Answers[0];
    answer2.textContent = question3Answers[1];
    answer3.textContent = question3Answers[2];

    answer1.onclick = function() {
      answerTrue.textContent = "WRONG!";
      timeLeft - 5;
      enterHighScore();
    };

    answer2.onclick = function() {
      answerTrue.textContent = "WRONG!";
      timeLeft - 5;
      enterHighScore();
    };

    answer3.onclick = function() {
      answerTrue.textContent = "Correct!";
      enterHighScore();
      score = score + 10
    };

};

//initials entry and showing final score 
function enterHighScore() {

  document.getElementById("intro").textContent = 'Enter Initials for Scoreboard';

  //hides old irrelevant data
  answer1.style.display = 'none';
  answer2.style.display = 'none';
  answer3.style.display = 'none';

  timerEl.style.display = 'none';
  document.getElementById('h3').style.display = 'none';
  
  //shows the initials entry 
  document.getElementById("initialEntry").style.display = "block";

  //makes score more variable
  score = score + timeLeft;
  document.getElementById('score').textContent = 'Your Score: ' + score;

  //Enter button for initials
  var initialEnter = document.createElement('button');
  initialEnter.textContent = 'Enter';
  document.body.appendChild(initialEnter);

  var initials = document.getElementById('initials').innerHTML;
  localStorage.setItem('initialsList', initials);
  localStorage.setItem('score', score);

  //enter to see scoreboard
  let submitBttn = document.getElementById('submit');
    submitBttn.addEventListener ('click', submission);
    function submission (event) {
        event.preventDefault()
        let initials = {
          initials: initialsInput.value.trim(),
          score: score,
        };
        let scoreboardList = document.getElementById('scoreboardList');
        let scoreboardListEl = scoreboardList.createElement('li');
        scoreboardListEl.innerHTML = initials;

        document.appendChild(scoreboardListEl);
  };

  var scoreboardScores = JSON.parse(localStorage.getItem('initials'));
  if (scoreboardScores === null) {
      scoreboardScores = []; }
      scoreboardScores.push(initials); 
      localStorage.setItem ('initials', JSON.stringify(storedScores)); 

};

//The button that initiates the quiz
start.onclick = function startQuiz() {
  //call timer
  countdown();
  //hide the start button
  document.getElementById("startBtn").style.display = "none";
  //runs the question 1 funtion to change the page
  question1(); 
  };

//sets the timer for the whole page
function countdown() {
      setInterval(function() {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
          // Set the `textContent` of `timerEl` to show the remaining seconds
          timerEl.textContent = timeLeft + ' seconds remaining';
          // Decrement `timeLeft` by 1
          timeLeft--;
        } else if (timeLeft === 1) {
          // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
          timerEl.textContent = timeLeft + ' second remaining';
          timeLeft--;
        } else if (timeLeft === 0) {
          return

        }
      }, 1000);
};


