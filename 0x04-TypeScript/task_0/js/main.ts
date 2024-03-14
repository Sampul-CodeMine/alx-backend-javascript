interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const studentOne: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 32,
  location: "Asaba, Delta State.",
};

const studentTwo: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 28,
  location: "Sapele, Delta State.",
};

const studentsList: Student[] = [
  studentOne,
  studentTwo,
];



const styling = `
html {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
}
body {
    box-sizing: border-box;
}
#holder {
    width: 540px;
    margin: 20px auto;
}
table {
    width: 100%;
    box-sizing: border-box;
    margin: 2px;
    padding: 2px;
}
table td{
    border: 1px solid gray;
    padding: 2px;
    margin: 2px;
}
`;

export default function generateTable(obj: Array<Student>): void {
  const holder = document.createElement('DIV');
  const table = document.createElement('TABLE');
  const thead = document.createElement('THEAD');
  const tbody = document.createElement('TBODY');
  const th = document.createElement('TH');
  const tr = document.createElement('TR');
  const td = document.createElement('TD');
  
  //Get headers for the table
  const headers = Object.keys(obj[0]);
  for (let i = 0; i < headers.length; i++) {              
      tr.insertAdjacentHTML('beforeend', `<th>${headers[i].toUpperCase()}</th>`);
  }
  thead.appendChild(tr);
  table.appendChild(thead);
  
  // Get data for the table
  obj.forEach((stud: any) => {
      const tr = document.createElement('TR');
      tr.insertAdjacentHTML('beforeend', `<td>${stud.firstName}</td>`);
      tr.insertAdjacentHTML('beforeend', `<td>${stud.lastName}</td>`);
      tr.insertAdjacentHTML('beforeend', `<td>${stud.age}</td>`);
      tr.insertAdjacentHTML('beforeend', `<td>${stud.location}</td>`);
      tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  Object.assign(table.style, {border: "px", margin: "2px"})
  holder.appendChild(table);
  holder.setAttribute('id', "holder");
  document.body.insertAdjacentElement('beforeend', holder);
}

generateTable(studentsList);

const stylesheet = document.createElement('style');
stylesheet.innerHTML = styling;
document.title = 'Task 0 - Creating Dynamic Table';
document.head.insertAdjacentElement('beforeend', stylesheet)