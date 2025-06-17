const quiz = [
    {
        question: 'ワンピースの主人公の名前は？',
        answers: [
            'ルフィ',
            'ゾロ',
            'ナミ',
        ],
        correct: 'ルフィ'
    },{
        question:'ワンピースの作者は?',
        answers: [
            '尾田栄一郎',
            '鳥山明',
            '岸本斉史',
        ],
        correct: '尾田栄一郎'
    },{
        question: 'ワンピースの連載が始まった年は？',
        answers: [
            '1997年',
            '1999年',
            '2001年',
        ],
        correct: '1997年'
    }
]

let quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
let buttonLength = $button.length;

const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}

setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        alert('正解');
    } else {
        alert('不正解');
    }

    quizIndex++;

    if(quizIndex < quizLength){
        setupQuiz();
    } else {
        alert('クイズ終了！');
        quizIndex = 0;
        setupQuiz();
    }
}

let handleIndex = 0;

while(handleIndex < buttonLength){
    $button[handleIndex].addEventListener('click',(e)=> {
        clickHandler(e);
    })
    handleIndex++;
}
