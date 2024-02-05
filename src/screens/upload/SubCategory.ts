const subCategories = {
	accessories: [
		{ id: "1", type: "Screw Drivers" },
		{ id: "2", type: "Connecting Wires" },
		{ id: "3", type: "Switches" },
		{ id: "4", type: "Pliers" },
		{ id: "5", type: "Soldering Tools" },
		{ id: "6", type: "Others" },
	],
	batteries: [
		{ id: "1", type: "Lithium Rechargeable" },
		{ id: "2", type: "Lithium Non Rechargeable" },
		{ id: "3", type: "Lead Acid Cells" },
		{ id: "4", type: "Alkaline Cells" },
		{ id: "5", type: "Nickel Cells" },
		{ id: "6", type: "Others" },
	],
	inductors: [
		{ id: "1", type: "Iron Cores" },
		{ id: "2", type: "Air Cores" },
		{ id: "3", type: "Ferrite Core" },
		{ id: "4", type: "Wires" },
		{ id: "5", type: "Coils" },
		{ id: "6", type: "Others" },
	],
	ics: [
		{ id: "1", type: "Timers" },
		{ id: "2", type: "Comparators" },
		{ id: "3", type: "Linear IC's" },
		{ id: "4", type: "Micro Controllers" },
		{ id: "5", type: "Multiplexers" },
		{ id: "6", type: "Others" },
	],
	modules: [
		{ id: "1", type: "Charger Modules" },
		{ id: "2", type: "Boost Converters" },
		{ id: "3", type: "Bulk Converters" },
		{ id: "4", type: "Transmitters" },
		{ id: "5", type: "Micro Controllers" },
		{ id: "6", type: "Others" },
	],
	diodes: [
		{ id: "1", type: "Zener Diodes" },
		{ id: "2", type: "Schottky Diodes" },
		{ id: "3", type: "Light Emitting Diodes" },
		{ id: "4", type: "Rectifying Diode" },
		{ id: "5", type: "Silicon Controlled Rectifier" },
		{ id: "6", type: "Others" },
	],
	semiConductors: [
		{ id: "1", type: "NPN Transistors" },
		{ id: "2", type: "PNP Transistors" },
		{ id: "3", type: "Mosfets" },
		{ id: "4", type: "Thyristors" },
		{ id: "5", type: "Voltage Regulators" },
		{ id: "6", type: "Others" },
	],
	capacitors: [
		{ id: "1", type: "Ceramic Capacitors" },
		{ id: "2", type: "Variable Capacitors" },
		{ id: "3", type: "Mica Capacitors" },
		{ id: "4", type: "Electrolytic Capacitors" },
		{ id: "5", type: "Polyester Capacitors" },
		{ id: "6", type: "Others" },
	],
	resistors: [
		{ id: "1", type: "Fixed Resistors" },
		{ id: "2", type: "Variable Resistors" },
		{ id: "3", type: "Thermistors" },
		{ id: "4", type: "Photo Resistors" },
		{ id: "5", type: "Potentiometers" },
		{ id: "6", type: "Others" },
	],
	sensors: [
		{ id: "1", type: "Proximity Sensors" },
		{ id: "2", type: "Pressure Sensors" },
		{ id: "3", type: "Infrared Sensors" },
		{ id: "4", type: "Motion Sensors" },
		{ id: "5", type: "Temperature Sensors" },
		{ id: "6", type: "Others" },
	],
};
export const switcher = (cat: string) => {
	switch (cat) {
		case "accessories":
			return subCategories.accessories;
		case "batteries":
			return subCategories.batteries;
		case "capacitors":
			return subCategories.capacitors;
		case "diodes":
			return subCategories.diodes;
		case "ics":
			return subCategories.ics;
		case "inductors":
			return subCategories.inductors;
		case "modules":
			return subCategories.modules;
		case "resistors":
			return subCategories.resistors;
		case "semiConductors":
			return subCategories.semiConductors;
		case "sensors":
			return subCategories.sensors;
		default:
			return subCategories.accessories;
	}
};
