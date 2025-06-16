const quiz = [
  {
    question: 'ルフィの悪魔は？',
    answers: [
      'ゴムゴムの実',
      'バラバラの実',
      'メラメラの実',
      'ピカピカの実',
      'ハナハナの実',
      'ゴロゴロの実',
    ],
    correct: 'ゴムゴムの実',
  },
  {
    question: '桜木花道の出身中学は?',
    answers: [
      '北村中',
      '和光中',
      '武石中',
      '富ケ丘中',
      '大岡中',
      '竹中中',
    ],
    correct: '和光中',
  },
  {
    question: '1998年に64で発売されたゼルダの伝説のゲームのタイトル名は?',
    answers: [
      'ムジュラの仮面',
      'トワイライトプリンセス',
      '時のオカリナ',
      '風のタクト',
      'スカイウォードソード',
      '神々のトライフォース',
    ],
    correct: '時のオカリナ',
  },
];

const quizLength = quiz.length;
let quizIndex = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//定数の文字列をHTMLに反映　
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
    //ここに命令
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}

setupQuiz();

const clickHandler = (e)=> {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert('正解!');
    } else {
        window.alert('不正解！');
    }

    quizIndex++;

    if(quizIndex < quizLength){
        //問題数があれば実行
        setupQuiz();
    } else {
        //問題数がなければこちらを実行
        alert('終了')
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
