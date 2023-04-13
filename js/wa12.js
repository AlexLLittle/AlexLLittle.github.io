// Problem 1
console.log("This is problem 1")
var JASON_EMP = [{
    "First Name": "Sam",
    "department": "Tech", "designation": "Manager", "salary": 40000, "raiseeligible": "true"
},
{
    "First Name": "Mary",
    "department": "Finance", "designation": "Trainee", "salary": 18500, "raiseeligible": "true"
},
{
    "First Name": "Bill",
    "department": "HR", "designation": "Executive", "salary": 21200, "raiseeligible": "false"
},
]
console.log(JASON_EMP)

// Problem 2
console.log("This is problem 2")
var JASON_COMP = {
    "companyName": "Tech Stars",
    "website": "www.techstars.site", 
    "employees": ["Sam","Mary","Bill"]
}
console.log(JASON_COMP)

// Problem 3
console.log("This is problem 3")
JASON_EMP[3] = {
    "First Name": "Anna",
    "department": "Tech", "designation": "Executive", "salary": 25600, "raiseeligible": "false"
}
JASON_COMP.employees[3] = "Anna"

console.log(JASON_EMP)
console.log(JASON_COMP)
// Problem 4
console.log("This is problem 4")
let TotSal = 0
for (let i = 0; i < JASON_EMP.length; i++) {
    TotSal = TotSal += JASON_EMP[i].salary
  }

console.log(JASON_EMP)
// Problem 5
console.log("This is problem 5")
function raisetime(JASON_EMP,j) {
if (JASON_EMP[j].raiseeligible === "true") {
    let RaiseNumber = JASON_EMP[j].salary * .10
    JASON_EMP[j].salary = JASON_EMP[j].salary + RaiseNumber
    JASON_EMP[j].raiseeligible = "false"
}
}

for (let j = 0; j < JASON_EMP.length; j++) {
    raisetime(JASON_EMP, j)
  }

console.log(JASON_EMP)
// Problem 6
console.log("This is problem 6")
JASON_COMP["wfh"] = ["Sam : true", "Mary : false", "Bill : false", "Anna : true"]

console.log(JASON_COMP)
