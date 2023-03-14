console.log(`====================Step-1 Shallow clone====================`);
const arrayNums = [20,3,4,56,90,400,49]
const newArray = arrayNums;
newArray.push(55,66)
console.log(`Given Original Array: ${arrayNums}`);
console.log(`Clone Array: ${newArray}`);

console.log(`====================Step-2 Deep clone Using spread Operator====================`);

console.log(`Given Original Array: ${arrayNums}`);
const deepcloneArray = [...arrayNums]
arrayNums.push(10,25)
console.log(`Update Original Array: ${arrayNums}`);
console.log(`Clone Array: ${deepcloneArray}`);

console.log(`====================Step-3 Merge array====================`);
const evenArray = [2,30,14,8]
const mergeArray = [...arrayNums,...evenArray]
console.log(`Merge array using spread operator: ${mergeArray}`);

console.log(`====================Step-4====================`);

const employee_info ={
    emp_id: 27,
    emp_name : "John Doe",
    salary: {
        july_month: "40,0000INR",
        aug_month: "50,0000INR",
        jun_month: "65,0000INR"
    },
    address:{
        locality:{
                  colony: "OM Vrindavan Society",
                  street: "Kanch Pokli, 431202",
                 },
        city: "Mumbai",
        state: "Maharashtra",
        country: "India"
    },
    mobiles: ["+91 8600 3456 88","1800-4567 32","+91- 9096 5678 77"]
}
console.log(` Address: colony: ${employee_info.address.locality.colony},street: ${employee_info.address.locality.street},city: ${employee_info.address.city},state: ${employee_info.address.state},country: ${employee_info.address.country}`);

console.log(`Mobile number: ${employee_info.mobiles}`);


console.log(`====================Deep copy using JSON.stringfy====================`);
const cloanObject = JSON.parse(JSON.stringify(employee_info));
cloanObject.salary.july_month = "80K"
employee_info.address.country = "United Kingdom"
console.log(`Original Object: Old value: ${employee_info.salary.july_month}, Value update: ${employee_info.address.country}`);
console.log(`Cloan Object: Value upadate: ${cloanObject.salary.july_month}, Old value: ${cloanObject.address.country}`);
