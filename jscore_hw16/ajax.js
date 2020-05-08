const BTN = document.getElementById('btn');
const BTN1 = document.getElementById('btn1');

//GET METHOD
BTN.onclick = function(){
    let ageArea = document.getElementById('userAgeGetmethod');
    let ageAreaErrorMessage = document.getElementById('error');
    let userData = {
        userName: document.getElementById('userNameGetmethod').value,
        userSurname: document.getElementById('userSurnameGetmethod').value,
        userAge: document.getElementById('userAgeGetmethod').value,
        userAdress: document.getElementById('userAdressGetmethod').value,
    };
    if(userData.userAge > 100 || userData.userAge < 1){        
        ageArea.classList.add('error');
        ageArea.focus();
        ageAreaErrorMessage.innerHTML = 'Wrong age! \n Age must be between 1 and 100';
    }else{
        if(ageArea.className === 'error'){
            ageArea.classList.remove('error');
            ageAreaErrorMessage.innerHTML = ''
        };
        for(i in userData){
            userData[i] = `${userData[i]} ValidatedByGET`
        };
    const xhr = new XMLHttpRequest();
    xhr.open('GET','/userGet?userName=' + userData.userName + '&userSurname=' + userData.userSurname + '&userAge=' + userData.userAge + '&userAdress=' + userData.userAdress);

    xhr.setRequestHeader('Content-type','application/json');
    xhr.send();    
}
};
//END of GET METHOD

// -----

//POST METHOD
BTN1.onclick = function(){
  let ageArea = document.getElementById('userAgePostmethod');
    let ageAreaErrorMessage = document.getElementById('error1');
    let userData = {
        userName: document.getElementById('userNamePostmethod').value,
        userSurname: document.getElementById('userSurnamePostmethod').value,
        userAge: document.getElementById('userAgePostmethod').value,
        userAdress: document.getElementById('userAdressPostmethod').value,
    };
    if(userData.userAge > 100 || userData.userAge < 1){        
        ageArea.classList.add('error');
        ageArea.focus();
        ageAreaErrorMessage.innerHTML = 'Wrong age! \n Age must be between 1 and 100';
    }else{
        if(ageArea.className === 'error'){
            ageArea.classList.remove('error');
            ageAreaErrorMessage.innerHTML = ''
        };
        for(i in userData){
            userData[i] = `${userData[i]} ValidatedByPost`
        };
    const xhr = new XMLHttpRequest();
    xhr.open('POST','/userPost');

    xhr.setRequestHeader('Content-type','application/json');
    xhr.send(JSON.stringify(userData));
    console.log(userData)  
}
};
//END of POST METHOD


