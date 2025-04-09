document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("datosGeneral");

	if (form) {
		form.addEventListener("submit", async function (event) {
			event.preventDefault();

			// Crear un objeto para almacenar los valores de los switches
			let switches = {};

			// Recolectar los datos del formulario (los valores de los sliders)
			for (let i = 0; i < 20; i++) {
				const switchElement = document.getElementById(`switch-${i}`);
				switches[`switch${i}`] = switchElement ? switchElement.value : null; // Obtener el valor del slider
			}

			// Imprimir los datos recolectados en consola
			console.log("Datos recolectados:", switches);

			// Validación de campos obligatorios (si hay algún valor vacío)
			if (Object.values(switches).includes(null)) {
				console.log("Faltan datos obligatorios");
				alert("Todos los campos son obligatorios");
				return;
			}

			// Enviar la solicitud al backend
			console.log("Enviando solicitud al backend...");

			try {
				const response = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/auth/datosGeneral`, {
					method: "POST",
					credentials: "include",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(switches), // Enviar todo el objeto con los valores de los sliders
				});

				const data = await response.json();
				console.log("Respuesta del backend:", data);

				if (response.ok) {
					alert("Datos registrados exitosamente");
					// Redirigir o actualizar la UI según sea necesario
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

document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("datosIncidentes");

	if (form) {
		form.addEventListener("submit", async function (event) {
			event.preventDefault();

			// Crear un objeto para almacenar los valores de los switches
			let switches = {};

			// Guardar primero todos los valores de switch-A
			for (let i = 0; i < 4; i++) {
				const switchA = document.getElementById(`switch-A-${i}`);
				if (switchA) {
					switches[`switch${i}`] = switchA.value; // Los `A` van primero
				}
			}

			// Guardar después todos los valores de switch-B
			for (let i = 0; i < 3; i++) {
				const switchB = document.getElementById(`switch-B-${i}`);
				if (switchB) {
					switches[`switch${i + 4}`] = switchB.value; // Los `B` van después
				}
			}

			// Imprimir los datos recolectados en consola
			console.log("Datos recolectados:", switches);

			// Validación de campos obligatorios
			if (Object.values(switches).includes(null) || Object.values(switches).includes("")) {
				console.log("Faltan datos obligatorios");
				alert("Todos los campos son obligatorios");
				return;
			}

			// Enviar la solicitud al backend
			console.log("Enviando solicitud al backend...");

			try {
				const response = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/auth/datosIncidentes`, {
					method: "POST",
					credentials: "include",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(switches), // Enviar el objeto con los valores de los switches
				});

				const data = await response.json();
				console.log("Respuesta del backend:", data);

				if (response.ok) {
					alert("Datos registrados exitosamente");
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
