const API_URL = "http://localhost:3000/"


function getData(){
    fetch(API_URL+"employee")
    .then(res => res.json())
    .then(data => {
        let trhtml = ''
        const employees = data['data'];
        employees.forEach(employee => {
            
            trhtml +='<tr>'
            trhtml +='<td>'+employee['id']+'</td>'
            trhtml +='<td>'+employee['firstname']+'</td>'
            trhtml +='<td>'+employee['lastname']+'</td>'
            trhtml +='<td>'+employee['role']+'</td>'
            trhtml +='<td>'+employee['salary']+'</td>'
            trhtml +='<td><a class="btn btn-warning" href="editEmployee.html?id='+employee['id']+'">Edit</a></td>';
            trhtml +='<td><button class="btn btn-danger" onclick = "doDelete('+employee['id']+')">Delete</button></td>';

            trhtml +='</tr>'
        } )
        document.querySelector('#myTable').innerHTML = trhtml
    } )
}

// AJAX
// function getData2(){
//     const xhttp = new XMLHttpRequest();
//     xhttp.open('GET',"http://localhost:3000/employee",true);
//     xhttp.onreadystatechange = () => {
//         if(xhttp.readyState === 4 && xhttp.status === 200){
//             let objects = JSON.parse(xhttp.responseText);
//             console.log(objects['data']);
            
//         }
//     };
//     xhttp.send();
// }

getData()

//delete
async function doDelete(id){
    console.log(id)
    await fetch(API_URL + 'employee/' , {
        method : 'DELETE',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify({'id':id})
    })
    getData()
}
