// Pengecekan click pertama untuk input username

// let inputUser menyimpan "UserNameId"
let inputUser = document.getElementById("UserNameId")
	
	console.log(inputUser.value.length)

	// ketike ada event "click" 
	inputUser.addEventListener("click", Click , false)
	// Baris akhir fungsi click

function Click( Click_Parameter )
{
	if( inputUser ) 
	{
		console.log("Username click Berhasil!")
	} 
		else 
		{
			console.log("Username click gagal!")
		}

	if( Click_Parameter === undefined )
	{
		 console.log( "Undefined value!")
	}	
		return Click_Parameter
}


// Pengecekan kedua untuk input password

// let inputUser menyimpan "UserNameId"
let passwordUser = document.getElementById("PasswordId")
	
	console.log(passwordUser.value.length)

	// ketike ada event "click" 
	passwordUser.addEventListener("click", passwordClick , false)
	// Baris akhir fungsi click

function passwordClick( password_Click_Parameter )
{
	if( passwordUser ) 
	{
		console.log("Password click Berhasil!")
	} 
		else 
		{
			console.log("Password click gagal!")
		}

	if( password_Click_Parameter === undefined )
	{
		 console.log( "Undefined value!")
	}	
		return password_Click_Parameter
}
// Baris akhir pengecekan kedua


// Bagian pengecekan data pada input username
function UserNameInputFunction()
{
	const userNameInput = document.getElementById("UserNameId") 

		if( userNameInput ) 
		{
			console.log("Id Benar!")
		}
			else if( !userNameInput )
			{
				console.log("Id Salah!")
			}
}
	UserNameInputFunction()
// Baris akhir pengecekan


// Bagian pengecekan untuk button

// let buttonData menyimpan "#ButtonId"
let buttonData = document.querySelectorAll("#ButtonId")

	const buttonFeedback = buttonData[0].addEventListener("click", 
		(function()
	{	
		if( buttonData ) 
			{
				console.log("Button click Berhasil!")
			} 
				else if( !buttonData )
				{
					console.log("Buttonclick gagal!")
				}
	}))
// function untuk mengetahui nilai pada input form username
