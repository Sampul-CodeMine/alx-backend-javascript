"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var studentOne = {
    firstName: "John",
    lastName: "Doe",
    age: 32,
    location: "Asaba, Delta State.",
};
var studentTwo = {
    firstName: "Jane",
    lastName: "Doe",
    age: 28,
    location: "Sapele, Delta State.",
};
var studentsList = [
    studentOne,
    studentTwo,
];
var styling = "\nhtml {\n    margin: 0;\n    padding: 0;\n    font-family: Arial, sans-serif;\n}\nbody {\n    box-sizing: border-box;\n}\n#holder {\n    width: 540px;\n    margin: 20px auto;\n}\ntable {\n    width: 100%;\n    box-sizing: border-box;\n    margin: 2px;\n    padding: 2px;\n}\ntable td{\n    border: 1px solid gray;\n    padding: 2px;\n    margin: 2px;\n}\n";
function generateTable(obj) {
    var holder = document.createElement('DIV');
    var table = document.createElement('TABLE');
    var thead = document.createElement('THEAD');
    var tbody = document.createElement('TBODY');
    var th = document.createElement('TH');
    var tr = document.createElement('TR');
    var td = document.createElement('TD');
    //Get headers for the table
    var headers = Object.keys(obj[0]);
    for (var i = 0; i < headers.length; i++) {
        tr.insertAdjacentHTML('beforeend', "<th>".concat(headers[i].toUpperCase(), "</th>"));
    }
    thead.appendChild(tr);
    table.appendChild(thead);
    // Get data for the table
    obj.forEach(function (stud) {
        var tr = document.createElement('TR');
        tr.insertAdjacentHTML('beforeend', "<td>".concat(stud.firstName, "</td>"));
        tr.insertAdjacentHTML('beforeend', "<td>".concat(stud.lastName, "</td>"));
        tr.insertAdjacentHTML('beforeend', "<td>".concat(stud.age, "</td>"));
        tr.insertAdjacentHTML('beforeend', "<td>".concat(stud.location, "</td>"));
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    Object.assign(table.style, { border: "px", margin: "2px" });
    holder.appendChild(table);
    holder.setAttribute('id', "holder");
    document.body.insertAdjacentElement('beforeend', holder);
}
exports.default = generateTable;
generateTable(studentsList);
var stylesheet = document.createElement('style');
stylesheet.innerHTML = styling;
document.title = 'Task 0 - Creating Dynamic Table';
document.head.insertAdjacentElement('beforeend', stylesheet);
