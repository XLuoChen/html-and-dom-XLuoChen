$(document).ready(function () {
    $('#submit').click(function () {
        printGrade();
    });
});

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
    if($('#class').val() && $('#sno').val() && $('#name').val()){
        return true;
    }
    else{
        return false;
    }
}

function caculateFillBlankGrade() {
    var fillBlankGrade = 0;

    if($('#fillOne').val() === '统一建模语言'){
        fillBlankGrade += 1;
    }
    if($('#fillTwo').val() === '封装性'){
        fillBlankGrade += 1;
    }
    if($('#fillThree').val() === '继承性'){
        fillBlankGrade += 1;
    }
    if($('#fillFour').val() === '多态性'){
        fillBlankGrade += 1;
    }

    return fillBlankGrade;
}

function caculateSingleChoiceGrade() {
    var singleChoiceGrade = 0;

    if($('#no1correctAnswer').attr('checked')){
        singleChoiceGrade += 2;
    }
    if($('#no2correctAnswer').attr('checked')){
        singleChoiceGrade += 2;
    }

    return singleChoiceGrade;
}

function caculateMultipleChoice1Grade() {
    var mutipletChioce1Grade = 0;

    if($('#falseAnswer1').attr('checked')){
        mutipletChioce1Grade = 0;
    }
    else if($('#mutipleOne_1').attr('checked') &&
        $('#mutipleOne_2').attr('checked') &&
        $('#mutipleOne_3').attr('checked')){

        mutipletChioce1Grade = 2;
    }
    else if($('#mutipleOne_1').attr('checked') ||
        $('#mutipleOne_2').attr('checked') ||
        $('#mutipleOne_3').attr('checked')){

        mutipletChioce1Grade = 1;
    }
    
    return mutipletChioce1Grade;
}

function caculateMultipleChoice2Grade() {
    var mutipletChioce2Grade = 0;

    if($('#falseAnswer2').attr('checked')){
        mutipletChioce2Grade = 0;
    }
    else if($('#mutipleTwo_1').attr('checked') &&
        $('#mutipleTwo_2').attr('checked') &&
        $('#mutipleTwo_3').attr('checked')){

        mutipletChioce2Grade = 2;
    }
    else if($('#mutipleTwo_1').attr('checked') ||
        $('#mutipleTwo_2').attr('checked') ||
        $('#mutipleTwo_3').attr('checked')){
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

    if($('#correctAnswer1').attr('checked')){
        judgmentGrade += 2;
    }
    if($('#correctAnswer2').attr('checked')){
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
    var shortTextGrade = caculateShortAnswer();

    totalGrade += fillBlankGrade + singleChoiceGrade + multipleChoiceGrade + judgmentGrade + shortTextGrade;

    return totalGrade;
}

function caculateShortAnswer() {
    var shortAnswerGrade = 0;
    var correctAnswer = '模型是为了理解事物而对事物做出的一种抽象。是对事物规范化的、无歧义描述的一种工具';

    if($('#shortText').val() === correctAnswer){
        shortAnswerGrade += 5;
    }

    return shortAnswerGrade
}

function setGrade(totalGrade) {
    var grade = $('#得分');
    grade.val(totalGrade);
    grade.css({
        'color':'red',
        'font-size':'30px',
});
    $('#submit').attr('disabled',true);
}