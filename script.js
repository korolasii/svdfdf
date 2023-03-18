let conteiner1 = document.getElementById('conteiner1'),
btn1 = document.getElementById('btn1'),
answer1 = document.getElementById('answer1_3'),
conteiner2 = document.getElementById('conteiner2'),
btn2 =  document.getElementById('btn2'),
answer2 = document.getElementById('answer2_2'),
conteiner3 = document.getElementById('conteiner3'),
btn3 =  document.getElementById('btn3'),
answer3 = document.getElementById('answer3_4'),
conteiner4 = document.getElementById('conteiner4'),
btn4 =  document.getElementById('btn4'),
answer4 = document.getElementById('answer4_1'),
conteiner5 = document.getElementById('conteiner5'),
answermaksdont = document.getElementById('answer4_4'),
conteiner6 = document.getElementById('conteiner6'),
btnOk = document.getElementById('ok'),
btnYes = document.getElementById('yes'),
btnNo = document.getElementById('no'),
conteiner7 = document.getElementById('conteiner7');


btn1.addEventListener('click', quastion1)
answer1.addEventListener('click', answerFor1)
btn2.addEventListener('click', quastion2)
answer2.addEventListener('click', answerFor2)
btn3.addEventListener('click', quastion3)
answer3.addEventListener('click', answerFor3)
btn4.addEventListener('click', quastion4)
answer4.addEventListener('click', answerFor4)
answermaksdont.addEventListener('click', answerForanswermaksdont)
btnOk.addEventListener('click', btnok)
btnYes.addEventListener('click', btnyes)
btnNo.addEventListener('click', btnno)

function quastion1(){
    if (answer1.classList.contains('checed')){
        $('.conteiner1').css('display', 'none');
        $('.conteiner2').css('display', 'block');
        $(answer1).removeClass('checed');
    }
}

function answerFor1(){
    $(answer1).addClass('checed');
}

function quastion2(){
    if (answer2.classList.contains('checed')){
        $('.conteiner2').css('display', 'none');
        $('.conteiner3').css('display', 'block');
        $(answer2).removeClass('checed');
    }
}

function answerFor2(){
    $(answer2).addClass('checed');
}

function quastion3(){
    if (answer3.classList.contains('checed')){
        $('.conteiner3').css('display', 'none');
        $('.conteiner4').css('display', 'block');
        $(answer3).removeClass('checed');
    }
}

function answerFor3(){
    $(answer3).addClass('checed');
}

function quastion4(){
    if (answer4.classList.contains('checed')){
        $('.conteiner4').css('display', 'none');
        $('.conteiner5').css('display', 'block');
        $(answer4).removeClass('checed');
    }
}

function answerFor4(){
    $(answer4).addClass('checed');
}

function answerForanswermaksdont(){
    $('.conteiner6').css('display', 'block');
}

function btnok(){
    $('.conteiner6').css('display', 'none');
    $('.conteiner1').css('display', 'block');
    $('.conteiner4').css('display', 'none');
}

function btnyes(){
    $('.conteiner7').css('display', 'block');
    $('.conteiner5').css('display', 'none');
    $('.page').css('background', '#00ff31');
}

function btnno(){
    $('.conteiner6').css('display', 'block');
    $('.conteiner5').css('display', 'none');
    $('.conteiner1').css('display', 'block');
}