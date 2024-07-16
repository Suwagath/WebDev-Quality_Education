const questions_array = ["What is your first name? ",
                         "What is your last name? ",
                         "What is your age? ",
                         "What is your contact no.? ",
                         "Do you have any additional degrees? ",
                         "Name of your institution ",
                         "What is your highest education level? ",
                         "Are you a school/university student? ",
                         "What are your skills? ",
                         "What are your hobbies? ",
                         "What is your favourite subject? ",
                         "What are your career goals? ",
                        ]

let index = 0;
let profile = [];
let x = 0;
let category = ["Personal Details", "Qualification", "Preferrences"];
let y;

function displayQuestions(index){
    document.getElementById("customPrompt").style.display = "block";

    if(index<4){
        x = 0;
    }
    else if(index<8){
        x = 1;    
    }
    else{
        x = 2;
    }

    y = category[x];
    
    document.getElementById("step").innerHTML = `Step ${x +1}/3 - ${y}`;
    document.getElementById("question").textContent = questions_array[index];
    
    
    if(profile[index]!=null){
        document.getElementById("answer").value = profile[index];
    }else{
        document.getElementById("answer").value = "";
    }
}

function updateProfile(){
    profile[index] = document.getElementById("answer").value;
}

function diplayDetails(){
    if(profile[index]!=null && profile[index]!=""){
        const infoElement = document.createElement("div");
        infoElement.innerHTML = `${questions_array[index]} ${profile[index]}`;
        document.getElementById("profileInformation").appendChild(infoElement);
    }
}

function showStatus(){
    let filled = 0;
    for(let i = 0; i < profile.length; i++){
        if(profile[i] != null && profile[i] != ""){
            filled++;
        }
    }
    const progress = ((filled/questions_array.length) * 100).toFixed(0);
    document.getElementById("status").innerHTML = `${progress}%`;
}

function closePrompt(){
    document.getElementById("customPrompt").style.display = "none";
}

function previous(){
    if(0<index){
        index--;
        displayQuestions(index);
    }
}

function validateInput(){
    let valid = document.getElementById("answer").value;
    
    if(valid===''){
        alert("Use skip button to proceed to next question");
    }
    else if(index==0 || index==1){
        if(!valid.match(/^[a-zA-Z\s]+$/)){
            alert("Name should be alphabets only.");
            displayQuestions(index);
        }
    }
    else if(index===2){
        if(!valid.match(/^\d+$/) || parseInt(valid)<0 || parseInt(valid)>150){
            alert("Invalid Age.");
            displayQuestions(index);
        }
    }
    else if(index===3){
        if(!valid.match(/^\d+$/) || parseInt(valid)<0){
            alert("Invalid Contact Number.");
            displayQuestions(index);
        }
    }
    else{
        if(!valid.match(/^[a-zA-Z/s]+$/)){
            alert("Invalid Input");
            displayQuestions(index);
        }
    }  
}

function next(){
    validateInput();
    updateProfile();
        
    let input = document.getElementById("answer").value;
    if(input !== ''){
        diplayDetails();
        showStatus();
        index++;
        if(index<questions_array.length){
            displayQuestions(index);
        }else{
            alert("All prompts completed.");
            closePrompt();
        }
    }
}

function skip(){
    if(index < questions_array.length-1){
        index++;
        displayQuestions(index);
    }else{
        alert("End of question prompts.");
        closePrompt();
    }
}

function start(){
    displayQuestions(index);
}

