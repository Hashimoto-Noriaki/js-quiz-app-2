const question = 'ワンピースの主人公の名前は何ですか？';

const answers = [
    'ルフィ',
    'ゾロ',
    'ナミ'
]

const correct = 'ルフィ';

document.getElementById('js-question').textContent = question;
document.getElementsByTagName('button')[0].textContent = answers[0];
document.getElementsByTagName('button')[1].textContent = answers[1];
document.getElementsByTagName('button')[2].textContent = answers[2];
