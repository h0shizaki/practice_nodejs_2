const API_URL = "http://localhost:3000/"

const string_url = window.location.href;
const url = new URL(string_url);
const id = url.searchParams.get('id')



//getData by id

function getData(id){
    fetch(API_URL+'employee/'+id)
    .then(res => res.json())
    .then(data=>{
        const employee = data['data'][0]
        document.querySelector('#fname').value = employee['firstname']
        document.querySelector('#lname').value = employee['lastname']
        document.querySelector('#role').value = employee['role']
        document.querySelector('#salary').value = employee['salary']

    })
}

getData(id)

//put data
const edit = document.querySelector('#edit')

edit.addEventListener('click', ()=>{
    const data = JSON.stringify({
        'id': id,
        'fname' : document.querySelector('#fname').value,
        'lname' : document.querySelector('#lname').value,
        'role' : document.querySelector('#role').value,
        'salary' : document.querySelector('#salary').value
    })

    console.log(data)
    doPut(data)

})

async function doPut(data){
    await fetch(API_URL+'employee/' , {
        method: 'PUT',
        headers : {'Content-Type': 'application/json'},
        body : data
    })
    .then(res => console.log(res))
    
    window.location.href = 'index.html';
}