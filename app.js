const quiz = 'ルフィの悪魔の実は?'

const answer = [
    'ゴムゴムの実',
    'ピカピカの実',
    'バラバラの実',
]

const correctAnswer = 'ゴムゴムの実'
const $button = document.getElementsByTagName('button');

const setupQuiz = ()=> {
    document.getElementById('js-question').textContent = quiz;
    let buttonIndex = 0;
    let buttonLength = $button.length
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = answer[buttonIndex];
            buttonIndex++;
    }
}

setupQuiz();

const clickHandler = (e)=> {
    if(correctAnswer === e.target.textContent){
        alert("正解!")
    } else {
        alert("不正解!")
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
