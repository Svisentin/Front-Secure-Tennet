document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("datosAmbitoTerritorial");

	if (form) {
		form.addEventListener("submit", async function (event) {
			event.preventDefault();

			// Crear un objeto para almacenar los valores de los switches
			let switches = {};

			// Recolectar los datos del formulario (los valores de los sliders)
			for (let i = 0; i < 9; i++) {
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
				const response = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/auth/ambitoTerritorial`, {
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
	const form = document.getElementById("datosComunicacion");

	if (form) {
		form.addEventListener("submit", async function (event) {
			event.preventDefault();

			// Crear un objeto para almacenar los valores de los switches
			let switches = {};

			// Recolectar los datos del formulario (los valores de los sliders)
			for (let i = 0; i < 7; i++) {
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
				const response = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/auth/comunicacion`, {
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
	const form = document.getElementById("datosEmpresa");

	if (form) {
		form.addEventListener("submit", async function (event) {
			event.preventDefault();

			// Crear un objeto para almacenar los valores de los switches
			let switches = {};

			// Recolectar los datos del formulario (los valores de los sliders)
			for (let i = 0; i < 9; i++) {
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
				const response = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/auth/datosEmpresa`, {
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
	const form = document.getElementById("datosExtensionFinalidad");

	if (form) {
		form.addEventListener("submit", async function (event) {
			event.preventDefault();
			// console.log("toque el boton");

			// Crear un objeto para almacenar los valores de los switches
			let switches = {};

			// Guardar primero todos los valores de switch-A
			for (let i = 0; i < 7; i++) {
				const switchA = document.getElementById(`switch-A-${i}`);
				if (switchA) {
					switches[`switch${i}`] = switchA.value; // Los `A` van primero
				}
			}

			// Cargar los valores de los switches-B
			for (let i = 0; i < 4; i++) {
				const switchB = document.getElementById(`switch-B-${i}`);
				if (switchB) {
					switches[`switch${i + 7}`] = switchB.value; // Los `B` van después
				}
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
				const response = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/auth/datosExtensionFinalidad`, {
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

// document.addEventListener("DOMContentLoaded", function () {
// 	const form = document.getElementById("datosFinalidad");

// 	if (form) {
// 		form.addEventListener("submit", async function (event) {
// 			event.preventDefault();

// 			// Crear un objeto para almacenar los valores de los switches
// 			let switches = {};

// 			// Recolectar los datos del formulario (los valores de los sliders)
// 			for (let i = 0; i < 4; i++) {
// 				const switchElement = document.getElementById(`switch-fin-${i}`);
// 				switches[`switch${i}`] = switchElement ? switchElement.value : null; // Obtener el valor del slider
// 			}

// 			// Imprimir los datos recolectados en consola
// 			console.log("Datos recolectados:", switches);

// 			// Validación de campos obligatorios (si hay algún valor vacío)
// 			if (Object.values(switches).includes(null)) {
// 				console.log("Faltan datos obligatorios");
// 				alert("Todos los campos son obligatorios");
// 				return;
// 			}

// 			// Enviar la solicitud al backend
// 			console.log("Enviando solicitud al backend...");

// 			try {
// 				const response = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/auth/datosFinalidad`, {
// 					method: "POST",
// 					credentials: "include",
// 					headers: {
// 						"Content-Type": "application/json",
// 					},
// 					body: JSON.stringify(switches), // Enviar todo el objeto con los valores de los sliders
// 				});

// 				const data = await response.json();
// 				console.log("Respuesta del backend:", data);

// 				if (response.ok) {
// 					alert("Datos registrados exitosamente");
// 					// Redirigir o actualizar la UI según sea necesario
// 				} else {
// 					alert(data.error || "Error al registrar los datos");
// 				}
// 			} catch (error) {
// 				console.error("Error al registrar los datos:", error);
// 				alert("Hubo un problema al registrar los datos");
// 			}
// 		});
// 	}
// });
