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
// ESTO FUNCIONA PERFECTO

// document.getElementById("download-pdf-btn").addEventListener("click", function () {
// 	// Verificar si el gráfico está disponible
// 	if (!chart) {
// 		console.error("El gráfico no está disponible.");
// 		return;
// 	}

// 	// Accedemos solo a las primeras cuatro series
// 	const series = chart.w.config.series.slice(0, 4); // Solo la primera, segunda, tercera y cuarta serie
// 	const categories = chart.w.config.xaxis.categories; // Categorías (factores)
// 	const encabezados = series.slice(0, 4).map((serie) => serie.name);
// 	console.log(encabezados);

// 	const bases = categories.slice(0, 4).map((category) => category);
// 	const interna = categories.slice(4, 11).map((category) => category);
// 	const externa = categories.slice(11, 18).map((category) => category);
// 	const seguridad = categories.slice(18, 20).map((category) => category);

// 	// Crear los objetos clave-valor para cada grupo
// 	const datavalores = series
// 		.map((serie) => serie.data.filter((value) => value !== null)) // Filtrar los valores no nulos
// 		.flat(); // Aplanar todos los valores en un solo arreglo

// 	const claveValorBases = bases.reduce((acc, categoria, index) => {
// 		acc[categoria] = datavalores[index]; // Asocia cada categoría de 'bases' con su valor correspondiente
// 		return acc;
// 	}, {});

// 	const claveValorInterna = interna.reduce((acc, categoria, index) => {
// 		acc[categoria] = datavalores[bases.length + index]; // Asocia cada categoría de 'interna' con su valor correspondiente
// 		return acc;
// 	}, {});

// 	const claveValorExterna = externa.reduce((acc, categoria, index) => {
// 		acc[categoria] = datavalores[bases.length + interna.length + index]; // Asocia cada categoría de 'externa' con su valor correspondiente
// 		return acc;
// 	}, {});

// 	const claveValorSeguridad = seguridad.reduce((acc, categoria, index) => {
// 		acc[categoria] = datavalores[bases.length + interna.length + externa.length + index]; // Asocia cada categoría de 'seguridad' con su valor correspondiente
// 		return acc;
// 	}, {});

// 	// Calcular promedios de cada sección
// 	const calculateAverage = (data) => {
// 		const values = Object.values(data);
// 		const total = values.reduce((sum, value) => sum + value, 0);
// 		return total / values.length;
// 	};

// 	const avgBases = calculateAverage(claveValorBases);
// 	const avgInterna = calculateAverage(claveValorInterna);
// 	const avgExterna = calculateAverage(claveValorExterna);
// 	const avgSeguridad = calculateAverage(claveValorSeguridad);

// 	// Instanciamos jsPDF
// 	const { jsPDF } = window.jspdf;
// 	const doc = new jsPDF();

// 	//===========================================> TITULO GENERAL DEL PDF
// 	doc.text("Secure Tenet - Informe de Riesgo Empresa " + nombreEmpresa, 20, 15);

// 	doc.setFontSize(16);

// 	let yPosition = 30; // Posición inicial en Y
// 	const spaceBetweenTables = 5; // Espacio entre tablas

// 	const generatePDF = () => {
// 		// ============== DATOS DE LA TABLA ==============
// 		const data = [
// 			{ title: `${encabezados[0]} `, rows: Object.entries(claveValorBases) },
// 			{ title: `${encabezados[1]} `, rows: Object.entries(claveValorInterna) },
// 			{ title: `${encabezados[2]} `, rows: Object.entries(claveValorExterna) },
// 			{ title: `${encabezados[3]} `, rows: Object.entries(claveValorSeguridad) },
// 		];

// 		// ============== CONFIGURACIÓN INICIAL DE POSICIONAMIENTO ==============
// 		let startY = 20; // Establece la posición inicial de Y para el contenido después del título
// 		let startX = 14; // Define la posición inicial en X donde comenzará la tabla
// 		const rowHeight = 8; // Espaciado entre filas de la tabla
// 		const colWidth = 40; // Ancho de cada columna de la tabla

// 		startY += 10; // Agrega espacio después del título principal

// 		// ============== DIBUJAR DATOS CON TÍTULOS INTERMEDIOS ==============
// 		data.forEach((section, index) => {
// 			doc.setFont("helvetica", "bold");
// 			doc.text(section.title, startX, startY);

// 			// Seleccionar el promedio correspondiente a cada sección
// 			const avgValues = [avgBases, avgInterna, avgExterna, avgSeguridad];
// 			const titleWidth = doc.getTextWidth(section.title);
// 			doc.setFontSize(12);
// 			doc.text(`(Promedio: ${avgValues[index].toFixed(2)}%)`, startX + titleWidth + 5, startY);

// 			doc.setFontSize(16);
// 			doc.setFont("helvetica", "normal");

// 			startY += rowHeight;

// 			section.rows.forEach((row) => {
// 				row.forEach((cell, colIndex) => {
// 					doc.setFontSize(10);
// 					doc.text(String(cell), startX + colIndex * colWidth + (colIndex === 1 ? 60 : 0), startY);
// 					doc.setFontSize(16);
// 				});
// 				startY += rowHeight;
// 			});

// 			startY += 5;
// 		});

// 		// ============== GUARDAR EL PDF ==============
// 	};

// 	generatePDF();

// 	// Guardar el PDF
// 	doc.save("informe_empresa_" + nombreEmpresa + ".pdf");
// });

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
	console.log(encabezados);

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

	// Calcular promedios de cada sección
	const calculateAverage = (data) => {
		const values = Object.values(data);
		const total = values.reduce((sum, value) => sum + value, 0);
		return total / values.length;
	};

	const avgBases = calculateAverage(claveValorBases);
	const avgInterna = calculateAverage(claveValorInterna);
	const avgExterna = calculateAverage(claveValorExterna);
	const avgSeguridad = calculateAverage(claveValorSeguridad);

	// Instanciamos jsPDF
	const { jsPDF } = window.jspdf;
	const doc = new jsPDF();

	//===========================================> TÍTULO GENERAL FORMAL DEL PDF
	doc.setFillColor(41, 128, 185); // Color de fondo azul
	doc.rect(10, 10, 190, 30, "F"); // Fondo del título

	doc.setFont("helvetica", "bold");
	doc.setFontSize(14);
	doc.setTextColor(255, 255, 255); // Texto blanco
	doc.text("INFORME DE ANÁLISIS DE RIESGO EMPRESARIAL", 105, 20, { align: "center" });

	doc.setFontSize(11);
	doc.text(`Empresa: ${nombreEmpresa}`, 105, 27, { align: "center" });

	doc.setFontSize(10);
	doc.text(`Fecha de generación: ${new Date().toLocaleDateString()}`, 105, 33, { align: "center" });

	let yPosition = 50; // Posición inicial en Y después del título
	const spaceBetweenTables = 5; // Espacio entre tablas
	// Función para generar la tabla con formato
	const generateTable = (title, data, avgValue, startY) => {
		doc.setFontSize(11);
		doc.setTextColor(255, 255, 255); // Texto blanco
		let y = startY + 5;
		doc.setFillColor(41, 128, 185); // Color azul
		doc.rect(15, y - 10, 180, 8, "F"); // Fondo del título
		doc.setFont("helvetica", "bold");
		doc.text(title, 20, startY);

		// Mostrar promedio al lado del título
		doc.setFontSize(10);
		doc.setTextColor(255, 255, 255);
		doc.text(`(Promedio: ${avgValue.toFixed(2)}%)`, 158, startY);

		doc.setFontSize(10);
		doc.setTextColor(90, 90, 90); // Gris oscuro
		doc.setFont("helvetica", "normal");

		let xPositions = [25, 110]; // Posiciones de las columnas
		y += 5; // Espaciado

		Object.entries(data).forEach(([key, value]) => {
			doc.text(key, xPositions[0], y);
			doc.text(value.toString() + "%", xPositions[1], y);
			y += 7; // Espaciado entre filas
		});

		return y;
	};

	// Generar tablas con formato correcto
	const data = [
		{ title: encabezados[0], rows: claveValorBases, avg: avgBases },
		{ title: encabezados[1], rows: claveValorInterna, avg: avgInterna },
		{ title: encabezados[2], rows: claveValorExterna, avg: avgExterna },
		{ title: encabezados[3], rows: claveValorSeguridad, avg: avgSeguridad },
	];

	data.forEach(({ title, rows, avg }) => {
		yPosition = generateTable(title, rows, avg, yPosition);
		yPosition += spaceBetweenTables;
	});

	// Función para agregar pie de página
	const addFooter = (doc) => {
		const pageCount = doc.internal.getNumberOfPages(); // Obtener el número total de páginas

		for (let i = 1; i <= pageCount; i++) {
			doc.setPage(i); // Ir a cada página

			doc.setFont("helvetica", "italic");
			doc.setFontSize(9);
			doc.setTextColor(150, 150, 150); // Gris oscuro

			doc.text("Este informe ha sido generado por Secure Tenet®", 105, 280, { align: "center" });
			doc.text("Todos los derechos reservados.", 105, 285, { align: "center" });
		}
	};

	// Llamar la función después de generar el contenido
	addFooter(doc);

	// Guardar el PDF
	doc.save("informe_empresa_" + nombreEmpresa + ".pdf");
});
