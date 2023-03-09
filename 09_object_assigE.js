const sbiBank = {
    bankName:"SBI Bank",
    location: "Baroda",
    accountNo: 13445566,
    ifsc:"SBI01",
    interestRate : "9.5%",
    showDetails: function () {
        console.log(`(1) BankName: ${sbiBank.bankName} (2) Location: ${sbiBank.location} (3) AccountNo: ${sbiBank.accountNo} (4) IFSC: ${sbiBank.ifsc} (5) InterestRate: ${sbiBank.interestRate}`);
      }
}
sbiBank.showDetails();

const axisBank = {
    bankName:"axis Bank",
    location: "Ahemdabad",
    accountNo: 11335566,
    ifsc:"AXIS02",
    interestRate : "9.0%",
    showDetails: function () {
        console.log(`(1) BankName: ${axisBank.bankName} (2) Location: ${axisBank.location} (3) AccountNo: ${axisBank.accountNo} (4) IFSC: ${axisBank.ifsc} (5) InterestRate: ${axisBank.interestRate}`);
      }
}
axisBank.showDetails();

const hdfcBank = {
  bankName: "HDFC Bank",
  location: "Shirdi",
  accountNo: 11224566,
  ifsc: "HDFC03",
  interestRate: "8.5%",
  showDetails: function () {
    console.log(`(1) BankName: ${hdfcBank.bankName} (2) Location: ${hdfcBank.location} (3) AccountNo: ${hdfcBank.accountNo} (4) IFSC: ${hdfcBank.ifsc} (5) InterestRate: ${hdfcBank.interestRate}`);
  }
};
hdfcBank.showDetails();

const yesBank = {
  bankName: "YES Bank",
  location: "Mumbai",
  accountNo: 11225566,
  ifsc: "YES04",
  interestRate: "7.5%",
  showDetails: function () {
    console.log(`(1) BankName: ${yesBank.bankName} (2) Location: ${yesBank.location} (3) AccountNo: ${yesBank.accountNo} (4) IFSC: ${yesBank.ifsc} (5) InterestRate: ${yesBank.interestRate}`   );
  }
};
yesBank.showDetails();
