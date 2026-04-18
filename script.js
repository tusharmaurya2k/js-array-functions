
let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  arr.map((emp) => {
    if (emp.profession === "developer") {
      console.log(emp);
    }
  });
}

function PrintDeveloperbyForEach() {
  arr.forEach((emp) => {
    if (emp.profession === "developer") {
      console.log(emp);
    }
  });
}

function addData() {
  let newEmployee = {
    id: 4,
    name: "susan",
    age: "20",
    profession: "intern",
  };

  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  arr = arr.filter((emp) => emp.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
  let newArr = [
    { id: 5, name: "alice", age: "22", profession: "designer" },
    { id: 6, name: "bob", age: "25", profession: "manager" },
    { id: 7, name: "charlie", age: "23", profession: "tester" },
  ];

  let combined = arr.concat(newArr);
  console.log(combined);
}

