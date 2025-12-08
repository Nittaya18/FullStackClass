function updatePorfile() {
    let fnameElement = document.getElementById("fname");
    let lnameElement = document.getElementById("lname");
    let ageElement = document.getElementById("age");

    let fname = fnameElement.value;
    let lname = lnameElement.value;
    let age = ageElement.value;

    let table = document.getElementById("user-table");
    let row = document.createElement("tr");
    let cell1 = document.createElement("td");
    cell1.innerText = fname;
    let cell2 = document.createElement("td");
    cell2.innerText = lname;
    let cell3 = document.createElement("td");
    cell3.innerText = age;

    if (!fname || !lname || !age) {
        alert("Please fill all fields before adding a user.");
        return;
    }

    let cell4 = document.createElement("td");
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function () {
        table.removeChild(row);
    }
    cell4.appendChild(deleteButton);

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);


    table.appendChild(row);

}