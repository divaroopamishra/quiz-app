const questions = [
  {
    id: 1,
    question:
      "It takes two pipes A and B, running together, to fill a tank in 6 minutes. It takes A 5 minutes less than B to fill the tank, then what will be the time taken by B alone to fill the tank?",
    option: ["10 minutes", "15 minutes", "20 minutes", "25 minutes"],
    answer: "15 minutes",
    category: "Pipes and Cisterns",
  },
  {
    id: 2,
    question:
      "If two pipes can fill a tank in 24 and 20 minutes respectively and another pipe can empty 3 gallons of water per minute from that tank. When all the three pipes are working together, it takes 15 minutes to fill the tank. What is the capacity of the tank? ",
    option: ["100 gallons", "150 gallons", "130 gallons", "120 gallons"],
    answer: "120 gallons",
    category: "Pipes and Cisterns",
  },
  {
    id: 3,
    question:
      " It takes 20 minutes for pipe A to fill the tank completely and it takes 30  minutes for pipe B to fill the tank completely. If both the inlets are opened together, then how much time will be taken to fill the tank completely?  ",
    option: ["15 minutes", "12 minutes", "11 minutes", "22 minutes"],
    answer: "12 minutes",
    category: "Pipes and Cisterns",
  },
  {
    id: 4,
    question:
      " Pipe A can fill the tank 3 times faster in comparison to pipe B. It takes 36 minutes for pipe A and B to fill the tank together. How much time will pipe B alone take to fill the tank?  ",
    option: ["100 minutes", "124 minutes", "134 minutes", "144 minutes"],
    answer: "144 minutes",
    category: "Pipes and Cisterns",
  },
  {
    id: 5,
    question:
      " It takes 6 hours for three pipes, X, Y and Z to fill a tank. When the three worked together for 2 hours, Z was closed and, X and Y filled the remaining tank in 7 hours. How many hours would it take Z alone to fill the tank?  ",
    option: ["15 hours", "23 hours", "12 hours", "14 hours"],
    answer: "14 hours",
    category: "Pipes and Cisterns",
  },
  {
    id: 6,
    question:
      " Two pipes A and B can fill a tank in 15 minutes and 20 minutes respectively. Both the pipes are opened together but after 4 minutes, pipe A is turned off. What is the total time required to fill the tank?  ",
    option: [
      "10 min. 20 sec.",
      "11 min. 45 sec",
      "12 min. 30 sec.",
      "14 min. 40 sec.",
    ],
    answer: "14 min. 40sec.",
    category: "Pipes and Cisterns",
  },
  {
    id: 7,
    question:
      "A water tank is two-fifth full.Pipe A can fill a tank in 10 minutes and pipe B can empty it in 6 minutes.If both the pipes are open,how long will it take to empty or fill the tank completely?  ",
    option: [
      " 6 min.to empty",
      " 6 min.to fill",
      "9 min.to empty",
      "9 min.to fill",
    ],
    answer: "6 min.to empty",
    category: "Pipes and Cisterns",
  },
  {
    id: 8,
    question:
      "A tap can fill a tank in 6 hours. After half the tank is filled, three more similar taps are opened. What is the total time taken to fill the tank completely?  ",
    option: ["3 hrs 15 min", "3 hrs 45 min", "4 hrs 15 min", "4 hrs 1"],
    answer: "3 hrs 45 min",
    category: "Pipes and Cisterns",
  },
  {
    id: 9,
    question:
      " A cistern is normally filled in 8 hours but takes two hours longer to fill because of a leak in its bottom. If the cistern is full, the leak will empty it in    ? ",
    option: ["20 hrs", "28 hrs", "36 hrs", "40 hrs"],
    answer: " 20 hrs",
    category: "Pipes and Cisterns",
  },
  {
    id: 10,
    question:
      "Three pipes A, B and C can fill a tank in 6 hours. After working at it together for 2 hours, C is closed and A and B can fill the remaining part in 7 hours. The number of hours taken by C alone to fill the tank is: ",
    option: ["10", "12", "14", "16"],
    answer: " 14 hrs",
    category: "Pipes and Cisterns",
  },
  {
    id: 11,
    question: "In a throw of a coin, the probability of getting a head is? ",
    option: ["1", "1/2", "1/4", "2"],
    answer: "1/2",
    category: "Probability",
  },
  {
    id: 12,
    question:
      "Two unbiased coins are tossed. What is the probability of getting at most one head? ",
    option: ["2/3", "1/2", "3/4", "4/3"],
    answer: "3/4",
    category: "Probability",
  },
  {
    id: 13,
    question:
      "An unbiased die is tossed. Find the probability of getting a multiple of 3.",
    option: ["1/4", "1/3", "1/2", "1"],
    answer: "1/3",
    category: "Probability",
  },
  {
    id: 14,
    question:
      "In a simultaneous throw of a pair of dice, find the probability of getting a total more than 7. ",
    option: [" 3/2", "4/7", "5/12", "6/13"],
    answer: "5/12",
    category: "Probability",
  },
  {
    id: 15,
    question:
      "A bag contains 6 white and 4 black balls. two balls are drawn at random. Find the probability that they are of the same color. ",
    option: ["3/4", "5/3", "7/15", "8/17"],
    answer: "7/15",
    category: "Probability",
  },
  {
    id: 16,
    question:
      "Two dice are thrown together. What is the probability that the sum of the numbers on the two faces is divisible by 4 or 6? ",
    option: ["13/14", "5/3", "7/16", "7/18"],
    answer: "7/18",
    category: "Probability",
  },
  {
    id: 17,
    question:
      "Two cards are drawn at random from a pack of 52 cards. What is the probability that either both are black or both are queens? ",
    option: [" 5/21", "55/221", "555/2221", " 5555/22221"],
    answer: "55/221",
    category: "Probability",
  },
  {
    id: 18,
    question:
      "A bag contains 4 white, 5 red, and 6 blue balls. Three balls are drawn at random from the bag. The probability that all of them are red is: ",
    option: ["1/22", "3/22", "2/91", "2/77"],
    answer: "2/91",
    category: "Probability",
  },
  {
    id: 19,
    question:
      " A bag contains 6 white and 4 red balls. Three balls are drawn at random. What is the probability that one ball is red and the other two are white? ",
    option: ["1/2", "1/12", "3/10", "7/12"],
    answer: "1/2",
    category: "Probability",
  },
  {
    id: 20,
    question:
      " In a box, there are 8 red, 7 blue, and 6 green balls. One ball is picked up randomly. What is the probability that it is neither red nor green? ",
    option: ["2/3", "3/4", "7/19", "8/21"],
    answer: "8/21",
    category: "Probability",
  },
  {
    id: 21,
    question:
      "Father is four times the age of his daughter. If after 5 years, he would be threee times of daughter’s age, then further after 5 years, how many times he would be of his daughter’s age? ",
    option: ["1.5 times", "2 times", "2.5 times", "3 times"],
    answer: "2.5 times",
    category: "Problem On Ages",
  },
  {
    id: 22,
    question:
      "What is Aman's present age, if after 20 years his age will be 10 times his age 10 years back? ",
    option: [" 6.2 years", "7.7 years", "13.3 years", "10 years"],
    answer: "13.3 years",
    category: "Problem On Ages",
  },
  {
    id: 23,
    question:
      "Nisha is 15 years elder to Romi. If 5 years ago, Nisha was 3 times as old as Romi, then find Nisha’s present age. ",
    option: [". 32.5 years", "27.5 years", "25 years", "24.9 years"],
    answer: "27.5 years",
    category: "Problem On Ages",
  },
  {
    id: 24,
    question:
      "One year ago, the ratio of Honey and Piyush ages was 2: 3 respectively. After five years from now, this ratio becomes 4: 5. How old is Piyush now? ",
    option: ["5 years", "25 years", "10 years", "15 years"],
    answer: "10 years",
    category: "Problem On Ages",
  },
  {
    id: 25,
    question:
      "Ten years ago, the age of mother was three times the age of her son. After ten years, mother’s age will be twice that of his son. Find the ratio of their present ages. ",
    option: ["11 : 7", "9 : 5", "7 : 4", "7 : 3"],
    answer: "7 : 3",
    category: "Problem On Ages",
  },
  {
    id: 26,
    question:
      "Saransh is 50 years old and Nazma is 40 years old. How long ago was the ratio of their ages 3:2?",
    option: ["20 years", "30 years", "40 years", "25 years"],
    answer: "20 years",
    category: "Problem On Ages",
  },
  {
    id: 27,
    question:
      " The ratio of the present ages of Pranav and Qureshi is 4:5. Five years ago, the ratio of their ages was 7:9. Find their present ages? (In years) ",
    option: ["40, 50", "18, 25", "40, 60", "20, 25"],
    answer: "40, 50",
    category: "Problem On Ages",
  },
  {
    id: 28,
    question:
      " A man said to his son, 'I was one-third of your present age when you were born'. If the present age of the man is 48 years, find the present age of the son. ",
    option: ["25.7 years", "28 years", "29.3 years", "36 years"],
    answer: "36 years",
    category: "Problem On Ages",
  },
  {
    id: 29,
    question:
      "Dinesh is younger to Roshan by 9 years. If their ages are in the respective ratio of 4:5, how old is Dinesh? ",
    option: ["36 years", "23years", "29 years", "Cannot be determined"],
    answer: "36 years",
    category: "Problem On Ages",
  },
  {
    id: 30,
    question:
      " The ratio of Sara’s age 4 years ago and Vaishali’s age after 4 years is 1: 1. Presently, the ratio of their ages is 5: 3. Find the ratio between Sara’s age 4 years hence and Vaishali’s age 4 years ago.",
    option: [" 1 : 3", "3 : 1", "4 : 3", "3 : 4"],
    answer: "3 : 1",
    category: "Problem On Ages",
  },
  {
    id: 31,
    question:
      " A cycle is bought for Rs.900 and sold for Rs.1080, find the gain percent? ",
    option: ["16 2/3%", "20%", "18%", "25%"],
    answer: " 20%",
    category: "Profit and Loss",
  },
  {
    id: 32,
    question:
      " An article is bought for Rs.675 and sold for Rs.900, find the gain percent? ",
    option: ["16 2/3%", "30%", "33 1/3%", "33 1/6%"],
    answer: "33 1/3%",
    category: "Profit and Loss",
  },
  {
    id: 33,
    question:
      " An article is bought for Rs.600 and sold for Rs.500, find the loss percent? ",
    option: ["16 4/3%", "100/3%", "16%", "16 2/3%"],
    answer: "16 2/3%",
    category: "Profit and Loss",
  },
  {
    id: 34,
    question:
      "The cost price of a radio is Rs.1500 and it was sold for Rs.1230, find the loss %? ",
    option: ["18%", "9%", "15%", "6%"],
    answer: "18%",
    category: "Profit and Loss",
  },
  {
    id: 35,
    question:
      " A watch was sold at a loss of 10%. If it was sold for Rs.140 more, there would have been a gain of 4%. What is the cost price? ",
    option: ["Rs.1000", "Rs.1140", "Rs.860", "Rs.760"],
    answer: "Rs.1000",
    category: "Profit and Loss",
  },
  {
    id: 36,
    question:
      "David sold a bicycle at Rs 2100 and made a loss of 25%. At what price should he sell the bicycle if he wants to make a profit of 15%? ",
    option: ["Rs 2500", "Rs 2990", "Rs 3220", "Rs 3500"],
    answer: "Rs 3220",
    category: "Profit and Loss",
  },
  {
    id: 37,
    question:
      "The percentage profit earned by selling an article for Rs. 1920 is equal to the percentage loss by selling the same article for Rs. 1280. At what price should the article be sold to make 25% profit? ",
    option: ["Rs 1800", "Rs 2000", "Rs 2250", "Rs 2500"],
    answer: "Rs 2000",
    category: "Profit and Loss",
  },
  {
    id: 38,
    question:
      "A loss of 20% is made by selling an article. Had it been sold for Rs 240 more, there would have been a profit of 10%. What would be the selling price of the article if it is sold at 25% profit? ",
    option: ["Rs 960", "Rs 1000", "Rs 1040", "Rs 1080"],
    answer: "Rs 1000",
    category: "Profit and Loss",
  },
  {
    id: 39,
    question:
      "By selling 33 m. cloth, a shopkeeper loses money equivalent to selling price of 11 m. Find his loss percentage. ",
    option: ["20%", "25%", "33.33%", "50%"],
    answer: "25%",
    category: "Profit and Loss",
  },
  {
    id: 40,
    question:
      " Cost price of 12 articles is equal to the selling price of 8 articles. Find the profit / loss %? ",
    option: ["20% loss", "50% loss", "33.33% profit", "50% profit"],
    answer: "50% profit",
    category: "Profit and Loss",
  },
];
// these all variable used in my quiz-app code
const container = document.getElementById("quiz-container");
let username = "";
let questionCount = 0;
let categoryQuestions = [];
let category = "";
let score = 0;
let attempt = 0;
let correct = 0;
let wrong = 0;
// these are getname function used for input username 
function getName(event) {
  username = document.getElementById("user-name").value;
  let welcomeNote = `<p id="welcome-note">Welcome ${username}, you can start the quiz now</p>`;
  document.getElementById("welcome-note").innerHTML = welcomeNote;
  event.preventDefault();
}
function getCategory(event) {
  if (username == "") {
    alert("please enter your name");
  } else {
    category = event.target.value;
    startQuiz();
  }
}
// these function(startQuiz) used for start the quiz-app
function startQuiz() {
  questionCount = 0;
  score = 0;
  attempt = 0;
  correct = 0;
  wrong = 0;

  container.innerHTML = "";
  let quizPage = `<h1>${category}</h1> <div id="timer-score"><span id="timer">220</span><span id="score">Score:${score}</span> </div>
<span id="question-number">${questionCount + 1}/10 </span>
<div id="question-div">


</div>
<div id="options-div">


</div>

<button onclick="nextQuestion()" class="next-question">Next Question</button>
`;
  container.innerHTML = quizPage;
  categoryQuestions = questions.filter((question) => {
    return question.category === category;
  });

  displayQuestion(questionCount);
// these condition and function used for timer ,show the time in my quiz app
  let timeLeft = 220;
  let totalTimeTaken = 0;

  let timerId = setInterval(countdown, 1000);
  function countdown() {
    if (timeLeft == -1 || questionCount > 9) {
      clearTimeout(timerId);
      displayResult(totalTimeTaken);
      return;
    } else {
      document.getElementById("timer").innerHTML = timeLeft;
      timeLeft--;
      totalTimeTaken++;
    }
  }
}

// these function used for display question in the web page
function displayQuestion(questionCount) {
  document.getElementById("question-div").innerHTML =
    categoryQuestions[questionCount].question;
  displayOptions();
}
// this is used for display option 
function displayOptions() {
  document.getElementById("options-div").innerHTML = "";
  categoryQuestions[questionCount].option.map((option) => {
    const optionButton = document.createElement("button");
    optionButton.innerHTML = option;
    optionButton.className = "option-button";
    optionButton.onclick = function (event) {
      attempt++;
      if (event.target.innerHTML === categoryQuestions[questionCount].answer) {
        score++;
        document.getElementById("score").innerHTML = `Score: ${score}`;
        correct++;
        event.target.className = "correct";

        const buttonList = document.querySelectorAll(".option-button");
        for (let i = 0; i < buttonList.length; i++) {
          buttonList[i].disabled = true;
        }
      } else {
        wrong++;
        const buttonList = document.querySelectorAll(".option-button");
        for (let i = 0; i < buttonList.length; i++) {
          buttonList[i].disabled = true;
        }
      }
    }; //anonymus function
    document.getElementById("options-div").appendChild(optionButton);
  });
}
// these function made for move next Question
function nextQuestion() {
  questionCount++;
  document.getElementById("question-number").innerHTML = `${
    questionCount + 1
  }/10`;
  if (questionCount < categoryQuestions.length) {
    displayQuestion(questionCount);
  } else {
    displayResult();
  }
}
// these function used for display result in the quiz app
function displayResult(totalTimeTaken) {
  const resultContainer = `
  <h1 id="heading-result">Quiz Result</h1>
  <p class="paragraph"><b>${username}</b> your result is:</p>
  <p class="paragraph">Total Time Taken: <b>${totalTimeTaken}</b></p>
  <p class="paragraph">Total Question: <b>${categoryQuestions.length}</b></p>
  <p class="paragraph">Attempt: <b>${attempt}</b></p>
  <p class="paragraph">Correct: <b>${correct}</b></p>
  <p class="paragraph">Wrong: <b>${wrong}</b></p>
  <p class="paragraph">Percentage: <b>${
    (correct / categoryQuestions.length) * 100
  }%</b></p>
  <button value="${category}" onclick="getCategory(event)" id="result-btn1">Start Again</button>
  <button onclick="reloadPage()" id="result-btn2">Go To Home</button>

    `;

  container.innerHTML = "";
  container.innerHTML = resultContainer;
}
// these last function used for reload the web page
function reloadPage() {
  location.reload();
}
