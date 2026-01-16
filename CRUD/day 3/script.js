let empId = document.getElementById("empId")
let empName = document.getElementById("empName")
let empInput = document.getElementById("empInput")
let empSelect = document.getElementById("empSelect")
let empEmail = document.getElementById("empEmail")
let empNumber = document.getElementById("empNumber")
let addbtn = document.getElementById("addbtn")
let table = document.getElementById("employeeTable")

empSelect.addEventListener("change", function () {
    empInput.value = this.value;
});


let employee = JSON.parse(localStorage.getItem("employee")) || []
let editIndex = null;

function showData() {
    table.innerHTML = ""

    employee.forEach((employee, index) => {
        table.innerHTML += `
            <tr>
                <td>${employee.empId}</td>
                <td>${employee.empName}</td>
                <td>${employee.empInput}</td>
                <td>${employee.empEmail}</td>
                <td>${employee.empNumber}</td>
                <td class="action-btns">
                    <button class="btn-edit" onclick="update(${index})">✏️ Edit</button>
                    <button class="btn-delete" onclick="deleteData(${index})">🗑 Delete</button>
                </td>
            </tr>
        `
    })
}


addbtn.addEventListener("click", (e) => {
    e.preventDefault();

    let eid = empId.value
    let ename = empName.value
    let einput = empInput.value
    let eemail = empEmail.value
    let enumber = empNumber.value

    if (eid === "" || ename === "" || einput === "" || enumber === "") {
        alert("Please fill all details")
        return;
    }


    if (editIndex !== null) {
        employee[editIndex].empId = eid;
        employee[editIndex].empName = ename;
        employee[editIndex].empInput = einput;
        employee[editIndex].empEmail = eemail;
        employee[editIndex].empNumber = enumber;

        editIndex = null

        addbtn.innerHTML="Add Employe"
    }
    else {
        employee.push({
            empId: eid,
            empName: ename,
            empInput: einput,
            empEmail: eemail,
            empNumber: enumber
        })
    }

    localStorage.setItem("employee", JSON.stringify(employee))

    empId.value = ""
    empName.value = ""
    empInput.value = ""
    empEmail.value = ""
    empNumber.value = ""

    showData()

})

function update(index) {

    addbtn.innerHTML="Save"

    empId.value = employee[index].empId
    empName.value = employee[index].empName
    empInput.value = employee[index].empInput
    empEmail.value = employee[index].empEmail
    empNumber.value = employee[index].empNumber

    editIndex=index

}


function deleteData(index) {

    let ename=employee[index].empName
    
    if (confirm(`Are you sure you want to delete this employee: ${ename}`)) {
        employee.splice(index, 1)
        localStorage.setItem("employee", JSON.stringify(employee))
        showData()
    }
}



showData()