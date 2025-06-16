const question = 'ルフィの悪魔の実は?'

const answers = [
    'ゴムゴムの実',
    'ピカピカの実',
    'バラバラの実',
]

const correct = 'ゴムゴムの実'
const $button = document.getElementsByTagName('button');

const setupQuiz = ()=> {
    document.getElementById('js-question').textContent = question;
    let buttonIndex = 0;
    let buttonLength = $button.length
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = answers[buttonIndex];
            buttonIndex++;
    }
}

setupQuiz();

const clickHandler = (e)=> {
    if(correct === e.target.textContent){
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
