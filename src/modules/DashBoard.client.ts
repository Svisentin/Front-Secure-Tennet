/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/* eslint-disable max-lines */
import ApexCharts from "apexcharts";

const getMainChartOptions = () => {
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
				show: false,
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
			show: true,
			borderColor: mainChartColors.borderColor,
			strokeDashArray: 1,
			padding: {
				left: 35,
				bottom: 15,
			},
		},
		series: [
			{
				name: "Bases del Tratamiento",
				data: [
					170,
					180,
					164,
					145,
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					null,
				],
				color: "#1A56DB",
			},
			{
				name: "Auditoría Interna",
				data: [
					null,
					null,
					null,
					null,
					120,
					240,
					300,
					190,
					180,
					170,
					160,
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					null,
				],
				color: "#FDBA8C",
			},
			{
				name: "Auditoría Externa",
				data: [
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					150,
					200,
					140,
					130,
					180,
					160,
					170,
					null,
					null,
				],
				color: "#17B0BD",
			},
			{
				name: "Seguridad de Datos",
				data: [
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					null,
					200,
					180,
				],
				color: "#9520c7",
			},
		],
		xaxis: {
			categories: [
				"Ámbito territorial",
				"Comunicación",
				"Qué trata la empresa",
				"Extensión del tratamiento",
				"Datos identificatorios",
				"Monitoreo de datos",
				"Situación económica y financiera",
				"Datos de localización y biométricos",
				"Datos especiales o sensibles",
				"Identificadores",
				"Legal-Contacto",
				"Datos identificatorios",
				"Tipos de Usuarios",
				"Hábitos y preferencias",
				"Situación económica",
				"Contratación de servicios",
				"Transferencia de datos",
				"Inteligencia Artificial",
				"General",
				"Incidentes",
			],
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
			labels: {
				style: {
					colors: mainChartColors.labelColor,
					fontSize: "14px",
					fontWeight: 500,
				},
				formatter(value: any) {
					return `${value}`;
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
};

if (document.getElementById("chart")) {
	const options = getMainChartOptions();
	console.log(options);
	const chart = new ApexCharts(document.getElementById("chart"), options);
	chart.render();
}
