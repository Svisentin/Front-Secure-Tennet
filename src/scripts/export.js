// document.getElementById("download-pdf-btn").addEventListener("click", function () {
// 	// Suponiendo que ya tienes chartData cargado
// 	const chartData = {
// 		categories: ["Enero", "Febrero", "Marzo", "Abril"], // Ejemplo de categorías
// 		series: [
// 			{ name: "Serie 1", data: [30, 40, 45, 50] },
// 			{ name: "Serie 2", data: [25, 35, 40, 55] },
// 		],
// 	};

// 	// Formatear los datos para pasarlos a autoTable
// 	const tableData = [];
// 	const header = ["Mes", ...chartData.series.map((s) => s.name)]; // Encabezado con las series

// 	for (let i = 0; i < chartData.categories.length; i++) {
// 		const row = [chartData.categories[i]]; // Comienza con la categoría (mes)
// 		chartData.series.forEach((series) => {
// 			row.push(series.data[i]); // Añadir los valores de cada serie
// 		});
// 		tableData.push(row); // Añadir la fila completa
// 	}

// 	// Crear el documento PDF
// 	const { jsPDF } = window.jspdf;
// 	const doc = new jsPDF();

// 	// Añadir título
// 	doc.text("Resultados del Gráfico", 20, 20);

// 	// Usar autoTable para agregar la tabla con los datos
// 	doc.autoTable({
// 		head: [header], // El encabezado
// 		body: tableData, // Los datos
// 		startY: 30, // Empezar desde abajo del título
// 	});

// 	// Guardar el PDF
// 	doc.save("grafico_con_datos.pdf");
// });
