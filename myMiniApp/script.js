function signApp() {
    let signButton = document.querySelector('.button');
    let divForm = document.querySelector('.form')
    let show = document.querySelector('.show');
    signButton.addEventListener('click', function() {
        signButton.classList.add('remove__display');
        divForm.classList.remove('remove__display')
    });
    let form = document.querySelector('.data');
    let newObj;
    form.addEventListener('submit', e => {
        e.preventDefault();
        newObj = createYouData();
        divForm.classList.add('remove__display');
        show.classList.remove('remove__display')
        createList(newObj);

    })
    let showButton = document.querySelector('.show__button');
    let yes = document.querySelector('.yes');
    let no = document.querySelector('.no');
    showButton.addEventListener('click', function() {
        show.classList.add('remove__display');
        let condition = checkPAssword(newObj);
        if (condition) {
            yes.classList.remove('remove__display');
        } else {
            no.classList.remove('remove__display');
        }
    });
}

let checkPAssword = (obj) => {
    if (obj.name == 'mamadommaa@gmail.com' && obj.age == 12345) {
        return true
    } else {
        return false
    }
}

let createYouData = () => {

    let name = document.querySelector('.data__name');
    let age = document.querySelector('.data__age');
    let newObject = {};
    newObject.name = name.value;
    newObject.age = age.value;
    return newObject
}

let createList = (obj) => {
    let values = Object.values(obj);
    let liFamily = document.querySelectorAll('.show__li');
    let texts = ['mail', 'password'];
    i = 0;
    for (i; i < liFamily.length; i++) {
        liFamily[i].textContent = texts[i] + ': ' + values[i];
    }
}


signApp()