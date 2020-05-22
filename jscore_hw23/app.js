const BTN = document.getElementById('button');

BTN.onclick = () => {
    dayOfWeekAfterTwentyYears()
};

BTN.onmousedown = () => {
    BTN.classList.remove('shadow')
};

BTN.onmouseup = () => {
    BTN.classList.add('shadow')
};

setInterval(()=>{
        let dayToView = moment()
        let hour = dayToView.get('hour');
        let minute = dayToView.get('minute');
        let second = dayToView.get('second');
        document.getElementById('currentTime').textContent = `${hour}:${minute}:${second}`
},1000);

const dayOfWeekAfterTwentyYears = () => {
    let inputValue = document.getElementById('dateOfBirth').value;
    let rules = [
        'DD MM YYYY',
        'DD-MM-YYYY',
        'DDMMYYYY',
        'DD,MM,YYYY',
        'YYYY MM DD',
        'YYYY-MM-DD',
        'YYYYMMDD',
        'YYYY,MM,DD'
    ];
    let dateOfBirth = moment(inputValue, rules);
    if (dateOfBirth.isValid()) {
        dateOfBirth.set('year', dateOfBirth.get('year') + 20);
        document.getElementById('displayParagraph').textContent = `Day of week will be ${dateOfBirth.format('dddd')}`
    } else {
        document.getElementById('displayParagraph').textContent = 'Please enter correct date.'
    }    
}