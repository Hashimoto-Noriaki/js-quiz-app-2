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

//定数の文字列をHTMLに反映　
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz;
    let buttonIndex = 0;
    let buttonLength = $button.length
    while(buttonIndex < buttonLength){
    //ここに命令
        $button[buttonIndex].textContent = answer[buttonIndex];
        buttonIndex++;
    }
}

setupQuiz();

//ボタンを押したら正誤判定できる
const clickHandler = (e)=> {
    if (correctAnswer === e.target.textContent) {
        window.alert('正解!');
    } else {
        window.alert('不正解！');
    }
}

$button[0].addEventListener('click', (e) => {
    clickHandler(e);
});

$button[1].addEventListener('click', (e)=> {
    clickHandler(e);
})

$button[2].addEventListener('click', (e)=> {
    clickHandler(e);
})

$button[3].addEventListener('click', (e)=> {
    clickHandler(e);
})

$button[4].addEventListener('click', (e)=> {
    clickHandler(e);
})

$button[5].addEventListener('click', (e)=> {
    clickHandler(e);
})
