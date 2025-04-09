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
				const response = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/auth/audExtIdentificatorios`, {
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
	const form = document.getElementById("datosTiposdeUsuario");

	if (form) {
		form.addEventListener("submit", async function (event) {
			event.preventDefault();

			// Crear un objeto para almacenar los valores de los switches
			let switches = {};

			// Guardar primero todos los valores de switch-A
			for (let i = 0; i < 2; i++) {
				const switchA = document.getElementById(`switch-A-${i}`);
				if (switchA) {
					switches[`switch${i}`] = switchA.value; // Los `A` van primero
				}
			}

			// Cargar los valores de los switches-B
			for (let i = 0; i < 3; i++) {
				const switchB = document.getElementById(`switch-B-${i}`);
				if (switchB) {
					switches[`switch${i + 2}`] = switchB.value; // Los `B` van después
				}
			}

			// Cargar los valores de los switches-C
			for (let i = 0; i < 3; i++) {
				const switchC = document.getElementById(`switch-C-${i}`);
				if (switchC) {
					switches[`switch${i + 5}`] = switchC.value; // Los `C` van después
				}
			}

			// Cargar los valores de los switches-D
			for (let i = 0; i < 4; i++) {
				const switchD = document.getElementById(`switch-D-${i}`);
				if (switchD) {
					switches[`switch${i + 8}`] = switchD.value; // Los `D` van después
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
				const response = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/auth/audExtTiposdeUsuarios`, {
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
document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("datosHabitos");

	if (form) {
		form.addEventListener("submit", async function (event) {
			event.preventDefault();

			// Crear un objeto para almacenar los valores de los switches
			let switches = {};

			// Recolectar los datos del formulario (los valores de los sliders)
			for (let i = 0; i < 4; i++) {
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
				const response = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/auth/audExtHabitos`, {
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
	const form = document.getElementById("datosSituacionEconomica");

	if (form) {
		form.addEventListener("submit", async function (event) {
			event.preventDefault();

			// Crear un objeto para almacenar los valores de los switches
			let switches = {};

			// Recolectar los datos del formulario (los valores de los sliders)
			for (let i = 0; i < 3; i++) {
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
				const response = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/auth/audExtSituacionEconomica`, {
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
	const form = document.getElementById("datosContratacion");

	if (form) {
		form.addEventListener("submit", async function (event) {
			event.preventDefault();

			// Crear un objeto para almacenar los valores de los switches
			let switches = {};

			// Guardar primero todos los valores de switch-A
			for (let i = 0; i < 3; i++) {
				const switchA = document.getElementById(`switch-A-${i}`);
				if (switchA) {
					switches[`switch${i}`] = switchA.value; // Los `A` van primero
				}
			}

			// Cargar los valores de los switches-B
			for (let i = 0; i < 4; i++) {
				const switchB = document.getElementById(`switch-B-${i}`);
				if (switchB) {
					switches[`switch${i + 3}`] = switchB.value; // Los `B` van después
				}
			}

			// Cargar los valores de los switches-C
			for (let i = 0; i < 9; i++) {
				const switchC = document.getElementById(`switch-C-${i}`);
				if (switchC) {
					switches[`switch${i + 7}`] = switchC.value; // Los `C` van después
				}
			}

			// Cargar los valores de los switches-D
			for (let i = 0; i < 6; i++) {
				const switchD = document.getElementById(`switch-D-${i}`);
				if (switchD) {
					switches[`switch${i + 16}`] = switchD.value; // Los `D` van después
				}
			}

			// Cargar los valores de los switches-E
			for (let i = 0; i < 8; i++) {
				const switchE = document.getElementById(`switch-E-${i}`);
				if (switchE) {
					switches[`switch${i + 22}`] = switchE.value; // Los `E` van después
				}
			}
			// Cargar los valores de los switches-F

			for (let i = 0; i < 6; i++) {
				const switchE = document.getElementById(`switch-F-${i}`);
				if (switchE) {
					switches[`switch${i + 30}`] = switchE.value; // Los `E` van después
				}
			}
			// Cargar los valores de los switches-G

			for (let i = 0; i < 4; i++) {
				const switchE = document.getElementById(`switch-G-${i}`);
				if (switchE) {
					switches[`switch${i + 36}`] = switchE.value; // Los `E` van después
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
				const response = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/auth/audExtContratacion`, {
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

document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("datosTransferencia");

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
				const response = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/auth/audExtTransferencia`, {
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
	const form = document.getElementById("datosIA");

	if (form) {
		form.addEventListener("submit", async function (event) {
			event.preventDefault();

			// Crear un objeto para almacenar los valores de los switches
			let switches = {};

			// Guardar primero todos los valores de switch-A
			for (let i = 0; i < 6; i++) {
				const switchA = document.getElementById(`switch-A-${i}`);
				if (switchA) {
					switches[`switch${i}`] = switchA.value; // Los `A` van primero
				}
			}

			// Cargar los valores de los switches-B
			for (let i = 0; i < 2; i++) {
				const switchB = document.getElementById(`switch-B-${i}`);
				if (switchB) {
					switches[`switch${i + 6}`] = switchB.value; // Los `B` van después
				}
			}

			// Cargar los valores de los switches-C
			for (let i = 0; i < 1; i++) {
				const switchC = document.getElementById(`switch-C-${i}`);
				if (switchC) {
					switches[`switch${i + 8}`] = switchC.value; // Los `C` van después
				}
			}

			// Cargar los valores de los switches-D
			for (let i = 0; i < 7; i++) {
				const switchD = document.getElementById(`switch-D-${i}`);
				if (switchD) {
					switches[`switch${i + 9}`] = switchD.value; // Los `D` van después
				}
			}

			// Cargar los valores de los switches-E
			for (let i = 0; i < 9; i++) {
				const switchE = document.getElementById(`switch-E-${i}`);
				if (switchE) {
					switches[`switch${i + 16}`] = switchE.value; // Los `E` van después
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
				const response = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/auth/audExtdatosIA`, {
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
