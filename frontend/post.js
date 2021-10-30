const API_URL = "http://localhost:3000/"

const submit = document.querySelector('#submit')

submit.addEventListener('click', ()=>{
    const fname = document.querySelector('#fname').value ;
    const lname = document.querySelector('#lname').value ;
    const role = document.querySelector('#role').value ;
    const salary = document.querySelector('#salary').value ;

    const data = JSON.stringify({
        'fname' : fname,
        'lname' : lname,
        'role' : role,
        'salary' : salary
    })

    postData(data);
});

async function postData(data){
    await fetch(API_URL+'employee/' , {
        method : 'POST',
        headers : {
            'Content-Type': 'application/json'
        },
        body : data 
    }).then( res => console.log(res))
    window.location.href = 'index.html'
}