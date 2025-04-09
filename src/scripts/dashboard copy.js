// document.addEventListener("DOMContentLoaded", async function () {
// 	async function fetchChartData() {
// 		try {
// 			const response = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/auth/chartData`, {
// 				method: "POST",
// 				credentials: "include",
// 				headers: {
// 					"Content-Type": "application/json",
// 				},
// 			});

// 			if (!response.ok) {
// 				throw new Error(`Error en la petición: ${response.status}`);
// 			}

// 			const data = await response.json();
// 			return data;
// 		} catch (error) {
// 			console.error("Error al obtener los datos del gráfico:", error);
// 			return null;
// 		}
// 	}

// 	// Esperamos a que los datos sean cargados antes de seguir
// 	const chartData = await fetchChartData();

// 	// Verificamos si los datos existen antes de acceder a ellos
// 	if (!chartData) {
// 		console.error("No se pudieron obtener los datos del gráfico.");
// 		return;
// 	}

// 	// Ahora podemos extraer el nombre de la empresa
// 	const nombreEmpresa = chartData.nombreEmpresa;

// 	// Modificamos el span solo si el nombre y el elemento existen
// 	const nuevoNombreEmpresa = document.getElementById("nombreEmpresa");
// 	if (nombreEmpresa && nuevoNombreEmpresa) {
// 		nuevoNombreEmpresa.innerHTML = nombreEmpresa;
// 	} else {
// 		console.error("El nombre de la empresa no está definido o el elemento no existe.");
// 	}

// 	// Función para configurar las opciones del gráfico

// 	function getMainChartOptions(chartData) {
// 		let mainChartColors = {
// 			borderColor: "#F3F4F6",
// 			labelColor: "#6B7280",
// 			opacityFrom: 0.45,
// 			opacityTo: 0,
// 		};

// 		if (document.documentElement.classList.contains("dark")) {
// 			mainChartColors = {
// 				borderColor: "#374151",
// 				labelColor: "#9CA3AF",
// 				opacityFrom: 0,
// 				opacityTo: 0.15,
// 			};
// 		}

// 		return {
// 			chart: {
// 				height: 600,
// 				type: "bar",
// 				stacked: true,
// 				fontFamily: "Inter, sans-serif",
// 				foreColor: mainChartColors.labelColor,
// 				toolbar: {
// 					show: true,
// 					tools: {
// 						download: true, // Habilitar el botón de descarga
// 					},
// 				},
// 			},
// 			plotOptions: {
// 				bar: {
// 					horizontal: false,
// 					columnWidth: "55%",
// 					endingShape: "rounded",
// 				},
// 			},
// 			dataLabels: {
// 				enabled: false,
// 			},
// 			stroke: {
// 				show: true,
// 				width: 2,
// 				colors: ["transparent"],
// 			},
// 			fill: {
// 				opacity: 1,
// 			},
// 			tooltip: {
// 				style: {
// 					fontSize: "14px",
// 					fontFamily: "Inter, sans-serif",
// 				},
// 			},

// 			grid: {
// 				borderColor: "#4B5563",
// 				row: {
// 					colors: ["#D32F2F", "#FF9800", "#FFEB3B", "#FFF9C4"],
// 					// colors: ["#E74C3C", "#E67E22", "#F1C40F", "#2ECC71"],

// 					opacity: 0.4,
// 				},
// 				strokeDashArray: 4,
// 				padding: {
// 					left: 35,
// 					bottom: 15,
// 				},
// 			},
// 			series: chartData.series,
// 			xaxis: {
// 				categories: chartData.categories,
// 				labels: {
// 					style: {
// 						colors: mainChartColors.labelColor,
// 						fontSize: "12px",
// 						fontWeight: 500,
// 					},
// 				},
// 				axisBorder: {
// 					color: mainChartColors.borderColor,
// 				},
// 				axisTicks: {
// 					color: mainChartColors.borderColor,
// 				},
// 				crosshairs: {
// 					show: true,
// 					position: "back",
// 					stroke: {
// 						color: mainChartColors.borderColor,
// 						width: 1,
// 						dashArray: 10,
// 					},
// 				},
// 			},
// 			yaxis: {
// 				min: 0,
// 				max: 100,
// 				tickAmount: 4,
// 				labels: {
// 					style: {
// 						colors: mainChartColors.labelColor,
// 						fontSize: "14px",
// 						fontWeight: 500,
// 					},
// 					formatter(value) {
// 						return `${value}%`;
// 					},
// 				},
// 			},
// 			legend: {
// 				fontSize: "14px",
// 				fontWeight: 500,
// 				fontFamily: "Inter, sans-serif",
// 				labels: {
// 					colors: [mainChartColors.labelColor],
// 				},
// 				itemMargin: {
// 					horizontal: 10,
// 				},
// 			},
// 			responsive: [
// 				{
// 					breakpoint: 1265,
// 					options: {
// 						xaxis: {
// 							labels: {
// 								show: false,
// 							},
// 						},
// 					},
// 				},
// 			],
// 		};
// 	}

// 	// Generar el gráfico con los datos obtenidos
// 	const options = getMainChartOptions(chartData);
// 	const chart = new ApexCharts(document.getElementById("chart"), options);
// 	chart.render();
// });

let chart; // Definir chart en un ámbito global
let nombreEmpresa = "";

document.addEventListener("DOMContentLoaded", async function () {
	async function fetchChartData() {
		try {
			const response = await fetch(`${import.meta.env.PUBLIC_BACKEND_URL}/auth/chartData`, {
				method: "POST",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (!response.ok) {
				throw new Error(`Error en la petición: ${response.status}`);
			}

			const data = await response.json();
			return data;
		} catch (error) {
			console.error("Error al obtener los datos del gráfico:", error);
			return null;
		}
	}

	// Esperamos a que los datos sean cargados antes de seguir
	const chartData = await fetchChartData();
	// console.log(chartData);

	// Verificamos si los datos existen antes de acceder a ellos
	if (!chartData) {
		console.error("No se pudieron obtener los datos del gráfico.");
		return;
	}

	// Ahora podemos extraer el nombre de la empresa
	nombreEmpresa = chartData.nombreEmpresa;

	// Modificamos el span solo si el nombre y el elemento existen
	const nuevoNombreEmpresa = document.getElementById("nombreEmpresa");
	if (nombreEmpresa && nuevoNombreEmpresa) {
		nuevoNombreEmpresa.innerHTML = nombreEmpresa;
	} else {
		console.error("El nombre de la empresa no está definido o el elemento no existe.");
	}

	// Función para configurar las opciones del gráfico
	function getMainChartOptions(chartData) {
		let mainChartColors = {
			borderColor: "#F3F4F6",
			labelColor: "#6B7280",
			opacityFrom: 0.45,
			opacityTo: 0,
		};

		if (document.documentElement.classList.contains("dark")) {
			mainChartColors = {
				borderColor: "#374151",
				labelColor: "#9CA3AF",
				opacityFrom: 0,
				opacityTo: 0.15,
			};
		}

		return {
			chart: {
				height: 600,
				type: "bar",
				stacked: true,
				fontFamily: "Inter, sans-serif",
				foreColor: mainChartColors.labelColor,
				toolbar: {
					show: true,
					tools: {
						download: true, // Habilitar el botón de descarga
					},
				},
			},
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: "55%",
					endingShape: "rounded",
				},
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				show: true,
				width: 2,
				colors: ["transparent"],
			},
			fill: {
				opacity: 1,
			},
			tooltip: {
				style: {
					fontSize: "14px",
					fontFamily: "Inter, sans-serif",
				},
			},

			grid: {
				borderColor: "#4B5563",
				row: {
					colors: ["#D32F2F", "#FF9800", "#FFEB3B", "#FFF9C4"],
					opacity: 0.4,
				},
				strokeDashArray: 4,
				padding: {
					left: 35,
					bottom: 15,
				},
			},
			series: chartData.series,
			xaxis: {
				categories: chartData.categories,
				labels: {
					style: {
						colors: mainChartColors.labelColor,
						fontSize: "12px",
						fontWeight: 500,
					},
				},
				axisBorder: {
					color: mainChartColors.borderColor,
				},
				axisTicks: {
					color: mainChartColors.borderColor,
				},
				crosshairs: {
					show: true,
					position: "back",
					stroke: {
						color: mainChartColors.borderColor,
						width: 1,
						dashArray: 10,
					},
				},
			},
			yaxis: {
				min: 0,
				max: 100,
				tickAmount: 4,
				labels: {
					style: {
						colors: mainChartColors.labelColor,
						fontSize: "14px",
						fontWeight: 500,
					},
					formatter(value) {
						return `${value}%`;
					},
				},
			},
			legend: {
				fontSize: "14px",
				fontWeight: 500,
				fontFamily: "Inter, sans-serif",
				labels: {
					colors: [mainChartColors.labelColor],
				},
				itemMargin: {
					horizontal: 10,
				},
			},
			responsive: [
				{
					breakpoint: 1265,
					options: {
						xaxis: {
							labels: {
								show: false,
							},
						},
					},
				},
			],
		};
	}

	// Generar el gráfico con los datos obtenidos
	const options = getMainChartOptions(chartData);
	chart = new ApexCharts(document.getElementById("chart"), options);
	chart.render();
});

// Agregar evento para descargar el PDF
document.getElementById("download-pdf-btn").addEventListener("click", function () {
	// Verificar si el gráfico está disponible
	if (!chart) {
		console.error("El gráfico no está disponible.");
		return;
	}

	// Accedemos solo a las primeras cuatro series
	const series = chart.w.config.series.slice(0, 4); // Solo la primera, segunda, tercera y cuarta serie
	const categories = chart.w.config.xaxis.categories; // Categorías (factores)
	const encabezados = series.slice(0, 4).map((serie) => serie.name);

	const bases = categories.slice(0, 4).map((category) => category);
	const interna = categories.slice(4, 11).map((category) => category);
	const externa = categories.slice(11, 18).map((category) => category);
	const seguridad = categories.slice(18, 20).map((category) => category);

	// Crear los objetos clave-valor para cada grupo
	const datavalores = series
		.map((serie) => serie.data.filter((value) => value !== null)) // Filtrar los valores no nulos
		.flat(); // Aplanar todos los valores en un solo arreglo

	const claveValorBases = bases.reduce((acc, categoria, index) => {
		acc[categoria] = datavalores[index]; // Asocia cada categoría de 'bases' con su valor correspondiente
		return acc;
	}, {});

	const claveValorInterna = interna.reduce((acc, categoria, index) => {
		acc[categoria] = datavalores[bases.length + index]; // Asocia cada categoría de 'interna' con su valor correspondiente
		return acc;
	}, {});

	const claveValorExterna = externa.reduce((acc, categoria, index) => {
		acc[categoria] = datavalores[bases.length + interna.length + index]; // Asocia cada categoría de 'externa' con su valor correspondiente
		return acc;
	}, {});

	const claveValorSeguridad = seguridad.reduce((acc, categoria, index) => {
		acc[categoria] = datavalores[bases.length + interna.length + externa.length + index]; // Asocia cada categoría de 'seguridad' con su valor correspondiente
		return acc;
	}, {});

	// Instanciamos jsPDF
	const { jsPDF } = window.jspdf;
	const doc = new jsPDF();

	//===========================================> TITULO GENERAL DEL PDF
	doc.setFontSize(16);

	doc.text("Secure Tenet - Informe de Riesgo Empresa " + nombreEmpresa, 20, 15);

	let yPosition = 30; // Posición inicial en Y
	const spaceBetweenTables = 5; // Espacio entre tablas

	// Función para generar la tabla manualmente con formato
	const generateTable = (title, data, startY) => {
		// ===========================================>FORMATO PARA TITULOS  BASES INTERNA EXTERNA SEGURIDAD
		doc.setFontSize(11);
		doc.setTextColor(255, 255, 255); // Texto blanco
		let y = startY + 5; // Ajustar espacio después del título
		doc.setFillColor(41, 128, 185); // Color de fondo azul
		doc.rect(15, y - 10, 180, 8, "F"); // Rectángulo de encabezado
		doc.setFont("helvetica", "bold");

		doc.text(title, 20, startY); // ===========================================>COLOCA LOS TITULOS

		// Dibujar encabezados
		// doc.setFillColor(41, 128, 185); // Color de fondo azul
		// doc.rect(20, y, 170, 10, "F"); // Rectángulo de encabezado
		// ===========================================>FORMATO PARA TITULOS  BASES INTERNA EXTERNA SEGURIDAD
		doc.setFontSize(10);
		doc.setTextColor(255, 0, 0); // Rojo puro

		// Encabezados ----> NO LOS QUIERO
		// const headers = ["Categoría", "Valor (%)"];
		let xPositions = [25, 110]; // Posiciones X para cada columna

		// headers.forEach((header, index) => {
		// 	doc.text(header, xPositions[index], y + 7);
		// });

		// Volver a color negro para los datos
		doc.setTextColor(90, 90, 90); // Gris oscuro
		doc.setFont("helvetica", "normal");

		y += 5; // Espaciado después de los encabezados

		// Dibujar filas de datos
		Object.entries(data).forEach(([key, value]) => {
			doc.text(key, xPositions[0], y); // Imprimir nombre de la categoría
			doc.text(value.toString() + "%", xPositions[1], y); // Imprimir valor con '%'
			y += 7; // Espaciado entre filas

			// Línea separadora entre filas
			// doc.setDrawColor(200, 200, 200);
			// doc.line(15, y - 5, 190, y - 5);
		});

		return y; // Retornar la posición Y final
	};

	// Generar tablas para cada grupo de datos
	yPosition = generateTable(encabezados[0], claveValorBases, yPosition); // Generar tabla de "Bases"
	yPosition += spaceBetweenTables; // Añadir espacio entre tablas

	yPosition = generateTable(encabezados[1], claveValorInterna, yPosition); // Generar tabla de "Interna"
	yPosition += spaceBetweenTables;

	yPosition = generateTable(encabezados[2], claveValorExterna, yPosition); // Generar tabla de "Externa"
	yPosition += spaceBetweenTables;

	yPosition = generateTable(encabezados[3], claveValorSeguridad, yPosition); // Generar tabla de "Seguridad"

	// Guardar el PDF
	doc.save("informe_empresa_" + nombreEmpresa + ".pdf");
});
