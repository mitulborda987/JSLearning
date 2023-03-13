console.log(`============================Constructer Function============================`);

function Bank(bankName, location, ifscCode, branchCode) {
    this.bankName = bankName
    this.location = location
    this.ifscCode = ifscCode
    this.branchCode = branchCode
    this.show = function () {
        console.log(`Bank Details is: Bank Name: ${this.bankName}, Location: ${this.location}, Ifsc Code: ${this.ifscCode}, Branch Code: ${this.branchCode}`);
    }
}
Bank.prototype.openTime = "9 AM IST"
Bank.prototype.closeTime = "6 PM IST"

let yesBank = new Bank("YES Bank","Ahemdabad","YES0002","ABC-001")
yesBank.show()
let sbiBank = new Bank("SBI Bank","Baroda","SBI0004","ABC-002")
sbiBank.show()
let mahBank = new Bank("Mah Bank","Mumbai","MAH0006","ABC-003")
mahBank.show()
let axisBank = new Bank("Axis Bank","Kanpur","AXIS0008","ABC-004")
axisBank.show()

console.log(`===================Add the Data Memeber to Object===================`);

console.log(`Open time of Sbi Bank: ${yesBank.openTime} and Close time of Sbi Bank: ${yesBank.closeTime}`);
console.log(`====================================================================`);

console.log(`Bank Name ==> ${axisBank.bankName} and Close time: ${axisBank.closeTime}`);
console.log(`====================================================================`);


console.log(`Bank Name ==> ${yesBank.bankName}, Branch Code: ${yesBank.branchCode} and Open time: ${yesBank.openTime}`);

