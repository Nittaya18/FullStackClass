function updateProfile() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    if (fname === "" || lname === "" || phone === "" || email === "") {
        alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
        return;
    }

    let table = document.getElementById("user-table").getElementsByTagName('tbody')[0];
    let row = document.createElement("tr");

    let cell1 = document.createElement("td");
    cell1.innerText = fname;
    
    let cell2 = document.createElement("td");
    cell2.innerText = lname;
    
    let cell3 = document.createElement("td");
    cell3.innerText = phone;

    let cell4 = document.createElement("td");
    cell4.innerText = email;

    let cellAction = document.createElement("td");
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "ลบ";
    deleteButton.className = "delete-btn";
    deleteButton.onclick = function() {
        row.remove();
    };
    cellAction.appendChild(deleteButton);

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cellAction);

    table.appendChild(row);

    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
}