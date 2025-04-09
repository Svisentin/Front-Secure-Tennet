document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("datosIdentificatorios");

	if (form) {
		form.addEventListener("submit", async function (event) {
			event.preventDefault();

			// Crear un objeto para almacenar los valores de los switches
			let switches = {};

			// Recolectar los datos del formulario (los valores de los sliders)
			for (let i = 0; i < 16; i++) {
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
				const response = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/auth/audIntIdentificatorios`, {
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
	const form = document.getElementById("datosMonitoreo");

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
				const response = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/auth/audIntMonitoreo`, {
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
	const form = document.getElementById("datosSituacion");

	if (form) {
		form.addEventListener("submit", async function (event) {
			event.preventDefault();

			// Crear un objeto para almacenar los valores de los switches
			let switches = {};

			// Recolectar los datos del formulario (los valores de los sliders)
			for (let i = 0; i < 5; i++) {
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
				const response = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/auth/audIntSituacion`, {
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
	const form = document.getElementById("datosLocalizacionyBiometricos");

	if (form) {
		form.addEventListener("submit", async function (event) {
			event.preventDefault();

			// Crear un objeto para almacenar los valores de los switches
			let switches = {};

			// Recolectar los datos del formulario (los valores de los sliders)
			for (let i = 0; i < 8; i++) {
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
				const response = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/auth/audIntLocalizacionyBiometricos`, {
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
	const form = document.getElementById("datosEspeciales");

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
				const response = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/auth/audIntEspeciales`, {
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
	const form = document.getElementById("datosIdentificadores");

	if (form) {
		form.addEventListener("submit", async function (event) {
			event.preventDefault();

			// Crear un objeto para almacenar los valores de los switches
			let switches = {};

			// Recolectar los datos del formulario (los valores de los sliders)
			for (let i = 0; i < 5; i++) {
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
				const response = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/auth/audIntIdentificadores`, {
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
	const form = document.getElementById("datosLegalContrato");

	if (form) {
		form.addEventListener("submit", async function (event) {
			event.preventDefault();

			// Crear un objeto para almacenar los valores de los switches
			let switches = {};

			// Recolectar los datos del formulario (los valores de los sliders)
			for (let i = 0; i < 5; i++) {
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
				const response = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/auth/audIntLegalContrato`, {
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
