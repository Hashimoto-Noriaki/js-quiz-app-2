const quiz = 'ルフィの悪魔は？'

const answer = [
    'ゴムゴムの実',
    'バラバラの実',
    'メラメラの実',
    'ピカピカの実',
    'ハナハナの実',
    'ゴロゴロの実',
]

const corectAnswer = 'ゴムゴムの実'

document.getElementById('js-question').textContent = quiz;
document.getElementsByTagName('button')[0].textContent = answer[0];
document.getElementsByTagName('button')[1].textContent = answer[1];
document.getElementsByTagName('button')[2].textContent = answer[2];
document.getElementsByTagName('button')[3].textContent = answer[3];
document.getElementsByTagName('button')[4].textContent = answer[4];
document.getElementsByTagName('button')[5].textContent = answer[5];
