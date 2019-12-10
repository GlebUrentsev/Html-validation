let form = document.querySelector('.form-data');


form.addEventListener('submit', function(event){
    event.preventDefault();
    let formData = new FormData(form);
    let request = new XMLHttpRequest();
    request.open('POST','https://reqres.in/api/users');
    request.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    let obj = {};
    formData.forEach(function(value, key) {
        obj[key] = value;
    });
    let json = JSON.stringify(obj);
    request.send(json);
    console.log(json);
}); 