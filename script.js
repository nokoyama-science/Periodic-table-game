// ==========================================
// 元素○×チャレンジ
// script.js
// ==========================================

// ---------- 元素データ ----------

const elements = [

    {name:"水素",symbol:"H"},
    {name:"ヘリウム",symbol:"He"},
    {name:"リチウム",symbol:"Li"},
    {name:"ベリリウム",symbol:"Be"},
    {name:"ホウ素",symbol:"B"},
    {name:"炭素",symbol:"C"},
    {name:"窒素",symbol:"N"},
    {name:"酸素",symbol:"O"},
    {name:"フッ素",symbol:"F"},
    {name:"ネオン",symbol:"Ne"},
    {name:"ナトリウム",symbol:"Na"},
    {name:"マグネシウム",symbol:"Mg"},
    {name:"アルミニウム",symbol:"Al"},
    {name:"ケイ素",symbol:"Si"},
    {name:"リン",symbol:"P"},
    {name:"硫黄",symbol:"S"},
    {name:"塩素",symbol:"Cl"},
    {name:"アルゴン",symbol:"Ar"},
    {name:"カリウム",symbol:"K"},
    {name:"カルシウム",symbol:"Ca"}

];

// ---------- 設定 ----------

const TOTAL = 20;

let score = 0;
let count = 0;

let correctAnswer = true;

// ---------- HTML ----------

const questionNumber = document.getElementById("questionNumber");
const scoreText = document.getElementById("score");
const question = document.getElementById("question");
const message = document.getElementById("message");

const trueButton = document.getElementById("trueButton");
const falseButton = document.getElementById("falseButton");

// ---------- ボタン ----------

trueButton.addEventListener("click",function(){

    judge(true);

});

falseButton.addEventListener("click",function(){

    judge(false);

});

// ---------- 最初の問題 ----------

nextQuestion();

// ---------- 問題 ----------

function nextQuestion(){

    if(count>=TOTAL){

        finishGame();

        return;

    }

    message.textContent="";

    questionNumber.textContent=
    `問題 ${count+1} / ${TOTAL}`;

    // 元素を選ぶ

    const element=
    elements[Math.floor(Math.random()*elements.length)];

    // 本当か嘘か

    correctAnswer=
    Math.random()<0.5;

    let symbol;

    if(correctAnswer){

        symbol=element.symbol;

    }

    else{

        do{

            symbol=
            elements[Math.floor(Math.random()*elements.length)].symbol;

        }

        while(symbol===element.symbol);

    }

    question.innerHTML=

    `${element.name}の元素記号は

    <br><br>

    <span class="bigText">${symbol}</span>

    <br><br>

    である。`;

}

// ---------- 判定 ----------

function judge(choice){

    if(choice===correctAnswer){

        score++;

        message.style.color="green";

        message.textContent="⭕ 正解！";

    }

    else{

        message.style.color="red";

        message.textContent="❌ 不正解！";

    }

    count++;

    scoreText.textContent=
    `得点：${score}`;

    setTimeout(nextQuestion,1000);

}

// ---------- 終了 ----------

function finishGame(){

    const percent=
    Math.round(score/TOTAL*100);

    let rank="";

    if(percent>=95){

        rank="🏆 Sランク";

    }

    else if(percent>=80){

        rank="🥇 Aランク";

    }

    else if(percent>=60){

        rank="🥈 Bランク";

    }

    else if(percent>=40){

        rank="🥉 Cランク";

    }

    else{

        rank="📖 もう一度挑戦！";

    }

    document.querySelector(".container").innerHTML=

    `

    <h1>🎉 終了！</h1>

    <h2>${score} / ${TOTAL} 点</h2>

    <h2>正答率 ${percent}%</h2>

    <h1>${rank}</h1>

    <br>

    <button onclick="location.reload()">

    もう一度遊ぶ

    </button>

    `;

}
