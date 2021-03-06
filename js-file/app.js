//get value
function value(elementId){
    const element = document.getElementById(elementId);
    const value=parseFloat(element.value);
    return value;
}

//calculate remaining
function remaining (balance,expense){
    const remainingBalance= balance-expense;
    return remainingBalance;
}

//update value in UI
function update(elementId,value){
    const updateField= document.getElementById(elementId);
    updateField.innerText=value;
}

//validation & total balance calculation
function totalCalculatea(income,food,rent,cloth){
    const numAlert = document.getElementById('number-alert');
    const positiveNumAlert = document.getElementById('positive-number-alert');
    const expanseAlert= document.getElementById('expense-alert');
    // error handle
    if(isNaN(income)||isNaN(food)||isNaN(rent)||isNaN(cloth)){
        numAlert.style.display='block';
        positiveNumAlert.style.display='none';
    }else if(income<0||food<0||rent<0||cloth<0){
        numAlert.style.display='none';
        positiveNumAlert.style.display='block';
    }else{
        numAlert.style.display='none';
        positiveNumAlert.style.display='none';
        //total claculate
        const totalCost =food+rent+cloth;
        if(totalCost>income){
            expanseAlert.style.display='block';
        }else{
            //update total cost and balance
            expanseAlert.style.display='none';
            update('total-expanse',totalCost);
            const Balance=remaining(income,totalCost);
            update('balance',Balance);
        }
    }
}

//calculate button event handle
document.getElementById('calculate').addEventListener('click',function(){
    const income = value('income-field');
    const foodCost = value('food-cost');
    const rentCost = value('rent-cost');
    const clothCost = value('cloth-cost');
    totalCalculatea(income,foodCost,rentCost,clothCost);
    
})

// saving button event handle
document.getElementById('saving').addEventListener('click',function(){
    const income = value('income-field');
    const savingParcent= value('save-money');
    const errorMessage= document.getElementById('insuficient-balance');
    const balanceField= document.getElementById('balance').innerText;
    const balance= parseFloat(balanceField);
    //error handle 
    if(isNaN(savingParcent)){
        alert('please input number');
    }else if(savingParcent<0){
        alert('please input positive number');
    }else{
        const saveMoney= (income*savingParcent)/100;
        //validation income & expenses
        if(saveMoney>balance){
            errorMessage.style.display='block';
        }else{
            errorMessage.style.display='none';
            update('total-saving',saveMoney)
            const remainingBalance= remaining(balance,saveMoney).toFixed(2);
            update('remaining-balance',remainingBalance)
        }
    } 
})