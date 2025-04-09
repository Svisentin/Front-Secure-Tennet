document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("passwordSettings");
	if (form) {
		form.addEventListener("submit", async function (event) {
			event.preventDefault();

			// Recolectar los datos del formulario
			const currentPassword = document.getElementById("current-password").value;
			const confirmPassword = document.getElementById("confirm-password").value;
			const password = document.getElementById("password").value;

			// Imprimir los datos recolectados en consola
			console.log("Datos recolectados:", {
				currentPassword,
				confirmPassword,
				password,
			});

			// Validación de campos obligatorios
			if (!currentPassword || !confirmPassword || !password) {
				console.log("Faltan datos obligatorios");
				alert("Todos los campos son obligatorios");
				return;
			}

			// Enviar la solicitud al backend
			console.log("Enviando solicitud al backend...");

			try {
				const response = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/auth/passwordSettings`, {
					method: "POST",
					credentials: "include",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						currentPassword,
						confirmPassword,
						password,
					}),
				});

				const data = await response.json();
				console.log("Respuesta del backend:", data);

				if (response.ok) {
					alert("Datos registrados exitosamente");
					// Redirigir o actualizar la UI
				} else {
					alert(data.error || "Error al registrar los datos");
				}
			} catch (error) {
				console.error("Error al registrar los datos:", error);
				alert("Hubo un problema al registrar los datos");
			}
		});
	}
});
