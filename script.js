body{
    margin:0;
    padding:6px;
    background:#e8f4ff;
    font-family:"Yu Gothic","Hiragino Sans","Meiryo",sans-serif;
}

.container{
    max-width:700px;
    margin:auto;
    background:white;
    border-radius:16px;
    padding:10px;
    text-align:center;
    box-shadow:0 4px 12px rgba(0,0,0,0.12);
}

h1{
    margin:4px 0 6px 0;
    font-size:26px;
    color:#0066cc;
}

.top-bar{
    display:flex;
    justify-content:space-between;
    font-size:18px;
    font-weight:bold;
    margin-bottom:6px;
}

.question-title{
    font-size:18px;
    margin-bottom:4px;
    color:#444;
}

.question{
    margin:8px 0;
}

.bigText{
    font-size:44px;
    font-weight:bold;
    color:#0066cc;
}

#name{
    font-size:20px;
    color:#333;
}

.buttonArea{
    display:flex;
    justify-content:center;
    gap:16px;
    margin:10px 0;
}

button{
    width:150px;
    height:70px;
    border:none;
    border-radius:14px;
    cursor:pointer;
    font-size:26px;
    font-weight:bold;
    color:white;
    transition:0.15s;
}

button:hover{
    transform:scale(1.04);
}

button:active{
    transform:scale(0.98);
}

/* 👇 色覚配慮：赤緑をやめる */

.trueButton{
    background:#1e88e5; /* 青 */
}

.trueButton:hover{
    background:#1565c0;
}

.falseButton{
    background:#ff8f00; /* オレンジ */
}

.falseButton:hover{
    background:#e65100;
}

#message{
    min-height:28px;
    margin-top:6px;
    font-size:22px;
    font-weight:bold;
}

.footer{
    margin-top:4px;
    font-size:13px;
    color:#666;
}

/* スマホ */
@media(max-width:700px){

h1{
    font-size:22px;
}

.bigText{
    font-size:38px;
}

button{
    width:200px;
    height:64px;
    font-size:24px;
}

.buttonArea{
    flex-direction:column;
    align-items:center;
}
}
