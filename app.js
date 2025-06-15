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

//同じような処理が続いたので、変数、定数にまとめる
//$があることで、HTMLのオブジェクトが入っていると理解できる

//ボタンを押したら正誤判定できる
$button[0].addEventListener('click', (e) => {
    // console.log(e);
    if (correctAnswer === e.target.textContent) {
    window.alert('正解!');
    } else {
    window.alert('不正解！');
    }
});

$button[1].addEventListener('click', (e)=> {
    if(correctAnswer === e.target.textContent){
        window.alert('正解!');
    } else {
        window.alert('不正解！');
    }
})

$button[2].addEventListener('click', (e)=> {
    if(correctAnswer === e.target.textContent){
        window.alert('正解!');
    } else {
        window.alert('不正解！');
    }
})

$button[3].addEventListener('click', (e)=> {
    if(correctAnswer === e.target.textContent){
        window.alert('正解!');
    } else {
        window.alert('不正解！');
    }
})

$button[4].addEventListener('click', (e)=> {
    if(correctAnswer === e.target.textContent){
        window.alert('正解!');
    } else {
        window.alert('不正解！');
    }
})

$button[5].addEventListener('click', (e)=> {
    if(correctAnswer === e.target.textContent){
        window.alert('正解!');
    } else {
        window.alert('不正解！');
    }
})