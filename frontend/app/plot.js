export default class Plot {
	constructor() {
		this.mapPlot = document.getElementById("mapPlot");
		this.typePlot = document.getElementById("typePlot");
		this.timePlot = document.getElementById("timePlot");
		this.durPlot = document.getElementById("durPlot");
		this.eduPlot = document.getElementById("eduPlot");
		this.experiencePlot = document.getElementById("experiencePlot");
		this.flagPlot = document.getElementById("flagPlot");
		this.selected = "Full-Time";
		this.isoDict = {
			BD: "BGD",
			BE: "BEL",
			BF: "BFA",
			BG: "BGR",
			BA: "BIH",
			BB: "BRB",
			WF: "WLF",
			BL: "BLM",
			BM: "BMU",
			BN: "BRN",
			BO: "BOL",
			BH: "BHR",
			BI: "BDI",
			BJ: "BEN",
			BT: "BTN",
			JM: "JAM",
			BV: "BVT",
			BW: "BWA",
			WS: "WSM",
			BQ: "BES",
			BR: "BRA",
			BS: "BHS",
			JE: "JEY",
			BY: "BLR",
			BZ: "BLZ",
			RU: "RUS",
			RW: "RWA",
			RS: "SRB",
			TL: "TLS",
			RE: "REU",
			TM: "TKM",
			TJ: "TJK",
			RO: "ROU",
			TK: "TKL",
			GW: "GNB",
			GU: "GUM",
			GT: "GTM",
			GS: "SGS",
			GR: "GRC",
			GQ: "GNQ",
			GP: "GLP",
			JP: "JPN",
			GY: "GUY",
			GG: "GGY",
			GF: "GUF",
			GE: "GEO",
			GD: "GRD",
			GB: "GBR",
			GA: "GAB",
			SV: "SLV",
			GN: "GIN",
			GM: "GMB",
			GL: "GRL",
			GI: "GIB",
			GH: "GHA",
			OM: "OMN",
			TN: "TUN",
			JO: "JOR",
			HR: "HRV",
			HT: "HTI",
			HU: "HUN",
			HK: "HKG",
			HN: "HND",
			HM: "HMD",
			VE: "VEN",
			PR: "PRI",
			PS: "PSE",
			PW: "PLW",
			PT: "PRT",
			SJ: "SJM",
			PY: "PRY",
			IQ: "IRQ",
			PA: "PAN",
			PF: "PYF",
			PG: "PNG",
			PE: "PER",
			PK: "PAK",
			PH: "PHL",
			PN: "PCN",
			PL: "POL",
			PM: "SPM",
			ZM: "ZMB",
			EH: "ESH",
			EE: "EST",
			EG: "EGY",
			ZA: "ZAF",
			EC: "ECU",
			IT: "ITA",
			VN: "VNM",
			SB: "SLB",
			ET: "ETH",
			SO: "SOM",
			ZW: "ZWE",
			SA: "SAU",
			ES: "ESP",
			ER: "ERI",
			ME: "MNE",
			MD: "MDA",
			MG: "MDG",
			MF: "MAF",
			MA: "MAR",
			MC: "MCO",
			UZ: "UZB",
			MM: "MMR",
			ML: "MLI",
			MO: "MAC",
			MN: "MNG",
			MH: "MHL",
			MK: "MKD",
			MU: "MUS",
			MT: "MLT",
			MW: "MWI",
			MV: "MDV",
			MQ: "MTQ",
			MP: "MNP",
			MS: "MSR",
			MR: "MRT",
			IM: "IMN",
			UG: "UGA",
			TZ: "TZA",
			MY: "MYS",
			MX: "MEX",
			IL: "ISR",
			FR: "FRA",
			IO: "IOT",
			SH: "SHN",
			FI: "FIN",
			FJ: "FJI",
			FK: "FLK",
			FM: "FSM",
			FO: "FRO",
			NI: "NIC",
			NL: "NLD",
			NO: "NOR",
			NA: "NAM",
			VU: "VUT",
			NC: "NCL",
			NE: "NER",
			NF: "NFK",
			NG: "NGA",
			NZ: "NZL",
			NP: "NPL",
			NR: "NRU",
			NU: "NIU",
			CK: "COK",
			XK: "XKX",
			CI: "CIV",
			CH: "CHE",
			CO: "COL",
			CN: "CHN",
			CM: "CMR",
			CL: "CHL",
			CC: "CCK",
			CA: "CAN",
			CG: "COG",
			CF: "CAF",
			CD: "COD",
			CZ: "CZE",
			CY: "CYP",
			CX: "CXR",
			CR: "CRI",
			CW: "CUW",
			CV: "CPV",
			CU: "CUB",
			SZ: "SWZ",
			SY: "SYR",
			SX: "SXM",
			KG: "KGZ",
			KE: "KEN",
			SS: "SSD",
			SR: "SUR",
			KI: "KIR",
			KH: "KHM",
			KN: "KNA",
			KM: "COM",
			ST: "STP",
			SK: "SVK",
			KR: "KOR",
			SI: "SVN",
			KP: "PRK",
			KW: "KWT",
			SN: "SEN",
			SM: "SMR",
			SL: "SLE",
			SC: "SYC",
			KZ: "KAZ",
			KY: "CYM",
			SG: "SGP",
			SE: "SWE",
			SD: "SDN",
			DO: "DOM",
			DM: "DMA",
			DJ: "DJI",
			DK: "DNK",
			VG: "VGB",
			DE: "DEU",
			YE: "YEM",
			DZ: "DZA",
			US: "USA",
			UY: "URY",
			YT: "MYT",
			UM: "UMI",
			LB: "LBN",
			LC: "LCA",
			LA: "LAO",
			TV: "TUV",
			TW: "TWN",
			TT: "TTO",
			TR: "TUR",
			LK: "LKA",
			LI: "LIE",
			LV: "LVA",
			TO: "TON",
			LT: "LTU",
			LU: "LUX",
			LR: "LBR",
			LS: "LSO",
			TH: "THA",
			TF: "ATF",
			TG: "TGO",
			TD: "TCD",
			TC: "TCA",
			LY: "LBY",
			VA: "VAT",
			VC: "VCT",
			AE: "ARE",
			AD: "AND",
			AG: "ATG",
			AF: "AFG",
			AI: "AIA",
			VI: "VIR",
			IS: "ISL",
			IR: "IRN",
			AM: "ARM",
			AL: "ALB",
			AO: "AGO",
			AQ: "ATA",
			AS: "ASM",
			AR: "ARG",
			AU: "AUS",
			AT: "AUT",
			AW: "ABW",
			IN: "IND",
			AX: "ALA",
			AZ: "AZE",
			IE: "IRL",
			ID: "IDN",
			UA: "UKR",
			QA: "QAT",
			MZ: "MOZ"
		};

		this.countryNameDict = {
			BD: "Bangladesh",
			BE: "Belgium",
			BF: "Burkina Faso",
			BG: "Bulgaria",
			BA: "Bosnia and Herzegovina",
			BB: "Barbados",
			WF: "Wallis and Futuna",
			BL: "Saint Barthelemy",
			BM: "Bermuda",
			BN: "Brunei",
			BO: "Bolivia",
			BH: "Bahrain",
			BI: "Burundi",
			BJ: "Benin",
			BT: "Bhutan",
			JM: "Jamaica",
			BV: "Bouvet Island",
			BW: "Botswana",
			WS: "Samoa",
			BQ: "Bonaire, Saint Eustatius and Saba ",
			BR: "Brazil",
			BS: "Bahamas",
			JE: "Jersey",
			BY: "Belarus",
			BZ: "Belize",
			RU: "Russia",
			RW: "Rwanda",
			RS: "Serbia",
			TL: "East Timor",
			RE: "Reunion",
			TM: "Turkmenistan",
			TJ: "Tajikistan",
			RO: "Romania",
			TK: "Tokelau",
			GW: "Guinea-Bissau",
			GU: "Guam",
			GT: "Guatemala",
			GS: "South Georgia and the South Sandwich Islands",
			GR: "Greece",
			GQ: "Equatorial Guinea",
			GP: "Guadeloupe",
			JP: "Japan",
			GY: "Guyana",
			GG: "Guernsey",
			GF: "French Guiana",
			GE: "Georgia",
			GD: "Grenada",
			GB: "United Kingdom",
			GA: "Gabon",
			SV: "El Salvador",
			GN: "Guinea",
			GM: "Gambia",
			GL: "Greenland",
			GI: "Gibraltar",
			GH: "Ghana",
			OM: "Oman",
			TN: "Tunisia",
			JO: "Jordan",
			HR: "Croatia",
			HT: "Haiti",
			HU: "Hungary",
			HK: "Hong Kong",
			HN: "Honduras",
			HM: "Heard Island and McDonald Islands",
			VE: "Venezuela",
			PR: "Puerto Rico",
			PS: "Palestinian Territory",
			PW: "Palau",
			PT: "Portugal",
			SJ: "Svalbard and Jan Mayen",
			PY: "Paraguay",
			IQ: "Iraq",
			PA: "Panama",
			PF: "French Polynesia",
			PG: "Papua New Guinea",
			PE: "Peru",
			PK: "Pakistan",
			PH: "Philippines",
			PN: "Pitcairn",
			PL: "Poland",
			PM: "Saint Pierre and Miquelon",
			ZM: "Zambia",
			EH: "Western Sahara",
			EE: "Estonia",
			EG: "Egypt",
			ZA: "South Africa",
			EC: "Ecuador",
			IT: "Italy",
			VN: "Vietnam",
			SB: "Solomon Islands",
			ET: "Ethiopia",
			SO: "Somalia",
			ZW: "Zimbabwe",
			SA: "Saudi Arabia",
			ES: "Spain",
			ER: "Eritrea",
			ME: "Montenegro",
			MD: "Moldova",
			MG: "Madagascar",
			MF: "Saint Martin",
			MA: "Morocco",
			MC: "Monaco",
			UZ: "Uzbekistan",
			MM: "Myanmar",
			ML: "Mali",
			MO: "Macao",
			MN: "Mongolia",
			MH: "Marshall Islands",
			MK: "Macedonia",
			MU: "Mauritius",
			MT: "Malta",
			MW: "Malawi",
			MV: "Maldives",
			MQ: "Martinique",
			MP: "Northern Mariana Islands",
			MS: "Montserrat",
			MR: "Mauritania",
			IM: "Isle of Man",
			UG: "Uganda",
			TZ: "Tanzania",
			MY: "Malaysia",
			MX: "Mexico",
			IL: "Israel",
			FR: "France",
			IO: "British Indian Ocean Territory",
			SH: "Saint Helena",
			FI: "Finland",
			FJ: "Fiji",
			FK: "Falkland Islands",
			FM: "Micronesia",
			FO: "Faroe Islands",
			NI: "Nicaragua",
			NL: "Netherlands",
			NO: "Norway",
			NA: "Namibia",
			VU: "Vanuatu",
			NC: "New Caledonia",
			NE: "Niger",
			NF: "Norfolk Island",
			NG: "Nigeria",
			NZ: "New Zealand",
			NP: "Nepal",
			NR: "Nauru",
			NU: "Niue",
			CK: "Cook Islands",
			XK: "Kosovo",
			CI: "Ivory Coast",
			CH: "Switzerland",
			CO: "Colombia",
			CN: "China",
			CM: "Cameroon",
			CL: "Chile",
			CC: "Cocos Islands",
			CA: "Canada",
			CG: "Republic of the Congo",
			CF: "Central African Republic",
			CD: "Democratic Republic of the Congo",
			CZ: "Czech Republic",
			CY: "Cyprus",
			CX: "Christmas Island",
			CR: "Costa Rica",
			CW: "Curacao",
			CV: "Cape Verde",
			CU: "Cuba",
			SZ: "Swaziland",
			SY: "Syria",
			SX: "Sint Maarten",
			KG: "Kyrgyzstan",
			KE: "Kenya",
			SS: "South Sudan",
			SR: "Suriname",
			KI: "Kiribati",
			KH: "Cambodia",
			KN: "Saint Kitts and Nevis",
			KM: "Comoros",
			ST: "Sao Tome and Principe",
			SK: "Slovakia",
			KR: "South Korea",
			SI: "Slovenia",
			KP: "North Korea",
			KW: "Kuwait",
			SN: "Senegal",
			SM: "San Marino",
			SL: "Sierra Leone",
			SC: "Seychelles",
			KZ: "Kazakhstan",
			KY: "Cayman Islands",
			SG: "Singapore",
			SE: "Sweden",
			SD: "Sudan",
			DO: "Dominican Republic",
			DM: "Dominica",
			DJ: "Djibouti",
			DK: "Denmark",
			VG: "British Virgin Islands",
			DE: "Germany",
			YE: "Yemen",
			DZ: "Algeria",
			US: "United States",
			UY: "Uruguay",
			YT: "Mayotte",
			UM: "United States Minor Outlying Islands",
			LB: "Lebanon",
			LC: "Saint Lucia",
			LA: "Laos",
			TV: "Tuvalu",
			TW: "Taiwan",
			TT: "Trinidad and Tobago",
			TR: "Turkey",
			LK: "Sri Lanka",
			LI: "Liechtenstein",
			LV: "Latvia",
			TO: "Tonga",
			LT: "Lithuania",
			LU: "Luxembourg",
			LR: "Liberia",
			LS: "Lesotho",
			TH: "Thailand",
			TF: "French Southern Territories",
			TG: "Togo",
			TD: "Chad",
			TC: "Turks and Caicos Islands",
			LY: "Libya",
			VA: "Vatican",
			VC: "Saint Vincent and the Grenadines",
			AE: "United Arab Emirates",
			AD: "Andorra",
			AG: "Antigua and Barbuda",
			AF: "Afghanistan",
			AI: "Anguilla",
			VI: "U.S. Virgin Islands",
			IS: "Iceland",
			IR: "Iran",
			AM: "Armenia",
			AL: "Albania",
			AO: "Angola",
			AQ: "Antarctica",
			AS: "American Samoa",
			AR: "Argentina",
			AU: "Australia",
			AT: "Austria",
			AW: "Aruba",
			IN: "India",
			AX: "Aland Islands",
			AZ: "Azerbaijan",
			IE: "Ireland",
			ID: "Indonesia",
			UA: "Ukraine",
			QA: "Qatar",
			MZ: "Mozambique"
		};
		var d3 = Plotly.d3;
		var WIDTH_IN_PERCENT_OF_PARENT = 100,
			HEIGHT_IN_PERCENT_OF_PARENT = 100;

		var gd3 = d3.selectAll(".responsive-plot").style({
			width: WIDTH_IN_PERCENT_OF_PARENT + "%",
			"margin-left": (100 - WIDTH_IN_PERCENT_OF_PARENT) / 2 + "%",

			height: 50 + "vh",
			"margin-top": 5 + "vh"
		});

		var nodes_to_resize = gd3[0]; //not sure why but the goods are within a nested array
		window.onresize = function() {
			for (var i = 0; i < nodes_to_resize.length; i++) {
				Plotly.Plots.resize(nodes_to_resize[i]);
			}
		};
	}

	convertDate(date) {
		let year = date.substring(4);
		let month = date.substring(2, 4);
		let day = date.substring(0, 2);

		let newDate = "" + year + "-" + month + "-" + day;
		return newDate;
	}

	drawPlots(param) {
		this.mapPlot.innerHTML = '';
		this.typePlot.innerHTML = '';
		this.timePlot.innerHTML = '';
		this.durPlot.innerHTML = ''; 
		this.eduPlot.innerHTML = ''; 
		this.experiencePlot.innerHTML = '';
		this.flagPlot.innerHTML = '';
	
		Plotly.d3.json(
			"http://46.101.102.65/api/location/?date=04102017&keyword=" + param,
			jsonObj => {
				let countryArr = [];
				let countArr = [];
				let countryNameArr = [];

				for (let country in jsonObj["location"]) {

					countArr.push(jsonObj["location"][country]["count"]);

					if (country == "UK") {
						country = "GB";
					}

					if (country == "EL") {
						country = "GR";
					}
					countryNameArr.push(this.countryNameDict[country]);
					countryArr.push(this.isoDict[country]);
				}

				//console.log(countryArr);
				//console.log(countArr);
				//console.log(countryNameArr);

				var data = [
					{
						type: "choropleth",
						locationmode: "ISO-3",
						locations: countryArr,
						z: countArr,
						text: countryNameArr
					}
				];

				var layout = {
					title: "Job Map Distribution",
					geo: {
						scope: "europe",
						showlakes: true,
						lakecolor: "rgb(255,255,255)"
					}
				};
				Plotly.newPlot(this.mapPlot, data, layout);
			}
		);

		Plotly.d3.json(
			"http://46.101.102.65/api/type/?date=04102017&keyword=" + param,
			jsonObj => {
				//console.log(Object.keys(jsonObj));
				//console.log(Object.values(jsonObj));

				var data = [
					{
						values: Object.values(jsonObj),
						labels: Object.keys(jsonObj),
						type: "pie"
					}
				];

				var layout = {
					title: "Types Of Jobs"
				};

				Plotly.newPlot("typePlot", data, layout);
				// Get Selected category
				typePlot.on("plotly_click", data => {
					this.selected = data["points"][0]["label"];
					//console.log(types[this.selected]);
					var data_update = [
						{
							x: dates,
							y: types[this.selected]
						}
					];

					var layout_update = {
						title: this.selected + " Jobs over time",

						xaxis: {
							autorange: true,
							type: "date"
						},
						yaxis: {
							autorange: true,
							range: [
								Math.max(
									Math.min(...types[this.selected]) - 100,
									0
								),
								Math.max(...types[this.selected]) + 100
							],
							type: "linear"
						}
					};
					Plotly.animate(this.timePlot, {
						data: data_update,
						layout: layout_update
					});
				});
			}
		);

		Plotly.d3.json(
			"http://46.101.102.65/api/duration/?date=04102017&keyword=" + param,
			function(jsonObj) {
				//console.log(Object.keys(jsonObj));
				//console.log(Object.values(jsonObj));

				var data = [
					{
						values: Object.values(jsonObj),
						labels: Object.keys(jsonObj),
						type: "pie"
					}
				];

				var layout = {
					title: "Job Durations"
				};

				Plotly.newPlot("durPlot", data, layout);
			}
		);

		Plotly.d3.json(
			"http://46.101.102.65/api/education/?date=04102017&keyword=" +
				param,
			function(jsonObj) {
				//console.log(Object.keys(jsonObj));
				//console.log(Object.values(jsonObj));

				var data = [
					{
						values: Object.values(jsonObj),
						labels: Object.keys(jsonObj),
						type: "pie"
					}
				];

				var layout = {
					title: "Education Level"
				};

				Plotly.newPlot("eduPlot", data, layout);
			}
		);

		Plotly.d3.json(
			"http://46.101.102.65/api/experience/?date=04102017&keyword=" +
				param,
			function(jsonObj) {
				//console.log(Object.keys(jsonObj));
				//console.log(Object.values(jsonObj));

				var data = [
					{
						values: Object.values(jsonObj),
						labels: Object.keys(jsonObj),
						type: "pie"
					}
				];

				var layout = {
					title: "Experience Level"
				};

				Plotly.newPlot("experiencePlot", data, layout);
			}
		);

		Plotly.d3.json(
			"http://46.101.102.65/api/flag/?date=04102017&keyword=" + param,
			function(jsonObj) {
				//console.log(Object.keys(jsonObj));
				//console.log(Object.values(jsonObj));

				var data = [
					{
						values: Object.values(jsonObj),
						labels: Object.keys(jsonObj),
						type: "pie"
					}
				];

				var layout = {
					title: "Flag Status"
				};

				Plotly.newPlot("flagPlot", data, layout);
			}
		);

		var dates = [];
		var apprenticeship = [];
		var fullTime = [];
		var notSpecified = [];
		var partTime = [];
		var traineeship = [];

		let types = {
			Apprenticeship: apprenticeship,
			"Full-Time": fullTime,
			"Not-Specified": notSpecified,
			"Part-Time": partTime,
			Traineeship: traineeship
		};

		Plotly.d3.json(
			"http://46.101.102.65/api/evolution/?keyword=" + param,
			jsonObj => {
				for (let record of jsonObj) {
					//console.log(record);
					dates.push(this.convertDate(record["date"]));
					apprenticeship.push(record["type"]["Apprenticeship"]);
					fullTime.push(record["type"]["Full-Time"]);
					notSpecified.push(record["type"]["Not-Specified"]);
					partTime.push(record["type"]["Part-Time"]);
					traineeship.push(record["type"]["Traineeship"]);
				}
				var data = [
					{
						x: dates,
						y: types[this.selected],
						type: "scatter"
					}
				];

				var layout = {
					title: this.selected + " Jobs over time",
					xaxis: {
						autorange: true,
						type: "date"
					},
					yaxis: {
						autorange: true,
						type: "linear"
					}
				};

				Plotly.newPlot("timePlot", data, layout);
			}
		);
	}
}
