document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("datosTratamiento");

	if (form) {
		form.addEventListener("submit", async function (event) {
			event.preventDefault();

			// Recolectar los datos del formulario
			const responsableNombre = document.getElementById("responsable-nombre").value;
			const responsableCuitNif = document.getElementById("responsable-cuit").value;
			const responsableDomicilio = document.getElementById("responsable-domicilio").value;
			const responsableCorreo = document.getElementById("responsable-correo").value;
			const responsableTelefono = document.getElementById("responsable-telefono").value;
			const responsableDelegado = document.getElementById("responsable-delegado").value;
			const finalidadTratamiento = document.getElementById("finalidad-tratamiento").value;
			const rubro = document.getElementById("rubro").value;
			const encargadoNombre = document.getElementById("encargado-nombre").value;
			const encargadoCuitNif = document.getElementById("encargado-cuit").value;
			const encargadoDomicilio = document.getElementById("encargado-domicilio").value;
			const encargadoCorreo = document.getElementById("encargado-correo").value;
			const encargadoTelefono = document.getElementById("encargado-telefono").value;
			const encargadoDelegado = document.getElementById("encargado-delegado").value;
			const serviciosSeleccionados = [];
			document.querySelectorAll("input[name='servicios-prestados']:checked").forEach((checkbox) => {
				serviciosSeleccionados.push(checkbox.value);
			});

			// Imprimir los datos recolectados en consola
			console.log("Datos recolectados:", {
				responsableNombre,
				responsableCuitNif,
				responsableDomicilio,
				responsableCorreo,
				responsableTelefono,
				responsableDelegado,
				finalidadTratamiento,
				rubro,
				encargadoNombre,
				encargadoCuitNif,
				encargadoDomicilio,
				encargadoCorreo,
				encargadoTelefono,
				encargadoDelegado,
				serviciosSeleccionados,
			});

			// Validación de campos obligatorios
			if (
				!responsableNombre ||
				!responsableCuitNif ||
				!responsableDomicilio ||
				!responsableCorreo ||
				!responsableTelefono ||
				!responsableDelegado ||
				!finalidadTratamiento ||
				!rubro ||
				!encargadoNombre ||
				!encargadoCuitNif ||
				!encargadoDomicilio ||
				!encargadoCorreo ||
				!encargadoTelefono ||
				!encargadoDelegado ||
				serviciosSeleccionados.length === 0
			) {
				console.log("Faltan datos obligatorios");
				alert("Todos los campos son obligatorios");
				return;
			}

			// Enviar la solicitud al backend
			console.log("Enviando solicitud al backend...");

			try {
				const response = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/auth/datosTratamiento`, {
					method: "POST",
					credentials: "include",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						responsableNombre,
						responsableCuitNif,
						responsableDomicilio,
						responsableCorreo,
						responsableTelefono,
						responsableDelegado,
						finalidadTratamiento,
						rubro,
						encargadoNombre,
						encargadoCuitNif,
						encargadoDomicilio,
						encargadoCorreo,
						encargadoTelefono,
						encargadoDelegado,
						serviciosSeleccionados,
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
