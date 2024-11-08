const form = document.querySelector("form")
const submit = document.querySelector(".submit")
const iconerror1 = document.querySelector(".pes")
const Error1 = document.querySelector(".par1")
const iconError2 = document.querySelector(".pes2")
const Error2 = document.querySelector(".par2")
const iconError3 = document.querySelector(".pes3")
const Error3 = document.querySelector(".par3")
const iconError4 = document.querySelector(".pes4")
const Error4 = document.querySelector(".par4")
const input1 = document.getElementById("fname")
const input2 = document.getElementById("lname")
const input3 = document.getElementById("email")
const input4 = document.getElementById("password")


form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (input1.value === "") {
        Error1.classList.remove("hidden")
        iconerror1.classList.remove("hidden")
    } else{
        Error1.classList.add("hidden")
        iconerror1.classList.add("hidden") 
    }

    if (input2.value === "") {
        Error2.classList.remove("hidden")
        iconError2.classList.remove("hidden")
    } else{
        Error2.classList.add("hidden")
        iconError2.classList.add("hidden") 
    }

    if (input4.value === "") {
        Error4.classList.remove("hidden")
        iconError4.classList.remove("hidden")
    } else if (input4.value.length > 0) {
        Error4.classList.add("hidden")
        iconError4.classList.add("hidden")
    }


    if (isEmail(input3.value.trim())) {
        Error3.classList.add("hidden")
        iconError3.classList.add("hidden")
    } else {
        Error3.classList.remove("hidden")
        iconError3.classList.remove("hidden")
    }
})


function isEmail(email){
    return /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email)
}
