document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("loginForm");

	if (form) {
		form.addEventListener("submit", async function (event) {
			event.preventDefault();

			const email = document.getElementById("email").value;
			const password = document.getElementById("password").value;

			await login(email, password);
		});
	}
});

// Función para hacer login

async function login(email, password) {
	try {
		const response = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/auth/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, password }),
			credentials: "include", // Esto asegura que las cookies se envíen y reciban
		});

		if (response.ok) {
			const data = await response.json();
			console.log(data);
			console.log("Login exitoso. Token guardado en cookie.");

			// Redirigir a /dashboard
			window.location.href = "/dashboard";
		} else {
			alert("Credenciales incorrectas");
		}
	} catch (error) {
		console.error("Error en la solicitud:", error);
		alert("Error de conexión");
	}
}

document.addEventListener("DOMContentLoaded", function () {
	const signOutLinks = document.querySelectorAll(".signOutLink"); // Usamos querySelectorAll para seleccionar todos los enlaces

	//   console.log(signOutLinks) // Verifica si se encuentran los elementos

	signOutLinks.forEach((signOutLink) => {
		signOutLink.addEventListener("click", async function (event) {
			event.preventDefault();
			//   console.log('Sign out link clicked')
			await logout();
		});
	});
});

async function logout() {
	console.log("Logout initiated");
	try {
		const response = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/auth/logout`, {
			method: "POST",
			credentials: "include",
		});

		if (response.ok) {
			console.log("Logout exitoso");
			window.location.href = "/authentication/sign-in";
		} else {
			console.error("Error en el logout");
		}
	} catch (error) {
		console.error("Error de conexión:", error);
	}
}
