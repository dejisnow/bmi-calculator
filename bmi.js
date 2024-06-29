window.onload=()=>{
let ageSelect = document.getElementById("age")
    let weight = document.querySelector(".weightInput")
    
    let height= document.querySelector(".heightInput")
    
    let submit = document.querySelector(".submit")
        let result = document.querySelector(".result")
    
    submit.addEventListener("click",()=>{
    
    //BMI calculator function 
    function bmi(){
  
      
    return  parseInt(weight.value)/parseInt((height.value)**2)
      }
        
      result.innerHTML= bmi()
    
    })
    
    
    //Option select
    
    ageSelect.addEventListener("change",()=>{
    let checker;
    
    let selected = ageSelect.selectedIndex;
   if(ageSelect.options[selected].index === 1){
       checker = true;
       
   }else if(ageSelect.options[selected].index === 0){
       checker = false;
   }
   
 
    console.log(ageSelect.options[selected].index)
     console.log(ageSelect.options[selected].text)
    })
    
    
    
    
}
