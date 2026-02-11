// 配列とmap関数を使ってゲームリストを表示
const games = ['アクションPVP', 'オープンワールドPVE', 'シミュレーション'];

const listElement = document.getElementById('game-list');
listElement.innerHTML = games.map(game => `<li>${game}</li>`).join('');

console.log("Webページが読み込まれました");