let name = document.getElementById("name")
let age = document.getElementById("age")
let department = document.getElementById("department")
let salary = document.getElementById("salary")
let Join = document.getElementById("Join")
let saveBtn = document.getElementById("saveBtn")
let table = document.getElementById("employeeTable")
let selectdepartment = document.getElementById("selectdepartment")

selectdepartment.addEventListener("change", function () {
    department.value = this.value
})

let employe = JSON.parse(localStorage.getItem("employe")) || []
let editIndex = null

function showData() {
    table.innerHTML = ""

    employe.forEach((employe, index) => {
        table.innerHTML += `
            <tr>
                <td>${employe.id || index + 1}</td>
                <td>${employe.name}</td>
                <td>${employe.age}</td>
                <td>${employe.department}</td>
                <td>${employe.salary}</td>
                <td>${employe.Join}</td>
                <td>
                    <button class="action-btn" onclick="update(${index})">Update</button>
                    <button class="action-btn" onclick="deleteData(${index})">Delete</button>
                </td>
            </tr>
        `
    })

    name.value = ""
    age.value = ""
    department.value = ""
    salary.value = ""
    Join.value = ""
}


saveBtn.addEventListener("click", () => {
    let ename = name.value;
    let eage = age.value;
    let edep = department.value;
    let esal = salary.value;
    let ejoin = Join.value


    if (ename === "" || eage === "" || edep === "" || esal === "" || ejoin === "") {
        alert("Please fill all details");
        return;
    }

    if (editIndex !== null) {
        employe[editIndex].name = ename
        employe[editIndex].age = eage
        employe[editIndex].department = edep
        employe[editIndex].salary = esal
        employe[editIndex].Join = ejoin

        editIndex = null;

        saveBtn.innerHTML = "Save Employe"
    } else {
        employe.push({
            name: ename,
            age: eage,
            department: edep,
            salary: esal,
            Join: ejoin
        })
    }

    localStorage.setItem("employe", JSON.stringify(employe))




    showData()
})


function deleteData(index) {
    if (confirm("Are you sure you want to delete this record")) {
        employe.splice(index, 1)
        localStorage.setItem("employe", JSON.stringify(employe))
    }
    showData()
}

function update(index) {

    name.value = employe[index].name
    age.value = employe[index].age
    department.value = employe[index].department
    salary.value = employe[index].salary
    Join.value = employe[index].Join

    editIndex = index

    saveBtn.innerHTML = "Update"

}



showData()




function search() {
    let date = document.getElementById("Join1").value
    let table = document.querySelector("table tbody")

    table.innerHTML = ""

    employe.forEach((emp, index) => {
        if (emp.Join === date) {
            table.innerHTML += `
        <tr>
                <td>${index +1}</td>
                <td>${emp.name}</td>
                <td>${emp.age}</td>
                <td>${emp.department}</td>
                <td>${emp.salary}</td>
                <td>${emp.Join}</td>
                <td>
                    <button class="action-btn" onclick="update(${index})">Update</button>
                    <button class="action-btn" onclick="deleteData(${index})">Delete</button>
                </td>
            </tr>
            `
        }
    })

}