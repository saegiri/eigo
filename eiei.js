// import "data_level1.js";
let verb_level1 = ["learn","find"];
let verbs = [verb_level1]
let v1_descriptions = {
    "learn": ["to gain knowledge","to find out information"],
    "find": ["to discover,see or get something","to discover something by chance"],
};
let v_descriptions = [v1_descriptions];

let qword = document.querySelector("#qword");
let question_num = 0;
let q_words = word_level1_verb;
let correct_num = 0;



// 品詞を設定する
let hinshis = document.querySelectorAll(".hinshi");
for (let i = 0; i < hinshis.length; i++){
    hinshis[i].addEventListener("click",function(){
        for (let j = 0; j < hinshis.length; j++){
            hinshis[j].classList.remove("checked");
        }
        hinshis[i].classList.add("checked");
        if (hinshis[i].classList.contains('checked')){
            if (i == 0){
                hin = "verb";
            } else if (i == 1){
                hin = "noun";
            }
        }
    });
}

// レベルを設定する
let levels = document.querySelectorAll(".level");
for (let i = 0; i < levels.length; i++){
    levels[i].addEventListener("click",function(){
        for (let j = 0; j < levels.length; j++){
            levels[j].classList.remove("checked");
        }
        levels[i].classList.add("checked");
        if (levels[i].classList.contains("checked")){
            level = i;
        }
    });
}

let ans_num;
// スタートボタンを押したときの動作
let start_btn = document.querySelector(".start");
let start_func = function(){
    let qword = document.querySelector("#qword");
    if (hin === "verb"){
        q_words = verbs[level];
        thetho = thethourus_verb[level];
    } else if (hin === "noun"){
        q_words = nouns[level];
        thetho = thethourus_noun[level];
    }
    qword.textContent = q_words[question_num];
    let select = document.querySelectorAll(".select");
    let randNum = Math.floor(Math.random()*4);
    ans_num = randNum;
    for (let i = 0; i < select.length; i++){
        if (i == randNum){
            let randNum2 = Math.floor(Math.random()*4);
            select[i].textContent = thetho[qword.textContent][randNum2];
        } else {
            select[i].textContent = thetho[qword.textContent][i+4];
        }
    }
    start_btn.disabled = true;
    start_btn.style.backgroundColor = "grey";
    let now_hin = document.querySelector(".now_hin");
    let now_level = document.querySelector(".now_level");
    let now_q_num = document.querySelector(".now_q_num");
    now_hin.textContent = "品詞: " + hin;
    now_level.textContent =　"レベル: " + (level + 1);
    now_q_num.textContent =　"第" + (question_num+1) + "問";
}

start_btn.addEventListener("click",function(){
    start_func();
});