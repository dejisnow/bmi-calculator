window.onload=()=>{
let ageSelect = document.getElementById("age")
    let weight = document.querySelector(".weightInput")
    
    let height= document.querySelector(".heightInput")
    
    let submit = document.querySelector(".submit")
        let result = document.querySelector(".result")
    
    
    
    submit.addEventListener("click",()=>{
    
    function bmi(){
   console.log(ageSelect.options[selected].text)
      
    return  parseInt(weight.value)/parseInt((height.value)**2)
      }
        
      result.innerHTML= bmi()
        
    })
    
    ageSelect.addEventListener("change",()=>{
    let selected = ageSelect.selectedIndex;
    
       console.log(ageSelect.options[selected].text)
    })
    
    
    
    
}
