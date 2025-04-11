document.addEventListener("DOMContentLoaded", () => {
	const backendURL = window.BACKEND_URL || "https://back-secure-tennet.vercel.app";
	const form = document.getElementById("registerForm");

	if (!form) return; // Evita errores si el formulario no existe

	form.addEventListener("submit", async function (event) {
		event.preventDefault();

		const email = document.getElementById("email")?.value;
		const password = document.getElementById("password")?.value;

		if (!email || !password) {
			alert("Todos los campos son obligatorios");
			return;
		}

		try {
			const response = await fetch(`${backendURL}/auth/register`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, password }),
			});

			const data = await response.json();

			if (response.ok) {
				alert("Usuario registrado exitosamente");
				window.location.href = "/authentication/sign-in";
			} else {
				alert(data.error || "Error en el registro");
			}
		} catch (error) {
			console.error("Error en el registro:", error);
			alert("Hubo un problema con el registro");
		}
	});
});
