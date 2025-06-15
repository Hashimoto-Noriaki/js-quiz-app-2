const quiz = 'ルフィの悪魔の実は?'

const answer = [
    'ゴムゴムの実',
    'ピカピカの実',
    'バラバラの実',
]

const correctAnswer = 'ゴムゴムの実'

document.getElementById('js-question').textContent = quiz;

const $button = document.getElementsByTagName('button');

$button[0].textContent = answer[0];
$button[1].textContent = answer[1];
$button[2].textContent = answer[2];

//正誤判定
$button[0].addEventListener('click',()=> {
    if(correctAnswer === document.getElementsByTagName('button')[0].textContent){
        alert("正解!")
    } else {
        alert("不正解!")
    }
})

$button[1].addEventListener('click',()=> {
    if(correctAnswer === document.getElementsByTagName('button')[1].textContent){
        alert("正解!")
    } else {
        alert("不正解!")
    }
})

$button[2].addEventListener('click',()=> {
    if(correctAnswer === document.getElementsByTagName('button')[2].textContent){
        alert("正解!")
    } else {
        alert("不正解!")
    }
})
