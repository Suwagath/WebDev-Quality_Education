const questions_array = ["What is your first name? ",
                         "What is your last name? ",
                         "What is your age? ",
                         "What is your contact no.? ",
                         "What is your gender? ",
                         "Name of your institution? ",
                         "What is your education level? ",
                         "Are you a school/university student? ",
                         "What are your hobbies? ",
                         "What are your skills? ",
                         "What is your favourite subject? ",
                         "What are your career goals? ",
                        ]

let index = 0;
let profile = [];

function displayQuestions(index){
    document.getElementById("customPrompt").style.display = "block";
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

function next(){
    updateProfile();
    
    let input = document.getElementById("answer").value;
    if(input !== ''){
        diplayDetails();
        showStatus();
        index++;
        if(index<questions_array.length){
            displayQuestions(index);
        }else{
            closePrompt();
        }
    } 
}

function skip(){
    if(index < questions_array.length-1){
        index++;
        displayQuestions(index);
    }else{
        closePrompt();
    }
}

function start(){
    displayQuestions(index);
}

