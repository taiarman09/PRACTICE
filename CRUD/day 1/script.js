// let name = document.getElementById("name");
// let marks = document.getElementById("marks");
// let search = document.getElementById("search");

// let users = JSON.parse(localStorage.getItem("users")) || [];


// function showdata() {
//     let tbody = document.querySelector("table tbody");
//     tbody.innerHTML = `
//         <tr>
//             <th>id</th>
//                             <th>Name</th>
//                             <th>age</th>
//                             <th>work</th>
//                             <th>Action</th>
//         </tr>
//     `

//     users.forEach((user, index) => {
//         tbody.innerHTML += `
//         <tr>
//             <td>${user.name}</td>
//             <td>${user.marks}</td>
//             <td class="d-flex">
//                 <button onclick="update(${index})">Update</button>
//                 <button onclick="deleteData(${index})">Delete</button>
//             </td>
//         </tr>
//         `
//     })
// }

// search.addEventListener("click", () => {
//     let n = name.value;
//     let m = marks.value;

//     if (n === "" || m === "") {
//         alert("Please fill all details");
//         return;
//     }

//     if (editindex !== null) {
//         users[editindex].name = n;
//         users[editindex].marks = m;
//         editindex = null;
//         search.textContent = "add"
//     }
//     else {
//         users.push({
//             name: n,
//             marks: m
//         })
//     }



//     localStorage.setItem("users", JSON.stringify(users));
//     name.value = "";
//     marks.value = "";

//     showdata()
// })

// function deleteData(index) {
//     users.splice(index, 1);
//     localStorage.setItem("users", JSON.stringify(users));
//     showdata();
// }

// let editindex = null;

// function update(index) {


//     name.value = users[index].name;
//     marks.value = users[index].marks;

//     editindex = index

//     search.textContent = "save"
// }

// showdata()







let name = document.getElementById("name");
let age = document.getElementById("age");
let work = document.getElementById("work");
let addbtn = document.getElementById("addbtn");

let users = JSON.parse(localStorage.getItem("users")) || [];
let edit = null

function showData() {
    let tbody = document.querySelector("table tbody");
    tbody.innerHTML = `
        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>age</th>
                            <th>work</th>
                            <th>Action</th>
                        </tr>
    `

    users.forEach((user, index) => {
        tbody.innerHTML += `
            <tr>
                <td>${user.id || index + 1}</td>
                <td>${user.name}</td>
                <td>${user.age}</td>
                <td>${user.work}</td>
                <td class="flex1">
                        <button class="btn" onclick="update(${index})">Update</button>
                        <button class="btn" onclick="deleteData(${index})">delete</button>
                </td>
            </tr>
        `
    })
}

addbtn.addEventListener("click", (e) => {
    let empname = name.value;
    let empage = age.value;
    let empwork = work.value;

    if (empname === "" || empage === "" || empwork === "") {
        alert("Please fill all details");
        return;
    }

    if (edit !== null) {
        users[edit].name = empname;
        users[edit].age = empage;
        users[edit].work = empwork;

        edit = null
        addbtn.innerHTML = "Save"
    }
    else {
        users.push({
            name: empname,
            age: empage,
            work: empwork
        })
    }

    localStorage.setItem("users", JSON.stringify(users));

    name.value = ""
    age.value = ""
    work.value = ""

    showData()
})

function update(index){
    name.value=users[index].name;
    age.value=users[index].age;
    work.value=users[index].work;

    edit=index;

    addbtn.innerHTML="Save"

}

function deleteData(index){
        users.splice(index, 1);
        localStorage.setItem("users", JSON.stringify(users))
        showData()
}



showData()