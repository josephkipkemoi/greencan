console.log("User Details = ")

let details = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const fullName = document.getElementById("fullName")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")

fullName.addEventListener("change", (e) =>{
    const name = e.target.value
    details.fullName = name
})

email.addEventListener("change", (e) =>{
    const name = e.target.value
    details.email = name
})

password.addEventListener("change", (e) =>{
    const name = e.target.value
    details.password = name
})

confirmPassword.addEventListener("change", (e) => {
    const name = e.target.value
    details.confirmPassword = name
})
