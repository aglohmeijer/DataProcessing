// De data heb ik van World Databank gehaald en via Excel omgezet naar een CSV bestand. 
// De inhoud van het CSV bestand heb ik online omgezet naar een Keyed JSON Array (CSV converter). 

var choropleth = new Datamap({
	element: document.getElementById("container"),
	projection: 'mercator',
	geographyConfig: {
		 popupTemplate: function(geography, data) {
			return '<div class="hoverinfo"><b>' + geography.properties.name + '<br>Internet Users: </b>' + data.Internetusers +' %'},
			highlightBorderColor: 'white',
			highlightFillColor: '#8b0000',
			highlightBorderWith: 3
		},

	fills: {
		'Low income': '#f1eef6',
		'Lower middle income': '#bdc9e1', 
		'Upper middle income' : '#74a9cf',
		'High income (non OECD)' : '#2b8cbe',
		'High income (OECD)' : '#045a8d',
		defaultFill: 'grey',

	},
	data:{
  "ABW": {
    "Country":"Aruba",
    "fillKey":"High income (non OECD)",
    "Internetusers":83.78
  },
  "ADO": {
    "Country":"Principality of Andorra",
    "fillKey":"High income (non OECD)",
    "Internetusers":95.9
  },
  "AFG": {
    "Country":"Islamic State of Afghanistan",
    "fillKey":"Low income",
    "Internetusers":6.39
  },
  "AGO": {
    "Country":"People's Republic of Angola",
    "fillKey":"Upper middle income",
    "Internetusers":21.26
  },
  "ALB": {
    "Country":"Republic of Albania",
    "fillKey":"Upper middle income",
    "Internetusers":60.1
  },
  "ARB": {
    "Country":"Arab World",
    "fillKey":"",
    "Internetusers":34.52
  },
  "ARE": {
    "Country":"United Arab Emirates",
    "fillKey":"High income (non OECD)",
    "Internetusers":90.4
  },
  "ARG": {
    "Country":"Argentine Republic",
    "fillKey":"High income (non OECD)",
    "Internetusers":64.7
  },
  "ARM": {
    "Country":"Republic of Armenia",
    "fillKey":"Lower middle income",
    "Internetusers":46.3
  },
  "ASM": {
    "Country":"American Samoa",
    "fillKey":"Upper middle income",
    "Internetusers":null
  },
  "ATG": {
    "Country":"Antigua and Barbuda",
    "fillKey":"High income (non OECD)",
    "Internetusers":64
  },
  "AUS": {
    "Country":"Commonwealth of Australia",
    "fillKey":"High income (OECD)",
    "Internetusers":84.56
  },
  "AUT": {
    "Country":"Republic of Austria",
    "fillKey":"High income (OECD)",
    "Internetusers":81
  },
  "AZE": {
    "Country":"Republic of Azerbaijan",
    "fillKey":"Upper middle income",
    "Internetusers":61
  },
  "BDI": {
    "Country":"Republic of Burundi",
    "fillKey":"Low income",
    "Internetusers":1.38
  },
  "BEL": {
    "Country":"Kingdom of Belgium",
    "fillKey":"High income (OECD)",
    "Internetusers":85
  },
  "BEN": {
    "Country":"Republic of Benin",
    "fillKey":"Low income",
    "Internetusers":5.3
  },
  "BFA": {
    "Country":"Burkina Faso",
    "fillKey":"Low income",
    "Internetusers":9.4
  },
  "BGD": {
    "Country":"People's Republic of Bangladesh",
    "fillKey":"Lower middle income",
    "Internetusers":9.6
  },
  "BGR": {
    "Country":"Republic of Bulgaria",
    "fillKey":"Upper middle income",
    "Internetusers":55.49
  },
  "BHR": {
    "Country":"Kingdom of Bahrain",
    "fillKey":"High income (non OECD)",
    "Internetusers":91
  },
  "BHS": {
    "Country":"Commonwealth of The Bahamas",
    "fillKey":"High income (non OECD)",
    "Internetusers":76.92
  },
  "BIH": {
    "Country":"Bosnia and Herzegovina",
    "fillKey":"Upper middle income",
    "Internetusers":60.8
  },
  "BLR": {
    "Country":"Republic of Belarus",
    "fillKey":"Upper middle income",
    "Internetusers":59.02
  },
  "BLZ": {
    "Country":"Belize",
    "fillKey":"Upper middle income",
    "Internetusers":38.7
  },
  "BMU": {
    "Country":"The Bermudas",
    "fillKey":"High income (non OECD)",
    "Internetusers":96.8
  },
  "BOL": {
    "Country":"Plurinational State of Bolivia",
    "fillKey":"Lower middle income",
    "Internetusers":39.02
  },
  "BRA": {
    "Country":"Federative Republic of Brazil",
    "fillKey":"Upper middle income",
    "Internetusers":57.6
  },
  "BRB": {
    "Country":"Barbados",
    "fillKey":"High income (non OECD)",
    "Internetusers":76.67
  },
  "BRN": {
    "Country":"Brunei Darussalam",
    "fillKey":"High income (non OECD)",
    "Internetusers":68.77
  },
  "BTN": {
    "Country":"Kingdom of Bhutan",
    "fillKey":"Lower middle income",
    "Internetusers":34.37
  },
  "BWA": {
    "Country":"Republic of Botswana",
    "fillKey":"Upper middle income",
    "Internetusers":18.5
  },
  "CAF": {
    "Country":"Central African Republic",
    "fillKey":"Low income",
    "Internetusers":4.03
  },
  "CAN": {
    "Country":"Canada",
    "fillKey":"High income (OECD)",
    "Internetusers":87.12
  },
  "CHE": {
    "Country":"Switzerland",
    "fillKey":"High income (OECD)",
    "Internetusers":87
  },
  "CHI": {
    "Country":"Channel Islands",
    "fillKey":"High income (non OECD)",
    "Internetusers":null
  },
  "CHL": {
    "Country":"Republic of Chile",
    "fillKey":"High income (OECD)",
    "Internetusers":72.35
  },
  "CHN": {
    "Country":"People's Republic of China",
    "fillKey":"Upper middle income",
    "Internetusers":49.3
  },
  "CIV": {
    "Country":"Republic of Côte d'Ivoire",
    "fillKey":"Lower middle income",
    "Internetusers":14.6
  },
  "CMR": {
    "Country":"Republic of Cameroon",
    "fillKey":"Lower middle income",
    "Internetusers":11
  },
  "COG": {
    "Country":"Republic of Congo",
    "fillKey":"Lower middle income",
    "Internetusers":7.11
  },
  "COL": {
    "Country":"Republic of Colombia",
    "fillKey":"Upper middle income",
    "Internetusers":52.57
  },
  "COM": {
    "Country":"Union of the Comoros",
    "fillKey":"Low income",
    "Internetusers":6.98
  },
  "CPV": {
    "Country":"Republic of Cabo Verde",
    "fillKey":"Lower middle income",
    "Internetusers":40.26
  },
  "CRI": {
    "Country":"Republic of Costa Rica",
    "fillKey":"Upper middle income",
    "Internetusers":49.41
  },
  "CSS": {
    "Country":"Caribbean small states",
    "fillKey":"",
    "Internetusers":49.27
  },
  "CUB": {
    "Country":"Republic of Cuba",
    "fillKey":"Upper middle income",
    "Internetusers":30
  },
  "CUW": {
    "Country":"Curaçao",
    "fillKey":"High income (non OECD)",
    "Internetusers":null
  },
  "CYM": {
    "Country":"Cayman Islands",
    "fillKey":"High income (non OECD)",
    "Internetusers":74.1
  },
  "CYP": {
    "Country":"Republic of Cyprus",
    "fillKey":"High income (non OECD)",
    "Internetusers":69.33
  },
  "CZE": {
    "Country":"Czech Republic",
    "fillKey":"High income (OECD)",
    "Internetusers":79.71
  },
  "DEU": {
    "Country":"Federal Republic of Germany",
    "fillKey":"High income (OECD)",
    "Internetusers":86.19
  },
  "DJI": {
    "Country":"Republic of Djibouti",
    "fillKey":"Lower middle income",
    "Internetusers":10.71
  },
  "DMA": {
    "Country":"Commonwealth of Dominica",
    "fillKey":"Upper middle income",
    "Internetusers":62.86
  },
  "DNK": {
    "Country":"Kingdom of Denmark",
    "fillKey":"High income (OECD)",
    "Internetusers":95.99
  },
  "DOM": {
    "Country":"Dominican Republic",
    "fillKey":"Upper middle income",
    "Internetusers":49.58
  },
  "DZA": {
    "Country":"People's Democratic Republic of Algeria",
    "fillKey":"Upper middle income",
    "Internetusers":18.09
  },
  "EAP": {
    "Country":"East Asia & Pacific (developing only)",
    "fillKey":"",
    "Internetusers":42.13
  },
  "EAS": {
    "Country":"East Asia & Pacific (all income levels)",
    "fillKey":"",
    "Internetusers":46.89
  },
  "ECA": {
    "Country":"Europe & Central Asia (developing only)",
    "fillKey":"",
    "Internetusers":48.18
  },
  "ECS": {
    "Country":"Europe & Central Asia (all income levels)",
    "fillKey":"",
    "Internetusers":69.2
  },
  "ECU": {
    "Country":"Republic of Ecuador",
    "fillKey":"Upper middle income",
    "Internetusers":43
  },
  "EGY": {
    "Country":"Arab Republic of Egypt",
    "fillKey":"Lower middle income",
    "Internetusers":31.7
  },
  "EMU": {
    "Country":"Euro area",
    "fillKey":"",
    "Internetusers":78.3
  },
  "ERI": {
    "Country":"State of Eritrea",
    "fillKey":"Low income",
    "Internetusers":0.99
  },
  "ESP": {
    "Country":"Kingdom of Spain",
    "fillKey":"High income (OECD)",
    "Internetusers":76.19
  },
  "EST": {
    "Country":"Republic of Estonia",
    "fillKey":"High income (OECD)",
    "Internetusers":84.24
  },
  "ETH": {
    "Country":"Federal Democratic Republic of Ethiopia",
    "fillKey":"Low income",
    "Internetusers":2.9
  },
  "EUU": {
    "Country":"European Union",
    "fillKey":"",
    "Internetusers":78.1
  },
  "FIN": {
    "Country":"Republic of Finland",
    "fillKey":"High income (OECD)",
    "Internetusers":92.38
  },
  "FJI": {
    "Country":"Republic of Fiji",
    "fillKey":"Upper middle income",
    "Internetusers":41.8
  },
  "FRA": {
    "Country":"French Republic",
    "fillKey":"High income (OECD)",
    "Internetusers":83.75
  },
  "FRO": {
    "Country":"Faroe Islands",
    "fillKey":"High income (non OECD)",
    "Internetusers":94.66
  },
  "FSM": {
    "Country":"Federated States of Micronesia",
    "fillKey":"Lower middle income",
    "Internetusers":29.65
  },
  "GAB": {
    "Country":"Gabonese Republic",
    "fillKey":"Upper middle income",
    "Internetusers":9.81
  },
  "GBR": {
    "Country":"United Kingdom of Great Britain and Northern Ireland",
    "fillKey":"High income (OECD)",
    "Internetusers":91.61
  },
  "GEO": {
    "Country":"Georgia",
    "fillKey":"Lower middle income",
    "Internetusers":48.9
  },
  "GHA": {
    "Country":"Republic of Ghana",
    "fillKey":"Lower middle income",
    "Internetusers":18.9
  },
  "GIN": {
    "Country":"Republic of Guinea",
    "fillKey":"Low income",
    "Internetusers":1.72
  },
  "GMB": {
    "Country":"Republic of The Gambia",
    "fillKey":"Low income",
    "Internetusers":15.56
  },
  "GNB": {
    "Country":"Republic of Guinea-Bissau",
    "fillKey":"Low income",
    "Internetusers":3.32
  },
  "GNQ": {
    "Country":"Republic of Equatorial Guinea",
    "fillKey":"High income (non OECD)",
    "Internetusers":18.86
  },
  "GRC": {
    "Country":"Hellenic Republic",
    "fillKey":"High income (OECD)",
    "Internetusers":63.21
  },
  "GRD": {
    "Country":"Grenada",
    "fillKey":"Upper middle income",
    "Internetusers":37.38
  },
  "GRL": {
    "Country":"Greenland",
    "fillKey":"High income (non OECD)",
    "Internetusers":66.7
  },
  "GTM": {
    "Country":"Republic of Guatemala",
    "fillKey":"Lower middle income",
    "Internetusers":23.4
  },
  "GUM": {
    "Country":"Guam",
    "fillKey":"High income (non OECD)",
    "Internetusers":69.27
  },
  "GUY": {
    "Country":"Co-operative Republic of Guyana",
    "fillKey":"Lower middle income",
    "Internetusers":37.35
  },
  "HKG": {
    "Country":"Hong Kong Special Administrative Region of the People's Republic of China",
    "fillKey":"High income (non OECD)",
    "Internetusers":74.56
  },
  "HND": {
    "Country":"Republic of Honduras",
    "fillKey":"Lower middle income",
    "Internetusers":19.08
  },
  "HRV": {
    "Country":"Republic of Croatia",
    "fillKey":"High income (non OECD)",
    "Internetusers":68.57
  },
  "HTI": {
    "Country":"Republic of Haiti",
    "fillKey":"Low income",
    "Internetusers":11.4
  },
  "HUN": {
    "Country":"Hungary",
    "fillKey":"High income (OECD)",
    "Internetusers":76.13
  },
  "IDN": {
    "Country":"Republic of Indonesia",
    "fillKey":"Lower middle income",
    "Internetusers":17.14
  },
  "IMY": {
    "Country":"Isle of Man",
    "fillKey":"High income (non OECD)",
    "Internetusers":null
  },
  "IND": {
    "Country":"Republic of India",
    "fillKey":"Lower middle income",
    "Internetusers":18
  },
  "IRL": {
    "Country":"Ireland",
    "fillKey":"High income (OECD)",
    "Internetusers":79.69
  },
  "IRN": {
    "Country":"Islamic Republic of Iran",
    "fillKey":"Upper middle income",
    "Internetusers":39.35
  },
  "IRQ": {
    "Country":"Republic of Iraq",
    "fillKey":"Upper middle income",
    "Internetusers":11.3
  },
  "ISL": {
    "Country":"Republic of Iceland",
    "fillKey":"High income (OECD)",
    "Internetusers":98.16
  },
  "ISR": {
    "Country":"State of Israel",
    "fillKey":"High income (OECD)",
    "Internetusers":71.45
  },
  "ITA": {
    "Country":"Italian Republic",
    "fillKey":"High income (OECD)",
    "Internetusers":61.96
  },
  "JAM": {
    "Country":"Jamaica",
    "fillKey":"Upper middle income",
    "Internetusers":40.5
  },
  "JOR": {
    "Country":"Hashemite Kingdom of Jordan",
    "fillKey":"Upper middle income",
    "Internetusers":44
  },
  "JPN": {
    "Country":"Japan",
    "fillKey":"High income (OECD)",
    "Internetusers":90.58
  },
  "KAZ": {
    "Country":"Republic of Kazakhstan",
    "fillKey":"Upper middle income",
    "Internetusers":54.89
  },
  "KEN": {
    "Country":"Republic of Kenya",
    "fillKey":"Lower middle income",
    "Internetusers":43.4
  },
  "KGZ": {
    "Country":"Kyrgyz Republic",
    "fillKey":"Lower middle income",
    "Internetusers":28.3
  },
  "KHM": {
    "Country":"Kingdom of Cambodia",
    "fillKey":"Low income",
    "Internetusers":9
  },
  "KIR": {
    "Country":"Republic of Kiribati",
    "fillKey":"Lower middle income",
    "Internetusers":12.25
  },
  "KNA": {
    "Country":"St. Kitts and Nevis",
    "fillKey":"High income (non OECD)",
    "Internetusers":65.4
  },
  "KOR": {
    "Country":"Republic of Korea",
    "fillKey":"High income (OECD)",
    "Internetusers":84.33
  },
  "KSV": {
    "Country":"Republic of Kosovo",
    "fillKey":"Lower middle income",
    "Internetusers":null
  },
  "KWT": {
    "Country":"State of Kuwait",
    "fillKey":"High income (non OECD)",
    "Internetusers":78.7
  },
  "LAC": {
    "Country":"Latin America & Caribbean (developing only)",
    "fillKey":"",
    "Internetusers":47.47
  },
  "LAO": {
    "Country":"Lao People's Democratic Republic",
    "fillKey":"Lower middle income",
    "Internetusers":14.26
  },
  "LBN": {
    "Country":"Lebanese Republic",
    "fillKey":"Upper middle income",
    "Internetusers":74.7
  },
  "LBR": {
    "Country":"Republic of Liberia",
    "fillKey":"Low income",
    "Internetusers":5.41
  },
  "LBY": {
    "Country":"Socialist People's Libyan Arab Jamahiriya",
    "fillKey":"Upper middle income",
    "Internetusers":17.76
  },
  "LCA": {
    "Country":"St. Lucia",
    "fillKey":"Upper middle income",
    "Internetusers":51
  },
  "LCN": {
    "Country":"Latin America & Caribbean (all income levels)",
    "fillKey":"",
    "Internetusers":50.15
  },
  "LDC": {
    "Country":"Least developed countries: UN classification",
    "fillKey":"",
    "Internetusers":8.64
  },
  "LIC": {
    "Country":"Low income",
    "fillKey":"",
    "Internetusers":6.29
  },
  "LIE": {
    "Country":"Principality of Liechtenstein",
    "fillKey":"High income (non OECD)",
    "Internetusers":95.21
  },
  "LKA": {
    "Country":"Democratic Socialist Republic of Sri Lanka",
    "fillKey":"Lower middle income",
    "Internetusers":25.8
  },
  "LMC": {
    "Country":"Lower middle income",
    "fillKey":"",
    "Internetusers":22.56
  },
  "LMY": {
    "Country":"Low & middle income",
    "fillKey":"",
    "Internetusers":31.14
  },
  "LSO": {
    "Country":"Kingdom of Lesotho",
    "fillKey":"Lower middle income",
    "Internetusers":11
  },
  "LTU": {
    "Country":"Republic of Lithuania",
    "fillKey":"High income (non OECD)",
    "Internetusers":72.13
  },
  "LUX": {
    "Country":"Grand Duchy of Luxembourg",
    "fillKey":"High income (OECD)",
    "Internetusers":94.67
  },
  "LVA": {
    "Country":"Republic of Latvia",
    "fillKey":"High income (non OECD)",
    "Internetusers":75.83
  },
  "MAC": {
    "Country":"Macao Special Administrative Region of the People's Republic of China",
    "fillKey":"High income (non OECD)",
    "Internetusers":69.78
  },
  "MAF": {
    "Country":"St. Martin (French part)",
    "fillKey":"High income (non OECD)",
    "Internetusers":null
  },
  "MAR": {
    "Country":"Kingdom of Morocco",
    "fillKey":"Lower middle income",
    "Internetusers":56.8
  },
  "MCO": {
    "Country":"Principality of Monaco",
    "fillKey":"High income (non OECD)",
    "Internetusers":92.4
  },
  "MDA": {
    "Country":"Republic of Moldova",
    "fillKey":"Lower middle income",
    "Internetusers":46.6
  },
  "MDG": {
    "Country":"Republic of Madagascar",
    "fillKey":"Low income",
    "Internetusers":3.7
  },
  "MDV": {
    "Country":"Republic of Maldives",
    "fillKey":"Upper middle income",
    "Internetusers":49.28
  },
  "MEA": {
    "Country":"Middle East & North Africa (all income levels)",
    "fillKey":"",
    "Internetusers":38.26
  },
  "MEX": {
    "Country":"United Mexican States",
    "fillKey":"Upper middle income",
    "Internetusers":44.39
  },
  "MHL": {
    "Country":"Republic of the Marshall Islands",
    "fillKey":"Upper middle income",
    "Internetusers":16.8
  },
  "MIC": {
    "Country":"Middle income",
    "fillKey":"",
    "Internetusers":34.05
  },
  "MKD": {
    "Country":"Former Yugoslav Republic of Macedonia",
    "fillKey":"Upper middle income",
    "Internetusers":68.06
  },
  "MLI": {
    "Country":"Republic of Mali",
    "fillKey":"Low income",
    "Internetusers":7
  },
  "MLT": {
    "Country":"Republic of Malta",
    "fillKey":"High income (non OECD)",
    "Internetusers":73.17
  },
  "MMR": {
    "Country":"Republic of the Union of Myanmar",
    "fillKey":"Lower middle income",
    "Internetusers":2.1
  },
  "MNA": {
    "Country":"Middle East & North Africa (developing only)",
    "fillKey":"",
    "Internetusers":32.66
  },
  "MNE": {
    "Country":"Montenegro",
    "fillKey":"Upper middle income",
    "Internetusers":61
  },
  "MNG": {
    "Country":"Mongolia",
    "fillKey":"Upper middle income",
    "Internetusers":27
  },
  "MNP": {
    "Country":"Commonwealth of the Northern Mariana Islands",
    "fillKey":"High income (non OECD)",
    "Internetusers":null
  },
  "MOZ": {
    "Country":"Republic of Mozambique",
    "fillKey":"Low income",
    "Internetusers":5.94
  },
  "MRT": {
    "Country":"Islamic Republic of Mauritania",
    "fillKey":"Lower middle income",
    "Internetusers":10.7
  },
  "MUS": {
    "Country":"Republic of Mauritius",
    "fillKey":"Upper middle income",
    "Internetusers":41.44
  },
  "MWI": {
    "Country":"Republic of Malawi",
    "fillKey":"Low income",
    "Internetusers":5.83
  },
  "MYS": {
    "Country":"Malaysia",
    "fillKey":"Upper middle income",
    "Internetusers":67.5
  },
  "NAC": {
    "Country":"North America",
    "fillKey":"",
    "Internetusers":87.34
  },
  "NAM": {
    "Country":"Republic of Namibia",
    "fillKey":"Upper middle income",
    "Internetusers":14.84
  },
  "NCL": {
    "Country":"New Caledonia",
    "fillKey":"High income (non OECD)",
    "Internetusers":70
  },
  "NER": {
    "Country":"Republic of Niger",
    "fillKey":"Low income",
    "Internetusers":1.95
  },
  "NGA": {
    "Country":"Federal Republic of Nigeria",
    "fillKey":"Lower middle income",
    "Internetusers":42.68
  },
  "NIC": {
    "Country":"Republic of Nicaragua",
    "fillKey":"Lower middle income",
    "Internetusers":17.6
  },
  "NLD": {
    "Country":"Kingdom of the Netherlands",
    "fillKey":"High income (OECD)",
    "Internetusers":93.17
  },
  "NOC": {
    "Country":"High income (non OECD)",
    "fillKey":"",
    "Internetusers":69.9
  },
  "NOR": {
    "Country":"Kingdom of Norway",
    "fillKey":"High income (OECD)",
    "Internetusers":96.3
  },
  "NPL": {
    "Country":"Nepal",
    "fillKey":"Low income",
    "Internetusers":15.44
  },
  "NZL": {
    "Country":"New Zealand",
    "fillKey":"High income (OECD)",
    "Internetusers":85.5
  },
  "OEC": {
    "Country":"High income (OECD)",
    "fillKey":"",
    "Internetusers":83.85
  },
  "OED": {
    "Country":"OECD members",
    "fillKey":"",
    "Internetusers":78.05
  },
  "OMN": {
    "Country":"Sultanate of Oman",
    "fillKey":"High income (non OECD)",
    "Internetusers":70.22
  },
  "OSS": {
    "Country":"Other small states",
    "fillKey":"",
    "Internetusers":18.39
  },
  "PAK": {
    "Country":"Islamic Republic of Pakistan",
    "fillKey":"Lower middle income",
    "Internetusers":13.8
  },
  "PAN": {
    "Country":"Republic of Panama",
    "fillKey":"Upper middle income",
    "Internetusers":44.92
  },
  "PER": {
    "Country":"Republic of Peru",
    "fillKey":"Upper middle income",
    "Internetusers":40.2
  },
  "PHL": {
    "Country":"Republic of the Philippines",
    "fillKey":"Lower middle income",
    "Internetusers":39.69
  },
  "PLW": {
    "Country":"Republic of Palau",
    "fillKey":"Upper middle income",
    "Internetusers":null
  },
  "PNG": {
    "Country":"The Independent State of Papua New Guinea",
    "fillKey":"Lower middle income",
    "Internetusers":9.38
  },
  "POL": {
    "Country":"Republic of Poland",
    "fillKey":"High income (OECD)",
    "Internetusers":66.6
  },
  "PRI": {
    "Country":"Puerto Rico",
    "fillKey":"High income (non OECD)",
    "Internetusers":78.78
  },
  "PRK": {
    "Country":"Democratic People's Republic of Korea",
    "fillKey":"Low income",
    "Internetusers":0
  },
  "PRT": {
    "Country":"Portuguese Republic",
    "fillKey":"High income (OECD)",
    "Internetusers":64.59
  },
  "PRY": {
    "Country":"Republic of Paraguay",
    "fillKey":"Upper middle income",
    "Internetusers":43
  },
  "PSS": {
    "Country":"Pacific island small states",
    "fillKey":"",
    "Internetusers":26.63
  },
  "PYF": {
    "Country":"French Polynesia",
    "fillKey":"High income (non OECD)",
    "Internetusers":60.68
  },
  "QAT": {
    "Country":"State of Qatar",
    "fillKey":"High income (non OECD)",
    "Internetusers":91.49
  },
  "ROM": {
    "Country":"Romania",
    "fillKey":"Upper middle income",
    "Internetusers":54.08
  },
  "RUS": {
    "Country":"Russian Federation",
    "fillKey":"High income (non OECD)",
    "Internetusers":70.52
  },
  "RWA": {
    "Country":"Republic of Rwanda",
    "fillKey":"Low income",
    "Internetusers":10.6
  },
  "SAS": {
    "Country":"South Asia",
    "fillKey":"",
    "Internetusers":16.61
  },
  "SAU": {
    "Country":"Kingdom of Saudi Arabia",
    "fillKey":"High income (non OECD)",
    "Internetusers":63.7
  },
  "SDN": {
    "Country":"Republic of the Sudan",
    "fillKey":"Lower middle income",
    "Internetusers":24.64
  },
  "SEN": {
    "Country":"Republic of Senegal",
    "fillKey":"Lower middle income",
    "Internetusers":17.7
  },
  "SGP": {
    "Country":"Republic of Singapore",
    "fillKey":"High income (non OECD)",
    "Internetusers":82
  },
  "SLB": {
    "Country":"Solomon Islands",
    "fillKey":"Lower middle income",
    "Internetusers":9
  },
  "SLE": {
    "Country":"Republic of Sierra Leone",
    "fillKey":"Low income",
    "Internetusers":2.1
  },
  "SLV": {
    "Country":"Republic of El Salvador",
    "fillKey":"Lower middle income",
    "Internetusers":29.7
  },
  "SMR": {
    "Country":"Republic of San Marino",
    "fillKey":"High income (non OECD)",
    "Internetusers":null
  },
  "SOM": {
    "Country":"Somali Democratic Republic",
    "fillKey":"Low income",
    "Internetusers":1.63
  },
  "SRB": {
    "Country":"Republic of Serbia",
    "fillKey":"Upper middle income",
    "Internetusers":53.5
  },
  "SSA": {
    "Country":"Sub-Saharan Africa (developing only)",
    "fillKey":"",
    "Internetusers":19.22
  },
  "SSD": {
    "Country":"Republic of South Sudan",
    "fillKey":"Low income",
    "Internetusers":15.9
  },
  "SSF": {
    "Country":"Sub-Saharan Africa (all income levels)",
    "fillKey":"",
    "Internetusers":19.22
  },
  "SST": {
    "Country":"Small states",
    "fillKey":"",
    "Internetusers":26.38
  },
  "STP": {
    "Country":"Democratic Republic of São Tomé and Principe",
    "fillKey":"Lower middle income",
    "Internetusers":24.41
  },
  "SUR": {
    "Country":"Republic of Suriname",
    "fillKey":"Upper middle income",
    "Internetusers":40.08
  },
  "SVK": {
    "Country":"Slovak Republic",
    "fillKey":"High income (OECD)",
    "Internetusers":79.98
  },
  "SVN": {
    "Country":"Republic of Slovenia",
    "fillKey":"High income (OECD)",
    "Internetusers":71.59
  },
  "SWE": {
    "Country":"Kingdom of Sweden",
    "fillKey":"High income (OECD)",
    "Internetusers":92.52
  },
  "SWZ": {
    "Country":"Kingdom of Swaziland",
    "fillKey":"Lower middle income",
    "Internetusers":27.1
  },
  "SXM": {
    "Country":"Sint Maarten (Dutch part)",
    "fillKey":"High income (non OECD)",
    "Internetusers":null
  },
  "SYC": {
    "Country":"Republic of Seychelles",
    "fillKey":"High income (non OECD)",
    "Internetusers":54.26
  },
  "SYR": {
    "Country":"Syrian Arab Republic",
    "fillKey":"Lower middle income",
    "Internetusers":28.09
  },
  "TCA": {
    "Country":"Turks and Caicos Islands",
    "fillKey":"High income (non OECD)",
    "Internetusers":null
  },
  "TCD": {
    "Country":"Republic of Chad",
    "fillKey":"Low income",
    "Internetusers":2.5
  },
  "TGO": {
    "Country":"Republic of Togo",
    "fillKey":"Low income",
    "Internetusers":5.7
  },
  "THA": {
    "Country":"Kingdom of Thailand",
    "fillKey":"Upper middle income",
    "Internetusers":34.89
  },
  "TJK": {
    "Country":"Republic of Tajikistan",
    "fillKey":"Lower middle income",
    "Internetusers":17.49
  },
  "TKM": {
    "Country":"Turkmenistan",
    "fillKey":"Upper middle income",
    "Internetusers":12.2
  },
  "TMP": {
    "Country":"Democratic Republic of Timor-Leste",
    "fillKey":"Lower middle income",
    "Internetusers":1.14
  },
  "TON": {
    "Country":"Kingdom of Tonga",
    "fillKey":"Upper middle income",
    "Internetusers":40
  },
  "TTO": {
    "Country":"Republic of Trinidad and Tobago",
    "fillKey":"High income (non OECD)",
    "Internetusers":65.1
  },
  "TUN": {
    "Country":"Republic of Tunisia",
    "fillKey":"Upper middle income",
    "Internetusers":46.16
  },
  "TUR": {
    "Country":"Republic of Turkey",
    "fillKey":"Upper middle income",
    "Internetusers":51.04
  },
  "TUV": {
    "Country":"Tuvalu",
    "fillKey":"Upper middle income",
    "Internetusers":null
  },
  "TZA": {
    "Country":"United Republic of Tanzania",
    "fillKey":"Low income",
    "Internetusers":4.86
  },
  "UGA": {
    "Country":"Republic of Uganda",
    "fillKey":"Low income",
    "Internetusers":17.71
  },
  "UKR": {
    "Country":"Ukraine",
    "fillKey":"Lower middle income",
    "Internetusers":43.4
  },
  "UMC": {
    "Country":"Upper middle income",
    "fillKey":"",
    "Internetusers":47.72
  },
  "URY": {
    "Country":"Oriental Republic of Uruguay",
    "fillKey":"High income (non OECD)",
    "Internetusers":61.46
  },
  "USA": {
    "Country":"United States of America",
    "fillKey":"High income (OECD)",
    "Internetusers":87.36
  },
  "UZB": {
    "Country":"Republic of Uzbekistan",
    "fillKey":"Lower middle income",
    "Internetusers":43.55
  },
  "VCT": {
    "Country":"St. Vincent and the Grenadines",
    "fillKey":"Upper middle income",
    "Internetusers":56.48
  },
  "VEN": {
    "Country":"República Bolivariana de Venezuela",
    "fillKey":"High income (non OECD)",
    "Internetusers":57
  },
  "VIR": {
    "Country":"Virgin Islands of the United States",
    "fillKey":"High income (non OECD)",
    "Internetusers":50.07
  },
  "VNM": {
    "Country":"Socialist Republic of Vietnam",
    "fillKey":"Lower middle income",
    "Internetusers":48.31
  },
  "VUT": {
    "Country":"Republic of Vanuatu",
    "fillKey":"Lower middle income",
    "Internetusers":18.8
  },
  "WSM": {
    "Country":"Samoa",
    "fillKey":"Lower middle income",
    "Internetusers":21.2
  },
  "YEM": {
    "Country":"Republic of Yemen",
    "fillKey":"Lower middle income",
    "Internetusers":22.55
  },
  "ZAF": {
    "Country":"Republic of South Africa",
    "fillKey":"Upper middle income",
    "Internetusers":49
  },
  "ZAR": {
    "Country":"Democratic Republic of the Congo",
    "fillKey":"Low income",
    "Internetusers":3
  },
  "ZMB": {
    "Country":"Republic of Zambia",
    "fillKey":"Lower middle income",
    "Internetusers":17.34
  },
  "ZWE": {
    "Country":"Republic of Zimbabwe",
    "fillKey":"Low income",
    "Internetusers":19.89
  }
}

});

// Draw legend for this map
choropleth.legend();


