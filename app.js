const question = 'ワンピースの主人公の名前は何ですか？';

const answers = [
    'ルフィ',
    'ゾロ',
    'ナミ'
]

const correct = 'ルフィ';

const $button = document.getElementsByTagName('button')

const setupQuiz = () => {
    document.getElementById('js-question').textContent = question;
    let buttonLength = $button.length
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = answers[buttonIndex];
        buttonIndex++;
    }
}

setupQuiz();

const clickHandler = (e)=> {
    if(correct === e.target.textContent){
        alert('正解！');
    } else {
        alert('不正解！');
    }
}

$button[0].addEventListener('click', (e)=> {
    clickHandler(e);
})

$button[1].addEventListener('click', (e)=> {
    clickHandler(e);
})

$button[2].addEventListener('click', (e)=> {
    clickHandler(e);
})
