//get value
function value(elementId){
    const element = document.getElementById(elementId);
    const value=element.value;
    // if(value<0){
    //     alert('Please input an number please')
    // }else{
    //     return value;
    // }
    console.log(typeof(value))
}
//calculate remaining
function remaining (value1,value2){
    const remainingBalance=value1-value2;
    return remainingBalance;
}

//calculate button event handle
document.getElementById('calculate').addEventListener('click',function(){
    const income = value('income-field');
    const foodCost = value('food-cost');
    const rentCost = value('rent-cost');
    const clothCost = value('cloth-cost');
    const totalExpance= document.getElementById('total-expanse');
    const balance= document.getElementById('balance');
    const totalCost =foodCost+rentCost+clothCost;
    totalExpance.innerText=totalCost;
    balance.innerText=remaining(income,totalCost);
})
// saving button event handle
document.getElementById('saving').addEventListener('click',function(){
    const income = value('income-field');
    const savingParcent= value('save-money');
    const balanceField= document.getElementById('balance').innerText;
    const balance= parseFloat(balanceField);
    const savingField =document.getElementById('total-saving');
    const remainingField = document.getElementById('remaining-balance');
    const saveMoney= (income*savingParcent)/100;
    //saving error validation
    if(saveMoney>balance){
        alert('hi')
    }else{
        savingField.innerText=saveMoney;
        remainingField.innerText= remaining(balance,saveMoney);
    }
})