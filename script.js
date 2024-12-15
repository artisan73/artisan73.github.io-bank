class BankAccount{
    constructor(accountNumber, balance = 0){
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount){
        if (amount > 0){
            this.balance += amount;
            return `You have successfully deposited $${amount}. Your current balance is $${this.balance}. Thank you for using Quantum developer's Bank.`;
        }
        else {
            return "Get serious bro you cant deposit money in negatives";
        }
    }
    withdraw(amount){
        if (amount > 0 && amount <= this.balance){
            this.balance -= amount;
            return `You have successfully withdrawn $${amount}. Your current balance is $${this.balance}. Thank you for using Quantum developer's Bank.`;
        }
        else if (amount > this.balance){
            return "Insuficient funds. Please deposit and try again";
        }
    }
    getBalance(){
        return this.balance;
    }
}
const account = new BankAccount(1234, 0);
//update the balance
function updateBalance(){
    document.getElementById("balance").textContent = `Current Balance: $${account.getBalance()}`;
}
//Deposit funtion
function deposit(){
    const amount = parseFloat (document.getElementById("amount").value);
    Swal.fire({
        title: "Deposit Successful!",
        text: `You have successfully deposited $${amount}`,
        icon: "success",
        confirmButtonColor: "rgb(4, 80, 147)",
        confirmButtonText: "OK"
    });
    updateBalance();
}
//withdraw funtion
function withdraw(){
    const amount = parseFloat (document.getElementById("amount").value);
    const message = account.withdraw();
    if (message.includes("Insufficient")){
        Swal.fire({
            title: "Error!",
            text: message,
            icon: "error",
            confirmButtonColor: "rgb(4, 80, 147)",
            confirmButtonText: "Try Again"
        });
    }
    else{
        Swal.fire({
            title: "Withdrawal Successful!",
            text: message,
            icon: "success",
            confirmButtonColor: "rgb(4, 80, 147)",
            confirmButtonText: "OK"
        });
    }
    updateBalance();
}
updateBalance();
