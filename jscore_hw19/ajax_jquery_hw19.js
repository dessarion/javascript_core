$(document).ready(() => {
    const ageArea = document.getElementById('getAgeValue')
    let getMethod = () => {
        let userName = document.getElementById('getNameValue').value;
        let userSurname = document.getElementById('getSurnameValue').value;
        let userAge = document.getElementById('getAgeValue').value;
        let userAdress = document.getElementById('getAdressValue').value;        
        if (userAge > 100 || userAge < 1) {
            $('#getAgeValue').focus();
            ageArea.classList.add('err'); 
            $('#serverData').html(`<h2>Age is out of area</h2>`)           
        } else {
            if (ageArea.className === 'err') {
                ageArea.classList.remove('err');
                $('#serverData').html(`<h2></h2>`)
            };
            $.get(`/userGet?userName=${userName}&userSurname=${userSurname}&userAge=${userAge}&userAdress=${userAdress}`,
                (data) => {
                    $('#serverData').html(`<h2>${data}</h2>`);                    
                    console.log('Data loaded by get method');
                });
        }
    };
    let postMethod = () => {
        let userName = document.getElementById('getNameValue').value;
        let userSurname = document.getElementById('getSurnameValue').value;
        let userAge = document.getElementById('getAgeValue').value;
        let userAdress = document.getElementById('getAdressValue').value;
        if (userAge > 100 || userAge < 1) {
            $('#getAgeValue').focus();
            ageArea.classList.add('err');
            $('#serverData').html(`<h2>Age is out of area</h2>`)
        } else {
            if (ageArea.className === 'err') {
                ageArea.classList.remove('err');
                $('#serverData').html(`<h2></h2>`)
            };
            $.post('/userPost', {
                name: userName,
                surname: userSurname,
                age: userAge,
                adress: userAdress
            }).done((data) => {
                let obj = data
                $('#serverData').html(`<h2>${obj}</h2>`)
            });
            console.log('Data loaded by post method')
        };
    }

    $('#getMethod').click(getMethod);
    $('#postMethod').click(postMethod)
});
