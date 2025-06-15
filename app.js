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

//同じような処理が続いたので、変数、定数にまとめる
//$があることで、HTMLのオブジェクトが入っていると理解できる
document.getElementsByTagName('button')[0].textContent = answer[0];
document.getElementsByTagName('button')[1].textContent = answer[1];
document.getElementsByTagName('button')[2].textContent = answer[2];
document.getElementsByTagName('button')[3].textContent = answer[3];
document.getElementsByTagName('button')[4].textContent = answer[4];
document.getElementsByTagName('button')[5].textContent = answer[5];

// const $button = document.getElementsByTagName('button');





//ボタンを押したら正誤判定できる
document.getElementsByTagName('button')[0].addEventListener('click', () => {
    if (correctAnswer === document.getElementsByTagName('button')[0].textContent) {
    window.alert('正解!');
    } else {
    window.alert('不正解！');
    }
});
