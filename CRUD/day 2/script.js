// let empName = document.getElementById("empName");
// let empRole = document.getElementById("empRole");
// let empSalary = document.getElementById("empSalary");
// let addBtn = document.getElementById("addBtn");

// let users = JSON.parse(localStorage.getItem("users")) || [];
// let edit = null;

// function showData() {
//     let tbody = document.querySelector("table tbody");
//     tbody.innerHTML = "";

//     users.forEach((user, index) => {
//         tbody.innerHTML +=`
//             <tr>
//                 <td>${user.id || index+1}</td>
//                 <td>${user.empName}</td>
//                 <td>${user.empRole}</td>
//                 <td>${user.empSalary}</td>
//                 <td>
//                     <button type="button" onclick="update(${index})">Update</button>
//                     <button type="button" onclick="deleteData(${index})">Delete</button>
//                 </td>
//             </tr>
//         `
//     })
// }

// addBtn.addEventListener("click", () => {
//     let ename = empName.value;
//     let erole = empRole.value;
//     let esal = empSalary.value;


//     if (ename === "" || erole === "" || esal === "") {
//         alert("Please fill all details");
//         return;
//     }

//     if (edit !== null) {
//         users[edit].empName = ename;
//         users[edit].empRole = erole;
//         users[edit].empSalary = esal;

//         edit = null;
//         addBtn.textContent = "Add Employee"
//     } else {
//         users.push({
//             empName: ename,
//             empRole: erole,
//             empSalary: esal
//         })
//     }


//     localStorage.setItem("users", JSON.stringify(users))
//     empName.value = ""
//     empRole.value = ""
//     empSalary.value = ""

//     showData()

// })

// function deleteData(index) {
//     users.splice(index, 1);
//     localStorage.setItem("users", JSON.stringify(users));
//     showData();
// }

// function update(index) {

//     empName.value = users[index].empName;
//     empRole.value = users[index].empRole;
//     empSalary.value = users[index].empSalary;

//     edit = index;

//     addBtn.textContent = "save"
// }

// showData()






let empName = document.getElementById("empName");
let empRole = document.getElementById("empRole");
let empSalary = document.getElementById("empSalary");
let addBtn = document.getElementById("addBtn")

let users = JSON.parse(localStorage.getItem("users")) || [];
let edit = null;

function showData() {
    let tbody = document.querySelector("table tbody");
    tbody.innerHTML = "";

    users.forEach((user, index) => {
        tbody.innerHTML += `
       <tr>
            <td>${user.id || index + 1}</td>
            <td>${user.empName}</td>
            <td>${user.empRole}</td>
            <td>${user.empSalary}</td>
            <td>
                <button type="button" onclick="update(${index})">Update</button>
                <button type="button" onclick="deleteData(${index})">Delete</button>
            </td>
       </tr> 
    `
    })

}

addBtn.addEventListener("click", () => {
    let ename = empName.value;
    let erole = empRole.value
    let esal = empSalary.value;

    if (ename === "" || erole === "" || esal === "") {
        alert("Please fill all details")
        return;
    }

    if (edit !== null) {
        users[edit].empName = ename;
        users[edit].empRole = erole;
        users[edit].empSalary = esal;

        edit = null;
        addBtn.textContent = "Add Employee"
    }
    else {
        users.push({
            empName: ename,
            empRole: erole,
            empSalary: esal
        })
    }

    localStorage.setItem("users", JSON.stringify(users))
    empName.value = ""
    empRole.value = ""
    empSalary.value = ""

    showData()

})
function deleteData(index) {
    users.splice(index, 1);
    localStorage.setItem("users",JSON.stringify(users));
    showData();
}
function update(index) {

    empName.value = users[index].empName;
    empRole.value = users[index].empRole;
    empSalary.value = users[index].empSalary;

    edit = index;

    addBtn.textContent = "save"
}
showData()