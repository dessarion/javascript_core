let sendDataByGetMethod = function () {

    let userFirstName = document.getElementById('firstName').value;
    let userLastName = document.getElementById('lastName').value;

    let url = '/user-data?firstName=' + userFirstName + '&lastName=' + userLastName;

    sendDataByGetMethodCall(url).then(function (response) {
        console.log(response);
        alert(response);
    }, function (error) {
        alert(error)
    })
};

let sendDataByGetMethodCall = function (url) {
    return new Promise(
        function (resolve, reject) {

            let xhr = new XMLHttpRequest;
            xhr.open('GET', url);

            xhr.onload = function () {
                if (this.status == 200) {
                    resolve(this.response);
                } else {
                    let error = new Error(this.statusText);
                    error.code = this.status;
                    reject(error)
                }
            };

            xhr.onerror = function () {
                reject(new Error('Network Error'))
            };

            xhr.send();

        })
}