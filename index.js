const $display = document.getElementById("display");
const $buttons = document.querySelectorAll(".btn");
const $deleteBtn = document.querySelector(".delete-btn");
const $clearBtn = document.querySelector(".clear-btn")
const $equalBtn = document.querySelector(".equalTo-btn")


$buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        $display.value += button.textContent;
    })

})

$clearBtn.addEventListener("click",()=>{
    $display.value = ""
})

$deleteBtn.addEventListener("click",()=>{
    $display.value = $display.value.slice(0,-1)
})

$equalBtn.addEventListener("click",()=>{
    try{
        $display.value = eval($display.value)
    }catch(error){
        $display.value = "Error"
    }
})













































































































































































