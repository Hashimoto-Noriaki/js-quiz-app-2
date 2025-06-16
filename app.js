const question = 'ワンピースの主人公は？';

const answers = [
    'モンキー・D・ルフィ',
    'ナミ',
    'ロロノア・ゾロ',
];

const correct = 'モンキー・D・ルフィ';

const $button = document.getElementsByTagName('button');
let buttonLength = $button.length;

const setupQuiz = () => {
    document.getElementById('js-question').textContent = question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = answers[buttonIndex];
        buttonIndex++;
    }
}

setupQuiz();

const clickHandler = (e) => {
    if(correct === e.target.textContent){
        alert('正解');
    } else {
        alert('不正解');
    }
}

let handleIndex = 0;

while(handleIndex < buttonLength){
    $button[handleIndex].addEventListener('click',(e)=> {
        clickHandler(e);
    })
    handleIndex++;
}
