let employees = [];
let editIndex = -1;

document.getElementById("submitBtn").addEventListener("click", function () {
    let emp = {
        name: document.getElementById("name").value,
        dept: document.getElementById("dept").value,
        salary: document.getElementById("salary").value,
        bank: document.getElementById("bank").value,
        account: document.getElementById("account").value,
        ifsc: document.getElementById("ifsc").value,
        email: document.getElementById("email").value,
    };

    if (editIndex === -1) {
        employees.push(emp);
    } else {
        employees[editIndex] = emp;
        editIndex = -1;
        document.getElementById("submitBtn").innerText = "Add Employee";
    }

    clearForm();
    showEmployees();
});

function showEmployees() {
    let table = document.getElementById("employeeTable");
    table.innerHTML = "";

    employees.forEach((e, index) => {
        table.innerHTML += `
            <tr>
                <td>${e.name}</td>
                <td>${e.dept}</td>
                <td>${e.salary}</td>
                <td>${e.bank}</td>
                <td>${e.account}</td>
                <td>${e.ifsc}</td>
                <td>${e.email}</td>
                <td>
                    <button class="action-btn edit" onclick="editData(${index})">Edit</button>
                    <button class="action-btn delete" onclick="deleteData(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
}

function editData(index) {
    let e = employees[index];

    document.getElementById("name").value = e.name;
    document.getElementById("dept").value = e.dept;
    document.getElementById("salary").value = e.salary;
    document.getElementById("bank").value = e.bank;
    document.getElementById("account").value = e.account;
    document.getElementById("ifsc").value = e.ifsc;
    document.getElementById("email").value = e.email;

    editIndex = index;
    document.getElementById("submitBtn").innerText = "Update Employee";
}

function deleteData(index) {
    employees.splice(index, 1);
    showEmployees();
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("dept").value = "Select Department";
    document.getElementById("salary").value = "";
    document.getElementById("bank").value = "";
    document.getElementById("account").value = "";
    document.getElementById("ifsc").value = "";
    document.getElementById("email").value = "";
}
