// 配列とmap関数を使ってゲームリストを表示
// ゲーム情報をジャンルごとに整理
const gameCategories = [
    {
        genre: 'PVP',
        titles: ['Leage of Legends', 'オーバーウォッチ２']
    },
    {
        genre: 'PVE',
        titles: ['エルデンリング', 'モンスターハンター']
    },
    {
        genre: 'その他',
        titles: ['ストリートファイター６', 'ゼンレスゾーンゼロ']
    }
];

const listElement = document.getElementById('game-list');

// 二重のmap関数を使って、ジャンルとその中のタイトルを組み立てる
listElement.innerHTML = gameCategories.map(cat => `
    <li style="margin-bottom: 15px; list-style: none;">
        <strong>【${cat.genre}】</strong>
        <ul style="list-style: disc; margin-left: 20px;">
            ${cat.titles.map(title => `<li>${title}</li>`).join('')}
        </ul>
    </li>
`).join('');
