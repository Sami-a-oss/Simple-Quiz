const questions = [
    {
        question: "what is the largest animal in the world ?",
        answers: [
            {text: "shark", correct: false},
            {text: "elephant", correct: true},
            {text: "lion", correct: false},
            {text: "giraffe", correct: false}
        ]
    },


    {
        question: "What is the world's most populous country",
        answers: [
            {text: "china", correct: true},
            {text: "indonesia", correct: false},
            {text: "united kingdom", correct: false},
            {text: "japan", correct: false}
        ]
    },

    {
        question: "What is the capital of France?",
        answers: [
            {text: "paris", correct: true},
            {text: "tokyo", correct: false},
            {text: "berlin", correct: false},
            {text: "madrid", correct: false}
        ]
    },

    {
        question: "What is the tallest mountain in the world?",
        answers: [
            {text: "mount Everest", correct: true},
            {text: "k2", correct: false},
            {text: "kilimanjaro", correct: false},
            {text: "everest", correct: false}
        ]
    },

    {
        question: "What is the world's most visited country?",
        answers: [
            {text: "china", correct: false},
            {text: "indonesia", correct: false},
            {text: "united kingdom", correct: true},
            {text: "japan", correct: false}
        ]
    },


    {
        question: "What is the longest river in the world?",
        answers: [
            {text: "amazon", correct: false},
            {text: "nile", correct: true},
            {text: "taj river", correct: false},
            {text: "mississippi", correct: false}
        ]
    },


    {
        question: "What is the world's largest desert?",
        answers: [
            {text: "amazon", correct: false},
            {text: "sahara", correct: true},
            {text: "indus valley", correct: false},
            {text: "gobi", correct: false}
        ]
    },

    {
        question: "What is the world's most populous city?",
        answers: [
            {text: "tokyo", correct: true},
            {text: "new york", correct: false},
            {text: "london", correct: false},
            {text: "beijing", correct: false}
        ]
    },

    {
        question: "What is the world's largest ocean?",
        answers: [
            {text: "amazon", correct: false},
            {text: "pacific", correct: true},
            {text: "indus valley", correct: false},
            {text: "atlantic", correct: false}
        ]
    },

    {
        question: "What is the world's most populated country?",
        answers: [
            {text: "china", correct: false},
            {text: "indonesia", correct: false},
            {text: "united kingdom", correct: true},
            {text: "japan", correct: false}
        ]
    },

    {
        question: "What is the world's smallest country?",
        answers: [
            {text: "afghanistan", correct: true},
            {text: "china", correct: false},
            {text: "united kingdom", correct: false},
            {text: "japan", correct: false}
        ]
    },

    {
        question: "What is the world's most famous city?",
        answers: [
            {text: "tokyo", correct: true},
            {text: "new york", correct: false},
            {text: "london", correct: false},
            {text: "beijing", correct: false}
        ]
    },

    {
        question: "What is the world's most populous city?",
        answers: [
            {text: "tokyo", correct: true},
            {text: "new york", correct: false},
            {text: "london", correct: false},
            {text: "beijing", correct: false}
        ]
    },

    {
        question: "What is the world's largest country?",
        answers: [
            {text: "china", correct: false},
            {text: "indonesia", correct: false},
            {text: "united kingdom", correct: true},
            {text: "japan", correct: false}
        ]
    },

    {
        question: "What is the world's most famous city?",
        answers: [
            {text: "tokyo", correct: true},
            {text: "new york", correct: false},
            {text: "london", correct: false},
            {text: "beijing", correct: false}
        ]
    },
];


let questionIndex = 0;
let score = 0;


const currentQuestion = document.querySelector("#questionText");


const allOption = document.querySelector(".allButton");



let correctAnswer = "";






const showOption = () => {
    questions[questionIndex].answers.forEach ((answer) => {
        let button = document.createElement("button");
        button.classList.add("box");
        button.innerHTML = answer.text;
        allOption.appendChild(button);

        if (answer.correct) {
            correctAnswer = answer.text;
        }


        button.addEventListener("click", () => {
            let select = button.innerText;
            console.log(select);


            const selectedOption = Array.from(allOption.children).find((btn) => btn.innerText === correctAnswer);



            if(select === correctAnswer) {
                score++;
                button.style.backgroundColor = "green";
                button.style.color = "white";
                console.log(score);
            } else if (select !== correctAnswer) {
                button.style.backgroundColor = "red";
                button.style.color = "white";

                selectedOption.style.backgroundColor = "green";
                selectedOption.style.color = "white";
            }
            
            Array.from(allOption.children).forEach((btn) => {
                btn.disabled = true;
            });
            

            setTimeout(() => {
                allOption.innerHTML = "";
            
                questionIndex++;
            

                if (questionIndex < questions.length) {
                    showQuestion();
                } else {

                    currentQuestion.innerText = `Quiz finished! Your score: ${score}/${questions.length}`;
                }
            }, 1000); 
            

        });

    });
}



const showQuestion = () => {
    let questionNumber = questionIndex + 1;
    let question = questions[questionIndex].question;

    currentQuestion.innerText = `${questionNumber}. ${question}`;

    showOption();
}




const startQuiz = () => {
    questionIndex = 0;
    score = 0;
    showQuestion();
}


startQuiz();