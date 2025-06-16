const question = 'ワンピースの主人公は？';

const answers = [
    'モンキー・D・ルフィ',
    'ナミ',
    'ロロノア・ゾロ',
];

const correct = 'モンキー・D・ルフィ';

document.getElementById('js-question').textContent = question;
document.getElementsByTagName('button')[0].textContent = answers[0];
document.getElementsByTagName('button')[1].textContent = answers[1];
document.getElementsByTagName('button')[2].textContent = answers[2];