const imageContainer = document.getElementById('image-container');
const details = document.getElementById('details');
const url = 'https://random-data-api.com/api/v2/users?response_type=json'
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const image = document.getElementById('image');
const email = document.getElementById('email');
const userName = document.getElementById('userName');
const getBtn = document.querySelector('.get-random-user-btn');

let getUser = () => {
    //    fetch(url).then(resp => resp.json()).then(data => console.log(data.first_name,data.last_name))
    //    fetch(url).then(resp => resp.json()).then(data => console.log(data))
    fetch(url).then(resp => resp.json()).then(data => {



        userName.innerText = data.username;
        image.src = data.avatar;
        firstName.innerHTML = data.first_name;
        lastName.innerHTML = data.last_name;
        email.innerText = data.email;


    })
}
getUser(url)

getBtn.addEventListener('click', getUser)
