window.onload = function() {
    var button = document.getElementById("submit");

    button.onclick = function () {
        printGrade();
    }
};

function printGrade() {
    if(hasSignedStudnetInfo()) {
        var totalGrade = buildtotalGrade();
        setGrade(totalGrade);
    }
    else{
        alert('您的信息尚未补全哦，请补全后提交！');
    }
}

function returnElementById(id) {
    return document.getElementById(id);
}

function hasSignedStudnetInfo() {
    if(returnElementById('class').value && returnElementById('sno').value && returnElementById('name').value){
        return true;
    }
    else{
        return false;
    }
}

function caculateFillBlankGrade() {
    var fillBlankGrade = 0;

    if(returnElementById('fillOne').value === '统一建模语言'){
        fillBlankGrade += 1;
    }
    if(returnElementById('fillTwo').value === '封装性'){
        fillBlankGrade += 1;
    }
    if(returnElementById('fillThree').value === '继承性'){
        fillBlankGrade += 1;
    }
    if(returnElementById('fillFour').value === '多态性'){
        fillBlankGrade += 1;
    }

    return fillBlankGrade;
}

function caculateSingleChoiceGrade() {
    var singleChoiceGrade = 0;

    if(returnElementById('no1correctAnswer').checked === true){
        singleChoiceGrade += 2;
    }
    if(returnElementById('no2correctAnswer').checked === true){
        singleChoiceGrade += 2;
    }

    return singleChoiceGrade;
}

function caculateMultipleChoice1Grade() {
    var mutipletChioce1Grade = 0;

     if(returnElementById('mutipleOne_1').checked &&
        returnElementById('mutipleOne_2').checked &&
        returnElementById('mutipleOne_3').checked){

        mutipletChioce1Grade = 2;
    }
    else if(returnElementById('falseAnswer1').checked){
        mutipletChioce1Grade = 0;
    }
    else if(returnElementById('mutipleOne_1').checked ||
        returnElementById('mutipleOne_2').checked ||
        returnElementById('mutipleOne_3').checked){

        mutipletChioce1Grade = 1;
    }


    return mutipletChioce1Grade;
}

function caculateMultipleChoice2Grade() {
    var mutipletChioce2Grade = 0;

    if(returnElementById('mutipleTwo_1').checked &&
        returnElementById('mutipleTwo_2').checked &&
        returnElementById('mutipleTwo_3').checked){

        mutipletChioce2Grade = 2;
    }
    else if(returnElementById('falseAnswer2').checked){
        mutipletChioce2Grade = 0;
    }
    else if(returnElementById('mutipleTwo_1').checked ||
        returnElementById('mutipleTwo_2').checked ||
        returnElementById('mutipleTwo_3').checked){
        mutipletChioce2Grade = 1;
    }


    return mutipletChioce2Grade;
}

function caculateMultipleChoiceGrade() {
    var mutipletChioce1Grade = caculateMultipleChoice1Grade();
    var mutipletChioce2Grade = caculateMultipleChoice2Grade();

    return mutipletChioce1Grade + mutipletChioce2Grade;
}

function caculateJudgmentGrade() {
    var judgmentGrade = 0;

    if(returnElementById('correctAnswer1').checked === true){
        judgmentGrade += 2;
    }
    if(returnElementById('correctAnswer2').checked === true){
        judgmentGrade += 2;
    }

    return judgmentGrade;
}

function buildtotalGrade() {
    var totalGrade = 0;

    var fillBlankGrade = caculateFillBlankGrade();
    var singleChoiceGrade = caculateSingleChoiceGrade();
    var multipleChoiceGrade = caculateMultipleChoiceGrade();
    var judgmentGrade = caculateJudgmentGrade();

    totalGrade += fillBlankGrade + singleChoiceGrade + multipleChoiceGrade + judgmentGrade;

    return totalGrade;
}

function setGrade(totalGrade) {
    returnElementById('得分').style = 'color:red;font-size:25px';
    returnElementById('得分').value = totalGrade;
}