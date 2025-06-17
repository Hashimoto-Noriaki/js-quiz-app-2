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

let quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button')
let buttonLength = $button.length

const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}

setupQuiz();

const clickHandler = (e)=> {
    if(quiz[quizIndex].correct === e.target.textContent){
        alert('正解！');
        score++;
    } else {
        alert('不正解！');
    }

    quizIndex++;
    if(quizIndex < quizLength){
        setupQuiz();
    } else{
        alert('クイズ終了! 正解数は' + score + '/' + quizLength + 'です。');
        quizIndex= 0;
        setupQuiz();
    }
}

let handleIndex = 0;

while(handleIndex < buttonLength){
    $button[handleIndex].addEventListener('click', (e)=> {
        clickHandler(e);
    })
    handleIndex++;
}
