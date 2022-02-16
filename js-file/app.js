//get value
function value(elementId){
    const element = document.getElementById(elementId);
    const value=parseFloat(element.value);
    return value;
}
//calculate remaining
function remaining (value1,value2){
    const remainingBalance=value1-value2;
    return remainingBalance;
}
//validation & total calculation
function totalCalculatea(income,food,rent,cloth){
    const numAlert = document.getElementById('number-alert')
    const positiveNumAlert = document.getElementById('positive-number-alert')
    const totalExpance= document.getElementById('total-expanse');
    const balance= document.getElementById('balance');
    // validation
    if(isNaN(income)||isNaN(food)||isNaN(rent)||isNaN(cloth)){
        numAlert.style.display='block';
    }else if(income<0||food<0||rent<0||cloth<0){
        numAlert.style.display='none';
        positiveNumAlert.style.display='block';
    }else{
        numAlert.style.display='none';
        positiveNumAlert.style.display='none';
        //total claculate
        const totalCost =food+rent+cloth;
        if(totalCost>income){
            alert('khoros besi korsis he madarchud')
        }else{
            totalExpance.innerText=totalCost;
            balance.innerText=remaining(income,totalCost);
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
    const balanceField= document.getElementById('balance').innerText;
    const balance= parseFloat(balanceField);
    const savingField =document.getElementById('total-saving');
    const remainingField = document.getElementById('remaining-balance');
    //validation check and total
    if(isNaN(savingParcent)){
        alert('please input a number');
    }else if(savingParcent<0){
        alert('please input a positive number');
    }else{
        const saveMoney= (income*savingParcent)/100;
        if(saveMoney>balance){
            document.getElementById('insuficient-balance').style.display='block';
        }else{
            document.getElementById('insuficient-balance').style.display='none';
            savingField.innerText=saveMoney;
            remainingField.innerText= remaining(balance,saveMoney);
        }
    }
    
})