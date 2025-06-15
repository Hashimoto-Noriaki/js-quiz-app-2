const quiz = 'ルフィの悪魔の実は?'

const answer = [
    'ゴムゴムの実',
    'ピカピカの実',
    'バラバラの実',
]

const correctAnser = 'ゴムゴムの実'

document.getElementById('js-question').textContent = quiz;

document.getElementsByTagName('button')[0].textContent = answer[0];
document.getElementsByTagName('button')[1].textContent = answer[1];
document.getElementsByTagName('button')[2].textContent = answer[2];
