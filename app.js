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

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//定数の文字列をHTMLに反映　
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
    //ここに命令
        $button[buttonIndex].textContent = answer[buttonIndex];
        buttonIndex++;
    }
}

setupQuiz();

const clickHandler = (e)=> {
    if (correctAnswer === e.target.textContent) {
        window.alert('正解!');
    } else {
        window.alert('不正解！');
    }
}

//ボタンを押したら正誤判定できる
let handlerIndex = 0;
while(handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}
