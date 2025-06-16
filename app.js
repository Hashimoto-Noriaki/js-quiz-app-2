const question = 'ワンピースの主人公は？';

const answers = [
    'モンキー・D・ルフィ',
    'ナミ',
    'ロロノア・ゾロ',
];

const correct = 'モンキー・D・ルフィ';

const $button = document.getElementsByTagName('button');

document.getElementById('js-question').textContent = question;
$button[0].textContent = answers[0];
$button[1].textContent = answers[1];
$button[2].textContent = answers[2];

let buttonLength = $button.length
let buttonIndex = 0;
while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
}

$button[0].addEventListener('click',()=> {
    if(correct === $button[0].textContent){
        alert('正解');
    } else {
        alert('不正解');
    }
})

$button[1].addEventListener('click',()=> {
    if(correct === $button[1].textContent){
        alert('正解');
    } else {
        alert('不正解');
    }
})

$button[2].addEventListener('click',()=> {
    if(correct === $button[2].textContent){
        alert('正解');
    } else {
        alert('不正解');
    }
})
