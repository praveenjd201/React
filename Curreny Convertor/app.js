const select = document.querySelectorAll('.currency')
let btn = document.getElementById('btn')
let input=document.getElementById('input')
let result=document.getElementById('result')
let alertMsg=document.querySelector('.alert');
console.log(alertMsg)

const host = 'api.frankfurter.app';
fetch(`https://${host}/currencies`)
  .then(res => res.json())
  .then(res => displayDropDown(res))


  function displayDropDown(res){
    let currencyList=Object.entries(res)
    
    for(let i = 0;i<currencyList.length;i++){
      let opt = `<option value="${currencyList[i][0]}">${currencyList[i][0]} (${currencyList[i][1]}) </option>`
      select[0].innerHTML += opt
      select[1].innerHTML += opt
      // console.log(opt)
    } 
  }


// fetch(`https://${host}/latest?amount=10&from=GBP&to=USD`)
//   .then(resp => resp.json())
//   .then((data) => {
//     alert(`10 GBP = ${data.rates.USD} USD`);
//   });


  btn.addEventListener('click',()=>{
    alertMsg.innerHTML='';
    let curr1 =select[0].value
    let curr2 =select[1].value
    let inputval=input.value
    if(curr1 === curr2){
      alertMsg.innerHTML=`<p class='error-msg'>choose different currency</p>`
    }else{
      convert(curr1,curr2,inputval)
    }
    
  });

  function convert(curr1,curr2,inputval){
    
  fetch(`https://${host}/latest?amount=${inputval}&from=${curr1}&to=${curr2}`)
      .then(resp => resp.json())
      .then((data) => {
        result.value=Object.values(data.rates)
      })
  }