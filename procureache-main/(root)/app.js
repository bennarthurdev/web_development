class Registers {
	constructor({name , email, checkEmail, iPassword}){
		this.name = name;
		this.email = email;
		this.checkEmail = checkEmail;
		this.password = password;
	}
}

let setRegister = () =>{
	let input = {
		name : document.getElementById("name").value,
		email : document.getElementById("email").value,
		checkEmail : document.getElementById("emailCheck").value,
		iPassword : document.getElementById("password").value
	}
	
	let Register = new Registers(input);
	console.log(Register);
}

