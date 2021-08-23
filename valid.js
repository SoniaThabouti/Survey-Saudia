	//Validtion Code For Inputs

    var choice1 = document.forms['form']['choice1'];
    var choice2 = document.forms['form']['choice2'];
    var choice3 = document.forms['form']['choice3'];
    
    var choice1_error = document.getElementById('choice1_error');
    var choice2_error = document.getElementById('choice2_error');
    var choice3_error = document.getElementById('choice3_error');
    
    choice1.addEventListener('textInput', choice1_Verify);
    choice2.addEventListener('textInput', choice2_Verify);
    choice3.addEventListener('textInput', choice3_Verify);
    
    function validated(){
        if (choice1.value.length ==0) {
            choice1.style.border = "1px solid red";
            choice1_error.style.display = "block";
            choice1.focus();
            return false;
        }
        if (choice2.value.length ==0) {
            choice2.style.border = "1px solid red";
            choice2_error.style.display = "block";
            choice2.focus();
            return false;
        }
        if (choice3.value.length ==0) {
            choice3.style.border = "1px solid red";
            choice3_error.style.display = "block";
            choice3.focus();
            return false;
        }
    
    }
    function choice1_Verify(){
        if (choice1.value.length >0) {
            choice1.style.border = "1px solid silver";
            choice1_error.style.display = "none";
            return true;
        }
    }
    function choice2_Verify(){
        if (choice2.value.length >0) {
            choice2.style.border = "1px solid silver";
            choice2_error.style.display = "none";
            return true;
        }
    }
    function choice3_Verify(){
        if (choice3.value.length >0) {
            choice3.style.border = "1px solid silver";
            choice3_error.style.display = "none";
            return true;
        }
    }