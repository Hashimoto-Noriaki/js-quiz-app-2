const quiz = [
    {
        question: 'ルフィの悪魔の実は?',
        answers:[
            'ゴムゴムの実',
            'ピカピカの実',
            'バラバラの実',
        ],
        correct:'ゴムゴムの実',
    },{
        question:'スラダンの主人公は?',
        answers:[
            '桜木花道',
            '流川楓',
            '赤木晴子',
        ],
        correct:'桜木花道',
    },{
        question:'ナルトの必殺技は?',
        answers:[
            '螺旋丸',
            '千鳥',
            '雷切',
        ],
        correct:'螺旋丸',
    }
]

let quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');

const setupQuiz = ()=> {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    let buttonLength = $button.length
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
            buttonIndex++;
    }
}

setupQuiz();

const clickHandler = (e)=> {
    if(quiz[quizIndex].correct === e.target.textContent){
        alert("正解!")
        score++;
    } else {
        alert("不正解!")
    }

    quizIndex++;

    if(quizIndex < quizLength){
        setupQuiz();
    } else {
        alert('クイズ終了!あなたの正解数は' + score + '/' + quizLength + 'です。');
    }
}

//正誤判定
$button[0].addEventListener('click',(e)=> {
    clickHandler(e);
})

$button[1].addEventListener('click',(e)=> {
    clickHandler(e);
})

$button[2].addEventListener('click',(e)=> {
    clickHandler(e);
})
