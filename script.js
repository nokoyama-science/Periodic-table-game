const elements = [
    {symbol:"H", name:"水素"},
    {symbol:"He", name:"ヘリウム"},
    {symbol:"Li", name:"リチウム"},
    {symbol:"Be", name:"ベリリウム"},
    {symbol:"B", name:"ホウ素"},
    {symbol:"C", name:"炭素"},
    {symbol:"N", name:"窒素"},
    {symbol:"O", name:"酸素"},
    {symbol:"F", name:"フッ素"},
    {symbol:"Ne", name:"ネオン"},
    {symbol:"Na", name:"ナトリウム"},
    {symbol:"Mg", name:"マグネシウム"},
    {symbol:"Al", name:"アルミニウム"},
    {symbol:"Si", name:"ケイ素"},
    {symbol:"P", name:"リン"},
    {symbol:"S", name:"硫黄"},
    {symbol:"Cl", name:"塩素"},
    {symbol:"Ar", name:"アルゴン"},
    {symbol:"K", name:"カリウム"},
    {symbol:"Ca", name:"カルシウム"}
];

let score = 0;
let count = 0;
let current;

function nextQuestion(){

    if(count >= 20){
        document.getElementById("message").textContent =
            `終了！スコア：${score}/20`;
        return;
    }

    current = elements[Math.floor(Math.random()*elements.length)];

    let isCorrect = Math.random() < 0.7;

    let displaySymbol = isCorrect
        ? current.symbol
        : elements[Math.floor(Math.random()*elements.length)].symbol;

    document.getElementById("symbol").textContent = displaySymbol;
    document.getElementById("name").textContent = current.name;

    current.isCorrect = (displaySymbol === current.symbol);

    document.getElementById("count").textContent = count + 1;
    document.getElementById("message").textContent = "";
}

function answer(userAnswer){

    if(userAnswer === current.isCorrect){
        score++;
        document.getElementById("message").textContent = "○ 正解！";
        document.getElementById("message").style.color = "#039be5";
    }else{
        document.getElementById("message").textContent = "× 不正解";
        document.getElementById("message").style.color = "#f48fb1";
    }

    document.getElementById("score").textContent = score;

    count++;
    setTimeout(nextQuestion, 500);
}

nextQuestion();
