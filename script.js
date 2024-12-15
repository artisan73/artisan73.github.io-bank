class BankAccount{
    constructor(accountNumber, balance = 0){
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount){
        if (amount > 0){
            this.balance += amount;
            Swal.fire({
                title: "Deposit Successful!",
                text: `You have successfully deposited $${amount}. Your current balance is $${this.balance}. Thank you for using Quantum developer's Bank.`,
                icon: "success",
                confirmButtonColor: "rgb(4, 80, 147)",
                confirmButtonText: "OK"
    });
        }
        else {
            Swal.fire({
                title: "Deposit Failed!",
                text: "Get serious bro you cant deposit money in negatives",
                icon: "warning",
                confirmButtonColor: "rgb(4, 80, 147)",
                confirmButtonText: "Try Again"
        });
    }
    withdraw(amount){
        if (amount > 0 && amount <= this.balance){
            this.balance -= amount;
            Swal.fire({
                title: "Withdraw Successful!",
                text: `You have successfully withdrawn $${amount}. Your current balance is $${this.balance}. Thank you for using Quantum developer's Bank.`,
                icon: "success",
                confirmButtonColor: "rgb(4, 80, 147)",
                confirmButtonText: "OK"
        });
        }
        else if (amount > this.balance){
            Swal.fire({
                title: "Withdraw Failed!",
                text: `Bro what exactly are you withdrawing? Deposit and try again`,
                icon: "question",
                confirmButtonColor: "rgb(4, 80, 147)",
                confirmButtonText: "Try Again"
        });
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
    if (account.deposit(amount)){
     updateBalance();
    }
}
//withdraw funtion
function withdraw(){
    const amount = parseFloat (document.getElementById("amount").value);
    if(account.deposit(amunt)){
    updateBalance();
    }
}
updateBalance();
