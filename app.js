const quiz = 'ルフィの悪魔は？'

const answer = [
    'ゴムゴムの実',
    'バラバラの実',
    'メラメラの実',
    'ピカピカの実',
    'ハナハナの実',
    'ゴロゴロの実',
]

const correctAnswer = 'ゴムゴムの実'

//定数の文字列をHTMLに反映　
document.getElementById('js-question').textContent = quiz;

const $button = document.getElementsByTagName('button');

$button[0].textContent = answer[0];
$button[1].textContent = answer[1];
$button[2].textContent = answer[2];
$button[3].textContent = answer[3];
$button[4].textContent = answer[4];
$button[5].textContent = answer[5];

//同じような処理が続いたので、変数、定数にまとめる
//$があることで、HTMLのオブジェクトが入っていると理解できる

//ボタンを押したら正誤判定できる
$button[0].addEventListener('click', () => {
    if (correctAnswer === $button[0].textContent) {
    window.alert('正解!');
    } else {
    window.alert('不正解！');
    }
});

$button[1].addEventListener('click', ()=> {
    if(correctAnswer === $button[1].textContent){
        window.alert('正解!');
    } else {
        window.alert('不正解！');
    }
})

$button[2].addEventListener('click', ()=> {
    if(correctAnswer === $button[2].textContent){
        window.alert('正解!');
    } else {
        window.alert('不正解！');
    }
})

$button[3].addEventListener('click', ()=> {
    if(correctAnswer === $button[3].textContent){
        window.alert('正解!');
    } else {
        window.alert('不正解！');
    }
})

$button[4].addEventLisener('click', ()=> {
    if(correctAnswer === $button[4].textContent){
        window.alert('正解!');
    } else {
        window.alert('不正解！');
    }
})

$button[5].addEventListener('click', ()=> {
    if(correctAnswer === $button[5].textContent){
        window.alert('正解!');
    } else {
        window.alert('不正解！');
    }
})