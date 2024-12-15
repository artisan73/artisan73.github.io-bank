class BankAccount{
    constructor(accountNumber, balance = 0){
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount){
        if (amount > 0){
            this.balance += amount;
            return `You have successfully deposited $${amount}. You current balance is $${this.balance}. Thank you for using Quantum developer's Bank.`;
        }
        else {
            return "Get serious bro you cant deposit money in negatives";
        }
    }
    withdraw(amount){
        if (amount > 0 && amount <= this.balance){
            this.balance -= amount;
            return `You have successfully withdrawn $${amount}. You current balance is $${this.balance}. Thank you for using Quantum developer's Bank.`;
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
    alert(account.deposit(amount));
    updateBalance();
}
//withdraw funtion
function withdraw(){
    const amount = parseFloat (document.getElementById("amount").value);
    alert(account.withdraw(amount));
    updateBalance();
}
updateBalance();