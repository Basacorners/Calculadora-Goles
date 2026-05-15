document.addEventListener("DOMContentLoaded", function () {

  // ✅ DATA DE PRUEBA (luego puedes meter todo tu JSON grande)
  
let equipos = [
  {
    "liga": "Qatar",
    "equipo": "Al Sadd",
    "PGLL": 1.893,
    "FOL": 1.525,
    "FD": 0.806
  },
  {
    "liga": "Qatar",
    "equipo": "Al Shamal",
    "PGLL": 1.259,
    "FOL": 0.978,
    "FD": 0.777
  },
  {
    "liga": "Qatar",
    "equipo": "Al Gharafa",
    "PGLL": 1.0,
    "FOL": 1.007,
    "FD": 1.007
  },
  {
    "liga": "Qatar",
    "equipo": "Al Rayyan",
    "PGLL": 1.312,
    "FOL": 1.209,
    "FD": 0.921
  },
  {
    "liga": "Qatar",
    "equipo": "Qatar SC",
    "PGLL": 1.065,
    "FOL": 0.95,
    "FD": 0.892
  },
  {
    "liga": "Qatar",
    "equipo": "Al Arabi",
    "PGLL": 1.0,
    "FOL": 1.065,
    "FD": 1.065
  },
  {
    "liga": "Qatar",
    "equipo": "Al Duhail",
    "PGLL": 1.462,
    "FOL": 1.094,
    "FD": 0.748
  },
  {
    "liga": "Qatar",
    "equipo": "Al Wakrah",
    "PGLL": 1.0,
    "FOL": 0.95,
    "FD": 0.95
  },
  {
    "liga": "Qatar",
    "equipo": "Umm Salal",
    "PGLL": 0.679,
    "FOL": 1.036,
    "FD": 1.525
  },
  {
    "liga": "Qatar",
    "equipo": "Al Sailiya",
    "PGLL": 0.686,
    "FOL": 0.691,
    "FD": 1.007
  },
  {
    "liga": "Qatar",
    "equipo": "Al Ahli Doha",
    "PGLL": 0.738,
    "FOL": 0.892,
    "FD": 1.209
  },
  {
    "liga": "Qatar",
    "equipo": "Al Shahaniya",
    "PGLL": 0.553,
    "FOL": 0.604,
    "FD": 1.094
  },
  {
    "liga": "Saudi",
    "equipo": "Al Nassr",
    "PGLL": 3.222,
    "FOL": 1.746,
    "FD": 0.541
  },
  {
    "liga": "Saudi",
    "equipo": "Al Ahli Jeddah",
    "PGLL": 2.667,
    "FOL": 1.324,
    "FD": 0.496
  },
  {
    "liga": "Saudi",
    "equipo": "Al Hilal",
    "PGLL": 3.037,
    "FOL": 1.697,
    "FD": 0.558
  },
  {
    "liga": "Saudi",
    "equipo": "Al Quadisiya",
    "PGLL": 2.303,
    "FOL": 1.573,
    "FD": 0.682
  },
  {
    "liga": "Saudi",
    "equipo": "Al Taawon",
    "PGLL": 1.349,
    "FOL": 1.2,
    "FD": 0.888
  },
  {
    "liga": "Saudi",
    "equipo": "Al Ittihad",
    "PGLL": 1.256,
    "FOL": 1.047,
    "FD": 0.832
  },
  {
    "liga": "Saudi",
    "equipo": "Al Ittifaq",
    "PGLL": 0.961,
    "FOL": 1.014,
    "FD": 1.053
  },
  {
    "liga": "Saudi",
    "equipo": "Neom SC",
    "PGLL": 0.933,
    "FOL": 0.869,
    "FD": 0.929
  },
  {
    "liga": "Saudi",
    "equipo": "Al Hazm",
    "PGLL": 0.655,
    "FOL": 0.745,
    "FD": 1.136
  },
  {
    "liga": "Saudi",
    "equipo": "Al Khaleej",
    "PGLL": 0.945,
    "FOL": 1.076,
    "FD": 1.136
  },
  {
    "liga": "Saudi",
    "equipo": "Al Feiha",
    "PGLL": 0.82,
    "FOL": 0.848,
    "FD": 1.033
  },
  {
    "liga": "Saudi",
    "equipo": "Al Fateh",
    "PGLL": 0.709,
    "FOL": 0.807,
    "FD": 1.136
  },
  {
    "liga": "Saudi",
    "equipo": "Al Shabab",
    "PGLL": 0.759,
    "FOL": 0.848,
    "FD": 1.115
  },
  {
    "liga": "Saudi",
    "equipo": "Al Kholood",
    "PGLL": 0.672,
    "FOL": 0.807,
    "FD": 1.198
  },
  {
    "liga": "Saudi",
    "equipo": "Damak",
    "PGLL": 0.549,
    "FOL": 0.579,
    "FD": 1.053
  },
  {
    "liga": "Saudi",
    "equipo": "Al Riyadh",
    "PGLL": 0.532,
    "FOL": 0.683,
    "FD": 1.281
  },
  {
    "liga": "Saudi",
    "equipo": "Al Akhdoud",
    "PGLL": 0.353,
    "FOL": 0.497,
    "FD": 1.405
  },
  {
    "liga": "Saudi",
    "equipo": "Al Najma",
    "PGLL": 0.419,
    "FOL": 0.641,
    "FD": 1.529
  },
  {
    "liga": "SaudiB",
    "equipo": "Abha",
    "PGLL": 2.407,
    "FOL": 1.288,
    "FD": 0.561
  },
  {
    "liga": "SaudiB",
    "equipo": "Al Diraiyah",
    "PGLL": 2.054,
    "FOL": 1.506,
    "FD": 0.769
  },
  {
    "liga": "SaudiB",
    "equipo": "Al Ula",
    "PGLL": 2.448,
    "FOL": 1.407,
    "FD": 0.603
  },
  {
    "liga": "SaudiB",
    "equipo": "Al Jabalain",
    "PGLL": 1.526,
    "FOL": 1.15,
    "FD": 0.79
  },
  {
    "liga": "SaudiB",
    "equipo": "Al Orubah",
    "PGLL": 1.432,
    "FOL": 1.05,
    "FD": 0.769
  },
  {
    "liga": "SaudiB",
    "equipo": "Al Faisaly",
    "PGLL": 2.029,
    "FOL": 1.368,
    "FD": 0.707
  },
  {
    "liga": "SaudiB",
    "equipo": "Al Raed",
    "PGLL": 1.311,
    "FOL": 1.169,
    "FD": 0.935
  },
  {
    "liga": "SaudiB",
    "equipo": "Al Bukayriyah",
    "PGLL": 0.756,
    "FOL": 0.674,
    "FD": 0.935
  },
  {
    "liga": "SaudiB",
    "equipo": "Al Zulfi",
    "PGLL": 1.073,
    "FOL": 0.872,
    "FD": 0.852
  },
  {
    "liga": "SaudiB",
    "equipo": "Al Tai",
    "PGLL": 0.94,
    "FOL": 0.932,
    "FD": 1.039
  },
  {
    "liga": "SaudiB",
    "equipo": "Al Anwar",
    "PGLL": 1.02,
    "FOL": 1.031,
    "FD": 1.06
  },
  {
    "liga": "SaudiB",
    "equipo": "Jeddah",
    "PGLL": 0.64,
    "FOL": 0.634,
    "FD": 1.039
  },
  {
    "liga": "SaudiB",
    "equipo": "Al Wahda",
    "PGLL": 0.817,
    "FOL": 0.971,
    "FD": 1.247
  },
  {
    "liga": "SaudiB",
    "equipo": "Al Jandal",
    "PGLL": 0.534,
    "FOL": 0.614,
    "FD": 1.205
  },
  {
    "liga": "SaudiB",
    "equipo": "Al Adalha",
    "PGLL": 0.6,
    "FOL": 0.832,
    "FD": 1.455
  },
  {
    "liga": "SaudiB",
    "equipo": "Al Arabi",
    "PGLL": 1.0,
    "FOL": 1.152,
    "FD": 1.208
  },
  {
    "liga": "SaudiB",
    "equipo": "Al Batin",
    "PGLL": 0.6,
    "FOL": 0.773,
    "FD": 1.351
  },
  {
    "liga": "SaudiB",
    "equipo": "Al Jubail",
    "PGLL": 0.408,
    "FOL": 0.575,
    "FD": 1.476
  },
  {
    "liga": "LigaEgipto",
    "equipo": "Zamalek",
    "PGLL": 2.235,
    "FOL": 1.497,
    "FD": 0.688
  },
  {
    "liga": "LigaEgipto",
    "equipo": "Pyramids FC",
    "PGLL": 2.05,
    "FOL": 1.616,
    "FD": 0.809
  },
  {
    "liga": "LigaEgipto",
    "equipo": "Al Ahly",
    "PGLL": 1.75,
    "FOL": 1.655,
    "FD": 0.971
  },
  {
    "liga": "LigaEgipto",
    "equipo": "Ceramica C.",
    "PGLL": 1.7,
    "FOL": 1.34,
    "FD": 0.809
  },
  {
    "liga": "LigaEgipto",
    "equipo": "Al Masry",
    "PGLL": 1.296,
    "FOL": 1.379,
    "FD": 1.093
  },
  {
    "liga": "LigaEgipto",
    "equipo": "Smouha",
    "PGLL": 1.048,
    "FOL": 0.867,
    "FD": 0.85
  },
  {
    "liga": "LigaEgipto",
    "equipo": "ENPPI",
    "PGLL": 1.08,
    "FOL": 1.023,
    "FD": 0.973
  },
  {
    "liga": "LigaEgipto",
    "equipo": "ZED FC",
    "PGLL": 1.286,
    "FOL": 1.182,
    "FD": 0.944
  },
  {
    "liga": "LigaEgipto",
    "equipo": "Wadi Degla",
    "PGLL": 1.423,
    "FOL": 1.215,
    "FD": 0.877
  },
  {
    "liga": "LigaEgipto",
    "equipo": "El Gouna",
    "PGLL": 1.0,
    "FOL": 0.69,
    "FD": 0.708
  },
  {
    "liga": "LigaEgipto",
    "equipo": "National Bank",
    "PGLL": 1.259,
    "FOL": 1.116,
    "FD": 0.911
  },
  {
    "liga": "LigaEgipto",
    "equipo": "Petrojet",
    "PGLL": 0.971,
    "FOL": 1.116,
    "FD": 1.18
  },
  {
    "liga": "LigaEgipto",
    "equipo": "Modern Sport",
    "PGLL": 0.8,
    "FOL": 0.788,
    "FD": 1.012
  },
  {
    "liga": "LigaEgipto",
    "equipo": "El Geish",
    "PGLL": 0.633,
    "FOL": 0.624,
    "FD": 1.012
  },
  {
    "liga": "LigaEgipto",
    "equipo": "Al Ittihad Egipto",
    "PGLL": 0.686,
    "FOL": 0.788,
    "FD": 1.18
  },
  {
    "liga": "LigaEgipto",
    "equipo": "Ghazl El M.",
    "PGLL": 0.917,
    "FOL": 0.722,
    "FD": 0.809
  },
  {
    "liga": "LigaEgipto",
    "equipo": "A. Contractors",
    "PGLL": 0.815,
    "FOL": 0.722,
    "FD": 0.911
  },
  {
    "liga": "LigaEgipto",
    "equipo": "Haras El Hodood",
    "PGLL": 0.537,
    "FOL": 0.722,
    "FD": 1.383
  },
  {
    "liga": "LigaEgipto",
    "equipo": "K. Ismailia",
    "PGLL": 0.667,
    "FOL": 1.051,
    "FD": 1.619
  },
  {
    "liga": "LigaEgipto",
    "equipo": "Pharco",
    "PGLL": 0.406,
    "FOL": 0.427,
    "FD": 1.079
  },
  {
    "liga": "LigaEgipto",
    "equipo": "Ismaily",
    "PGLL": 0.4,
    "FOL": 0.46,
    "FD": 1.18
  },
  {
    "liga": "AperturaArgentina",
    "equipo": "Velez Sarsfield",
    "PGLL": 1.667,
    "FOL": 1.054,
    "FD": 0.632
  },
  {
    "liga": "AperturaArgentina",
    "equipo": "Belgrano",
    "PGLL": 1.083,
    "FOL": 0.913,
    "FD": 0.843
  },
  {
    "liga": "AperturaArgentina",
    "equipo": "I. Rivadavia",
    "PGLL": 1.769,
    "FOL": 1.616,
    "FD": 0.913
  },
  {
    "liga": "AperturaArgentina",
    "equipo": "Tigre",
    "PGLL": 1.308,
    "FOL": 1.194,
    "FD": 0.913
  },
  {
    "liga": "AperturaArgentina",
    "equipo": "Union Santa Fe",
    "PGLL": 1.235,
    "FOL": 1.475,
    "FD": 1.194
  },
  {
    "liga": "AperturaArgentina",
    "equipo": "Rosario Central",
    "PGLL": 1.214,
    "FOL": 1.194,
    "FD": 0.984
  },
  {
    "liga": "AperturaArgentina",
    "equipo": "Estudiantes",
    "PGLL": 2.429,
    "FOL": 1.194,
    "FD": 0.492
  },
  {
    "liga": "AperturaArgentina",
    "equipo": "Independiente",
    "PGLL": 1.294,
    "FOL": 1.546,
    "FD": 1.194
  },
  {
    "liga": "AperturaArgentina",
    "equipo": "Platense",
    "PGLL": 0.833,
    "FOL": 0.703,
    "FD": 0.843
  },
  {
    "liga": "AperturaArgentina",
    "equipo": "River Plate",
    "PGLL": 1.9,
    "FOL": 1.335,
    "FD": 0.703
  },
  {
    "liga": "AperturaArgentina",
    "equipo": "T. de Cordoba",
    "PGLL": 1.333,
    "FOL": 1.124,
    "FD": 0.843
  },
  {
    "liga": "AperturaArgentina",
    "equipo": "Gimnasia",
    "PGLL": 0.842,
    "FOL": 1.124,
    "FD": 1.335
  },
  {
    "liga": "AperturaArgentina",
    "equipo": "Boca Juniors",
    "PGLL": 2.0,
    "FOL": 1.124,
    "FD": 0.562
  },
  {
    "liga": "AperturaArgentina",
    "equipo": "Defensa y J.",
    "PGLL": 1.133,
    "FOL": 1.194,
    "FD": 1.054
  },
  {
    "liga": "AperturaArgentina",
    "equipo": "San Lorenzo",
    "PGLL": 1.0,
    "FOL": 0.843,
    "FD": 0.843
  },
  {
    "liga": "AperturaArgentina",
    "equipo": "Racing Club",
    "PGLL": 1.143,
    "FOL": 1.124,
    "FD": 0.984
  },
  {
    "liga": "AperturaArgentina",
    "equipo": "Huracan",
    "PGLL": 1.455,
    "FOL": 1.124,
    "FD": 0.773
  },
  {
    "liga": "AperturaArgentina",
    "equipo": "Barracas C.",
    "PGLL": 1.083,
    "FOL": 0.913,
    "FD": 0.843
  },
  {
    "liga": "AperturaArgentina",
    "equipo": "Argentinos Jrs",
    "PGLL": 1.5,
    "FOL": 1.054,
    "FD": 0.703
  },
  {
    "liga": "AperturaArgentina",
    "equipo": "Banfield",
    "PGLL": 0.824,
    "FOL": 0.984,
    "FD": 1.194
  },
  {
    "liga": "AperturaArgentina",
    "equipo": "Sarmiento",
    "PGLL": 0.75,
    "FOL": 0.843,
    "FD": 1.124
  },
  {
    "liga": "AperturaArgentina",
    "equipo": "Lanus",
    "PGLL": 1.2,
    "FOL": 1.265,
    "FD": 1.054
  },
  {
    "liga": "AperturaArgentina",
    "equipo": "Central Cordoba",
    "PGLL": 0.526,
    "FOL": 0.703,
    "FD": 1.335
  },
  {
    "liga": "AperturaArgentina",
    "equipo": "G. Mendoza",
    "PGLL": 0.688,
    "FOL": 0.773,
    "FD": 1.124
  },
  {
    "liga": "AperturaArgentina",
    "equipo": "Instituto",
    "PGLL": 0.875,
    "FOL": 0.984,
    "FD": 1.124
  },
  {
    "liga": "AperturaArgentina",
    "equipo": "D. Riestra",
    "PGLL": 0.25,
    "FOL": 0.211,
    "FD": 0.843
  },
  {
    "liga": "AperturaArgentina",
    "equipo": "A. Tucuman",
    "PGLL": 0.684,
    "FOL": 0.913,
    "FD": 1.335
  },
  {
    "liga": "AperturaArgentina",
    "equipo": "Aldosivi",
    "PGLL": 0.267,
    "FOL": 0.281,
    "FD": 1.054
  },
  {
    "liga": "AperturaArgentina",
    "equipo": "E. Rio Cuarto",
    "PGLL": 0.2,
    "FOL": 0.281,
    "FD": 1.405
  },
  {
    "liga": "AperturaArgentina",
    "equipo": "Newells",
    "PGLL": 0.52,
    "FOL": 0.913,
    "FD": 1.756
  },
  {
    "liga": "ClausuraArgentina",
    "equipo": "Rosario Central",
    "PGLL": 1.214,
    "FOL": 1.178,
    "FD": 0.996
  },
  {
    "liga": "ClausuraArgentina",
    "equipo": "Lanus",
    "PGLL": 1.2,
    "FOL": 1.247,
    "FD": 1.067
  },
  {
    "liga": "ClausuraArgentina",
    "equipo": "Boca Juniors",
    "PGLL": 2.0,
    "FOL": 1.109,
    "FD": 0.569
  },
  {
    "liga": "ClausuraArgentina",
    "equipo": "D. Riestra",
    "PGLL": 0.25,
    "FOL": 0.208,
    "FD": 0.854
  },
  {
    "liga": "ClausuraArgentina",
    "equipo": "Velez Sarsfield",
    "PGLL": 1.667,
    "FOL": 1.039,
    "FD": 0.64
  },
  {
    "liga": "ClausuraArgentina",
    "equipo": "Union Santa Fe",
    "PGLL": 1.235,
    "FOL": 1.455,
    "FD": 1.21
  },
  {
    "liga": "ClausuraArgentina",
    "equipo": "Racing Club",
    "PGLL": 1.143,
    "FOL": 1.109,
    "FD": 0.996
  },
  {
    "liga": "ClausuraArgentina",
    "equipo": "Central Cordoba",
    "PGLL": 0.526,
    "FOL": 0.693,
    "FD": 1.352
  },
  {
    "liga": "ClausuraArgentina",
    "equipo": "Argentinos Jrs",
    "PGLL": 1.5,
    "FOL": 1.039,
    "FD": 0.712
  },
  {
    "liga": "ClausuraArgentina",
    "equipo": "San Lorenzo",
    "PGLL": 1.0,
    "FOL": 0.831,
    "FD": 0.854
  },
  {
    "liga": "ClausuraArgentina",
    "equipo": "Barracas C.",
    "PGLL": 1.083,
    "FOL": 0.901,
    "FD": 0.854
  },
  {
    "liga": "ClausuraArgentina",
    "equipo": "River Plate",
    "PGLL": 1.9,
    "FOL": 1.316,
    "FD": 0.712
  },
  {
    "liga": "ClausuraArgentina",
    "equipo": "Tigre",
    "PGLL": 1.308,
    "FOL": 1.178,
    "FD": 0.925
  },
  {
    "liga": "ClausuraArgentina",
    "equipo": "Gimnasia",
    "PGLL": 0.842,
    "FOL": 1.109,
    "FD": 1.352
  },
  {
    "liga": "ClausuraArgentina",
    "equipo": "Estudiantes",
    "PGLL": 2.429,
    "FOL": 1.178,
    "FD": 0.498
  },
  {
    "liga": "ClausuraArgentina",
    "equipo": "T. de Cordoba",
    "PGLL": 1.333,
    "FOL": 1.109,
    "FD": 0.854
  },
  {
    "liga": "ClausuraArgentina",
    "equipo": "Banfield",
    "PGLL": 0.824,
    "FOL": 0.97,
    "FD": 1.21
  },
  {
    "liga": "ClausuraArgentina",
    "equipo": "Belgrano",
    "PGLL": 1.083,
    "FOL": 0.901,
    "FD": 0.854
  },
  {
    "liga": "ClausuraArgentina",
    "equipo": "Sarmiento",
    "PGLL": 0.75,
    "FOL": 0.831,
    "FD": 1.138
  },
  {
    "liga": "ClausuraArgentina",
    "equipo": "Huracan",
    "PGLL": 1.455,
    "FOL": 1.109,
    "FD": 0.783
  },
  {
    "liga": "ClausuraArgentina",
    "equipo": "SM San Juan",
    "PGLL": 0.812,
    "FOL": 0.788,
    "FD": 0.996
  },
  {
    "liga": "ClausuraArgentina",
    "equipo": "Defensa y J.",
    "PGLL": 1.133,
    "FOL": 1.178,
    "FD": 1.067
  },
  {
    "liga": "ClausuraArgentina",
    "equipo": "Independiente",
    "PGLL": 1.294,
    "FOL": 1.524,
    "FD": 1.21
  },
  {
    "liga": "ClausuraArgentina",
    "equipo": "A. Tucuman",
    "PGLL": 0.684,
    "FOL": 0.901,
    "FD": 1.352
  },
  {
    "liga": "ClausuraArgentina",
    "equipo": "Aldosivi",
    "PGLL": 0.267,
    "FOL": 0.277,
    "FD": 1.067
  },
  {
    "liga": "ClausuraArgentina",
    "equipo": "I. Rivadavia",
    "PGLL": 1.769,
    "FOL": 1.594,
    "FD": 0.925
  },
  {
    "liga": "ClausuraArgentina",
    "equipo": "Instituto",
    "PGLL": 0.875,
    "FOL": 0.97,
    "FD": 1.138
  },
  {
    "liga": "ClausuraArgentina",
    "equipo": "Newells",
    "PGLL": 0.52,
    "FOL": 0.901,
    "FD": 1.779
  },
  {
    "liga": "ClausuraArgentina",
    "equipo": "Godoy Cruz",
    "PGLL": 0.579,
    "FOL": 0.667,
    "FD": 1.183
  },
  {
    "liga": "ClausuraArgentina",
    "equipo": "Platense",
    "PGLL": 0.833,
    "FOL": 0.693,
    "FD": 0.854
  },
  {
    "liga": "ArgentinaNacional",
    "equipo": "Acassuso",
    "PGLL": 0.615,
    "FOL": 0.699,
    "FD": 1.136
  },
  {
    "liga": "ArgentinaNacional",
    "equipo": "Gimnasia y Tiro",
    "PGLL": 0.75,
    "FOL": 1.049,
    "FD": 1.398
  },
  {
    "liga": "ArgentinaNacional",
    "equipo": "San Miguel",
    "PGLL": 0.833,
    "FOL": 0.874,
    "FD": 1.049
  },
  {
    "liga": "ArgentinaNacional",
    "equipo": "Nueva Chicago",
    "PGLL": 1.2,
    "FOL": 1.049,
    "FD": 0.874
  },
  {
    "liga": "ArgentinaNacional",
    "equipo": "Almirante Brown",
    "PGLL": 1.0,
    "FOL": 0.699,
    "FD": 0.699
  },
  {
    "liga": "ArgentinaNacional",
    "equipo": "Gimnasia Jujuy",
    "PGLL": 1.357,
    "FOL": 1.66,
    "FD": 1.223
  },
  {
    "liga": "ArgentinaNacional",
    "equipo": "Deportivo Moron",
    "PGLL": 1.636,
    "FOL": 1.573,
    "FD": 0.961
  },
  {
    "liga": "ArgentinaNacional",
    "equipo": "Ferro Carril",
    "PGLL": 1.182,
    "FOL": 1.136,
    "FD": 0.961
  },
  {
    "liga": "ArgentinaNacional",
    "equipo": "Colon Santa Fe",
    "PGLL": 1.5,
    "FOL": 1.311,
    "FD": 0.874
  },
  {
    "liga": "ArgentinaNacional",
    "equipo": "D. de Belgrano",
    "PGLL": 1.0,
    "FOL": 0.961,
    "FD": 0.961
  },
  {
    "liga": "ArgentinaNacional",
    "equipo": "SM Tucuman",
    "PGLL": 1.75,
    "FOL": 1.223,
    "FD": 0.699
  },
  {
    "liga": "ArgentinaNacional",
    "equipo": "Tristan Suarez",
    "PGLL": 1.444,
    "FOL": 1.136,
    "FD": 0.786
  },
  {
    "liga": "ArgentinaNacional",
    "equipo": "Chacarita J.",
    "PGLL": 0.917,
    "FOL": 0.961,
    "FD": 1.049
  },
  {
    "liga": "ArgentinaNacional",
    "equipo": "Midland",
    "PGLL": 1.444,
    "FOL": 1.136,
    "FD": 0.786
  },
  {
    "liga": "ArgentinaNacional",
    "equipo": "Deportivo Maipu",
    "PGLL": 1.214,
    "FOL": 1.485,
    "FD": 1.223
  },
  {
    "liga": "ArgentinaNacional",
    "equipo": "SM San Juan-N",
    "PGLL": 0.833,
    "FOL": 0.874,
    "FD": 1.049
  },
  {
    "liga": "ArgentinaNacional",
    "equipo": "All Boys",
    "PGLL": 0.636,
    "FOL": 0.612,
    "FD": 0.961
  },
  {
    "liga": "ArgentinaNacional",
    "equipo": "A. Rafaela",
    "PGLL": 1.5,
    "FOL": 1.049,
    "FD": 0.699
  },
  {
    "liga": "ArgentinaNacional",
    "equipo": "Atletico Mitre",
    "PGLL": 0.909,
    "FOL": 0.874,
    "FD": 0.961
  },
  {
    "liga": "ArgentinaNacional",
    "equipo": "A. Atlanta",
    "PGLL": 1.556,
    "FOL": 1.223,
    "FD": 0.786
  },
  {
    "liga": "ArgentinaNacional",
    "equipo": "Temperley",
    "PGLL": 0.75,
    "FOL": 0.786,
    "FD": 1.049
  },
  {
    "liga": "ArgentinaNacional",
    "equipo": "Racing Cordoba",
    "PGLL": 0.857,
    "FOL": 1.049,
    "FD": 1.223
  },
  {
    "liga": "ArgentinaNacional",
    "equipo": "Ciudad Bolivar",
    "PGLL": 1.429,
    "FOL": 0.874,
    "FD": 0.612
  },
  {
    "liga": "ArgentinaNacional",
    "equipo": "Godoy Cruz-N",
    "PGLL": 1.333,
    "FOL": 1.049,
    "FD": 0.786
  },
  {
    "liga": "ArgentinaNacional",
    "equipo": "CA Guemes",
    "PGLL": 0.765,
    "FOL": 1.136,
    "FD": 1.485
  },
  {
    "liga": "ArgentinaNacional",
    "equipo": "Agropecuario",
    "PGLL": 0.8,
    "FOL": 1.049,
    "FD": 1.311
  },
  {
    "liga": "ArgentinaNacional",
    "equipo": "Colegiales",
    "PGLL": 0.571,
    "FOL": 0.699,
    "FD": 1.223
  },
  {
    "liga": "ArgentinaNacional",
    "equipo": "D. Madryn",
    "PGLL": 1.385,
    "FOL": 1.573,
    "FD": 1.136
  },
  {
    "liga": "ArgentinaNacional",
    "equipo": "Los Andes",
    "PGLL": 2.25,
    "FOL": 0.786,
    "FD": 0.35
  },
  {
    "liga": "ArgentinaNacional",
    "equipo": "Patronato",
    "PGLL": 0.636,
    "FOL": 0.612,
    "FD": 0.961
  },
  {
    "liga": "ArgentinaNacional",
    "equipo": "Quilmes",
    "PGLL": 1.2,
    "FOL": 1.049,
    "FD": 0.874
  },
  {
    "liga": "ArgentinaNacional",
    "equipo": "San Telmo",
    "PGLL": 0.857,
    "FOL": 1.049,
    "FD": 1.223
  },
  {
    "liga": "ArgentinaNacional",
    "equipo": "Almagro",
    "PGLL": 0.533,
    "FOL": 0.699,
    "FD": 1.311
  },
  {
    "liga": "ArgentinaNacional",
    "equipo": "Central Norte",
    "PGLL": 0.545,
    "FOL": 0.524,
    "FD": 0.961
  },
  {
    "liga": "ArgentinaNacional",
    "equipo": "Chaco For Ever",
    "PGLL": 0.529,
    "FOL": 0.786,
    "FD": 1.485
  },
  {
    "liga": "ArgentinaNacional",
    "equipo": "CA Estudiantes",
    "PGLL": 0.8,
    "FOL": 0.699,
    "FD": 0.874
  },
  {
    "liga": "AperturaPeru",
    "equipo": "Los Chankas",
    "PGLL": 1.375,
    "FOL": 1.161,
    "FD": 0.845
  },
  {
    "liga": "AperturaPeru",
    "equipo": "Alianza Lima",
    "PGLL": 3.571,
    "FOL": 1.32,
    "FD": 0.37
  },
  {
    "liga": "AperturaPeru",
    "equipo": "Universitario",
    "PGLL": 1.692,
    "FOL": 1.161,
    "FD": 0.686
  },
  {
    "liga": "AperturaPeru",
    "equipo": "Cienciano",
    "PGLL": 1.706,
    "FOL": 1.531,
    "FD": 0.897
  },
  {
    "liga": "AperturaPeru",
    "equipo": "Cajamarca",
    "PGLL": 0.864,
    "FOL": 1.003,
    "FD": 1.161
  },
  {
    "liga": "AperturaPeru",
    "equipo": "S. Cristal",
    "PGLL": 1.0,
    "FOL": 1.214,
    "FD": 1.214
  },
  {
    "liga": "AperturaPeru",
    "equipo": "FBC Melgar",
    "PGLL": 1.235,
    "FOL": 1.109,
    "FD": 0.897
  },
  {
    "liga": "AperturaPeru",
    "equipo": "Comerciantes U.",
    "PGLL": 1.059,
    "FOL": 0.95,
    "FD": 0.897
  },
  {
    "liga": "AperturaPeru",
    "equipo": "Juan Pablo II",
    "PGLL": 0.606,
    "FOL": 1.056,
    "FD": 1.742
  },
  {
    "liga": "AperturaPeru",
    "equipo": "Alianza A.",
    "PGLL": 1.143,
    "FOL": 0.845,
    "FD": 0.739
  },
  {
    "liga": "AperturaPeru",
    "equipo": "ADT",
    "PGLL": 1.059,
    "FOL": 0.95,
    "FD": 0.897
  },
  {
    "liga": "AperturaPeru",
    "equipo": "Sport Huancayo",
    "PGLL": 0.739,
    "FOL": 0.897,
    "FD": 1.214
  },
  {
    "liga": "AperturaPeru",
    "equipo": "Cusco",
    "PGLL": 0.818,
    "FOL": 0.95,
    "FD": 1.161
  },
  {
    "liga": "AperturaPeru",
    "equipo": "UCV Moquegua",
    "PGLL": 0.773,
    "FOL": 0.897,
    "FD": 1.161
  },
  {
    "liga": "AperturaPeru",
    "equipo": "D. Garcilaso",
    "PGLL": 0.882,
    "FOL": 0.792,
    "FD": 0.897
  },
  {
    "liga": "AperturaPeru",
    "equipo": "FC Cajamarca",
    "PGLL": 0.72,
    "FOL": 0.95,
    "FD": 1.32
  },
  {
    "liga": "AperturaPeru",
    "equipo": "Atletico Grau",
    "PGLL": 0.588,
    "FOL": 0.528,
    "FD": 0.897
  },
  {
    "liga": "AperturaPeru",
    "equipo": "Sport Boys",
    "PGLL": 0.684,
    "FOL": 0.686,
    "FD": 1.003
  },
  {
    "liga": "ChileA",
    "equipo": "Colo-Colo",
    "PGLL": 2.0,
    "FOL": 0.966,
    "FD": 0.483
  },
  {
    "liga": "ChileA",
    "equipo": "D. Limache",
    "PGLL": 2.273,
    "FOL": 1.724,
    "FD": 0.759
  },
  {
    "liga": "ChileA",
    "equipo": "Nublense",
    "PGLL": 1.222,
    "FOL": 0.759,
    "FD": 0.621
  },
  {
    "liga": "ChileA",
    "equipo": "U. Catolica",
    "PGLL": 1.412,
    "FOL": 1.655,
    "FD": 1.172
  },
  {
    "liga": "ChileA",
    "equipo": "U. Concepcion",
    "PGLL": 0.474,
    "FOL": 0.621,
    "FD": 1.31
  },
  {
    "liga": "ChileA",
    "equipo": "Audax Italiano",
    "PGLL": 0.938,
    "FOL": 1.034,
    "FD": 1.103
  },
  {
    "liga": "ChileA",
    "equipo": "Union La Calera",
    "PGLL": 0.875,
    "FOL": 0.966,
    "FD": 1.103
  },
  {
    "liga": "ChileA",
    "equipo": "U. de Chile",
    "PGLL": 1.833,
    "FOL": 0.759,
    "FD": 0.414
  },
  {
    "liga": "ChileA",
    "equipo": "OHiggins",
    "PGLL": 1.062,
    "FOL": 1.172,
    "FD": 1.103
  },
  {
    "liga": "ChileA",
    "equipo": "La Serena",
    "PGLL": 0.929,
    "FOL": 0.897,
    "FD": 0.966
  },
  {
    "liga": "ChileA",
    "equipo": "Coquimbo Unido",
    "PGLL": 1.0,
    "FOL": 1.034,
    "FD": 1.034
  },
  {
    "liga": "ChileA",
    "equipo": "Huachipato",
    "PGLL": 1.286,
    "FOL": 1.241,
    "FD": 0.966
  },
  {
    "liga": "ChileA",
    "equipo": "Palestino",
    "PGLL": 0.778,
    "FOL": 0.966,
    "FD": 1.241
  },
  {
    "liga": "ChileA",
    "equipo": "Everton Chile",
    "PGLL": 0.818,
    "FOL": 0.621,
    "FD": 0.759
  },
  {
    "liga": "ChileA",
    "equipo": "Cobresal",
    "PGLL": 0.577,
    "FOL": 1.034,
    "FD": 1.793
  },
  {
    "liga": "ChileA",
    "equipo": "Concepcion",
    "PGLL": 0.471,
    "FOL": 0.552,
    "FD": 1.172
  },
  {
    "liga": "ChileB",
    "equipo": "Puerto Montt",
    "PGLL": 1.875,
    "FOL": 0.919,
    "FD": 0.531
  },
  {
    "liga": "ChileB",
    "equipo": "Recoleta",
    "PGLL": 1.056,
    "FOL": 1.164,
    "FD": 1.194
  },
  {
    "liga": "ChileB",
    "equipo": "Cobreloa",
    "PGLL": 1.615,
    "FOL": 1.287,
    "FD": 0.862
  },
  {
    "liga": "ChileB",
    "equipo": "Copiapo",
    "PGLL": 0.882,
    "FOL": 0.919,
    "FD": 1.128
  },
  {
    "liga": "ChileB",
    "equipo": "Magallanes",
    "PGLL": 0.941,
    "FOL": 0.98,
    "FD": 1.128
  },
  {
    "liga": "ChileB",
    "equipo": "Antofagasta",
    "PGLL": 1.538,
    "FOL": 1.226,
    "FD": 0.862
  },
  {
    "liga": "ChileB",
    "equipo": "Union Espanola",
    "PGLL": 1.273,
    "FOL": 0.858,
    "FD": 0.73
  },
  {
    "liga": "ChileB",
    "equipo": "S. Wanderers",
    "PGLL": 1.467,
    "FOL": 1.348,
    "FD": 0.995
  },
  {
    "liga": "ChileB",
    "equipo": "Deportes Temuco",
    "PGLL": 1.133,
    "FOL": 1.042,
    "FD": 0.995
  },
  {
    "liga": "ChileB",
    "equipo": "D. Iquique",
    "PGLL": 0.867,
    "FOL": 0.797,
    "FD": 0.995
  },
  {
    "liga": "ChileB",
    "equipo": "San Marcos",
    "PGLL": 2.0,
    "FOL": 0.98,
    "FD": 0.531
  },
  {
    "liga": "ChileB",
    "equipo": "CD Santa Cruz",
    "PGLL": 0.667,
    "FOL": 0.858,
    "FD": 1.393
  },
  {
    "liga": "ChileB",
    "equipo": "U. San Felipe",
    "PGLL": 0.421,
    "FOL": 0.49,
    "FD": 1.26
  },
  {
    "liga": "ChileB",
    "equipo": "San Luis",
    "PGLL": 0.895,
    "FOL": 1.042,
    "FD": 1.26
  },
  {
    "liga": "ChileB",
    "equipo": "Curico Unido",
    "PGLL": 0.65,
    "FOL": 0.797,
    "FD": 1.327
  },
  {
    "liga": "ChileB",
    "equipo": "Rangers",
    "PGLL": 1.732,
    "FOL": 1.293,
    "FD": 0.809
  },
  {
    "liga": "AperturaParaguay",
    "equipo": "Olimpia",
    "PGLL": 2.071,
    "FOL": 1.242,
    "FD": 0.602
  },
  {
    "liga": "AperturaParaguay",
    "equipo": "Cerro Porteno",
    "PGLL": 1.688,
    "FOL": 1.156,
    "FD": 0.688
  },
  {
    "liga": "AperturaParaguay",
    "equipo": "Nacional P",
    "PGLL": 1.4,
    "FOL": 1.139,
    "FD": 0.817
  },
  {
    "liga": "AperturaParaguay",
    "equipo": "Libertad",
    "PGLL": 1.375,
    "FOL": 1.343,
    "FD": 0.981
  },
  {
    "liga": "AperturaParaguay",
    "equipo": "S. Ameliano",
    "PGLL": 1.444,
    "FOL": 1.058,
    "FD": 0.736
  },
  {
    "liga": "AperturaParaguay",
    "equipo": "D. Recoleta",
    "PGLL": 1.107,
    "FOL": 1.261,
    "FD": 1.144
  },
  {
    "liga": "AperturaParaguay",
    "equipo": "Rubio Nu",
    "PGLL": 0.609,
    "FOL": 0.57,
    "FD": 0.94
  },
  {
    "liga": "AperturaParaguay",
    "equipo": "S. Trinidense",
    "PGLL": 1.136,
    "FOL": 1.017,
    "FD": 0.899
  },
  {
    "liga": "AperturaParaguay",
    "equipo": "S. Luqueno",
    "PGLL": 0.742,
    "FOL": 0.936,
    "FD": 1.267
  },
  {
    "liga": "AperturaParaguay",
    "equipo": "Guarani",
    "PGLL": 1.19,
    "FOL": 1.017,
    "FD": 0.858
  },
  {
    "liga": "AperturaParaguay",
    "equipo": "2 de Mayo",
    "PGLL": 0.529,
    "FOL": 0.732,
    "FD": 1.39
  },
  {
    "liga": "AperturaParaguay",
    "equipo": "San Lorenzo P",
    "PGLL": 0.317,
    "FOL": 0.529,
    "FD": 1.676
  },
  {
    "liga": "ClausuraParaguay",
    "equipo": "Cerro Porteno C",
    "PGLL": 1.833,
    "FOL": 1.161,
    "FD": 0.633
  },
  {
    "liga": "ClausuraParaguay",
    "equipo": "Guarani C",
    "PGLL": 2.2,
    "FOL": 1.548,
    "FD": 0.704
  },
  {
    "liga": "ClausuraParaguay",
    "equipo": "Nacional C",
    "PGLL": 1.529,
    "FOL": 0.915,
    "FD": 0.598
  },
  {
    "liga": "ClausuraParaguay",
    "equipo": "S. Trinidense C",
    "PGLL": 1.19,
    "FOL": 0.88,
    "FD": 0.739
  },
  {
    "liga": "ClausuraParaguay",
    "equipo": "2 de Mayo C",
    "PGLL": 1.037,
    "FOL": 0.985,
    "FD": 0.95
  },
  {
    "liga": "ClausuraParaguay",
    "equipo": "D. Recoleta C",
    "PGLL": 1.167,
    "FOL": 1.232,
    "FD": 1.056
  },
  {
    "liga": "ClausuraParaguay",
    "equipo": "Olimpia C",
    "PGLL": 0.868,
    "FOL": 1.161,
    "FD": 1.337
  },
  {
    "liga": "ClausuraParaguay",
    "equipo": "Libertad C",
    "PGLL": 1.083,
    "FOL": 0.915,
    "FD": 0.845
  },
  {
    "liga": "ClausuraParaguay",
    "equipo": "S. Luqueno C",
    "PGLL": 0.75,
    "FOL": 0.95,
    "FD": 1.267
  },
  {
    "liga": "ClausuraParaguay",
    "equipo": "G. Caballero C",
    "PGLL": 0.667,
    "FOL": 0.774,
    "FD": 1.161
  },
  {
    "liga": "ClausuraParaguay",
    "equipo": "S. Ameliano C",
    "PGLL": 0.55,
    "FOL": 0.774,
    "FD": 1.408
  },
  {
    "liga": "ClausuraParaguay",
    "equipo": "A. Tembetary C",
    "PGLL": 0.541,
    "FOL": 0.704,
    "FD": 1.302
  },
  {
    "liga": "IntermediaParaguay",
    "equipo": "Rubio Nu",
    "PGLL": 0.609,
    "FOL": 0.648,
    "FD": 1.007
  },
  {
    "liga": "IntermediaParaguay",
    "equipo": "12 de Junio VH",
    "PGLL": 1.857,
    "FOL": 1.336,
    "FD": 0.681
  },
  {
    "liga": "IntermediaParaguay",
    "equipo": "D. Capiata",
    "PGLL": 2.0,
    "FOL": 1.131,
    "FD": 0.535
  },
  {
    "liga": "IntermediaParaguay",
    "equipo": "Tacuary",
    "PGLL": 0.947,
    "FOL": 0.925,
    "FD": 0.924
  },
  {
    "liga": "IntermediaParaguay",
    "equipo": "S. Carapegua",
    "PGLL": 1.353,
    "FOL": 1.182,
    "FD": 0.827
  },
  {
    "liga": "IntermediaParaguay",
    "equipo": "San Lorenzo",
    "PGLL": 1.0,
    "FOL": 0.793,
    "FD": 0.75
  },
  {
    "liga": "IntermediaParaguay",
    "equipo": "Resistencia",
    "PGLL": 1.0,
    "FOL": 1.439,
    "FD": 1.362
  },
  {
    "liga": "IntermediaParaguay",
    "equipo": "C. River Plate",
    "PGLL": 1.0,
    "FOL": 1.182,
    "FD": 1.119
  },
  {
    "liga": "IntermediaParaguay",
    "equipo": "Pastoreo",
    "PGLL": 0.905,
    "FOL": 0.977,
    "FD": 1.021
  },
  {
    "liga": "IntermediaParaguay",
    "equipo": "Independiente",
    "PGLL": 1.294,
    "FOL": 1.454,
    "FD": 1.063
  },
  {
    "liga": "IntermediaParaguay",
    "equipo": "Encarnacion",
    "PGLL": 0.857,
    "FOL": 0.925,
    "FD": 1.021
  },
  {
    "liga": "IntermediaParaguay",
    "equipo": "Guairena",
    "PGLL": 0.7,
    "FOL": 0.72,
    "FD": 0.973
  },
  {
    "liga": "IntermediaParaguay",
    "equipo": "Sol de America",
    "PGLL": 0.5,
    "FOL": 0.514,
    "FD": 0.973
  },
  {
    "liga": "IntermediaParaguay",
    "equipo": "Guarani de Fram",
    "PGLL": 0.828,
    "FOL": 1.233,
    "FD": 1.41
  },
  {
    "liga": "IntermediaParaguay",
    "equipo": "F. de la Mora",
    "PGLL": 0.636,
    "FOL": 0.72,
    "FD": 1.07
  },
  {
    "liga": "IntermediaParaguay",
    "equipo": "D. Santani",
    "PGLL": 0.615,
    "FOL": 0.822,
    "FD": 1.264
  },
  {
    "liga": "LigaEcuador",
    "equipo": "I. del Valle",
    "PGLL": 1.769,
    "FOL": 1.594,
    "FD": 0.93
  },
  {
    "liga": "LigaEcuador",
    "equipo": "U. Catolica",
    "PGLL": 1.412,
    "FOL": 1.966,
    "FD": 1.437
  },
  {
    "liga": "LigaEcuador",
    "equipo": "Libertad",
    "PGLL": 1.375,
    "FOL": 1.487,
    "FD": 1.116
  },
  {
    "liga": "LigaEcuador",
    "equipo": "Barcelona SC",
    "PGLL": 1.182,
    "FOL": 0.901,
    "FD": 0.787
  },
  {
    "liga": "LigaEcuador",
    "equipo": "Delfin",
    "PGLL": 0.5,
    "FOL": 0.347,
    "FD": 0.715
  },
  {
    "liga": "LigaEcuador",
    "equipo": "LDU Quito",
    "PGLL": 1.182,
    "FOL": 0.901,
    "FD": 0.787
  },
  {
    "liga": "LigaEcuador",
    "equipo": "D. Cuenca",
    "PGLL": 0.938,
    "FOL": 1.04,
    "FD": 1.144
  },
  {
    "liga": "LigaEcuador",
    "equipo": "Macara",
    "PGLL": 1.167,
    "FOL": 0.97,
    "FD": 0.858
  },
  {
    "liga": "LigaEcuador",
    "equipo": "Tecnico U.",
    "PGLL": 1.0,
    "FOL": 0.901,
    "FD": 0.93
  },
  {
    "liga": "LigaEcuador",
    "equipo": "Manta",
    "PGLL": 0.267,
    "FOL": 0.277,
    "FD": 1.073
  },
  {
    "liga": "LigaEcuador",
    "equipo": "Aucas",
    "PGLL": 1.333,
    "FOL": 1.109,
    "FD": 0.858
  },
  {
    "liga": "LigaEcuador",
    "equipo": "Mushuc Runa",
    "PGLL": 1.0,
    "FOL": 1.109,
    "FD": 1.144
  },
  {
    "liga": "LigaEcuador",
    "equipo": "Leones Norte",
    "PGLL": 0.714,
    "FOL": 0.693,
    "FD": 1.001
  },
  {
    "liga": "LigaEcuador",
    "equipo": "Orense",
    "PGLL": 1.118,
    "FOL": 1.317,
    "FD": 1.216
  },
  {
    "liga": "LigaEcuador",
    "equipo": "Guayaquil City",
    "PGLL": 0.833,
    "FOL": 0.693,
    "FD": 0.858
  },
  {
    "liga": "LigaEcuador",
    "equipo": "Emelec",
    "PGLL": 0.625,
    "FOL": 0.693,
    "FD": 1.144
  },
  {
    "liga": "AperturaVenezuela",
    "equipo": "UCV",
    "PGLL": 1.412,
    "FOL": 1.548,
    "FD": 1.097
  },
  {
    "liga": "AperturaVenezuela",
    "equipo": "D. La Guaira",
    "PGLL": 2.333,
    "FOL": 0.903,
    "FD": 0.387
  },
  {
    "liga": "AperturaVenezuela",
    "equipo": "D. Tachira",
    "PGLL": 1.364,
    "FOL": 0.968,
    "FD": 0.71
  },
  {
    "liga": "AperturaVenezuela",
    "equipo": "Puerto Cabello",
    "PGLL": 1.154,
    "FOL": 0.968,
    "FD": 0.839
  },
  {
    "liga": "AperturaVenezuela",
    "equipo": "Metropolitanos",
    "PGLL": 1.5,
    "FOL": 0.968,
    "FD": 0.645
  },
  {
    "liga": "AperturaVenezuela",
    "equipo": "Carabobo",
    "PGLL": 1.833,
    "FOL": 1.419,
    "FD": 0.774
  },
  {
    "liga": "AperturaVenezuela",
    "equipo": "Portuguesa",
    "PGLL": 1.417,
    "FOL": 1.097,
    "FD": 0.774
  },
  {
    "liga": "AperturaVenezuela",
    "equipo": "Rayo Zuliano",
    "PGLL": 0.571,
    "FOL": 0.774,
    "FD": 1.355
  },
  {
    "liga": "AperturaVenezuela",
    "equipo": "E. Merida",
    "PGLL": 1.312,
    "FOL": 1.355,
    "FD": 1.032
  },
  {
    "liga": "AperturaVenezuela",
    "equipo": "Zamora",
    "PGLL": 1.0,
    "FOL": 0.839,
    "FD": 0.839
  },
  {
    "liga": "AperturaVenezuela",
    "equipo": "Caracas",
    "PGLL": 0.812,
    "FOL": 0.839,
    "FD": 1.032
  },
  {
    "liga": "AperturaVenezuela",
    "equipo": "Monagas",
    "PGLL": 0.619,
    "FOL": 0.839,
    "FD": 1.355
  },
  {
    "liga": "AperturaVenezuela",
    "equipo": "A. Anzoategui",
    "PGLL": 0.583,
    "FOL": 0.903,
    "FD": 1.548
  },
  {
    "liga": "AperturaVenezuela",
    "equipo": "Trujillanos",
    "PGLL": 0.36,
    "FOL": 0.581,
    "FD": 1.613
  },
  {
    "liga": "ClausuraVenezuela",
    "equipo": "D. La Guaira C",
    "PGLL": 3.625,
    "FOL": 1.871,
    "FD": 0.516
  },
  {
    "liga": "ClausuraVenezuela",
    "equipo": "D. Tachira C",
    "PGLL": 1.917,
    "FOL": 1.484,
    "FD": 0.774
  },
  {
    "liga": "ClausuraVenezuela",
    "equipo": "Carabobo C",
    "PGLL": 1.75,
    "FOL": 0.903,
    "FD": 0.516
  },
  {
    "liga": "ClausuraVenezuela",
    "equipo": "Monagas C",
    "PGLL": 1.267,
    "FOL": 1.226,
    "FD": 0.968
  },
  {
    "liga": "ClausuraVenezuela",
    "equipo": "Caracas C",
    "PGLL": 1.0,
    "FOL": 1.097,
    "FD": 1.097
  },
  {
    "liga": "ClausuraVenezuela",
    "equipo": "Zamora C",
    "PGLL": 0.733,
    "FOL": 0.71,
    "FD": 0.968
  },
  {
    "liga": "ClausuraVenezuela",
    "equipo": "Puerto Cabello C",
    "PGLL": 1.2,
    "FOL": 0.774,
    "FD": 0.645
  },
  {
    "liga": "ClausuraVenezuela",
    "equipo": "Metropolitanos C",
    "PGLL": 1.105,
    "FOL": 1.355,
    "FD": 1.226
  },
  {
    "liga": "ClausuraVenezuela",
    "equipo": "UCV C",
    "PGLL": 1.056,
    "FOL": 1.226,
    "FD": 1.161
  },
  {
    "liga": "ClausuraVenezuela",
    "equipo": "E. Merida C",
    "PGLL": 0.688,
    "FOL": 0.71,
    "FD": 1.032
  },
  {
    "liga": "ClausuraVenezuela",
    "equipo": "Rayo Zuliano C",
    "PGLL": 0.526,
    "FOL": 0.645,
    "FD": 1.226
  },
  {
    "liga": "ClausuraVenezuela",
    "equipo": "A. Anzoategui C",
    "PGLL": 0.556,
    "FOL": 0.645,
    "FD": 1.161
  },
  {
    "liga": "ClausuraVenezuela",
    "equipo": "Yaracuyanos C",
    "PGLL": 0.524,
    "FOL": 0.71,
    "FD": 1.355
  },
  {
    "liga": "ClausuraVenezuela",
    "equipo": "Portuguesa C",
    "PGLL": 0.476,
    "FOL": 0.645,
    "FD": 1.355
  },
  {
    "liga": "AperturaUruguay",
    "equipo": "Racing CM",
    "PGLL": 1.917,
    "FOL": 1.324,
    "FD": 0.691
  },
  {
    "liga": "AperturaUruguay",
    "equipo": "D. Maldonado",
    "PGLL": 1.467,
    "FOL": 1.266,
    "FD": 0.863
  },
  {
    "liga": "AperturaUruguay",
    "equipo": "Penarol",
    "PGLL": 1.429,
    "FOL": 1.151,
    "FD": 0.806
  },
  {
    "liga": "AperturaUruguay",
    "equipo": "Montevideo City",
    "PGLL": 1.333,
    "FOL": 1.151,
    "FD": 0.863
  },
  {
    "liga": "AperturaUruguay",
    "equipo": "Liverpool M.",
    "PGLL": 1.176,
    "FOL": 1.151,
    "FD": 0.978
  },
  {
    "liga": "AperturaUruguay",
    "equipo": "Danubio",
    "PGLL": 0.85,
    "FOL": 0.978,
    "FD": 1.151
  },
  {
    "liga": "AperturaUruguay",
    "equipo": "Central Espanol",
    "PGLL": 0.955,
    "FOL": 1.209,
    "FD": 1.266
  },
  {
    "liga": "AperturaUruguay",
    "equipo": "Nacional Uruguay",
    "PGLL": 1.048,
    "FOL": 1.266,
    "FD": 1.209
  },
  {
    "liga": "AperturaUruguay",
    "equipo": "Defensor S.",
    "PGLL": 1.333,
    "FOL": 0.691,
    "FD": 0.518
  },
  {
    "liga": "AperturaUruguay",
    "equipo": "Wanderers",
    "PGLL": 0.714,
    "FOL": 0.863,
    "FD": 1.209
  },
  {
    "liga": "AperturaUruguay",
    "equipo": "Cerro Largo",
    "PGLL": 0.875,
    "FOL": 0.806,
    "FD": 0.921
  },
  {
    "liga": "AperturaUruguay",
    "equipo": "Albion",
    "PGLL": 1.562,
    "FOL": 1.439,
    "FD": 0.921
  },
  {
    "liga": "AperturaUruguay",
    "equipo": "Progreso",
    "PGLL": 0.524,
    "FOL": 0.633,
    "FD": 1.209
  },
  {
    "liga": "AperturaUruguay",
    "equipo": "Juventud",
    "PGLL": 0.714,
    "FOL": 0.863,
    "FD": 1.209
  },
  {
    "liga": "AperturaUruguay",
    "equipo": "Boston River",
    "PGLL": 0.722,
    "FOL": 0.748,
    "FD": 1.036
  },
  {
    "liga": "AperturaUruguay",
    "equipo": "Cerro",
    "PGLL": 0.4,
    "FOL": 0.46,
    "FD": 1.151
  },
  {
    "liga": "ClausuraUruguay",
    "equipo": "Penarol C",
    "PGLL": 2.333,
    "FOL": 1.781,
    "FD": 0.739
  },
  {
    "liga": "ClausuraUruguay",
    "equipo": "Montevideo City C",
    "PGLL": 1.867,
    "FOL": 1.781,
    "FD": 0.924
  },
  {
    "liga": "ClausuraUruguay",
    "equipo": "Nacional C",
    "PGLL": 1.529,
    "FOL": 1.052,
    "FD": 0.666
  },
  {
    "liga": "ClausuraUruguay",
    "equipo": "Boston River C",
    "PGLL": 2.6,
    "FOL": 1.654,
    "FD": 0.616
  },
  {
    "liga": "ClausuraUruguay",
    "equipo": "Liverpool M. C",
    "PGLL": 1.357,
    "FOL": 1.209,
    "FD": 0.862
  },
  {
    "liga": "ClausuraUruguay",
    "equipo": "Cerro C",
    "PGLL": 1.0,
    "FOL": 0.827,
    "FD": 0.801
  },
  {
    "liga": "ClausuraUruguay",
    "equipo": "Cerro C Largo C",
    "PGLL": 1.214,
    "FOL": 1.081,
    "FD": 0.862
  },
  {
    "liga": "ClausuraUruguay",
    "equipo": "Defensor S. C",
    "PGLL": 0.8,
    "FOL": 0.763,
    "FD": 0.924
  },
  {
    "liga": "ClausuraUruguay",
    "equipo": "Danubio C",
    "PGLL": 1.231,
    "FOL": 1.018,
    "FD": 0.801
  },
  {
    "liga": "ClausuraUruguay",
    "equipo": "Progreso C",
    "PGLL": 0.727,
    "FOL": 1.018,
    "FD": 1.355
  },
  {
    "liga": "ClausuraUruguay",
    "equipo": "Juventud C",
    "PGLL": 0.583,
    "FOL": 0.445,
    "FD": 0.739
  },
  {
    "liga": "ClausuraUruguay",
    "equipo": "Racing CM C",
    "PGLL": 0.545,
    "FOL": 0.763,
    "FD": 1.355
  },
  {
    "liga": "ClausuraUruguay",
    "equipo": "Miramar M. C",
    "PGLL": 0.708,
    "FOL": 1.081,
    "FD": 1.478
  },
  {
    "liga": "ClausuraUruguay",
    "equipo": "River Plate C",
    "PGLL": 0.444,
    "FOL": 0.509,
    "FD": 1.108
  },
  {
    "liga": "ClausuraUruguay",
    "equipo": "Plaza Colonia C",
    "PGLL": 0.375,
    "FOL": 0.572,
    "FD": 1.478
  },
  {
    "liga": "ClausuraUruguay",
    "equipo": "Wanderers C",
    "PGLL": 0.333,
    "FOL": 0.445,
    "FD": 1.293
  },
  {
    "liga": "IntermedioUruguay",
    "equipo": "Nacional",
    "PGLL": 0.778,
    "FOL": 0.999,
    "FD": 1.161
  },
  {
    "liga": "IntermedioUruguay",
    "equipo": "Penarol",
    "PGLL": 1.429,
    "FOL": 1.345,
    "FD": 0.851
  },
  {
    "liga": "IntermedioUruguay",
    "equipo": "Juventud",
    "PGLL": 0.714,
    "FOL": 1.009,
    "FD": 1.277
  },
  {
    "liga": "IntermedioUruguay",
    "equipo": "Defensor S.",
    "PGLL": 1.333,
    "FOL": 0.807,
    "FD": 0.547
  },
  {
    "liga": "IntermedioUruguay",
    "equipo": "Racing CM",
    "PGLL": 1.917,
    "FOL": 1.547,
    "FD": 0.73
  },
  {
    "liga": "IntermedioUruguay",
    "equipo": "Wanderers",
    "PGLL": 0.714,
    "FOL": 1.009,
    "FD": 1.277
  },
  {
    "liga": "IntermedioUruguay",
    "equipo": "Danubio",
    "PGLL": 0.85,
    "FOL": 1.144,
    "FD": 1.216
  },
  {
    "liga": "IntermedioUruguay",
    "equipo": "Plaza Colonia",
    "PGLL": 0.857,
    "FOL": 0.807,
    "FD": 0.851
  },
  {
    "liga": "IntermedioUruguay",
    "equipo": "Liverpool M.",
    "PGLL": 1.176,
    "FOL": 1.345,
    "FD": 1.034
  },
  {
    "liga": "IntermedioUruguay",
    "equipo": "Cerro",
    "PGLL": 0.4,
    "FOL": 0.538,
    "FD": 1.216
  },
  {
    "liga": "IntermedioUruguay",
    "equipo": "Boston River",
    "PGLL": 0.722,
    "FOL": 0.875,
    "FD": 1.095
  },
  {
    "liga": "IntermedioUruguay",
    "equipo": "Progreso",
    "PGLL": 0.524,
    "FOL": 0.74,
    "FD": 1.277
  },
  {
    "liga": "IntermedioUruguay",
    "equipo": "Montevideo City",
    "PGLL": 1.333,
    "FOL": 1.345,
    "FD": 0.912
  },
  {
    "liga": "IntermedioUruguay",
    "equipo": "River Plate",
    "PGLL": 1.9,
    "FOL": 1.278,
    "FD": 0.608
  },
  {
    "liga": "IntermedioUruguay",
    "equipo": "Miramar M.",
    "PGLL": 0.25,
    "FOL": 0.269,
    "FD": 0.973
  },
  {
    "liga": "IntermedioUruguay",
    "equipo": "Cerro Largo",
    "PGLL": 0.875,
    "FOL": 0.942,
    "FD": 0.973
  },
  {
    "liga": "AperturaMexico",
    "equipo": "Toluca",
    "PGLL": 2.389,
    "FOL": 1.629,
    "FD": 0.682
  },
  {
    "liga": "AperturaMexico",
    "equipo": "Tigres",
    "PGLL": 2.188,
    "FOL": 1.326,
    "FD": 0.606
  },
  {
    "liga": "AperturaMexico",
    "equipo": "Cruz Azul",
    "PGLL": 1.6,
    "FOL": 1.213,
    "FD": 0.758
  },
  {
    "liga": "AperturaMexico",
    "equipo": "CF America",
    "PGLL": 1.833,
    "FOL": 1.251,
    "FD": 0.682
  },
  {
    "liga": "AperturaMexico",
    "equipo": "Monterrey",
    "PGLL": 1.138,
    "FOL": 1.251,
    "FD": 1.099
  },
  {
    "liga": "AperturaMexico",
    "equipo": "Guadalajara",
    "PGLL": 1.318,
    "FOL": 1.099,
    "FD": 0.834
  },
  {
    "liga": "AperturaMexico",
    "equipo": "Tijuana",
    "PGLL": 1.261,
    "FOL": 1.099,
    "FD": 0.872
  },
  {
    "liga": "AperturaMexico",
    "equipo": "Juarez",
    "PGLL": 0.964,
    "FOL": 1.023,
    "FD": 1.061
  },
  {
    "liga": "AperturaMexico",
    "equipo": "Pachuca",
    "PGLL": 1.0,
    "FOL": 0.796,
    "FD": 0.796
  },
  {
    "liga": "AperturaMexico",
    "equipo": "Pumas UNAM",
    "PGLL": 0.96,
    "FOL": 0.909,
    "FD": 0.947
  },
  {
    "liga": "AperturaMexico",
    "equipo": "Santos Laguna",
    "PGLL": 0.786,
    "FOL": 0.834,
    "FD": 1.061
  },
  {
    "liga": "AperturaMexico",
    "equipo": "Queretaro",
    "PGLL": 0.655,
    "FOL": 0.72,
    "FD": 1.099
  },
  {
    "liga": "AperturaMexico",
    "equipo": "Necaxa",
    "PGLL": 0.75,
    "FOL": 0.909,
    "FD": 1.213
  },
  {
    "liga": "AperturaMexico",
    "equipo": "Atlas",
    "PGLL": 0.686,
    "FOL": 0.909,
    "FD": 1.326
  },
  {
    "liga": "AperturaMexico",
    "equipo": "A. San Luis",
    "PGLL": 0.862,
    "FOL": 0.947,
    "FD": 1.099
  },
  {
    "liga": "AperturaMexico",
    "equipo": "Mazatlan",
    "PGLL": 0.69,
    "FOL": 0.758,
    "FD": 1.099
  },
  {
    "liga": "AperturaMexico",
    "equipo": "Club Leon",
    "PGLL": 0.452,
    "FOL": 0.531,
    "FD": 1.175
  },
  {
    "liga": "AperturaMexico",
    "equipo": "Puebla",
    "PGLL": 0.5,
    "FOL": 0.796,
    "FD": 1.592
  },
  {
    "liga": "ClausuraMexico",
    "equipo": "Cruz Azul C",
    "PGLL": 1.588,
    "FOL": 1.243,
    "FD": 0.783
  },
  {
    "liga": "ClausuraMexico",
    "equipo": "Toluca C",
    "PGLL": 1.6,
    "FOL": 1.105,
    "FD": 0.691
  },
  {
    "liga": "ClausuraMexico",
    "equipo": "Guadalajara C",
    "PGLL": 1.941,
    "FOL": 1.519,
    "FD": 0.783
  },
  {
    "liga": "ClausuraMexico",
    "equipo": "Pachuca C",
    "PGLL": 1.471,
    "FOL": 1.151,
    "FD": 0.783
  },
  {
    "liga": "ClausuraMexico",
    "equipo": "Pumas UNAM C",
    "PGLL": 1.882,
    "FOL": 1.473,
    "FD": 0.783
  },
  {
    "liga": "ClausuraMexico",
    "equipo": "Tigres C",
    "PGLL": 1.353,
    "FOL": 1.059,
    "FD": 0.783
  },
  {
    "liga": "ClausuraMexico",
    "equipo": "CF America C",
    "PGLL": 1.25,
    "FOL": 0.921,
    "FD": 0.737
  },
  {
    "liga": "ClausuraMexico",
    "equipo": "Atlas C",
    "PGLL": 0.833,
    "FOL": 0.691,
    "FD": 0.829
  },
  {
    "liga": "ClausuraMexico",
    "equipo": "Monterrey C",
    "PGLL": 1.048,
    "FOL": 1.013,
    "FD": 0.967
  },
  {
    "liga": "ClausuraMexico",
    "equipo": "Tijuana C",
    "PGLL": 1.118,
    "FOL": 0.875,
    "FD": 0.783
  },
  {
    "liga": "ClausuraMexico",
    "equipo": "Puebla C",
    "PGLL": 0.5,
    "FOL": 0.552,
    "FD": 1.105
  },
  {
    "liga": "ClausuraMexico",
    "equipo": "A. San Luis C",
    "PGLL": 0.92,
    "FOL": 1.059,
    "FD": 1.151
  },
  {
    "liga": "ClausuraMexico",
    "equipo": "Juarez C",
    "PGLL": 0.774,
    "FOL": 1.105,
    "FD": 1.427
  },
  {
    "liga": "ClausuraMexico",
    "equipo": "Necaxa C",
    "PGLL": 0.857,
    "FOL": 0.829,
    "FD": 0.967
  },
  {
    "liga": "ClausuraMexico",
    "equipo": "Club Leon C",
    "PGLL": 0.75,
    "FOL": 0.967,
    "FD": 1.289
  },
  {
    "liga": "ClausuraMexico",
    "equipo": "Mazatlan C",
    "PGLL": 0.656,
    "FOL": 0.967,
    "FD": 1.473
  },
  {
    "liga": "ClausuraMexico",
    "equipo": "Queretaro C",
    "PGLL": 0.75,
    "FOL": 0.691,
    "FD": 0.921
  },
  {
    "liga": "ClausuraMexico",
    "equipo": "Santos Laguna C",
    "PGLL": 0.447,
    "FOL": 0.783,
    "FD": 1.749
  },
  {
    "liga": "LigaBrasil",
    "equipo": "Sao Paulo",
    "PGLL": 1.312,
    "FOL": 1.062,
    "FD": 0.808
  },
  {
    "liga": "LigaBrasil",
    "equipo": "Palmeiras",
    "PGLL": 2.083,
    "FOL": 1.264,
    "FD": 0.606
  },
  {
    "liga": "LigaBrasil",
    "equipo": "Fluminense",
    "PGLL": 1.25,
    "FOL": 1.264,
    "FD": 1.01
  },
  {
    "liga": "LigaBrasil",
    "equipo": "Bahia",
    "PGLL": 1.111,
    "FOL": 1.083,
    "FD": 0.974
  },
  {
    "liga": "LigaBrasil",
    "equipo": "Flamengo",
    "PGLL": 2.25,
    "FOL": 1.462,
    "FD": 0.65
  },
  {
    "liga": "LigaBrasil",
    "equipo": "Coritiba",
    "PGLL": 0.947,
    "FOL": 0.91,
    "FD": 0.96
  },
  {
    "liga": "LigaBrasil",
    "equipo": "Gremio",
    "PGLL": 0.882,
    "FOL": 0.758,
    "FD": 0.859
  },
  {
    "liga": "LigaBrasil",
    "equipo": "Corinthians",
    "PGLL": 0.867,
    "FOL": 0.657,
    "FD": 0.758
  },
  {
    "liga": "LigaBrasil",
    "equipo": "Bragantino",
    "PGLL": 0.944,
    "FOL": 0.859,
    "FD": 0.909
  },
  {
    "liga": "LigaBrasil",
    "equipo": "Athletico PR",
    "PGLL": 1.25,
    "FOL": 1.011,
    "FD": 0.808
  },
  {
    "liga": "LigaBrasil",
    "equipo": "Vitoria",
    "PGLL": 0.9,
    "FOL": 0.975,
    "FD": 1.083
  },
  {
    "liga": "LigaBrasil",
    "equipo": "Chapecoense",
    "PGLL": 0.519,
    "FOL": 0.758,
    "FD": 1.462
  },
  {
    "liga": "LigaBrasil",
    "equipo": "Mirassol",
    "PGLL": 0.8,
    "FOL": 0.867,
    "FD": 1.083
  },
  {
    "liga": "LigaBrasil",
    "equipo": "Santos",
    "PGLL": 0.955,
    "FOL": 1.062,
    "FD": 1.112
  },
  {
    "liga": "LigaBrasil",
    "equipo": "Vasco da Gama",
    "PGLL": 1.0,
    "FOL": 1.062,
    "FD": 1.061
  },
  {
    "liga": "LigaBrasil",
    "equipo": "Atletico MG",
    "PGLL": 0.857,
    "FOL": 0.91,
    "FD": 1.061
  },
  {
    "liga": "LigaBrasil",
    "equipo": "Botafogo",
    "PGLL": 0.963,
    "FOL": 1.408,
    "FD": 1.462
  },
  {
    "liga": "LigaBrasil",
    "equipo": "Remo",
    "PGLL": 0.64,
    "FOL": 0.809,
    "FD": 1.263
  },
  {
    "liga": "LigaBrasil",
    "equipo": "Cruzeiro",
    "PGLL": 0.8,
    "FOL": 1.011,
    "FD": 1.263
  },
  {
    "liga": "LigaBrasil",
    "equipo": "Internacional",
    "PGLL": 1.0,
    "FOL": 0.809,
    "FD": 0.808
  },
  {
    "liga": "AperturaColombia",
    "equipo": "A. Nacional",
    "PGLL": 2.692,
    "FOL": 1.636,
    "FD": 0.607
  },
  {
    "liga": "AperturaColombia",
    "equipo": "Deportivo Pasto",
    "PGLL": 1.316,
    "FOL": 1.168,
    "FD": 0.888
  },
  {
    "liga": "AperturaColombia",
    "equipo": "Once Caldas",
    "PGLL": 1.4,
    "FOL": 1.308,
    "FD": 0.935
  },
  {
    "liga": "AperturaColombia",
    "equipo": "Inter Bogotá",
    "PGLL": 0.913,
    "FOL": 0.981,
    "FD": 1.075
  },
  {
    "liga": "AperturaColombia",
    "equipo": "A. Bucaramanga",
    "PGLL": 1.438,
    "FOL": 1.075,
    "FD": 0.748
  },
  {
    "liga": "AperturaColombia",
    "equipo": "Junior",
    "PGLL": 1.3,
    "FOL": 1.215,
    "FD": 0.935
  },
  {
    "liga": "AperturaColombia",
    "equipo": "America de Cali",
    "PGLL": 1.714,
    "FOL": 1.121,
    "FD": 0.654
  },
  {
    "liga": "AperturaColombia",
    "equipo": "Millonarios",
    "PGLL": 1.286,
    "FOL": 1.262,
    "FD": 0.981
  },
  {
    "liga": "AperturaColombia",
    "equipo": "Deportes Tolima",
    "PGLL": 1.857,
    "FOL": 1.215,
    "FD": 0.654
  },
  {
    "liga": "AperturaColombia",
    "equipo": "Deportivo Cali",
    "PGLL": 1.2,
    "FOL": 0.841,
    "FD": 0.701
  },
  {
    "liga": "AperturaColombia",
    "equipo": "Llaneros",
    "PGLL": 1.0,
    "FOL": 0.794,
    "FD": 0.794
  },
  {
    "liga": "AperturaColombia",
    "equipo": "R. Aguilas",
    "PGLL": 0.727,
    "FOL": 0.748,
    "FD": 1.028
  },
  {
    "liga": "AperturaColombia",
    "equipo": "Fortaleza CEIF",
    "PGLL": 0.8,
    "FOL": 0.935,
    "FD": 1.168
  },
  {
    "liga": "AperturaColombia",
    "equipo": "Santa Fe",
    "PGLL": 1.2,
    "FOL": 1.121,
    "FD": 0.935
  },
  {
    "liga": "AperturaColombia",
    "equipo": "I. Medelin",
    "PGLL": 1.091,
    "FOL": 1.121,
    "FD": 1.028
  },
  {
    "liga": "AperturaColombia",
    "equipo": "Jaguares de C.",
    "PGLL": 0.516,
    "FOL": 0.748,
    "FD": 1.449
  },
  {
    "liga": "AperturaColombia",
    "equipo": "Cucuta",
    "PGLL": 0.656,
    "FOL": 0.981,
    "FD": 1.495
  },
  {
    "liga": "AperturaColombia",
    "equipo": "Boyaca Chico",
    "PGLL": 0.429,
    "FOL": 0.561,
    "FD": 1.308
  },
  {
    "liga": "AperturaColombia",
    "equipo": "D. Pereira",
    "PGLL": 0.452,
    "FOL": 0.654,
    "FD": 1.449
  },
  {
    "liga": "AperturaColombia",
    "equipo": "A. Petrolera",
    "PGLL": 0.44,
    "FOL": 0.514,
    "FD": 1.168
  },
  {
    "liga": "ClausuraColombia",
    "equipo": "I. Medelin C",
    "PGLL": 1.643,
    "FOL": 1.851,
    "FD": 1.127
  },
  {
    "liga": "ClausuraColombia",
    "equipo": "Deportes Tolima C",
    "PGLL": 1.706,
    "FOL": 1.167,
    "FD": 0.684
  },
  {
    "liga": "ClausuraColombia",
    "equipo": "A. Nacional C",
    "PGLL": 1.583,
    "FOL": 1.529,
    "FD": 0.966
  },
  {
    "liga": "ClausuraColombia",
    "equipo": "A. Bucaramanga C",
    "PGLL": 1.55,
    "FOL": 1.247,
    "FD": 0.805
  },
  {
    "liga": "ClausuraColombia",
    "equipo": "Junior C",
    "PGLL": 1.4,
    "FOL": 1.408,
    "FD": 1.006
  },
  {
    "liga": "ClausuraColombia",
    "equipo": "Fortaleza CEIF C",
    "PGLL": 1.316,
    "FOL": 1.006,
    "FD": 0.765
  },
  {
    "liga": "ClausuraColombia",
    "equipo": "Santa Fe C",
    "PGLL": 1.235,
    "FOL": 0.845,
    "FD": 0.684
  },
  {
    "liga": "ClausuraColombia",
    "equipo": "America de Cali C",
    "PGLL": 1.211,
    "FOL": 0.926,
    "FD": 0.765
  },
  {
    "liga": "ClausuraColombia",
    "equipo": "A. Petrolera C",
    "PGLL": 1.091,
    "FOL": 0.966,
    "FD": 0.885
  },
  {
    "liga": "ClausuraColombia",
    "equipo": "R. Aguilas C",
    "PGLL": 1.074,
    "FOL": 1.167,
    "FD": 1.087
  },
  {
    "liga": "ClausuraColombia",
    "equipo": "Once Caldas C",
    "PGLL": 0.875,
    "FOL": 0.845,
    "FD": 0.966
  },
  {
    "liga": "ClausuraColombia",
    "equipo": "Millonarios C",
    "PGLL": 0.885,
    "FOL": 0.926,
    "FD": 1.046
  },
  {
    "liga": "ClausuraColombia",
    "equipo": "Llaneros C",
    "PGLL": 0.68,
    "FOL": 0.684,
    "FD": 1.006
  },
  {
    "liga": "ClausuraColombia",
    "equipo": "Deportivo Cali C",
    "PGLL": 0.786,
    "FOL": 0.885,
    "FD": 1.127
  },
  {
    "liga": "ClausuraColombia",
    "equipo": "Union Magdalena C",
    "PGLL": 0.688,
    "FOL": 0.885,
    "FD": 1.288
  },
  {
    "liga": "ClausuraColombia",
    "equipo": "Envigado C",
    "PGLL": 0.818,
    "FOL": 0.724,
    "FD": 0.885
  },
  {
    "liga": "ClausuraColombia",
    "equipo": "Deportivo Pasto C",
    "PGLL": 0.929,
    "FOL": 1.046,
    "FD": 1.127
  },
  {
    "liga": "ClausuraColombia",
    "equipo": "D. Pereira C",
    "PGLL": 0.528,
    "FOL": 0.765,
    "FD": 1.449
  },
  {
    "liga": "ClausuraColombia",
    "equipo": "Boyaca Chico C",
    "PGLL": 0.483,
    "FOL": 0.563,
    "FD": 1.167
  },
  {
    "liga": "ClausuraColombia",
    "equipo": "Inter Bogota C",
    "PGLL": 0.483,
    "FOL": 0.563,
    "FD": 1.167
  },
  {
    "liga": "AperturaColombiaB",
    "equipo": "Inter Palmira",
    "PGLL": 2.231,
    "FOL": 1.6,
    "FD": 0.798
  },
  {
    "liga": "AperturaColombiaB",
    "equipo": "Union Magdalena",
    "PGLL": 1.8,
    "FOL": 1.49,
    "FD": 0.921
  },
  {
    "liga": "AperturaColombiaB",
    "equipo": "D. Quindio",
    "PGLL": 2.0,
    "FOL": 1.103,
    "FD": 0.614
  },
  {
    "liga": "AperturaColombiaB",
    "equipo": "Envigado",
    "PGLL": 1.714,
    "FOL": 1.324,
    "FD": 0.859
  },
  {
    "liga": "AperturaColombiaB",
    "equipo": "Real Cartagena",
    "PGLL": 1.533,
    "FOL": 1.269,
    "FD": 0.921
  },
  {
    "liga": "AperturaColombiaB",
    "equipo": "Bogota",
    "PGLL": 1.143,
    "FOL": 0.883,
    "FD": 0.859
  },
  {
    "liga": "AperturaColombiaB",
    "equipo": "Barranquilla",
    "PGLL": 1.05,
    "FOL": 1.159,
    "FD": 1.228
  },
  {
    "liga": "AperturaColombiaB",
    "equipo": "Tigres",
    "PGLL": 2.188,
    "FOL": 1.704,
    "FD": 0.866
  },
  {
    "liga": "AperturaColombiaB",
    "equipo": "Independiente Y",
    "PGLL": 0.929,
    "FOL": 0.717,
    "FD": 0.859
  },
  {
    "liga": "AperturaColombiaB",
    "equipo": "Orsomarso",
    "PGLL": 0.765,
    "FOL": 0.717,
    "FD": 1.043
  },
  {
    "liga": "AperturaColombiaB",
    "equipo": "Patriotas",
    "PGLL": 0.765,
    "FOL": 0.717,
    "FD": 1.043
  },
  {
    "liga": "AperturaColombiaB",
    "equipo": "Boca Juniors",
    "PGLL": 2.0,
    "FOL": 0.946,
    "FD": 0.526
  },
  {
    "liga": "AperturaColombiaB",
    "equipo": "R. Cundinamarca",
    "PGLL": 0.737,
    "FOL": 0.772,
    "FD": 1.166
  },
  {
    "liga": "AperturaColombiaB",
    "equipo": "Leones",
    "PGLL": 0.333,
    "FOL": 0.441,
    "FD": 1.473
  },
  {
    "liga": "AperturaColombiaB",
    "equipo": "Atletico Cali",
    "PGLL": 0.522,
    "FOL": 0.662,
    "FD": 1.412
  },
  {
    "liga": "AperturaColombiaB",
    "equipo": "Real Santander",
    "PGLL": 0.391,
    "FOL": 0.497,
    "FD": 1.412
  },
  {
    "liga": "AperturaColombiaB",
    "equipo": "Apertura Colombia B",
    "PGLL": 1.0,
    "FOL": 1.0,
    "FD": 1.0
  },
  {
    "liga": "ClausuraColombiaB",
    "equipo": "Jaguares de C. C",
    "PGLL": 2.778,
    "FOL": 1.294,
    "FD": 0.486
  },
  {
    "liga": "ClausuraColombiaB",
    "equipo": "Patriotas C",
    "PGLL": 1.667,
    "FOL": 1.294,
    "FD": 0.811
  },
  {
    "liga": "ClausuraColombiaB",
    "equipo": "Cucuta C",
    "PGLL": 2.2,
    "FOL": 1.139,
    "FD": 0.541
  },
  {
    "liga": "ClausuraColombiaB",
    "equipo": "R. Cundinamarca C",
    "PGLL": 1.917,
    "FOL": 1.191,
    "FD": 0.649
  },
  {
    "liga": "ClausuraColombiaB",
    "equipo": "Inter Palmira C",
    "PGLL": 1.2,
    "FOL": 0.932,
    "FD": 0.811
  },
  {
    "liga": "ClausuraColombiaB",
    "equipo": "Real Cartagena C",
    "PGLL": 1.786,
    "FOL": 1.294,
    "FD": 0.757
  },
  {
    "liga": "ClausuraColombiaB",
    "equipo": "Atletico Huila C",
    "PGLL": 0.944,
    "FOL": 0.88,
    "FD": 0.973
  },
  {
    "liga": "ClausuraColombiaB",
    "equipo": "Boca Juniors C",
    "PGLL": 1.267,
    "FOL": 0.984,
    "FD": 0.811
  },
  {
    "liga": "ClausuraColombiaB",
    "equipo": "D. Quindio C",
    "PGLL": 1.136,
    "FOL": 1.294,
    "FD": 1.189
  },
  {
    "liga": "ClausuraColombiaB",
    "equipo": "Real Santander C",
    "PGLL": 1.0,
    "FOL": 0.932,
    "FD": 0.973
  },
  {
    "liga": "ClausuraColombiaB",
    "equipo": "Orsomarso C",
    "PGLL": 0.684,
    "FOL": 0.673,
    "FD": 1.027
  },
  {
    "liga": "ClausuraColombiaB",
    "equipo": "Bogota C",
    "PGLL": 0.464,
    "FOL": 0.673,
    "FD": 1.514
  },
  {
    "liga": "ClausuraColombiaB",
    "equipo": "Atletico Cali C",
    "PGLL": 0.586,
    "FOL": 0.88,
    "FD": 1.568
  },
  {
    "liga": "ClausuraColombiaB",
    "equipo": "Tigres C",
    "PGLL": 1.353,
    "FOL": 1.191,
    "FD": 0.919
  },
  {
    "liga": "ClausuraColombiaB",
    "equipo": "Barranquilla C",
    "PGLL": 0.667,
    "FOL": 0.932,
    "FD": 1.459
  },
  {
    "liga": "ClausuraColombiaB",
    "equipo": "Leones C",
    "PGLL": 0.286,
    "FOL": 0.414,
    "FD": 1.514
  },
  {
    "liga": "AperturaCostarica",
    "equipo": "Alajuelense",
    "PGLL": 2.9,
    "FOL": 1.343,
    "FD": 0.463
  },
  {
    "liga": "AperturaCostarica",
    "equipo": "Saprissa",
    "PGLL": 1.6,
    "FOL": 1.481,
    "FD": 0.926
  },
  {
    "liga": "AperturaCostarica",
    "equipo": "Cartagines",
    "PGLL": 1.583,
    "FOL": 0.88,
    "FD": 0.556
  },
  {
    "liga": "AperturaCostarica",
    "equipo": "M. Liberia",
    "PGLL": 0.952,
    "FOL": 0.926,
    "FD": 0.972
  },
  {
    "liga": "AperturaCostarica",
    "equipo": "Herediano",
    "PGLL": 1.0,
    "FOL": 1.019,
    "FD": 1.019
  },
  {
    "liga": "AperturaCostarica",
    "equipo": "Zeledon",
    "PGLL": 0.893,
    "FOL": 1.157,
    "FD": 1.296
  },
  {
    "liga": "AperturaCostarica",
    "equipo": "Puntarenas",
    "PGLL": 1.048,
    "FOL": 1.019,
    "FD": 0.972
  },
  {
    "liga": "AperturaCostarica",
    "equipo": "Sporting SJ",
    "PGLL": 0.789,
    "FOL": 0.694,
    "FD": 0.88
  },
  {
    "liga": "AperturaCostarica",
    "equipo": "Guadalupe",
    "PGLL": 0.531,
    "FOL": 0.787,
    "FD": 1.481
  },
  {
    "liga": "AperturaCostarica",
    "equipo": "San Carlos",
    "PGLL": 0.484,
    "FOL": 0.694,
    "FD": 1.435
  },
  {
    "liga": "ClausuraCostarica",
    "equipo": "Cartagines C",
    "PGLL": 1.05,
    "FOL": 0.997,
    "FD": 0.951
  },
  {
    "liga": "ClausuraCostarica",
    "equipo": "Herediano C",
    "PGLL": 2.6,
    "FOL": 1.235,
    "FD": 0.475
  },
  {
    "liga": "ClausuraCostarica",
    "equipo": "Saprissa C",
    "PGLL": 1.722,
    "FOL": 1.472,
    "FD": 0.856
  },
  {
    "liga": "ClausuraCostarica",
    "equipo": "Alajuelense C",
    "PGLL": 1.375,
    "FOL": 1.11,
    "FD": 0.808
  },
  {
    "liga": "ClausuraCostarica",
    "equipo": "San Carlos C",
    "PGLL": 0.833,
    "FOL": 0.95,
    "FD": 1.141
  },
  {
    "liga": "ClausuraCostarica",
    "equipo": "Sporting SJ C",
    "PGLL": 0.762,
    "FOL": 0.76,
    "FD": 0.999
  },
  {
    "liga": "ClausuraCostarica",
    "equipo": "Puntarenas C",
    "PGLL": 0.905,
    "FOL": 0.959,
    "FD": 1.061
  },
  {
    "liga": "ClausuraCostarica",
    "equipo": "M. Liberia C",
    "PGLL": 1.294,
    "FOL": 1.045,
    "FD": 0.808
  },
  {
    "liga": "ClausuraCostarica",
    "equipo": "Zeledon C",
    "PGLL": 0.621,
    "FOL": 0.855,
    "FD": 1.379
  },
  {
    "liga": "ClausuraCostarica",
    "equipo": "Guadalupe C",
    "PGLL": 0.406,
    "FOL": 0.617,
    "FD": 1.522
  },
  {
    "liga": "LMS",
    "equipo": "Vancouver",
    "PGLL": 4.25,
    "FOL": 1.81,
    "FD": 0.426
  },
  {
    "liga": "LMS",
    "equipo": "New York City",
    "PGLL": 2.0,
    "FOL": 1.49,
    "FD": 0.745
  },
  {
    "liga": "LMS",
    "equipo": "San Diego",
    "PGLL": 1.625,
    "FOL": 1.384,
    "FD": 0.852
  },
  {
    "liga": "LMS",
    "equipo": "Nashville SC",
    "PGLL": 4.333,
    "FOL": 1.384,
    "FD": 0.319
  },
  {
    "liga": "LMS",
    "equipo": "SJ Earthquakes",
    "PGLL": 10.0,
    "FOL": 1.065,
    "FD": 0.106
  },
  {
    "liga": "LMS",
    "equipo": "Seattle",
    "PGLL": 3.0,
    "FOL": 0.639,
    "FD": 0.213
  },
  {
    "liga": "LMS",
    "equipo": "Real Salt Lake",
    "PGLL": 1.5,
    "FOL": 1.278,
    "FD": 0.852
  },
  {
    "liga": "LMS",
    "equipo": "Inter Miami",
    "PGLL": 1.1,
    "FOL": 1.171,
    "FD": 1.065
  },
  {
    "liga": "LMS",
    "equipo": "New York RB",
    "PGLL": 0.692,
    "FOL": 0.958,
    "FD": 1.384
  },
  {
    "liga": "LMS",
    "equipo": "Colorado Rapids",
    "PGLL": 1.3,
    "FOL": 1.384,
    "FD": 1.065
  },
  {
    "liga": "LMS",
    "equipo": "Houston Dynamo",
    "PGLL": 0.8,
    "FOL": 1.022,
    "FD": 1.278
  },
  {
    "liga": "LMS",
    "equipo": "DC United",
    "PGLL": 0.5,
    "FOL": 0.426,
    "FD": 0.852
  },
  {
    "liga": "LMS",
    "equipo": "Dallas",
    "PGLL": 1.556,
    "FOL": 1.49,
    "FD": 0.958
  },
  {
    "liga": "LMS",
    "equipo": "Charlotte",
    "PGLL": 1.714,
    "FOL": 1.278,
    "FD": 0.745
  },
  {
    "liga": "LMS",
    "equipo": "Chicago Fire",
    "PGLL": 1.6,
    "FOL": 0.852,
    "FD": 0.532
  },
  {
    "liga": "LMS",
    "equipo": "LA Galaxy",
    "PGLL": 0.8,
    "FOL": 0.852,
    "FD": 1.065
  },
  {
    "liga": "LMS",
    "equipo": "Austin",
    "PGLL": 0.778,
    "FOL": 0.745,
    "FD": 0.958
  },
  {
    "liga": "LMS",
    "equipo": "Sporting KC",
    "PGLL": 0.429,
    "FOL": 0.639,
    "FD": 1.49
  },
  {
    "liga": "LMS",
    "equipo": "Toronto",
    "PGLL": 0.9,
    "FOL": 0.958,
    "FD": 1.065
  },
  {
    "liga": "LMS",
    "equipo": "Minnesota Utd",
    "PGLL": 0.5,
    "FOL": 0.639,
    "FD": 1.278
  },
  {
    "liga": "LMS",
    "equipo": "New England",
    "PGLL": 1.222,
    "FOL": 1.405,
    "FD": 1.15
  },
  {
    "liga": "LMS",
    "equipo": "Atlanta Utd",
    "PGLL": 0.545,
    "FOL": 0.639,
    "FD": 1.171
  },
  {
    "liga": "LMS",
    "equipo": "Portland",
    "PGLL": 0.6,
    "FOL": 0.958,
    "FD": 1.597
  },
  {
    "liga": "LMS",
    "equipo": "Cincinnati",
    "PGLL": 0.6,
    "FOL": 0.958,
    "FD": 1.597
  },
  {
    "liga": "LMS",
    "equipo": "CF Montreal",
    "PGLL": 0.412,
    "FOL": 0.745,
    "FD": 1.81
  },
  {
    "liga": "LMS",
    "equipo": "Orlando City",
    "PGLL": 0.217,
    "FOL": 0.532,
    "FD": 2.449
  },
  {
    "liga": "LMS",
    "equipo": "Columbus Crew",
    "PGLL": 0.889,
    "FOL": 0.852,
    "FD": 0.958
  },
  {
    "liga": "LMS",
    "equipo": "St. Louis City",
    "PGLL": 0.625,
    "FOL": 0.532,
    "FD": 0.852
  },
  {
    "liga": "LMS",
    "equipo": "Philadelphia",
    "PGLL": 0.364,
    "FOL": 0.426,
    "FD": 1.171
  },
  {
    "liga": "ArgentinaB",
    "equipo": "Excursionistas",
    "PGLL": 1.875,
    "FOL": 1.115,
    "FD": 0.595
  },
  {
    "liga": "ArgentinaB",
    "equipo": "S. Italiano",
    "PGLL": 1.5,
    "FOL": 1.115,
    "FD": 0.743
  },
  {
    "liga": "ArgentinaB",
    "equipo": "Talleres R. E.",
    "PGLL": 1.833,
    "FOL": 0.818,
    "FD": 0.446
  },
  {
    "liga": "ArgentinaB",
    "equipo": "Argentino Merlo",
    "PGLL": 0.833,
    "FOL": 0.743,
    "FD": 0.892
  },
  {
    "liga": "ArgentinaB",
    "equipo": "Real Pilar",
    "PGLL": 1.267,
    "FOL": 1.412,
    "FD": 1.115
  },
  {
    "liga": "ArgentinaB",
    "equipo": "Arsenal Sarandi",
    "PGLL": 3.667,
    "FOL": 1.635,
    "FD": 0.446
  },
  {
    "liga": "ArgentinaB",
    "equipo": "Deportivo Merlo",
    "PGLL": 0.941,
    "FOL": 1.189,
    "FD": 1.264
  },
  {
    "liga": "ArgentinaB",
    "equipo": "Villa Dalmine",
    "PGLL": 3.333,
    "FOL": 1.486,
    "FD": 0.446
  },
  {
    "liga": "ArgentinaB",
    "equipo": "D. Laferrere",
    "PGLL": 0.667,
    "FOL": 0.892,
    "FD": 1.338
  },
  {
    "liga": "ArgentinaB",
    "equipo": "Liniers",
    "PGLL": 0.769,
    "FOL": 0.743,
    "FD": 0.966
  },
  {
    "liga": "ArgentinaB",
    "equipo": "SM Burzaco",
    "PGLL": 1.417,
    "FOL": 1.264,
    "FD": 0.892
  },
  {
    "liga": "ArgentinaB",
    "equipo": "Brown de A.",
    "PGLL": 0.5,
    "FOL": 0.595,
    "FD": 1.189
  },
  {
    "liga": "ArgentinaB",
    "equipo": "Flandria",
    "PGLL": 0.667,
    "FOL": 0.892,
    "FD": 1.338
  },
  {
    "liga": "ArgentinaB",
    "equipo": "V. San Carlos",
    "PGLL": 0.85,
    "FOL": 1.264,
    "FD": 1.486
  },
  {
    "liga": "ArgentinaB",
    "equipo": "UAI Urquiza",
    "PGLL": 0.889,
    "FOL": 0.595,
    "FD": 0.669
  },
  {
    "liga": "ArgentinaB",
    "equipo": "A. Quilmes",
    "PGLL": 0.75,
    "FOL": 0.892,
    "FD": 1.189
  },
  {
    "liga": "ArgentinaB",
    "equipo": "Camioneros",
    "PGLL": 1.625,
    "FOL": 0.966,
    "FD": 0.595
  },
  {
    "liga": "ArgentinaB",
    "equipo": "Comunicaciones",
    "PGLL": 0.929,
    "FOL": 0.966,
    "FD": 1.041
  },
  {
    "liga": "ArgentinaB",
    "equipo": "D. Armenio",
    "PGLL": 0.55,
    "FOL": 0.818,
    "FD": 1.486
  },
  {
    "liga": "ArgentinaB",
    "equipo": "Defensores U.",
    "PGLL": 0.857,
    "FOL": 0.892,
    "FD": 1.041
  },
  {
    "liga": "ArgentinaB",
    "equipo": "Ituzaingo",
    "PGLL": 0.32,
    "FOL": 0.595,
    "FD": 1.858
  },
  {
    "liga": "ArgentinaB",
    "equipo": "Dock Sud",
    "PGLL": 1.154,
    "FOL": 1.115,
    "FD": 0.966
  },
  {
    "liga": "LigaBrasilB",
    "equipo": "Botafogo SP",
    "PGLL": 1.5,
    "FOL": 1.389,
    "FD": 0.922
  },
  {
    "liga": "LigaBrasilB",
    "equipo": "Avai",
    "PGLL": 1.5,
    "FOL": 1.111,
    "FD": 0.737
  },
  {
    "liga": "LigaBrasilB",
    "equipo": "Goias",
    "PGLL": 0.857,
    "FOL": 1.111,
    "FD": 1.29
  },
  {
    "liga": "LigaBrasilB",
    "equipo": "Londrina",
    "PGLL": 1.0,
    "FOL": 1.296,
    "FD": 1.29
  },
  {
    "liga": "LigaBrasilB",
    "equipo": "Athletic Club",
    "PGLL": 1.143,
    "FOL": 1.481,
    "FD": 1.29
  },
  {
    "liga": "LigaBrasilB",
    "equipo": "Criciuma",
    "PGLL": 1.0,
    "FOL": 0.926,
    "FD": 0.922
  },
  {
    "liga": "LigaBrasilB",
    "equipo": "Operario PR",
    "PGLL": 1.333,
    "FOL": 0.741,
    "FD": 0.553
  },
  {
    "liga": "LigaBrasilB",
    "equipo": "Ceara",
    "PGLL": 2.5,
    "FOL": 0.926,
    "FD": 0.369
  },
  {
    "liga": "LigaBrasilB",
    "equipo": "CRB",
    "PGLL": 0.625,
    "FOL": 0.926,
    "FD": 1.475
  },
  {
    "liga": "LigaBrasilB",
    "equipo": "Cuiaba",
    "PGLL": 1.0,
    "FOL": 0.463,
    "FD": 0.461
  },
  {
    "liga": "LigaBrasilB",
    "equipo": "Sao Bernardo",
    "PGLL": 1.4,
    "FOL": 1.296,
    "FD": 0.922
  },
  {
    "liga": "LigaBrasilB",
    "equipo": "Sport Recife",
    "PGLL": 1.25,
    "FOL": 0.926,
    "FD": 0.737
  },
  {
    "liga": "LigaBrasilB",
    "equipo": "Vila Nova",
    "PGLL": 1.6,
    "FOL": 1.481,
    "FD": 0.922
  },
  {
    "liga": "LigaBrasilB",
    "equipo": "Atletico GO",
    "PGLL": 0.714,
    "FOL": 0.926,
    "FD": 1.29
  },
  {
    "liga": "LigaBrasilB",
    "equipo": "Nautico",
    "PGLL": 0.5,
    "FOL": 0.556,
    "FD": 1.106
  },
  {
    "liga": "LigaBrasilB",
    "equipo": "Ponte Preta",
    "PGLL": 0.667,
    "FOL": 0.741,
    "FD": 1.106
  },
  {
    "liga": "LigaBrasilB",
    "equipo": "America MG",
    "PGLL": 0.333,
    "FOL": 0.556,
    "FD": 1.659
  },
  {
    "liga": "LigaBrasilB",
    "equipo": "Juventude",
    "PGLL": 1.0,
    "FOL": 0.741,
    "FD": 0.737
  },
  {
    "liga": "LigaBrasilB",
    "equipo": "Novorizontino",
    "PGLL": 1.4,
    "FOL": 1.296,
    "FD": 0.922
  },
  {
    "liga": "LigaBrasilB",
    "equipo": "Fortaleza",
    "PGLL": 0.857,
    "FOL": 1.111,
    "FD": 1.29
  },
  {
    "liga": "Jamaica",
    "equipo": "Montego Bay",
    "PGLL": 1.756,
    "FOL": 1.558,
    "FD": 0.886
  },
  {
    "liga": "Jamaica",
    "equipo": "Mount Pleasant",
    "PGLL": 2.76,
    "FOL": 1.361,
    "FD": 0.492
  },
  {
    "liga": "Jamaica",
    "equipo": "Racing United",
    "PGLL": 1.559,
    "FOL": 1.045,
    "FD": 0.669
  },
  {
    "liga": "Jamaica",
    "equipo": "Portmore Utd",
    "PGLL": 1.543,
    "FOL": 1.065,
    "FD": 0.689
  },
  {
    "liga": "Jamaica",
    "equipo": "Waterhouse",
    "PGLL": 1.594,
    "FOL": 1.006,
    "FD": 0.63
  },
  {
    "liga": "Jamaica",
    "equipo": "Cavalier",
    "PGLL": 1.4,
    "FOL": 1.134,
    "FD": 0.808
  },
  {
    "liga": "Jamaica",
    "equipo": "Dunbeholden",
    "PGLL": 0.755,
    "FOL": 0.789,
    "FD": 1.044
  },
  {
    "liga": "Jamaica",
    "equipo": "Arnett Gardens",
    "PGLL": 1.391,
    "FOL": 1.262,
    "FD": 0.906
  },
  {
    "liga": "Jamaica",
    "equipo": "Chapelton",
    "PGLL": 0.719,
    "FOL": 0.83,
    "FD": 1.152
  },
  {
    "liga": "Jamaica",
    "equipo": "Tivoli Gardens",
    "PGLL": 0.648,
    "FOL": 0.709,
    "FD": 1.091
  },
  {
    "liga": "Jamaica",
    "equipo": "Treasure Beach",
    "PGLL": 0.731,
    "FOL": 0.79,
    "FD": 1.079
  },
  {
    "liga": "Jamaica",
    "equipo": "Harbour View",
    "PGLL": 0.726,
    "FOL": 1.045,
    "FD": 1.437
  },
  {
    "liga": "Jamaica",
    "equipo": "Molynes Utd",
    "PGLL": 0.978,
    "FOL": 0.911,
    "FD": 0.93
  },
  {
    "liga": "Jamaica",
    "equipo": "Spanish Town P.",
    "PGLL": 0.225,
    "FOL": 0.493,
    "FD": 2.186
  },
  {
    "liga": "China",
    "equipo": "Chengdu",
    "PGLL": 3.333,
    "FOL": 1.853,
    "FD": 0.556
  },
  {
    "liga": "China",
    "equipo": "Yunnan Yukun",
    "PGLL": 1.15,
    "FOL": 1.421,
    "FD": 1.236
  },
  {
    "liga": "China",
    "equipo": "Chongqing T.",
    "PGLL": 1.5,
    "FOL": 0.927,
    "FD": 0.618
  },
  {
    "liga": "China",
    "equipo": "Qingdao West C.",
    "PGLL": 0.5,
    "FOL": 0.494,
    "FD": 0.988
  },
  {
    "liga": "China",
    "equipo": "Liaoning Tieren",
    "PGLL": 0.444,
    "FOL": 0.494,
    "FD": 1.112
  },
  {
    "liga": "China",
    "equipo": "Shenzhen",
    "PGLL": 0.7,
    "FOL": 0.865,
    "FD": 1.236
  },
  {
    "liga": "China",
    "equipo": "Dalian Yingbo",
    "PGLL": 0.8,
    "FOL": 0.988,
    "FD": 1.236
  },
  {
    "liga": "China",
    "equipo": "Beijing Guoan",
    "PGLL": 1.062,
    "FOL": 1.05,
    "FD": 0.988
  },
  {
    "liga": "China",
    "equipo": "Zhejiang",
    "PGLL": 0.8,
    "FOL": 0.741,
    "FD": 0.927
  },
  {
    "liga": "China",
    "equipo": "Wuhan Three T.",
    "PGLL": 0.636,
    "FOL": 0.865,
    "FD": 1.359
  },
  {
    "liga": "China",
    "equipo": "Shandong T.",
    "PGLL": 1.125,
    "FOL": 1.112,
    "FD": 0.988
  },
  {
    "liga": "China",
    "equipo": "Henan SL",
    "PGLL": 0.786,
    "FOL": 0.68,
    "FD": 0.865
  },
  {
    "liga": "China",
    "equipo": "Shanghai Port",
    "PGLL": 1.133,
    "FOL": 1.05,
    "FD": 0.927
  },
  {
    "liga": "China",
    "equipo": "S. Shenhua",
    "PGLL": 1.412,
    "FOL": 1.483,
    "FD": 1.05
  },
  {
    "liga": "China",
    "equipo": "Qingdao Hainiu",
    "PGLL": 1.133,
    "FOL": 1.05,
    "FD": 0.927
  },
  {
    "liga": "China",
    "equipo": "Tianjin JT",
    "PGLL": 0.938,
    "FOL": 0.927,
    "FD": 0.988
  },
  {
    "liga": "LigaJapon",
    "equipo": "Kashima Antlers",
    "PGLL": 1.871,
    "FOL": 1.273,
    "FD": 0.681
  },
  {
    "liga": "LigaJapon",
    "equipo": "Kashiwa Reysol",
    "PGLL": 1.765,
    "FOL": 1.317,
    "FD": 0.746
  },
  {
    "liga": "LigaJapon",
    "equipo": "Kyoto Sanga",
    "PGLL": 1.55,
    "FOL": 1.361,
    "FD": 0.878
  },
  {
    "liga": "LigaJapon",
    "equipo": "S. Hiroshima",
    "PGLL": 1.643,
    "FOL": 1.01,
    "FD": 0.615
  },
  {
    "liga": "LigaJapon",
    "equipo": "Vissel Kobe",
    "PGLL": 1.394,
    "FOL": 1.01,
    "FD": 0.724
  },
  {
    "liga": "LigaJapon",
    "equipo": "Machida Zelvia",
    "PGLL": 1.368,
    "FOL": 1.142,
    "FD": 0.834
  },
  {
    "liga": "LigaJapon",
    "equipo": "Urawa RD",
    "PGLL": 1.154,
    "FOL": 0.988,
    "FD": 0.856
  },
  {
    "liga": "LigaJapon",
    "equipo": "K. Frontale",
    "PGLL": 1.175,
    "FOL": 1.471,
    "FD": 1.251
  },
  {
    "liga": "LigaJapon",
    "equipo": "Gamba Osaka",
    "PGLL": 0.964,
    "FOL": 1.164,
    "FD": 1.207
  },
  {
    "liga": "LigaJapon",
    "equipo": "Cerezo Osaka",
    "PGLL": 1.053,
    "FOL": 1.317,
    "FD": 1.251
  },
  {
    "liga": "LigaJapon",
    "equipo": "FC Tokyo",
    "PGLL": 0.854,
    "FOL": 0.9,
    "FD": 1.054
  },
  {
    "liga": "LigaJapon",
    "equipo": "Avispa Fukuoka",
    "PGLL": 0.895,
    "FOL": 0.746,
    "FD": 0.834
  },
  {
    "liga": "LigaJapon",
    "equipo": "Fagiano Okayama",
    "PGLL": 0.791,
    "FOL": 0.746,
    "FD": 0.944
  },
  {
    "liga": "LigaJapon",
    "equipo": "Shimizu S-Pulse",
    "PGLL": 0.804,
    "FOL": 0.9,
    "FD": 1.12
  },
  {
    "liga": "LigaJapon",
    "equipo": "Yokohama M.",
    "PGLL": 0.979,
    "FOL": 1.01,
    "FD": 1.032
  },
  {
    "liga": "LigaJapon",
    "equipo": "Nagoya G.",
    "PGLL": 0.786,
    "FOL": 0.966,
    "FD": 1.229
  },
  {
    "liga": "LigaJapon",
    "equipo": "Tokyo Verdy",
    "PGLL": 0.561,
    "FOL": 0.505,
    "FD": 0.9
  },
  {
    "liga": "LigaJapon",
    "equipo": "Yokohama FC",
    "PGLL": 0.6,
    "FOL": 0.593,
    "FD": 0.988
  },
  {
    "liga": "LigaJapon",
    "equipo": "Shonan Bellmare",
    "PGLL": 0.571,
    "FOL": 0.79,
    "FD": 1.383
  },
  {
    "liga": "LigaJapon",
    "equipo": "Albirex Niigata",
    "PGLL": 0.537,
    "FOL": 0.79,
    "FD": 1.471
  },
  {
    "liga": "España",
    "equipo": "FC Barcelona",
    "PGLL": 2.844,
    "FOL": 1.875,
    "FD": 0.659
  },
  {
    "liga": "España",
    "equipo": "Real Madrid",
    "PGLL": 2.121,
    "FOL": 1.484,
    "FD": 0.699
  },
  {
    "liga": "España",
    "equipo": "Atletico Madrid",
    "PGLL": 1.538,
    "FOL": 1.237,
    "FD": 0.803
  },
  {
    "liga": "España",
    "equipo": "Villarreal",
    "PGLL": 1.558,
    "FOL": 1.381,
    "FD": 0.886
  },
  {
    "liga": "España",
    "equipo": "Real Betis",
    "PGLL": 1.273,
    "FOL": 1.154,
    "FD": 0.906
  },
  {
    "liga": "España",
    "equipo": "Celta Vigo",
    "PGLL": 1.085,
    "FOL": 1.051,
    "FD": 0.968
  },
  {
    "liga": "España",
    "equipo": "Espanyol",
    "PGLL": 0.755,
    "FOL": 0.824,
    "FD": 1.091
  },
  {
    "liga": "España",
    "equipo": "Real Sociedad",
    "PGLL": 0.982,
    "FOL": 1.145,
    "FD": 1.165
  },
  {
    "liga": "España",
    "equipo": "Getafe",
    "PGLL": 0.838,
    "FOL": 0.639,
    "FD": 0.762
  },
  {
    "liga": "España",
    "equipo": "Athletic Bilbao",
    "PGLL": 0.755,
    "FOL": 0.824,
    "FD": 1.091
  },
  {
    "liga": "España",
    "equipo": "Osasuna",
    "PGLL": 0.915,
    "FOL": 0.886,
    "FD": 0.968
  },
  {
    "liga": "España",
    "equipo": "Valencia",
    "PGLL": 0.76,
    "FOL": 0.806,
    "FD": 1.059
  },
  {
    "liga": "España",
    "equipo": "Rayo Vallecano",
    "PGLL": 0.857,
    "FOL": 0.763,
    "FD": 0.89
  },
  {
    "liga": "España",
    "equipo": "Sevilla FC",
    "PGLL": 0.793,
    "FOL": 0.948,
    "FD": 1.194
  },
  {
    "liga": "España",
    "equipo": "Girona",
    "PGLL": 0.712,
    "FOL": 0.784,
    "FD": 1.101
  },
  {
    "liga": "España",
    "equipo": "Alaves",
    "PGLL": 0.778,
    "FOL": 0.866,
    "FD": 1.112
  },
  {
    "liga": "España",
    "equipo": "Elche",
    "PGLL": 0.839,
    "FOL": 0.969,
    "FD": 1.153
  },
  {
    "liga": "España",
    "equipo": "Mallorca",
    "PGLL": 0.8,
    "FOL": 0.907,
    "FD": 1.133
  },
  {
    "liga": "España",
    "equipo": "Levante",
    "PGLL": 0.746,
    "FOL": 0.907,
    "FD": 1.215
  },
  {
    "liga": "España",
    "equipo": "Real Oviedo",
    "PGLL": 0.481,
    "FOL": 0.551,
    "FD": 1.144
  },
  {
    "liga": "EspañaB",
    "equipo": "Racing",
    "PGLL": 1.397,
    "FOL": 1.576,
    "FD": 1.128
  },
  {
    "liga": "EspañaB",
    "equipo": "Almeria",
    "PGLL": 1.345,
    "FOL": 1.517,
    "FD": 1.128
  },
  {
    "liga": "EspañaB",
    "equipo": "Castellon",
    "PGLL": 1.347,
    "FOL": 1.284,
    "FD": 0.953
  },
  {
    "liga": "EspañaB",
    "equipo": "Deportivo",
    "PGLL": 1.463,
    "FOL": 1.167,
    "FD": 0.798
  },
  {
    "liga": "EspañaB",
    "equipo": "Las Palmas",
    "PGLL": 1.405,
    "FOL": 1.011,
    "FD": 0.72
  },
  {
    "liga": "EspañaB",
    "equipo": "Malaga",
    "PGLL": 1.36,
    "FOL": 1.323,
    "FD": 0.973
  },
  {
    "liga": "EspañaB",
    "equipo": "Burgos",
    "PGLL": 1.333,
    "FOL": 0.856,
    "FD": 0.642
  },
  {
    "liga": "EspañaB",
    "equipo": "Ceuta",
    "PGLL": 0.797,
    "FOL": 0.914,
    "FD": 1.148
  },
  {
    "liga": "EspañaB",
    "equipo": "Sporting Gijon",
    "PGLL": 1.02,
    "FOL": 1.011,
    "FD": 0.992
  },
  {
    "liga": "EspañaB",
    "equipo": "Eibar",
    "PGLL": 1.333,
    "FOL": 0.934,
    "FD": 0.7
  },
  {
    "liga": "EspañaB",
    "equipo": "Cordoba",
    "PGLL": 0.982,
    "FOL": 1.07,
    "FD": 1.089
  },
  {
    "liga": "EspañaB",
    "equipo": "FC Andorra",
    "PGLL": 1.245,
    "FOL": 1.187,
    "FD": 0.953
  },
  {
    "liga": "EspañaB",
    "equipo": "Real Sociedad B",
    "PGLL": 0.873,
    "FOL": 0.934,
    "FD": 1.07
  },
  {
    "liga": "EspañaB",
    "equipo": "Albacete",
    "PGLL": 0.981,
    "FOL": 0.992,
    "FD": 1.011
  },
  {
    "liga": "EspañaB",
    "equipo": "Granada",
    "PGLL": 0.96,
    "FOL": 0.934,
    "FD": 0.973
  },
  {
    "liga": "EspañaB",
    "equipo": "Cadiz",
    "PGLL": 0.643,
    "FOL": 0.7,
    "FD": 1.089
  },
  {
    "liga": "EspañaB",
    "equipo": "Leganes",
    "PGLL": 0.875,
    "FOL": 0.817,
    "FD": 0.934
  },
  {
    "liga": "EspañaB",
    "equipo": "Valladolid",
    "PGLL": 0.86,
    "FOL": 0.836,
    "FD": 0.973
  },
  {
    "liga": "EspañaB",
    "equipo": "Huesca",
    "PGLL": 0.656,
    "FOL": 0.778,
    "FD": 1.187
  },
  {
    "liga": "EspañaB",
    "equipo": "Leonesa",
    "PGLL": 0.562,
    "FOL": 0.7,
    "FD": 1.245
  },
  {
    "liga": "EspañaB",
    "equipo": "Real Zaragoza",
    "PGLL": 0.623,
    "FOL": 0.642,
    "FD": 1.031
  },
  {
    "liga": "EspañaB",
    "equipo": "Mirandes",
    "PGLL": 0.646,
    "FOL": 0.817,
    "FD": 1.264
  },
  {
    "liga": "Alemania",
    "equipo": "Bayern Munich",
    "PGLL": 3.343,
    "FOL": 2.201,
    "FD": 0.658
  },
  {
    "liga": "Alemania",
    "equipo": "Dortmund",
    "PGLL": 2.0,
    "FOL": 1.279,
    "FD": 0.639
  },
  {
    "liga": "Alemania",
    "equipo": "Hoffenheim",
    "PGLL": 1.354,
    "FOL": 1.223,
    "FD": 0.903
  },
  {
    "liga": "Alemania",
    "equipo": "Stuttgart",
    "PGLL": 1.468,
    "FOL": 1.298,
    "FD": 0.884
  },
  {
    "liga": "Alemania",
    "equipo": "RB Leipzig",
    "PGLL": 1.512,
    "FOL": 1.223,
    "FD": 0.809
  },
  {
    "liga": "Alemania",
    "equipo": "Leverkusen",
    "PGLL": 1.457,
    "FOL": 1.26,
    "FD": 0.865
  },
  {
    "liga": "Alemania",
    "equipo": "E. Frankfurt",
    "PGLL": 0.937,
    "FOL": 1.11,
    "FD": 1.185
  },
  {
    "liga": "Alemania",
    "equipo": "Freiburg",
    "PGLL": 0.839,
    "FOL": 0.884,
    "FD": 1.053
  },
  {
    "liga": "Alemania",
    "equipo": "FC Augsburg",
    "PGLL": 0.789,
    "FOL": 0.846,
    "FD": 1.072
  },
  {
    "liga": "Alemania",
    "equipo": "Hamburger SV",
    "PGLL": 0.736,
    "FOL": 0.734,
    "FD": 0.997
  },
  {
    "liga": "Alemania",
    "equipo": "Union Berlin",
    "PGLL": 0.69,
    "FOL": 0.752,
    "FD": 1.091
  },
  {
    "liga": "Alemania",
    "equipo": "Monchengladbach",
    "PGLL": 0.717,
    "FOL": 0.715,
    "FD": 0.997
  },
  {
    "liga": "Alemania",
    "equipo": "Werder Bremen",
    "PGLL": 0.638,
    "FOL": 0.696,
    "FD": 1.091
  },
  {
    "liga": "Alemania",
    "equipo": "FC Koln",
    "PGLL": 0.828,
    "FOL": 0.903,
    "FD": 1.091
  },
  {
    "liga": "Alemania",
    "equipo": "FSV Mainz",
    "PGLL": 0.792,
    "FOL": 0.79,
    "FD": 0.997
  },
  {
    "liga": "Alemania",
    "equipo": "Sankt Pauli",
    "PGLL": 0.491,
    "FOL": 0.527,
    "FD": 1.072
  },
  {
    "liga": "Alemania",
    "equipo": "Wolfsburg",
    "PGLL": 0.618,
    "FOL": 0.79,
    "FD": 1.279
  },
  {
    "liga": "Alemania",
    "equipo": "Heidenheim",
    "PGLL": 0.586,
    "FOL": 0.771,
    "FD": 1.317
  },
  {
    "liga": "AlemaniaB",
    "equipo": "Schalke 04",
    "PGLL": 1.581,
    "FOL": 1.016,
    "FD": 0.643
  },
  {
    "liga": "AlemaniaB",
    "equipo": "Darmstadt",
    "PGLL": 1.326,
    "FOL": 1.182,
    "FD": 0.892
  },
  {
    "liga": "AlemaniaB",
    "equipo": "Elversberg",
    "PGLL": 1.564,
    "FOL": 1.265,
    "FD": 0.809
  },
  {
    "liga": "AlemaniaB",
    "equipo": "Paderborn",
    "PGLL": 1.267,
    "FOL": 1.182,
    "FD": 0.933
  },
  {
    "liga": "AlemaniaB",
    "equipo": "Hannover 96",
    "PGLL": 1.39,
    "FOL": 1.182,
    "FD": 0.85
  },
  {
    "liga": "AlemaniaB",
    "equipo": "Hertha Berlin",
    "PGLL": 1.211,
    "FOL": 0.954,
    "FD": 0.788
  },
  {
    "liga": "AlemaniaB",
    "equipo": "Kaiserslautern",
    "PGLL": 1.085,
    "FOL": 1.058,
    "FD": 0.975
  },
  {
    "liga": "AlemaniaB",
    "equipo": "Karlsruher SC",
    "PGLL": 0.839,
    "FOL": 1.078,
    "FD": 1.286
  },
  {
    "liga": "AlemaniaB",
    "equipo": "Bochum",
    "PGLL": 1.022,
    "FOL": 0.975,
    "FD": 0.954
  },
  {
    "liga": "AlemaniaB",
    "equipo": "Dusseldorf",
    "PGLL": 0.66,
    "FOL": 0.684,
    "FD": 1.037
  },
  {
    "liga": "AlemaniaB",
    "equipo": "FC Nurnberg",
    "PGLL": 1.048,
    "FOL": 0.912,
    "FD": 0.871
  },
  {
    "liga": "AlemaniaB",
    "equipo": "Bielefeld",
    "PGLL": 0.94,
    "FOL": 0.975,
    "FD": 1.037
  },
  {
    "liga": "AlemaniaB",
    "equipo": "Dynamo Dresden",
    "PGLL": 1.0,
    "FOL": 1.078,
    "FD": 1.078
  },
  {
    "liga": "AlemaniaB",
    "equipo": "Preuss. Munster",
    "PGLL": 0.655,
    "FOL": 0.788,
    "FD": 1.203
  },
  {
    "liga": "AlemaniaB",
    "equipo": "Braunschweig",
    "PGLL": 0.679,
    "FOL": 0.747,
    "FD": 1.099
  },
  {
    "liga": "AlemaniaB",
    "equipo": "Greuther Furth",
    "PGLL": 0.676,
    "FOL": 0.954,
    "FD": 1.41
  },
  {
    "liga": "AlemaniaB",
    "equipo": "Holstein Kiel",
    "PGLL": 0.935,
    "FOL": 0.892,
    "FD": 0.954
  },
  {
    "liga": "AlemaniaB",
    "equipo": "Magdeburg",
    "PGLL": 0.912,
    "FOL": 1.078,
    "FD": 1.182
  },
  {
    "liga": "Ucrania",
    "equipo": "Shakhtar",
    "PGLL": 3.778,
    "FOL": 1.867,
    "FD": 0.493
  },
  {
    "liga": "Ucrania",
    "equipo": "LNZ Cherkasy",
    "PGLL": 2.375,
    "FOL": 1.043,
    "FD": 0.438
  },
  {
    "liga": "Ucrania",
    "equipo": "Polessya",
    "PGLL": 2.333,
    "FOL": 1.346,
    "FD": 0.575
  },
  {
    "liga": "Ucrania",
    "equipo": "Dynamo Kyiv",
    "PGLL": 1.794,
    "FOL": 1.675,
    "FD": 0.931
  },
  {
    "liga": "Ucrania",
    "equipo": "Kryvbas KR",
    "PGLL": 1.19,
    "FOL": 1.373,
    "FD": 1.15
  },
  {
    "liga": "Ucrania",
    "equipo": "Metalist 1925",
    "PGLL": 1.889,
    "FOL": 0.934,
    "FD": 0.493
  },
  {
    "liga": "Ucrania",
    "equipo": "Kolos Kovalivka",
    "PGLL": 1.261,
    "FOL": 0.796,
    "FD": 0.63
  },
  {
    "liga": "Ucrania",
    "equipo": "Zorya Luhansk",
    "PGLL": 1.143,
    "FOL": 1.098,
    "FD": 0.958
  },
  {
    "liga": "Ucrania",
    "equipo": "Karpaty Lviv",
    "PGLL": 1.276,
    "FOL": 1.016,
    "FD": 0.794
  },
  {
    "liga": "Ucrania",
    "equipo": "Veres",
    "PGLL": 0.703,
    "FOL": 0.714,
    "FD": 1.013
  },
  {
    "liga": "Ucrania",
    "equipo": "Obolon",
    "PGLL": 0.542,
    "FOL": 0.714,
    "FD": 1.314
  },
  {
    "liga": "Ucrania",
    "equipo": "Kudrivka",
    "PGLL": 0.614,
    "FOL": 0.769,
    "FD": 1.25
  },
  {
    "liga": "Ucrania",
    "equipo": "Rukh Lviv",
    "PGLL": 0.409,
    "FOL": 0.513,
    "FD": 1.25
  },
  {
    "liga": "Ucrania",
    "equipo": "Episentr",
    "PGLL": 0.795,
    "FOL": 0.961,
    "FD": 1.205
  },
  {
    "liga": "Ucrania",
    "equipo": "Oleksandria",
    "PGLL": 0.357,
    "FOL": 0.549,
    "FD": 1.534
  },
  {
    "liga": "Ucrania",
    "equipo": "SK Poltava",
    "PGLL": 0.319,
    "FOL": 0.632,
    "FD": 1.972
  },
  {
    "liga": "Bulgaria",
    "equipo": "Levski Sofia",
    "PGLL": 2.909,
    "FOL": 1.838,
    "FD": 0.632
  },
  {
    "liga": "Bulgaria",
    "equipo": "Ludogorets",
    "PGLL": 2.85,
    "FOL": 1.637,
    "FD": 0.575
  },
  {
    "liga": "Bulgaria",
    "equipo": "CSKA 1948 Sofia",
    "PGLL": 1.613,
    "FOL": 1.436,
    "FD": 0.89
  },
  {
    "liga": "Bulgaria",
    "equipo": "CSKA Sofia",
    "PGLL": 1.87,
    "FOL": 1.235,
    "FD": 0.661
  },
  {
    "liga": "Bulgaria",
    "equipo": "Cherno More",
    "PGLL": 1.269,
    "FOL": 0.948,
    "FD": 0.747
  },
  {
    "liga": "Bulgaria",
    "equipo": "Lok. Plovdiv",
    "PGLL": 0.909,
    "FOL": 0.862,
    "FD": 0.948
  },
  {
    "liga": "Bulgaria",
    "equipo": "Slavia Sofia",
    "PGLL": 1.091,
    "FOL": 1.034,
    "FD": 0.948
  },
  {
    "liga": "Bulgaria",
    "equipo": "Arda",
    "PGLL": 1.222,
    "FOL": 0.948,
    "FD": 0.776
  },
  {
    "liga": "Bulgaria",
    "equipo": "Botev Vratsa",
    "PGLL": 0.923,
    "FOL": 0.689,
    "FD": 0.747
  },
  {
    "liga": "Bulgaria",
    "equipo": "Lokomotiv Sofia",
    "PGLL": 1.026,
    "FOL": 1.149,
    "FD": 1.12
  },
  {
    "liga": "Bulgaria",
    "equipo": "Botev Plovdiv",
    "PGLL": 1.081,
    "FOL": 1.149,
    "FD": 1.063
  },
  {
    "liga": "Bulgaria",
    "equipo": "Dobrudzha",
    "PGLL": 0.535,
    "FOL": 0.661,
    "FD": 1.235
  },
  {
    "liga": "Bulgaria",
    "equipo": "Spartak Varna",
    "PGLL": 0.5,
    "FOL": 0.718,
    "FD": 1.436
  },
  {
    "liga": "Bulgaria",
    "equipo": "Septemvri Sofia",
    "PGLL": 0.431,
    "FOL": 0.718,
    "FD": 1.666
  },
  {
    "liga": "Bulgaria",
    "equipo": "Beroe",
    "PGLL": 0.432,
    "FOL": 0.546,
    "FD": 1.264
  },
  {
    "liga": "Bulgaria",
    "equipo": "Montana",
    "PGLL": 0.333,
    "FOL": 0.431,
    "FD": 1.293
  },
  {
    "liga": "Rumania",
    "equipo": "Univ. Craiova",
    "PGLL": 1.963,
    "FOL": 1.383,
    "FD": 0.705
  },
  {
    "liga": "Rumania",
    "equipo": "Rapid Bucharest",
    "PGLL": 1.567,
    "FOL": 1.227,
    "FD": 0.783
  },
  {
    "liga": "Rumania",
    "equipo": "U. Cluj",
    "PGLL": 1.778,
    "FOL": 1.253,
    "FD": 0.705
  },
  {
    "liga": "Rumania",
    "equipo": "CFR Cluj",
    "PGLL": 1.225,
    "FOL": 1.279,
    "FD": 1.044
  },
  {
    "liga": "Rumania",
    "equipo": "Din. Bucharest",
    "PGLL": 1.5,
    "FOL": 1.096,
    "FD": 0.731
  },
  {
    "liga": "Rumania",
    "equipo": "Arges",
    "PGLL": 1.321,
    "FOL": 0.966,
    "FD": 0.731
  },
  {
    "liga": "Rumania",
    "equipo": "FCSB",
    "PGLL": 1.2,
    "FOL": 1.253,
    "FD": 1.044
  },
  {
    "liga": "Rumania",
    "equipo": "UTA Arad",
    "PGLL": 0.886,
    "FOL": 1.018,
    "FD": 1.148
  },
  {
    "liga": "Rumania",
    "equipo": "Botosani",
    "PGLL": 1.276,
    "FOL": 0.966,
    "FD": 0.757
  },
  {
    "liga": "Rumania",
    "equipo": "Otelul",
    "PGLL": 1.219,
    "FOL": 1.018,
    "FD": 0.835
  },
  {
    "liga": "Rumania",
    "equipo": "Farul Constanta",
    "PGLL": 1.054,
    "FOL": 1.018,
    "FD": 0.966
  },
  {
    "liga": "Rumania",
    "equipo": "Petrolul",
    "PGLL": 0.774,
    "FOL": 0.626,
    "FD": 0.809
  },
  {
    "liga": "Rumania",
    "equipo": "Csikszereda",
    "PGLL": 0.517,
    "FOL": 0.783,
    "FD": 1.514
  },
  {
    "liga": "Rumania",
    "equipo": "Unirea Slobozia",
    "PGLL": 0.587,
    "FOL": 0.705,
    "FD": 1.201
  },
  {
    "liga": "Rumania",
    "equipo": "Hermannstadt",
    "PGLL": 0.58,
    "FOL": 0.757,
    "FD": 1.305
  },
  {
    "liga": "Rumania",
    "equipo": "Metaloglobus",
    "PGLL": 0.379,
    "FOL": 0.653,
    "FD": 1.723
  },
  {
    "liga": "Croacia",
    "equipo": "Dinamo Zagreb",
    "PGLL": 3.296,
    "FOL": 1.965,
    "FD": 0.596
  },
  {
    "liga": "Croacia",
    "equipo": "Hajduk Split",
    "PGLL": 1.688,
    "FOL": 1.192,
    "FD": 0.706
  },
  {
    "liga": "Croacia",
    "equipo": "Rijeka",
    "PGLL": 1.306,
    "FOL": 1.038,
    "FD": 0.795
  },
  {
    "liga": "Croacia",
    "equipo": "Slaven Belupo",
    "PGLL": 0.818,
    "FOL": 0.993,
    "FD": 1.214
  },
  {
    "liga": "Croacia",
    "equipo": "Varazdin",
    "PGLL": 0.935,
    "FOL": 0.949,
    "FD": 1.015
  },
  {
    "liga": "Croacia",
    "equipo": "Istra",
    "PGLL": 0.812,
    "FOL": 0.861,
    "FD": 1.06
  },
  {
    "liga": "Croacia",
    "equipo": "Lok. Zagreb",
    "PGLL": 0.765,
    "FOL": 0.861,
    "FD": 1.126
  },
  {
    "liga": "Croacia",
    "equipo": "Gorica",
    "PGLL": 0.826,
    "FOL": 0.839,
    "FD": 1.015
  },
  {
    "liga": "Croacia",
    "equipo": "Osijek",
    "PGLL": 0.532,
    "FOL": 0.552,
    "FD": 1.038
  },
  {
    "liga": "Croacia",
    "equipo": "Vukovar",
    "PGLL": 0.523,
    "FOL": 0.751,
    "FD": 1.435
  },
  {
    "liga": "Turquia",
    "equipo": "Galatasaray",
    "PGLL": 2.655,
    "FOL": 1.766,
    "FD": 0.665
  },
  {
    "liga": "Turquia",
    "equipo": "Fenerbahce",
    "PGLL": 2.176,
    "FOL": 1.697,
    "FD": 0.78
  },
  {
    "liga": "Turquia",
    "equipo": "Trabzonspor",
    "PGLL": 1.694,
    "FOL": 1.399,
    "FD": 0.825
  },
  {
    "liga": "Turquia",
    "equipo": "Besiktas",
    "PGLL": 1.5,
    "FOL": 1.307,
    "FD": 0.871
  },
  {
    "liga": "Turquia",
    "equipo": "Goztepe",
    "PGLL": 1.448,
    "FOL": 0.963,
    "FD": 0.665
  },
  {
    "liga": "Turquia",
    "equipo": "Basaksehir",
    "PGLL": 1.647,
    "FOL": 1.284,
    "FD": 0.78
  },
  {
    "liga": "Turquia",
    "equipo": "Kocaelispor",
    "PGLL": 0.703,
    "FOL": 0.596,
    "FD": 0.848
  },
  {
    "liga": "Turquia",
    "equipo": "Samsunspor",
    "PGLL": 0.956,
    "FOL": 0.986,
    "FD": 1.032
  },
  {
    "liga": "Turquia",
    "equipo": "Rizespor",
    "PGLL": 0.88,
    "FOL": 1.009,
    "FD": 1.146
  },
  {
    "liga": "Turquia",
    "equipo": "Gaziantep",
    "PGLL": 0.75,
    "FOL": 0.963,
    "FD": 1.284
  },
  {
    "liga": "Turquia",
    "equipo": "Alanyaspor",
    "PGLL": 1.026,
    "FOL": 0.917,
    "FD": 0.894
  },
  {
    "liga": "Turquia",
    "equipo": "Genclerbirligi",
    "PGLL": 0.702,
    "FOL": 0.757,
    "FD": 1.078
  },
  {
    "liga": "Turquia",
    "equipo": "Konyaspor",
    "PGLL": 0.875,
    "FOL": 0.963,
    "FD": 1.101
  },
  {
    "liga": "Turquia",
    "equipo": "Antalyaspor",
    "PGLL": 0.582,
    "FOL": 0.734,
    "FD": 1.261
  },
  {
    "liga": "Turquia",
    "equipo": "Eyupspor",
    "PGLL": 0.667,
    "FOL": 0.688,
    "FD": 1.032
  },
  {
    "liga": "Turquia",
    "equipo": "Kasimpasa",
    "PGLL": 0.653,
    "FOL": 0.734,
    "FD": 1.124
  },
  {
    "liga": "Turquia",
    "equipo": "Kayserispor",
    "PGLL": 0.41,
    "FOL": 0.573,
    "FD": 1.399
  },
  {
    "liga": "Turquia",
    "equipo": "F. Karagumruk",
    "PGLL": 0.547,
    "FOL": 0.665,
    "FD": 1.215
  },
  {
    "liga": "Polonia",
    "equipo": "Zaglebie Lubin",
    "PGLL": 1.25,
    "FOL": 1.044,
    "FD": 0.835
  },
  {
    "liga": "Polonia",
    "equipo": "Jagiellonia",
    "PGLL": 1.359,
    "FOL": 1.229,
    "FD": 0.905
  },
  {
    "liga": "Polonia",
    "equipo": "Lech Poznan",
    "PGLL": 1.357,
    "FOL": 1.322,
    "FD": 0.974
  },
  {
    "liga": "Polonia",
    "equipo": "Rakow C.",
    "PGLL": 1.154,
    "FOL": 1.044,
    "FD": 0.905
  },
  {
    "liga": "Polonia",
    "equipo": "Gornik Zabrze",
    "PGLL": 1.194,
    "FOL": 0.997,
    "FD": 0.835
  },
  {
    "liga": "Polonia",
    "equipo": "Cracovia Krakow",
    "PGLL": 0.921,
    "FOL": 0.812,
    "FD": 0.881
  },
  {
    "liga": "Polonia",
    "equipo": "Korona Kielce",
    "PGLL": 0.974,
    "FOL": 0.881,
    "FD": 0.905
  },
  {
    "liga": "Polonia",
    "equipo": "Wisla Plock",
    "PGLL": 0.914,
    "FOL": 0.742,
    "FD": 0.812
  },
  {
    "liga": "Polonia",
    "equipo": "Katowice",
    "PGLL": 1.143,
    "FOL": 1.113,
    "FD": 0.974
  },
  {
    "liga": "Polonia",
    "equipo": "Radomiak Radom",
    "PGLL": 1.114,
    "FOL": 1.137,
    "FD": 1.021
  },
  {
    "liga": "Polonia",
    "equipo": "Lechia Gdansk",
    "PGLL": 0.983,
    "FOL": 1.369,
    "FD": 1.392
  },
  {
    "liga": "Polonia",
    "equipo": "Pogon Szczecin",
    "PGLL": 0.938,
    "FOL": 1.044,
    "FD": 1.113
  },
  {
    "liga": "Polonia",
    "equipo": "Motor Lublin",
    "PGLL": 0.935,
    "FOL": 0.997,
    "FD": 1.067
  },
  {
    "liga": "Polonia",
    "equipo": "Piast Gliwice",
    "PGLL": 0.976,
    "FOL": 0.928,
    "FD": 0.951
  },
  {
    "liga": "Polonia",
    "equipo": "Arka Gdynia",
    "PGLL": 0.582,
    "FOL": 0.742,
    "FD": 1.276
  },
  {
    "liga": "Polonia",
    "equipo": "Legia Warsaw",
    "PGLL": 1.0,
    "FOL": 0.835,
    "FD": 0.835
  },
  {
    "liga": "Polonia",
    "equipo": "Widzew Lodz",
    "PGLL": 1.0,
    "FOL": 0.905,
    "FD": 0.905
  },
  {
    "liga": "Polonia",
    "equipo": "Termalica",
    "PGLL": 0.607,
    "FOL": 0.858,
    "FD": 1.415
  },
  {
    "liga": "Albania",
    "equipo": "Vllaznia S.",
    "PGLL": 1.556,
    "FOL": 1.058,
    "FD": 0.68
  },
  {
    "liga": "Albania",
    "equipo": "Egnatia R.",
    "PGLL": 1.235,
    "FOL": 1.058,
    "FD": 0.856
  },
  {
    "liga": "Albania",
    "equipo": "AF Elbasani",
    "PGLL": 1.297,
    "FOL": 1.209,
    "FD": 0.932
  },
  {
    "liga": "Albania",
    "equipo": "Partizani T.",
    "PGLL": 0.792,
    "FOL": 0.957,
    "FD": 1.209
  },
  {
    "liga": "Albania",
    "equipo": "Dinamo Tirana",
    "PGLL": 1.303,
    "FOL": 1.083,
    "FD": 0.831
  },
  {
    "liga": "Albania",
    "equipo": "Teuta Durres",
    "PGLL": 0.865,
    "FOL": 0.806,
    "FD": 0.932
  },
  {
    "liga": "Albania",
    "equipo": "Bylis",
    "PGLL": 0.76,
    "FOL": 0.957,
    "FD": 1.259
  },
  {
    "liga": "Albania",
    "equipo": "Vora",
    "PGLL": 0.975,
    "FOL": 0.982,
    "FD": 1.008
  },
  {
    "liga": "Albania",
    "equipo": "Flamurtari",
    "PGLL": 0.867,
    "FOL": 0.982,
    "FD": 1.134
  },
  {
    "liga": "Albania",
    "equipo": "KF Tirana",
    "PGLL": 0.783,
    "FOL": 0.907,
    "FD": 1.159
  },
  {
    "liga": "Austria",
    "equipo": "Sturm Graz",
    "PGLL": 1.269,
    "FOL": 1.138,
    "FD": 0.897
  },
  {
    "liga": "Austria",
    "equipo": "Salzburg",
    "PGLL": 1.615,
    "FOL": 1.448,
    "FD": 0.897
  },
  {
    "liga": "Austria",
    "equipo": "LASK Linz",
    "PGLL": 1.067,
    "FOL": 1.103,
    "FD": 1.034
  },
  {
    "liga": "Austria",
    "equipo": "Austria Wien",
    "PGLL": 1.133,
    "FOL": 1.172,
    "FD": 1.034
  },
  {
    "liga": "Austria",
    "equipo": "Rapid Wien",
    "PGLL": 1.04,
    "FOL": 0.897,
    "FD": 0.862
  },
  {
    "liga": "Austria",
    "equipo": "Hartberg",
    "PGLL": 1.208,
    "FOL": 1.0,
    "FD": 0.828
  },
  {
    "liga": "Austria",
    "equipo": "Tirol",
    "PGLL": 1.033,
    "FOL": 1.069,
    "FD": 1.034
  },
  {
    "liga": "Austria",
    "equipo": "Altach",
    "PGLL": 0.957,
    "FOL": 0.759,
    "FD": 0.793
  },
  {
    "liga": "Austria",
    "equipo": "Ried",
    "PGLL": 0.867,
    "FOL": 0.897,
    "FD": 1.034
  },
  {
    "liga": "Austria",
    "equipo": "Wolfsberger AC",
    "PGLL": 0.969,
    "FOL": 1.069,
    "FD": 1.103
  },
  {
    "liga": "Austria",
    "equipo": "Grazer AK",
    "PGLL": 0.611,
    "FOL": 0.759,
    "FD": 1.241
  },
  {
    "liga": "Austria",
    "equipo": "BW Linz",
    "PGLL": 0.556,
    "FOL": 0.69,
    "FD": 1.241
  },
  {
    "liga": "Francia",
    "equipo": "Paris SG",
    "PGLL": 2.704,
    "FOL": 1.57,
    "FD": 0.581
  },
  {
    "liga": "Francia",
    "equipo": "Lens",
    "PGLL": 1.771,
    "FOL": 1.333,
    "FD": 0.753
  },
  {
    "liga": "Francia",
    "equipo": "Marseille",
    "PGLL": 1.364,
    "FOL": 1.29,
    "FD": 0.946
  },
  {
    "liga": "Francia",
    "equipo": "Lyon",
    "PGLL": 1.472,
    "FOL": 1.14,
    "FD": 0.774
  },
  {
    "liga": "Francia",
    "equipo": "Rennes",
    "PGLL": 1.234,
    "FOL": 1.247,
    "FD": 1.011
  },
  {
    "liga": "Francia",
    "equipo": "Lille",
    "PGLL": 1.486,
    "FOL": 1.118,
    "FD": 0.753
  },
  {
    "liga": "Francia",
    "equipo": "Monaco",
    "PGLL": 1.143,
    "FOL": 1.204,
    "FD": 1.054
  },
  {
    "liga": "Francia",
    "equipo": "Strasbourg",
    "PGLL": 1.233,
    "FOL": 1.14,
    "FD": 0.925
  },
  {
    "liga": "Francia",
    "equipo": "Brest",
    "PGLL": 0.778,
    "FOL": 0.903,
    "FD": 1.161
  },
  {
    "liga": "Francia",
    "equipo": "Lorient",
    "PGLL": 0.98,
    "FOL": 1.032,
    "FD": 1.054
  },
  {
    "liga": "Francia",
    "equipo": "Angers",
    "PGLL": 0.596,
    "FOL": 0.602,
    "FD": 1.011
  },
  {
    "liga": "Francia",
    "equipo": "Toulouse",
    "PGLL": 1.022,
    "FOL": 1.011,
    "FD": 0.989
  },
  {
    "liga": "Francia",
    "equipo": "Paris FC",
    "PGLL": 0.918,
    "FOL": 0.968,
    "FD": 1.054
  },
  {
    "liga": "Francia",
    "equipo": "Le Havre",
    "PGLL": 0.682,
    "FOL": 0.645,
    "FD": 0.946
  },
  {
    "liga": "Francia",
    "equipo": "Nice",
    "PGLL": 0.617,
    "FOL": 0.796,
    "FD": 1.29
  },
  {
    "liga": "Francia",
    "equipo": "Auxerre",
    "PGLL": 0.727,
    "FOL": 0.688,
    "FD": 0.946
  },
  {
    "liga": "Francia",
    "equipo": "Nantes",
    "PGLL": 0.558,
    "FOL": 0.624,
    "FD": 1.118
  },
  {
    "liga": "Francia",
    "equipo": "Metz",
    "PGLL": 0.421,
    "FOL": 0.688,
    "FD": 1.634
  },
  {
    "liga": "FranciaB",
    "equipo": "Troyes",
    "PGLL": 1.818,
    "FOL": 1.393,
    "FD": 0.766
  },
  {
    "liga": "FranciaB",
    "equipo": "Saint-Etienne",
    "PGLL": 1.553,
    "FOL": 1.37,
    "FD": 0.883
  },
  {
    "liga": "FranciaB",
    "equipo": "Le Mans",
    "PGLL": 1.548,
    "FOL": 1.148,
    "FD": 0.742
  },
  {
    "liga": "FranciaB",
    "equipo": "Reims",
    "PGLL": 1.514,
    "FOL": 1.231,
    "FD": 0.813
  },
  {
    "liga": "FranciaB",
    "equipo": "Rodez Aveyron",
    "PGLL": 1.154,
    "FOL": 1.045,
    "FD": 0.906
  },
  {
    "liga": "FranciaB",
    "equipo": "USL Dunkerque",
    "PGLL": 1.178,
    "FOL": 1.231,
    "FD": 1.045
  },
  {
    "liga": "FranciaB",
    "equipo": "Annecy",
    "PGLL": 1.256,
    "FOL": 1.138,
    "FD": 0.906
  },
  {
    "liga": "FranciaB",
    "equipo": "Montpellier",
    "PGLL": 1.323,
    "FOL": 0.952,
    "FD": 0.72
  },
  {
    "liga": "FranciaB",
    "equipo": "Red Star",
    "PGLL": 1.216,
    "FOL": 1.045,
    "FD": 0.859
  },
  {
    "liga": "FranciaB",
    "equipo": "Guingamp",
    "PGLL": 0.857,
    "FOL": 0.975,
    "FD": 1.138
  },
  {
    "liga": "FranciaB",
    "equipo": "Pau FC",
    "PGLL": 0.774,
    "FOL": 1.115,
    "FD": 1.44
  },
  {
    "liga": "FranciaB",
    "equipo": "Boulogne",
    "PGLL": 0.694,
    "FOL": 0.79,
    "FD": 1.138
  },
  {
    "liga": "FranciaB",
    "equipo": "Grenoble",
    "PGLL": 0.846,
    "FOL": 0.766,
    "FD": 0.906
  },
  {
    "liga": "FranciaB",
    "equipo": "Clermont",
    "PGLL": 0.864,
    "FOL": 0.882,
    "FD": 1.022
  },
  {
    "liga": "FranciaB",
    "equipo": "Nancy",
    "PGLL": 0.673,
    "FOL": 0.813,
    "FD": 1.208
  },
  {
    "liga": "FranciaB",
    "equipo": "Amiens",
    "PGLL": 0.569,
    "FOL": 0.859,
    "FD": 1.51
  },
  {
    "liga": "FranciaB",
    "equipo": "Laval",
    "PGLL": 0.625,
    "FOL": 0.697,
    "FD": 1.115
  },
  {
    "liga": "FranciaB",
    "equipo": "SC Bastia",
    "PGLL": 0.622,
    "FOL": 0.55,
    "FD": 0.885
  },
  {
    "liga": "Holanda",
    "equipo": "PSV Eindhoven",
    "PGLL": 2.182,
    "FOL": 1.833,
    "FD": 0.84
  },
  {
    "liga": "Holanda",
    "equipo": "Feyenoord",
    "PGLL": 1.545,
    "FOL": 1.298,
    "FD": 0.84
  },
  {
    "liga": "Holanda",
    "equipo": "NEC Nijmegen",
    "PGLL": 1.442,
    "FOL": 1.432,
    "FD": 0.992
  },
  {
    "liga": "Holanda",
    "equipo": "FC Twente",
    "PGLL": 1.657,
    "FOL": 1.107,
    "FD": 0.668
  },
  {
    "liga": "Holanda",
    "equipo": "Ajax Amsterdam",
    "PGLL": 1.512,
    "FOL": 1.184,
    "FD": 0.782
  },
  {
    "liga": "Holanda",
    "equipo": "AZ Alkmaar",
    "PGLL": 1.146,
    "FOL": 1.05,
    "FD": 0.916
  },
  {
    "liga": "Holanda",
    "equipo": "Sparta",
    "PGLL": 0.644,
    "FOL": 0.726,
    "FD": 1.126
  },
  {
    "liga": "Holanda",
    "equipo": "Heerenveen",
    "PGLL": 1.118,
    "FOL": 1.122,
    "FD": 1.004
  },
  {
    "liga": "Holanda",
    "equipo": "FC Utrecht",
    "PGLL": 1.262,
    "FOL": 1.012,
    "FD": 0.801
  },
  {
    "liga": "Holanda",
    "equipo": "FC Groningen",
    "PGLL": 1.068,
    "FOL": 0.897,
    "FD": 0.84
  },
  {
    "liga": "Holanda",
    "equipo": "Fortuna Sittard",
    "PGLL": 0.803,
    "FOL": 0.936,
    "FD": 1.164
  },
  {
    "liga": "Holanda",
    "equipo": "Go Ahead Eagles",
    "PGLL": 1.039,
    "FOL": 1.012,
    "FD": 0.973
  },
  {
    "liga": "Holanda",
    "equipo": "PEC Zwolle",
    "PGLL": 0.638,
    "FOL": 0.84,
    "FD": 1.317
  },
  {
    "liga": "Holanda",
    "equipo": "FC Volendam",
    "PGLL": 0.642,
    "FOL": 0.649,
    "FD": 1.011
  },
  {
    "liga": "Holanda",
    "equipo": "Excelsior",
    "PGLL": 0.741,
    "FOL": 0.764,
    "FD": 1.03
  },
  {
    "liga": "Holanda",
    "equipo": "Telstar",
    "PGLL": 0.87,
    "FOL": 0.897,
    "FD": 1.03
  },
  {
    "liga": "Holanda",
    "equipo": "NAC Breda",
    "PGLL": 0.545,
    "FOL": 0.591,
    "FD": 1.082
  },
  {
    "liga": "Holanda",
    "equipo": "Heracles Almelo",
    "PGLL": 0.41,
    "FOL": 0.649,
    "FD": 1.584
  },
  {
    "liga": "HolandaB",
    "equipo": "ADO Den Haag",
    "PGLL": 2.432,
    "FOL": 1.483,
    "FD": 0.61
  },
  {
    "liga": "HolandaB",
    "equipo": "Cambuur",
    "PGLL": 1.562,
    "FOL": 1.236,
    "FD": 0.791
  },
  {
    "liga": "HolandaB",
    "equipo": "Jong PSV",
    "PGLL": 1.031,
    "FOL": 1.087,
    "FD": 1.054
  },
  {
    "liga": "HolandaB",
    "equipo": "De Graafschap",
    "PGLL": 1.276,
    "FOL": 1.219,
    "FD": 0.956
  },
  {
    "liga": "HolandaB",
    "equipo": "Willem II",
    "PGLL": 1.405,
    "FOL": 0.972,
    "FD": 0.692
  },
  {
    "liga": "HolandaB",
    "equipo": "Roda JC",
    "PGLL": 1.093,
    "FOL": 0.972,
    "FD": 0.89
  },
  {
    "liga": "HolandaB",
    "equipo": "Almere City",
    "PGLL": 1.238,
    "FOL": 1.285,
    "FD": 1.038
  },
  {
    "liga": "HolandaB",
    "equipo": "RKC Waalwijk",
    "PGLL": 1.203,
    "FOL": 1.17,
    "FD": 0.972
  },
  {
    "liga": "HolandaB",
    "equipo": "FC Dordrecht",
    "PGLL": 0.857,
    "FOL": 0.791,
    "FD": 0.923
  },
  {
    "liga": "HolandaB",
    "equipo": "FC Den Bosch",
    "PGLL": 0.942,
    "FOL": 1.071,
    "FD": 1.137
  },
  {
    "liga": "HolandaB",
    "equipo": "VVV",
    "PGLL": 0.862,
    "FOL": 0.824,
    "FD": 0.956
  },
  {
    "liga": "HolandaB",
    "equipo": "FC Eindhoven",
    "PGLL": 0.739,
    "FOL": 0.84,
    "FD": 1.137
  },
  {
    "liga": "HolandaB",
    "equipo": "FC Emmen",
    "PGLL": 0.806,
    "FOL": 0.956,
    "FD": 1.186
  },
  {
    "liga": "HolandaB",
    "equipo": "Jong Utrecht",
    "PGLL": 0.935,
    "FOL": 0.956,
    "FD": 1.021
  },
  {
    "liga": "HolandaB",
    "equipo": "Helmond Sport",
    "PGLL": 0.677,
    "FOL": 0.692,
    "FD": 1.021
  },
  {
    "liga": "HolandaB",
    "equipo": "MVV Maastricht",
    "PGLL": 0.562,
    "FOL": 0.675,
    "FD": 1.203
  },
  {
    "liga": "HolandaB",
    "equipo": "Vitesse Arnhem",
    "PGLL": 1.164,
    "FOL": 1.054,
    "FD": 0.906
  },
  {
    "liga": "HolandaB",
    "equipo": "Jong AZ",
    "PGLL": 0.803,
    "FOL": 1.005,
    "FD": 1.252
  },
  {
    "liga": "HolandaB",
    "equipo": "TOP Oss",
    "PGLL": 0.844,
    "FOL": 0.89,
    "FD": 1.054
  },
  {
    "liga": "HolandaB",
    "equipo": "Jong Ajax",
    "PGLL": 0.685,
    "FOL": 0.824,
    "FD": 1.203
  },
  {
    "liga": "Irlanda",
    "equipo": "Bohemians",
    "PGLL": 1.4,
    "FOL": 0.977,
    "FD": 0.692
  },
  {
    "liga": "Irlanda",
    "equipo": "St. Patricks",
    "PGLL": 2.067,
    "FOL": 1.442,
    "FD": 0.692
  },
  {
    "liga": "Irlanda",
    "equipo": "Shamrock Rovers",
    "PGLL": 2.077,
    "FOL": 1.256,
    "FD": 0.599
  },
  {
    "liga": "Irlanda",
    "equipo": "Derry City",
    "PGLL": 1.0,
    "FOL": 0.884,
    "FD": 0.876
  },
  {
    "liga": "Irlanda",
    "equipo": "Drogheda Utd",
    "PGLL": 0.792,
    "FOL": 0.943,
    "FD": 1.18
  },
  {
    "liga": "Irlanda",
    "equipo": "Shelbourne",
    "PGLL": 0.958,
    "FOL": 1.141,
    "FD": 1.18
  },
  {
    "liga": "Irlanda",
    "equipo": "Galway Utd",
    "PGLL": 0.826,
    "FOL": 0.943,
    "FD": 1.131
  },
  {
    "liga": "Irlanda",
    "equipo": "Dundalk",
    "PGLL": 1.038,
    "FOL": 1.256,
    "FD": 1.199
  },
  {
    "liga": "Irlanda",
    "equipo": "Sligo Rovers",
    "PGLL": 0.579,
    "FOL": 0.512,
    "FD": 0.876
  },
  {
    "liga": "Irlanda",
    "equipo": "Waterford",
    "PGLL": 0.406,
    "FOL": 0.645,
    "FD": 1.574
  },
  {
    "liga": "Italia",
    "equipo": "Inter Milan",
    "PGLL": 2.742,
    "FOL": 1.952,
    "FD": 0.712
  },
  {
    "liga": "Italia",
    "equipo": "AC Milan",
    "PGLL": 1.562,
    "FOL": 1.148,
    "FD": 0.735
  },
  {
    "liga": "Italia",
    "equipo": "Napoli",
    "PGLL": 1.5,
    "FOL": 1.24,
    "FD": 0.827
  },
  {
    "liga": "Italia",
    "equipo": "Como",
    "PGLL": 2.143,
    "FOL": 1.378,
    "FD": 0.643
  },
  {
    "liga": "Italia",
    "equipo": "AS Roma",
    "PGLL": 1.774,
    "FOL": 1.263,
    "FD": 0.712
  },
  {
    "liga": "Italia",
    "equipo": "Juventus",
    "PGLL": 1.967,
    "FOL": 1.355,
    "FD": 0.689
  },
  {
    "liga": "Italia",
    "equipo": "Atalanta",
    "PGLL": 1.471,
    "FOL": 1.148,
    "FD": 0.781
  },
  {
    "liga": "Italia",
    "equipo": "Bologna",
    "PGLL": 1.047,
    "FOL": 1.033,
    "FD": 0.987
  },
  {
    "liga": "Italia",
    "equipo": "Sassuolo",
    "PGLL": 0.957,
    "FOL": 1.01,
    "FD": 1.056
  },
  {
    "liga": "Italia",
    "equipo": "Lazio",
    "PGLL": 1.054,
    "FOL": 0.896,
    "FD": 0.85
  },
  {
    "liga": "Italia",
    "equipo": "Udinese",
    "PGLL": 0.978,
    "FOL": 1.033,
    "FD": 1.056
  },
  {
    "liga": "Italia",
    "equipo": "Parma",
    "PGLL": 0.6,
    "FOL": 0.62,
    "FD": 1.033
  },
  {
    "liga": "Italia",
    "equipo": "Genoa",
    "PGLL": 0.833,
    "FOL": 0.918,
    "FD": 1.102
  },
  {
    "liga": "Italia",
    "equipo": "Cagliari",
    "PGLL": 0.706,
    "FOL": 0.827,
    "FD": 1.171
  },
  {
    "liga": "Italia",
    "equipo": "Torino",
    "PGLL": 0.695,
    "FOL": 0.941,
    "FD": 1.355
  },
  {
    "liga": "Italia",
    "equipo": "Lecce",
    "PGLL": 0.5,
    "FOL": 0.551,
    "FD": 1.102
  },
  {
    "liga": "Italia",
    "equipo": "Fiorentina",
    "PGLL": 0.776,
    "FOL": 0.873,
    "FD": 1.125
  },
  {
    "liga": "Italia",
    "equipo": "Cremonese",
    "PGLL": 0.566,
    "FOL": 0.689,
    "FD": 1.217
  },
  {
    "liga": "Italia",
    "equipo": "Hellas Verona",
    "PGLL": 0.414,
    "FOL": 0.551,
    "FD": 1.332
  },
  {
    "liga": "Italia",
    "equipo": "Pisa",
    "PGLL": 0.379,
    "FOL": 0.574,
    "FD": 1.515
  },
  {
    "liga": "ItaliaB",
    "equipo": "Venezia",
    "PGLL": 2.419,
    "FOL": 1.594,
    "FD": 0.659
  },
  {
    "liga": "ItaliaB",
    "equipo": "Monza",
    "PGLL": 1.967,
    "FOL": 1.254,
    "FD": 0.638
  },
  {
    "liga": "ItaliaB",
    "equipo": "Frosinone",
    "PGLL": 2.088,
    "FOL": 1.509,
    "FD": 0.723
  },
  {
    "liga": "ItaliaB",
    "equipo": "Palermo",
    "PGLL": 1.968,
    "FOL": 1.296,
    "FD": 0.659
  },
  {
    "liga": "ItaliaB",
    "equipo": "Catanzaro",
    "PGLL": 1.25,
    "FOL": 1.275,
    "FD": 1.02
  },
  {
    "liga": "ItaliaB",
    "equipo": "Modena",
    "PGLL": 1.4,
    "FOL": 1.041,
    "FD": 0.744
  },
  {
    "liga": "ItaliaB",
    "equipo": "Juve Stabia",
    "PGLL": 0.977,
    "FOL": 0.914,
    "FD": 0.935
  },
  {
    "liga": "ItaliaB",
    "equipo": "Cesena",
    "PGLL": 0.808,
    "FOL": 0.893,
    "FD": 1.105
  },
  {
    "liga": "ItaliaB",
    "equipo": "Sudtirol",
    "PGLL": 0.787,
    "FOL": 0.786,
    "FD": 0.999
  },
  {
    "liga": "ItaliaB",
    "equipo": "Padova",
    "PGLL": 0.761,
    "FOL": 0.744,
    "FD": 0.978
  },
  {
    "liga": "ItaliaB",
    "equipo": "Avellino",
    "PGLL": 0.764,
    "FOL": 0.893,
    "FD": 1.169
  },
  {
    "liga": "ItaliaB",
    "equipo": "Carrarese",
    "PGLL": 0.92,
    "FOL": 0.978,
    "FD": 1.063
  },
  {
    "liga": "ItaliaB",
    "equipo": "Empoli",
    "PGLL": 0.865,
    "FOL": 0.956,
    "FD": 1.105
  },
  {
    "liga": "ItaliaB",
    "equipo": "Entella",
    "PGLL": 0.68,
    "FOL": 0.723,
    "FD": 1.063
  },
  {
    "liga": "ItaliaB",
    "equipo": "Mantova",
    "PGLL": 0.865,
    "FOL": 0.956,
    "FD": 1.105
  },
  {
    "liga": "ItaliaB",
    "equipo": "Sampdoria",
    "PGLL": 0.745,
    "FOL": 0.744,
    "FD": 0.999
  },
  {
    "liga": "ItaliaB",
    "equipo": "Reggiana",
    "PGLL": 0.625,
    "FOL": 0.744,
    "FD": 1.19
  },
  {
    "liga": "ItaliaB",
    "equipo": "Spezia",
    "PGLL": 0.724,
    "FOL": 0.893,
    "FD": 1.233
  },
  {
    "liga": "ItaliaB",
    "equipo": "Bari",
    "PGLL": 0.603,
    "FOL": 0.744,
    "FD": 1.233
  },
  {
    "liga": "ItaliaB",
    "equipo": "Pescara",
    "PGLL": 0.769,
    "FOL": 1.063,
    "FD": 1.382
  },
  {
    "liga": "Belgica ",
    "equipo": "Royale Union SG",
    "PGLL": 2.941,
    "FOL": 0.994,
    "FD": 0.433
  },
  {
    "liga": "Belgica ",
    "equipo": "Club Brugge",
    "PGLL": 1.639,
    "FOL": 0.936,
    "FD": 0.917
  },
  {
    "liga": "Belgica ",
    "equipo": "Sint-Truiden",
    "PGLL": 1.343,
    "FOL": 1.226,
    "FD": 0.892
  },
  {
    "liga": "Belgica ",
    "equipo": "Anderlecht",
    "PGLL": 1.103,
    "FOL": 1.446,
    "FD": 0.994
  },
  {
    "liga": "Belgica ",
    "equipo": "KV Mechelen",
    "PGLL": 1.054,
    "FOL": 1.152,
    "FD": 0.943
  },
  {
    "liga": "Belgica ",
    "equipo": "Gent",
    "PGLL": 1.14,
    "FOL": 1.054,
    "FD": 1.096
  },
  {
    "liga": "Belgica ",
    "equipo": "KRC Genk",
    "PGLL": 0.979,
    "FOL": 0.956,
    "FD": 1.197
  },
  {
    "liga": "Belgica ",
    "equipo": "Westerlo",
    "PGLL": 0.9,
    "FOL": 1.201,
    "FD": 1.019
  },
  {
    "liga": "Belgica ",
    "equipo": "Standard Liege",
    "PGLL": 0.771,
    "FOL": 1.128,
    "FD": 0.892
  },
  {
    "liga": "Belgica ",
    "equipo": "Charleroi",
    "PGLL": 0.905,
    "FOL": 0.882,
    "FD": 1.07
  },
  {
    "liga": "Belgica ",
    "equipo": "Antwerp",
    "PGLL": 0.969,
    "FOL": 0.662,
    "FD": 0.815
  },
  {
    "liga": "Belgica ",
    "equipo": "Zulte-Waregem",
    "PGLL": 0.809,
    "FOL": 0.931,
    "FD": 1.197
  },
  {
    "liga": "Belgica ",
    "equipo": "Cercle Brugge",
    "PGLL": 0.83,
    "FOL": 0.76,
    "FD": 1.197
  },
  {
    "liga": "Belgica ",
    "equipo": "OH Leuven",
    "PGLL": 0.744,
    "FOL": 0.931,
    "FD": 1.096
  },
  {
    "liga": "Belgica ",
    "equipo": "La Louviere",
    "PGLL": 0.811,
    "FOL": 0.956,
    "FD": 0.943
  },
  {
    "liga": "Belgica ",
    "equipo": "Dender",
    "PGLL": 0.471,
    "FOL": 0.784,
    "FD": 1.299
  },
  {
    "liga": "Inglaterra",
    "equipo": "Arsenal",
    "PGLL": 2.615,
    "FOL": 1.375,
    "FD": 0.526
  },
  {
    "liga": "Inglaterra",
    "equipo": "Manchester City",
    "PGLL": 2.344,
    "FOL": 1.517,
    "FD": 0.647
  },
  {
    "liga": "Inglaterra",
    "equipo": "Manchester Utd",
    "PGLL": 1.312,
    "FOL": 1.274,
    "FD": 0.971
  },
  {
    "liga": "Inglaterra",
    "equipo": "Aston Villa",
    "PGLL": 1.087,
    "FOL": 1.011,
    "FD": 0.93
  },
  {
    "liga": "Inglaterra",
    "equipo": "Chelsea",
    "PGLL": 1.122,
    "FOL": 1.112,
    "FD": 0.991
  },
  {
    "liga": "Inglaterra",
    "equipo": "Liverpool",
    "PGLL": 1.25,
    "FOL": 1.213,
    "FD": 0.971
  },
  {
    "liga": "Inglaterra",
    "equipo": "Brentford",
    "PGLL": 1.061,
    "FOL": 1.052,
    "FD": 0.991
  },
  {
    "liga": "Inglaterra",
    "equipo": "Everton",
    "PGLL": 1.0,
    "FOL": 0.93,
    "FD": 0.93
  },
  {
    "liga": "Inglaterra",
    "equipo": "Bournemouth",
    "PGLL": 1.077,
    "FOL": 1.132,
    "FD": 1.052
  },
  {
    "liga": "Inglaterra",
    "equipo": "Fulham",
    "PGLL": 0.88,
    "FOL": 0.89,
    "FD": 1.011
  },
  {
    "liga": "Inglaterra",
    "equipo": "Sunderland",
    "PGLL": 0.804,
    "FOL": 0.748,
    "FD": 0.93
  },
  {
    "liga": "Inglaterra",
    "equipo": "Newcastle Utd",
    "PGLL": 0.962,
    "FOL": 1.011,
    "FD": 1.052
  },
  {
    "liga": "Inglaterra",
    "equipo": "Crystal Palace",
    "PGLL": 0.809,
    "FOL": 0.768,
    "FD": 0.95
  },
  {
    "liga": "Inglaterra",
    "equipo": "Brighton",
    "PGLL": 1.238,
    "FOL": 1.052,
    "FD": 0.849
  },
  {
    "liga": "Inglaterra",
    "equipo": "Leeds Utd",
    "PGLL": 0.906,
    "FOL": 0.971,
    "FD": 1.072
  },
  {
    "liga": "Inglaterra",
    "equipo": "Tottenham",
    "PGLL": 0.836,
    "FOL": 0.93,
    "FD": 1.112
  },
  {
    "liga": "Inglaterra",
    "equipo": "Nottm Forest",
    "PGLL": 0.957,
    "FOL": 0.91,
    "FD": 0.95
  },
  {
    "liga": "Inglaterra",
    "equipo": "West Ham Utd",
    "PGLL": 0.677,
    "FOL": 0.849,
    "FD": 1.254
  },
  {
    "liga": "Inglaterra",
    "equipo": "Burnley",
    "PGLL": 0.507,
    "FOL": 0.748,
    "FD": 1.476
  },
  {
    "liga": "Inglaterra",
    "equipo": "Wolverhampton",
    "PGLL": 0.379,
    "FOL": 0.506,
    "FD": 1.335
  },
  {
    "liga": "InglaterraB",
    "equipo": "Coventry City",
    "PGLL": 2.045,
    "FOL": 1.587,
    "FD": 0.777
  },
  {
    "liga": "InglaterraB",
    "equipo": "Middlesbrough",
    "PGLL": 1.477,
    "FOL": 1.146,
    "FD": 0.777
  },
  {
    "liga": "InglaterraB",
    "equipo": "Millwall",
    "PGLL": 1.271,
    "FOL": 1.076,
    "FD": 0.847
  },
  {
    "liga": "InglaterraB",
    "equipo": "Ipswich Town",
    "PGLL": 1.667,
    "FOL": 1.354,
    "FD": 0.813
  },
  {
    "liga": "InglaterraB",
    "equipo": "Hull City",
    "PGLL": 1.063,
    "FOL": 1.182,
    "FD": 1.112
  },
  {
    "liga": "InglaterraB",
    "equipo": "Wrexham",
    "PGLL": 1.1,
    "FOL": 1.164,
    "FD": 1.059
  },
  {
    "liga": "InglaterraB",
    "equipo": "Southampton",
    "PGLL": 1.453,
    "FOL": 1.358,
    "FD": 0.935
  },
  {
    "liga": "InglaterraB",
    "equipo": "Derby County",
    "PGLL": 1.145,
    "FOL": 1.111,
    "FD": 0.971
  },
  {
    "liga": "InglaterraB",
    "equipo": "Watford",
    "PGLL": 0.929,
    "FOL": 0.917,
    "FD": 0.988
  },
  {
    "liga": "InglaterraB",
    "equipo": "Birmingham City",
    "PGLL": 1.0,
    "FOL": 0.952,
    "FD": 0.953
  },
  {
    "liga": "InglaterraB",
    "equipo": "Swansea City",
    "PGLL": 0.93,
    "FOL": 0.935,
    "FD": 1.006
  },
  {
    "liga": "InglaterraB",
    "equipo": "Bristol City",
    "PGLL": 0.982,
    "FOL": 0.988,
    "FD": 1.006
  },
  {
    "liga": "InglaterraB",
    "equipo": "Sheffield Utd",
    "PGLL": 1.0,
    "FOL": 1.093,
    "FD": 1.094
  },
  {
    "liga": "InglaterraB",
    "equipo": "Preston",
    "PGLL": 0.895,
    "FOL": 0.899,
    "FD": 1.006
  },
  {
    "liga": "InglaterraB",
    "equipo": "Norwich City",
    "PGLL": 1.151,
    "FOL": 1.076,
    "FD": 0.935
  },
  {
    "liga": "InglaterraB",
    "equipo": "Stoke City",
    "PGLL": 0.98,
    "FOL": 0.882,
    "FD": 0.9
  },
  {
    "liga": "InglaterraB",
    "equipo": "Charlton",
    "PGLL": 0.759,
    "FOL": 0.723,
    "FD": 0.953
  },
  {
    "liga": "InglaterraB",
    "equipo": "QP Rangers",
    "PGLL": 0.881,
    "FOL": 1.041,
    "FD": 1.183
  },
  {
    "liga": "InglaterraB",
    "equipo": "Portsmouth",
    "PGLL": 0.726,
    "FOL": 0.794,
    "FD": 1.094
  },
  {
    "liga": "InglaterraB",
    "equipo": "Blackburn",
    "PGLL": 0.764,
    "FOL": 0.724,
    "FD": 0.949
  },
  {
    "liga": "InglaterraB",
    "equipo": "Leicester City",
    "PGLL": 0.836,
    "FOL": 0.988,
    "FD": 1.183
  },
  {
    "liga": "InglaterraB",
    "equipo": "Oxford Utd",
    "PGLL": 0.732,
    "FOL": 0.723,
    "FD": 0.988
  },
  {
    "liga": "InglaterraB",
    "equipo": "West Brom",
    "PGLL": 0.839,
    "FOL": 0.829,
    "FD": 0.988
  },
  {
    "liga": "InglaterraB",
    "equipo": "Sheffield Wed",
    "PGLL": 0.31,
    "FOL": 0.459,
    "FD": 1.483
  },
  {
    "liga": "LigaOne",
    "equipo": "Lincoln City",
    "PGLL": 2.184,
    "FOL": 1.454,
    "FD": 0.665
  },
  {
    "liga": "LigaOne",
    "equipo": "Cardiff City",
    "PGLL": 1.841,
    "FOL": 1.419,
    "FD": 0.77
  },
  {
    "liga": "LigaOne",
    "equipo": "Bolton",
    "PGLL": 1.396,
    "FOL": 1.173,
    "FD": 0.84
  },
  {
    "liga": "LigaOne",
    "equipo": "Bradford",
    "PGLL": 1.122,
    "FOL": 0.963,
    "FD": 0.858
  },
  {
    "liga": "LigaOne",
    "equipo": "Stockport",
    "PGLL": 1.185,
    "FOL": 1.147,
    "FD": 0.967
  },
  {
    "liga": "LigaOne",
    "equipo": "Huddersfield",
    "PGLL": 1.15,
    "FOL": 1.209,
    "FD": 1.05
  },
  {
    "liga": "LigaOne",
    "equipo": "Reading",
    "PGLL": 1.086,
    "FOL": 1.103,
    "FD": 1.015
  },
  {
    "liga": "LigaOne",
    "equipo": "Stevenage",
    "PGLL": 1.044,
    "FOL": 0.823,
    "FD": 0.788
  },
  {
    "liga": "LigaOne",
    "equipo": "Wycombe",
    "PGLL": 1.212,
    "FOL": 1.103,
    "FD": 0.91
  },
  {
    "liga": "LigaOne",
    "equipo": "Plymouth",
    "PGLL": 1.167,
    "FOL": 1.226,
    "FD": 1.05
  },
  {
    "liga": "LigaOne",
    "equipo": "AFC Wimbledon",
    "PGLL": 0.735,
    "FOL": 0.876,
    "FD": 1.19
  },
  {
    "liga": "LigaOne",
    "equipo": "Luton Town",
    "PGLL": 1.189,
    "FOL": 1.103,
    "FD": 0.928
  },
  {
    "liga": "LigaOne",
    "equipo": "Barnsley",
    "PGLL": 0.956,
    "FOL": 1.165,
    "FD": 1.218
  },
  {
    "liga": "LigaOne",
    "equipo": "Peterborough",
    "PGLL": 1.0,
    "FOL": 1.111,
    "FD": 1.11
  },
  {
    "liga": "LigaOne",
    "equipo": "Mansfield",
    "PGLL": 1.178,
    "FOL": 0.95,
    "FD": 0.806
  },
  {
    "liga": "LigaOne",
    "equipo": "Exeter City",
    "PGLL": 0.862,
    "FOL": 0.876,
    "FD": 1.015
  },
  {
    "liga": "LigaOne",
    "equipo": "Burton Albion",
    "PGLL": 0.825,
    "FOL": 0.823,
    "FD": 0.998
  },
  {
    "liga": "LigaOne",
    "equipo": "Doncaster",
    "PGLL": 0.687,
    "FOL": 0.806,
    "FD": 1.173
  },
  {
    "liga": "LigaOne",
    "equipo": "Leyton Orient",
    "PGLL": 0.838,
    "FOL": 0.998,
    "FD": 1.19
  },
  {
    "liga": "LigaOne",
    "equipo": "Wigan Athletic",
    "PGLL": 0.875,
    "FOL": 0.858,
    "FD": 0.98
  },
  {
    "liga": "LigaOne",
    "equipo": "Blackpool",
    "PGLL": 0.8,
    "FOL": 0.911,
    "FD": 1.138
  },
  {
    "liga": "LigaOne",
    "equipo": "Rotherham",
    "PGLL": 0.567,
    "FOL": 0.666,
    "FD": 1.173
  },
  {
    "liga": "LigaOne",
    "equipo": "Northampton",
    "PGLL": 0.554,
    "FOL": 0.645,
    "FD": 1.164
  },
  {
    "liga": "LigaOne",
    "equipo": "Port Vale",
    "PGLL": 0.589,
    "FOL": 0.591,
    "FD": 1.003
  },
  {
    "liga": "Serbia",
    "equipo": "Red Star",
    "PGLL": 1.216,
    "FOL": 1.063,
    "FD": 0.803
  },
  {
    "liga": "Serbia",
    "equipo": "Partizan",
    "PGLL": 1.489,
    "FOL": 1.537,
    "FD": 0.949
  },
  {
    "liga": "Serbia",
    "equipo": "Vojvodina",
    "PGLL": 1.794,
    "FOL": 1.4,
    "FD": 0.717
  },
  {
    "liga": "Serbia",
    "equipo": "Novi Pazar",
    "PGLL": 0.898,
    "FOL": 1.01,
    "FD": 1.033
  },
  {
    "liga": "Serbia",
    "equipo": "Z. Pancevo",
    "PGLL": 1.371,
    "FOL": 1.101,
    "FD": 0.738
  },
  {
    "liga": "Serbia",
    "equipo": "R. Surdulica",
    "PGLL": 1.023,
    "FOL": 1.01,
    "FD": 0.906
  },
  {
    "liga": "Serbia",
    "equipo": "OFK Beograd",
    "PGLL": 1.045,
    "FOL": 1.055,
    "FD": 0.927
  },
  {
    "liga": "Serbia",
    "equipo": "Cukaricki",
    "PGLL": 0.94,
    "FOL": 1.078,
    "FD": 1.054
  },
  {
    "liga": "Serbia",
    "equipo": "Radnicki 1923",
    "PGLL": 0.975,
    "FOL": 0.895,
    "FD": 0.843
  },
  {
    "liga": "Serbia",
    "equipo": "Radnicki Nis",
    "PGLL": 0.894,
    "FOL": 0.964,
    "FD": 0.991
  },
  {
    "liga": "Serbia",
    "equipo": "IMT N. Beograd",
    "PGLL": 0.78,
    "FOL": 0.895,
    "FD": 1.054
  },
  {
    "liga": "Serbia",
    "equipo": "Backa Topola",
    "PGLL": 1.024,
    "FOL": 0.987,
    "FD": 0.885
  },
  {
    "liga": "Serbia",
    "equipo": "Javor Ivanjica",
    "PGLL": 0.771,
    "FOL": 0.849,
    "FD": 1.012
  },
  {
    "liga": "Serbia",
    "equipo": "Mladost Lucani",
    "PGLL": 0.56,
    "FOL": 0.642,
    "FD": 1.054
  },
  {
    "liga": "Serbia",
    "equipo": "S. Subotica",
    "PGLL": 0.522,
    "FOL": 0.826,
    "FD": 1.454
  },
  {
    "liga": "Serbia",
    "equipo": "Napredak",
    "PGLL": 0.4,
    "FOL": 0.688,
    "FD": 1.581
  },
  {
    "liga": "Noruega",
    "equipo": "Aalesund",
    "PGLL": 0.5,
    "FOL": 0.722,
    "FD": 1.425
  },
  {
    "liga": "Noruega",
    "equipo": "Bodo/Glimt",
    "PGLL": 2.0,
    "FOL": 1.444,
    "FD": 0.712
  },
  {
    "liga": "Noruega",
    "equipo": "Brann",
    "PGLL": 1.583,
    "FOL": 1.714,
    "FD": 1.069
  },
  {
    "liga": "Noruega",
    "equipo": "Fredrikstad",
    "PGLL": 0.588,
    "FOL": 0.902,
    "FD": 1.514
  },
  {
    "liga": "Noruega",
    "equipo": "HamKam",
    "PGLL": 1.0,
    "FOL": 1.238,
    "FD": 1.221
  },
  {
    "liga": "Noruega",
    "equipo": "KFUM Oslo",
    "PGLL": 0.6,
    "FOL": 0.812,
    "FD": 1.336
  },
  {
    "liga": "Noruega",
    "equipo": "Kristiansund",
    "PGLL": 0.636,
    "FOL": 0.722,
    "FD": 1.119
  },
  {
    "liga": "Noruega",
    "equipo": "Lillestrom",
    "PGLL": 2.167,
    "FOL": 1.173,
    "FD": 0.534
  },
  {
    "liga": "Noruega",
    "equipo": "Molde",
    "PGLL": 1.4,
    "FOL": 1.263,
    "FD": 0.89
  },
  {
    "liga": "Noruega",
    "equipo": "Rosenborg",
    "PGLL": 0.455,
    "FOL": 0.451,
    "FD": 0.979
  },
  {
    "liga": "Noruega",
    "equipo": "Sandefjord",
    "PGLL": 1.0,
    "FOL": 0.632,
    "FD": 0.623
  },
  {
    "liga": "Noruega",
    "equipo": "Sarpsborg 08",
    "PGLL": 0.636,
    "FOL": 0.632,
    "FD": 0.979
  },
  {
    "liga": "Noruega",
    "equipo": "Start",
    "PGLL": 0.375,
    "FOL": 0.541,
    "FD": 1.425
  },
  {
    "liga": "Noruega",
    "equipo": "Tromso",
    "PGLL": 2.125,
    "FOL": 1.227,
    "FD": 0.57
  },
  {
    "liga": "Noruega",
    "equipo": "Valerenga",
    "PGLL": 0.583,
    "FOL": 0.632,
    "FD": 1.069
  },
  {
    "liga": "Noruega",
    "equipo": "Viking",
    "PGLL": 3.5,
    "FOL": 1.895,
    "FD": 0.534
  },
  {
    "liga": "Escocia",
    "equipo": "Hearts",
    "PGLL": 2.129,
    "FOL": 1.298,
    "FD": 0.61
  },
  {
    "liga": "Escocia",
    "equipo": "Celtic",
    "PGLL": 1.75,
    "FOL": 1.377,
    "FD": 0.787
  },
  {
    "liga": "Escocia",
    "equipo": "Rangers",
    "PGLL": 1.732,
    "FOL": 1.397,
    "FD": 0.807
  },
  {
    "liga": "Escocia",
    "equipo": "Motherwell",
    "PGLL": 1.611,
    "FOL": 1.141,
    "FD": 0.708
  },
  {
    "liga": "Escocia",
    "equipo": "Hibernian",
    "PGLL": 1.349,
    "FOL": 1.141,
    "FD": 0.846
  },
  {
    "liga": "Escocia",
    "equipo": "Falkirk",
    "PGLL": 0.842,
    "FOL": 0.944,
    "FD": 1.121
  },
  {
    "liga": "Escocia",
    "equipo": "Dundee Utd",
    "PGLL": 0.814,
    "FOL": 0.944,
    "FD": 1.161
  },
  {
    "liga": "Escocia",
    "equipo": "Dundee FC",
    "PGLL": 0.661,
    "FOL": 0.767,
    "FD": 1.161
  },
  {
    "liga": "Escocia",
    "equipo": "Aberdeen",
    "PGLL": 0.731,
    "FOL": 0.748,
    "FD": 1.023
  },
  {
    "liga": "Escocia",
    "equipo": "St. Mirren",
    "PGLL": 0.537,
    "FOL": 0.57,
    "FD": 1.062
  },
  {
    "liga": "Escocia",
    "equipo": "Kilmarnock",
    "PGLL": 0.687,
    "FOL": 0.905,
    "FD": 1.318
  },
  {
    "liga": "Escocia",
    "equipo": "Livingston",
    "PGLL": 0.549,
    "FOL": 0.767,
    "FD": 1.397
  },
  {
    "liga": "Bosnia",
    "equipo": "Borac Banja L.",
    "PGLL": 3.65,
    "FOL": 2.068,
    "FD": 0.567
  },
  {
    "liga": "Bosnia",
    "equipo": "Zrinjski Mostar",
    "PGLL": 1.87,
    "FOL": 1.218,
    "FD": 0.652
  },
  {
    "liga": "Bosnia",
    "equipo": "FK Sarajevo",
    "PGLL": 1.455,
    "FOL": 1.36,
    "FD": 0.935
  },
  {
    "liga": "Bosnia",
    "equipo": "Velez Mostar",
    "PGLL": 1.111,
    "FOL": 0.85,
    "FD": 0.765
  },
  {
    "liga": "Bosnia",
    "equipo": "Siroki Brijeg",
    "PGLL": 0.659,
    "FOL": 0.822,
    "FD": 1.246
  },
  {
    "liga": "Bosnia",
    "equipo": "Zeljeznicar",
    "PGLL": 0.97,
    "FOL": 0.907,
    "FD": 0.935
  },
  {
    "liga": "Bosnia",
    "equipo": "R. Bijeljina",
    "PGLL": 0.659,
    "FOL": 0.765,
    "FD": 1.161
  },
  {
    "liga": "Bosnia",
    "equipo": "Posusje",
    "PGLL": 0.658,
    "FOL": 0.708,
    "FD": 1.076
  },
  {
    "liga": "Bosnia",
    "equipo": "Rudar Prijedor",
    "PGLL": 0.562,
    "FOL": 0.765,
    "FD": 1.36
  },
  {
    "liga": "Bosnia",
    "equipo": "Sloga Doboj",
    "PGLL": 0.413,
    "FOL": 0.538,
    "FD": 1.303
  },
  {
    "liga": "Checa",
    "equipo": "Slavia Prague",
    "PGLL": 2.773,
    "FOL": 1.582,
    "FD": 0.591
  },
  {
    "liga": "Checa",
    "equipo": "Sparta Prague",
    "PGLL": 1.935,
    "FOL": 1.556,
    "FD": 0.833
  },
  {
    "liga": "Checa",
    "equipo": "Viktoria Plzen",
    "PGLL": 1.441,
    "FOL": 1.271,
    "FD": 0.914
  },
  {
    "liga": "Checa",
    "equipo": "Jablonec",
    "PGLL": 1.29,
    "FOL": 1.037,
    "FD": 0.833
  },
  {
    "liga": "Checa",
    "equipo": "Sigma Olomouc",
    "PGLL": 1.031,
    "FOL": 0.856,
    "FD": 0.86
  },
  {
    "liga": "Checa",
    "equipo": "Slovan Liberec",
    "PGLL": 1.414,
    "FOL": 1.063,
    "FD": 0.78
  },
  {
    "liga": "Checa",
    "equipo": "Hradec Kralove",
    "PGLL": 1.235,
    "FOL": 1.089,
    "FD": 0.914
  },
  {
    "liga": "Checa",
    "equipo": "Karvina",
    "PGLL": 0.896,
    "FOL": 1.115,
    "FD": 1.29
  },
  {
    "liga": "Checa",
    "equipo": "Zlin",
    "PGLL": 0.8,
    "FOL": 0.933,
    "FD": 1.21
  },
  {
    "liga": "Checa",
    "equipo": "Pardubice",
    "PGLL": 0.8,
    "FOL": 0.933,
    "FD": 1.21
  },
  {
    "liga": "Checa",
    "equipo": "Teplice",
    "PGLL": 0.784,
    "FOL": 0.752,
    "FD": 0.995
  },
  {
    "liga": "Checa",
    "equipo": "Bohemians",
    "PGLL": 1.4,
    "FOL": 0.987,
    "FD": 0.731
  },
  {
    "liga": "Checa",
    "equipo": "Mlada Boleslav",
    "PGLL": 0.788,
    "FOL": 1.063,
    "FD": 1.398
  },
  {
    "liga": "Checa",
    "equipo": "Slovacko",
    "PGLL": 0.581,
    "FOL": 0.648,
    "FD": 1.156
  },
  {
    "liga": "Checa",
    "equipo": "Banik Ostrava",
    "PGLL": 0.568,
    "FOL": 0.648,
    "FD": 1.183
  },
  {
    "liga": "Checa",
    "equipo": "Dukla Praha",
    "PGLL": 0.439,
    "FOL": 0.467,
    "FD": 1.102
  },
  {
    "liga": "Chipre",
    "equipo": "Omonia Nicosia",
    "PGLL": 3.706,
    "FOL": 1.869,
    "FD": 0.504
  },
  {
    "liga": "Chipre",
    "equipo": "Apollon",
    "PGLL": 1.636,
    "FOL": 1.068,
    "FD": 0.653
  },
  {
    "liga": "Chipre",
    "equipo": "AEK Larnaca",
    "PGLL": 2.227,
    "FOL": 1.453,
    "FD": 0.653
  },
  {
    "liga": "Chipre",
    "equipo": "Paphos",
    "PGLL": 2.208,
    "FOL": 1.572,
    "FD": 0.712
  },
  {
    "liga": "Chipre",
    "equipo": "Aris",
    "PGLL": 1.846,
    "FOL": 1.424,
    "FD": 0.771
  },
  {
    "liga": "Chipre",
    "equipo": "APOEL Nicosia",
    "PGLL": 1.667,
    "FOL": 1.335,
    "FD": 0.801
  },
  {
    "liga": "Chipre",
    "equipo": "AEL Limassol",
    "PGLL": 0.816,
    "FOL": 0.919,
    "FD": 1.127
  },
  {
    "liga": "Chipre",
    "equipo": "O. Aradippou",
    "PGLL": 0.742,
    "FOL": 0.682,
    "FD": 0.919
  },
  {
    "liga": "Chipre",
    "equipo": "Anorthosis",
    "PGLL": 0.697,
    "FOL": 0.682,
    "FD": 0.979
  },
  {
    "liga": "Chipre",
    "equipo": "Olympiakos N.",
    "PGLL": 0.595,
    "FOL": 0.653,
    "FD": 1.097
  },
  {
    "liga": "Chipre",
    "equipo": "A. Chloraka",
    "PGLL": 0.479,
    "FOL": 0.682,
    "FD": 1.424
  },
  {
    "liga": "Chipre",
    "equipo": "D. Ypsonas",
    "PGLL": 0.722,
    "FOL": 0.771,
    "FD": 1.068
  },
  {
    "liga": "Chipre",
    "equipo": "Achnas",
    "PGLL": 0.568,
    "FOL": 0.742,
    "FD": 1.305
  },
  {
    "liga": "Chipre",
    "equipo": "Enosis P.",
    "PGLL": 0.075,
    "FOL": 0.148,
    "FD": 1.987
  },
  {
    "liga": "Gracia",
    "equipo": "AEK Athens",
    "PGLL": 2.882,
    "FOL": 1.397,
    "FD": 0.515
  },
  {
    "liga": "Gracia",
    "equipo": "PAOK",
    "PGLL": 3.059,
    "FOL": 1.483,
    "FD": 0.515
  },
  {
    "liga": "Gracia",
    "equipo": "Olympiakos",
    "PGLL": 4.091,
    "FOL": 1.283,
    "FD": 0.333
  },
  {
    "liga": "Gracia",
    "equipo": "Panathinaikos",
    "PGLL": 1.692,
    "FOL": 1.255,
    "FD": 0.788
  },
  {
    "liga": "Gracia",
    "equipo": "Levadiakos",
    "PGLL": 1.378,
    "FOL": 1.454,
    "FD": 1.121
  },
  {
    "liga": "Gracia",
    "equipo": "Aris",
    "PGLL": 1.846,
    "FOL": 1.369,
    "FD": 0.788
  },
  {
    "liga": "Gracia",
    "equipo": "OFI Crete",
    "PGLL": 0.756,
    "FOL": 0.969,
    "FD": 1.364
  },
  {
    "liga": "Gracia",
    "equipo": "Atromitos",
    "PGLL": 0.867,
    "FOL": 0.741,
    "FD": 0.909
  },
  {
    "liga": "Gracia",
    "equipo": "Volos",
    "PGLL": 0.684,
    "FOL": 0.741,
    "FD": 1.152
  },
  {
    "liga": "Gracia",
    "equipo": "Kifisia",
    "PGLL": 0.762,
    "FOL": 0.912,
    "FD": 1.273
  },
  {
    "liga": "Gracia",
    "equipo": "Panetolikos",
    "PGLL": 0.632,
    "FOL": 0.684,
    "FD": 1.152
  },
  {
    "liga": "Gracia",
    "equipo": "Larissa",
    "PGLL": 0.564,
    "FOL": 0.627,
    "FD": 1.182
  },
  {
    "liga": "Gracia",
    "equipo": "Asteras T.",
    "PGLL": 0.537,
    "FOL": 0.627,
    "FD": 1.242
  },
  {
    "liga": "Gracia",
    "equipo": "Panserraikos",
    "PGLL": 0.291,
    "FOL": 0.456,
    "FD": 1.667
  },
  {
    "liga": "Portugal",
    "equipo": "FC Porto",
    "PGLL": 3.611,
    "FOL": 1.463,
    "FD": 0.405
  },
  {
    "liga": "Portugal",
    "equipo": "Sporting CP",
    "PGLL": 3.583,
    "FOL": 1.935,
    "FD": 0.54
  },
  {
    "liga": "Portugal",
    "equipo": "Benfica",
    "PGLL": 2.958,
    "FOL": 1.598,
    "FD": 0.54
  },
  {
    "liga": "Portugal",
    "equipo": "Sporting Braga",
    "PGLL": 1.824,
    "FOL": 1.395,
    "FD": 0.765
  },
  {
    "liga": "Portugal",
    "equipo": "Gil Vicente",
    "PGLL": 1.343,
    "FOL": 1.058,
    "FD": 0.788
  },
  {
    "liga": "Portugal",
    "equipo": "Famalicao",
    "PGLL": 1.414,
    "FOL": 0.923,
    "FD": 0.653
  },
  {
    "liga": "Portugal",
    "equipo": "Moreirense",
    "PGLL": 0.755,
    "FOL": 0.832,
    "FD": 1.102
  },
  {
    "liga": "Portugal",
    "equipo": "Estoril",
    "PGLL": 0.981,
    "FOL": 1.193,
    "FD": 1.215
  },
  {
    "liga": "Portugal",
    "equipo": "Guimaraes",
    "PGLL": 0.796,
    "FOL": 0.878,
    "FD": 1.102
  },
  {
    "liga": "Portugal",
    "equipo": "Alverca",
    "PGLL": 0.686,
    "FOL": 0.788,
    "FD": 1.148
  },
  {
    "liga": "Portugal",
    "equipo": "Arouca",
    "PGLL": 0.698,
    "FOL": 0.99,
    "FD": 1.418
  },
  {
    "liga": "Portugal",
    "equipo": "Estrela Amadora",
    "PGLL": 0.667,
    "FOL": 0.81,
    "FD": 1.215
  },
  {
    "liga": "Portugal",
    "equipo": "Casa Pia",
    "PGLL": 0.536,
    "FOL": 0.675,
    "FD": 1.26
  },
  {
    "liga": "Portugal",
    "equipo": "Rio Ave",
    "PGLL": 0.607,
    "FOL": 0.765,
    "FD": 1.26
  },
  {
    "liga": "Portugal",
    "equipo": "Nacional",
    "PGLL": 0.778,
    "FOL": 0.788,
    "FD": 1.012
  },
  {
    "liga": "Portugal",
    "equipo": "Santa Clara",
    "PGLL": 0.8,
    "FOL": 0.72,
    "FD": 0.9
  },
  {
    "liga": "Portugal",
    "equipo": "Tondela",
    "PGLL": 0.5,
    "FOL": 0.585,
    "FD": 1.17
  },
  {
    "liga": "Portugal",
    "equipo": "AVS",
    "PGLL": 0.403,
    "FOL": 0.608,
    "FD": 1.508
  },
  {
    "liga": "PortugalB",
    "equipo": "Maritimo",
    "PGLL": 1.885,
    "FOL": 1.223,
    "FD": 0.649
  },
  {
    "liga": "PortugalB",
    "equipo": "Academico Viseu",
    "PGLL": 1.758,
    "FOL": 1.448,
    "FD": 0.824
  },
  {
    "liga": "PortugalB",
    "equipo": "Torreense",
    "PGLL": 1.273,
    "FOL": 1.049,
    "FD": 0.824
  },
  {
    "liga": "PortugalB",
    "equipo": "Sporting CP B",
    "PGLL": 1.206,
    "FOL": 1.024,
    "FD": 0.849
  },
  {
    "liga": "PortugalB",
    "equipo": "Uniao de Leiria",
    "PGLL": 1.136,
    "FOL": 1.248,
    "FD": 1.098
  },
  {
    "liga": "PortugalB",
    "equipo": "Vizela",
    "PGLL": 1.083,
    "FOL": 0.974,
    "FD": 0.899
  },
  {
    "liga": "PortugalB",
    "equipo": "FC Porto B",
    "PGLL": 0.929,
    "FOL": 0.974,
    "FD": 1.049
  },
  {
    "liga": "PortugalB",
    "equipo": "Lusitania FC",
    "PGLL": 0.86,
    "FOL": 1.074,
    "FD": 1.248
  },
  {
    "liga": "PortugalB",
    "equipo": "Benfica B",
    "PGLL": 1.024,
    "FOL": 1.074,
    "FD": 1.049
  },
  {
    "liga": "PortugalB",
    "equipo": "Chaves",
    "PGLL": 1.0,
    "FOL": 0.974,
    "FD": 0.974
  },
  {
    "liga": "PortugalB",
    "equipo": "Feirense",
    "PGLL": 0.921,
    "FOL": 0.874,
    "FD": 0.949
  },
  {
    "liga": "PortugalB",
    "equipo": "Leixoes",
    "PGLL": 0.815,
    "FOL": 1.098,
    "FD": 1.348
  },
  {
    "liga": "PortugalB",
    "equipo": "Penafiel",
    "PGLL": 0.973,
    "FOL": 0.899,
    "FD": 0.924
  },
  {
    "liga": "PortugalB",
    "equipo": "Felgueiras",
    "PGLL": 0.784,
    "FOL": 0.724,
    "FD": 0.924
  },
  {
    "liga": "PortugalB",
    "equipo": "Farense",
    "PGLL": 0.861,
    "FOL": 0.774,
    "FD": 0.899
  },
  {
    "liga": "PortugalB",
    "equipo": "Pacos Ferreira",
    "PGLL": 0.681,
    "FOL": 0.799,
    "FD": 1.173
  },
  {
    "liga": "PortugalB",
    "equipo": "Oliveirense",
    "PGLL": 0.75,
    "FOL": 0.824,
    "FD": 1.098
  },
  {
    "liga": "PortugalB",
    "equipo": "Portimonense",
    "PGLL": 0.776,
    "FOL": 0.949,
    "FD": 1.223
  },
  {
    "liga": "Suiza",
    "equipo": "Thun",
    "PGLL": 1.767,
    "FOL": 1.301,
    "FD": 0.739
  },
  {
    "liga": "Suiza",
    "equipo": "St. Gallen",
    "PGLL": 1.511,
    "FOL": 1.164,
    "FD": 0.773
  },
  {
    "liga": "Suiza",
    "equipo": "Lugano",
    "PGLL": 1.325,
    "FOL": 0.907,
    "FD": 0.687
  },
  {
    "liga": "Suiza",
    "equipo": "FC Basel",
    "PGLL": 1.059,
    "FOL": 0.924,
    "FD": 0.876
  },
  {
    "liga": "Suiza",
    "equipo": "Sion",
    "PGLL": 1.657,
    "FOL": 0.993,
    "FD": 0.601
  },
  {
    "liga": "Suiza",
    "equipo": "BSC Young Boys",
    "PGLL": 1.095,
    "FOL": 1.181,
    "FD": 1.083
  },
  {
    "liga": "Suiza",
    "equipo": "Luzern",
    "PGLL": 1.106,
    "FOL": 1.216,
    "FD": 1.104
  },
  {
    "liga": "Suiza",
    "equipo": "Lausanne Sport",
    "PGLL": 0.812,
    "FOL": 0.866,
    "FD": 1.07
  },
  {
    "liga": "Suiza",
    "equipo": "Servette",
    "PGLL": 1.095,
    "FOL": 1.149,
    "FD": 1.053
  },
  {
    "liga": "Suiza",
    "equipo": "FC Zurich",
    "PGLL": 0.7,
    "FOL": 0.816,
    "FD": 1.17
  },
  {
    "liga": "Suiza",
    "equipo": "Grasshopper",
    "PGLL": 0.616,
    "FOL": 0.749,
    "FD": 1.221
  },
  {
    "liga": "Suiza",
    "equipo": "Winterthur",
    "PGLL": 0.454,
    "FOL": 0.733,
    "FD": 1.622
  },
  {
    "liga": "Suecia",
    "equipo": "AIK",
    "PGLL": 0.818,
    "FOL": 0.847,
    "FD": 1.035
  },
  {
    "liga": "Suecia",
    "equipo": "Brommapojkarna",
    "PGLL": 0.769,
    "FOL": 0.941,
    "FD": 1.224
  },
  {
    "liga": "Suecia",
    "equipo": "Degerfors",
    "PGLL": 0.727,
    "FOL": 0.753,
    "FD": 1.035
  },
  {
    "liga": "Suecia",
    "equipo": "Djurgarden",
    "PGLL": 2.0,
    "FOL": 1.506,
    "FD": 0.753
  },
  {
    "liga": "Suecia",
    "equipo": "Elfsborg",
    "PGLL": 1.833,
    "FOL": 1.035,
    "FD": 0.565
  },
  {
    "liga": "Suecia",
    "equipo": "GAIS",
    "PGLL": 1.125,
    "FOL": 0.847,
    "FD": 0.753
  },
  {
    "liga": "Suecia",
    "equipo": "Hacken",
    "PGLL": 1.364,
    "FOL": 1.412,
    "FD": 1.035
  },
  {
    "liga": "Suecia",
    "equipo": "Halmstad",
    "PGLL": 0.286,
    "FOL": 0.376,
    "FD": 1.318
  },
  {
    "liga": "Suecia",
    "equipo": "Hammarby",
    "PGLL": 3.4,
    "FOL": 1.6,
    "FD": 0.471
  },
  {
    "liga": "Suecia",
    "equipo": "IFK Goteborg",
    "PGLL": 0.267,
    "FOL": 0.376,
    "FD": 1.412
  },
  {
    "liga": "Suecia",
    "equipo": "Kalmar",
    "PGLL": 0.9,
    "FOL": 0.847,
    "FD": 0.941
  },
  {
    "liga": "Suecia",
    "equipo": "Malmo FF",
    "PGLL": 1.091,
    "FOL": 1.129,
    "FD": 1.035
  },
  {
    "liga": "Suecia",
    "equipo": "Mjallby",
    "PGLL": 1.5,
    "FOL": 1.129,
    "FD": 0.753
  },
  {
    "liga": "Suecia",
    "equipo": "Orgryte",
    "PGLL": 0.333,
    "FOL": 0.565,
    "FD": 1.694
  },
  {
    "liga": "Suecia",
    "equipo": "Sirius",
    "PGLL": 2.714,
    "FOL": 1.788,
    "FD": 0.659
  },
  {
    "liga": "Suecia",
    "equipo": "Vasteras",
    "PGLL": 0.643,
    "FOL": 0.847,
    "FD": 1.318
  },
  {
    "liga": "LigaDinamarca",
    "equipo": "AGF Aarhus",
    "PGLL": 1.867,
    "FOL": 1.187,
    "FD": 0.636
  },
  {
    "liga": "LigaDinamarca",
    "equipo": "FC Midtjylland",
    "PGLL": 2.121,
    "FOL": 1.484,
    "FD": 0.7
  },
  {
    "liga": "LigaDinamarca",
    "equipo": "SonderjyskE",
    "PGLL": 0.956,
    "FOL": 0.912,
    "FD": 0.954
  },
  {
    "liga": "LigaDinamarca",
    "equipo": "Viborg",
    "PGLL": 1.044,
    "FOL": 0.996,
    "FD": 0.954
  },
  {
    "liga": "LigaDinamarca",
    "equipo": "Brondby IF",
    "PGLL": 1.242,
    "FOL": 0.869,
    "FD": 0.7
  },
  {
    "liga": "LigaDinamarca",
    "equipo": "Nordsjaelland",
    "PGLL": 1.044,
    "FOL": 0.996,
    "FD": 0.954
  },
  {
    "liga": "LigaDinamarca",
    "equipo": "Odense BK",
    "PGLL": 0.864,
    "FOL": 1.081,
    "FD": 1.251
  },
  {
    "liga": "LigaDinamarca",
    "equipo": "FC Kobenhavn",
    "PGLL": 1.409,
    "FOL": 1.314,
    "FD": 0.933
  },
  {
    "liga": "LigaDinamarca",
    "equipo": "Randers FC",
    "PGLL": 0.786,
    "FOL": 0.7,
    "FD": 0.89
  },
  {
    "liga": "LigaDinamarca",
    "equipo": "Fredericia",
    "PGLL": 0.612,
    "FOL": 0.869,
    "FD": 1.42
  },
  {
    "liga": "LigaDinamarca",
    "equipo": "Silkeborg",
    "PGLL": 0.635,
    "FOL": 0.848,
    "FD": 1.336
  },
  {
    "liga": "LigaDinamarca",
    "equipo": "Vejle BK",
    "PGLL": 0.583,
    "FOL": 0.742,
    "FD": 1.272
  },
  {
    "liga": "Australia",
    "equipo": "Newcastle Jets",
    "PGLL": 1.308,
    "FOL": 1.557,
    "FD": 1.096
  },
  {
    "liga": "Australia",
    "equipo": "Auckland",
    "PGLL": 1.481,
    "FOL": 1.221,
    "FD": 0.759
  },
  {
    "liga": "Australia",
    "equipo": "Melbourne V.",
    "PGLL": 1.273,
    "FOL": 1.282,
    "FD": 0.927
  },
  {
    "liga": "Australia",
    "equipo": "Adelaide Utd",
    "PGLL": 1.257,
    "FOL": 1.344,
    "FD": 0.984
  },
  {
    "liga": "Australia",
    "equipo": "Sydney FC",
    "PGLL": 1.348,
    "FOL": 0.947,
    "FD": 0.646
  },
  {
    "liga": "Australia",
    "equipo": "Macarthur FC",
    "PGLL": 0.75,
    "FOL": 1.008,
    "FD": 1.237
  },
  {
    "liga": "Australia",
    "equipo": "Central Coast",
    "PGLL": 0.921,
    "FOL": 1.069,
    "FD": 1.068
  },
  {
    "liga": "Australia",
    "equipo": "Wellington",
    "PGLL": 0.818,
    "FOL": 1.099,
    "FD": 1.237
  },
  {
    "liga": "Australia",
    "equipo": "Melbourne City",
    "PGLL": 1.032,
    "FOL": 0.977,
    "FD": 0.871
  },
  {
    "liga": "Australia",
    "equipo": "Brisbane Roar",
    "PGLL": 0.765,
    "FOL": 0.794,
    "FD": 0.956
  },
  {
    "liga": "Australia",
    "equipo": "Perth Glory",
    "PGLL": 0.789,
    "FOL": 0.916,
    "FD": 1.068
  },
  {
    "liga": "Australia",
    "equipo": "WS Wanderers",
    "PGLL": 0.659,
    "FOL": 0.824,
    "FD": 1.152
  }
]

  // ✅ Buscar equipo
  function obtenerEquipo(nombre) {
    return equipos.find(e => e.equipo === nombre);
  }

  // ✅ Cargar ligas
  function cargarLigas() {
    const selectLiga = document.getElementById("liga");
    selectLiga.innerHTML = "";

    const ligas = [...new Set(equipos.map(e => e.liga))];

    ligas.forEach(l => {
      const option = document.createElement("option");
      option.value = l;
      option.textContent = l;
      selectLiga.appendChild(option);
    });

    cargarEquiposPorLiga();
  }

  // ✅ Cargar equipos por liga
  function cargarEquiposPorLiga() {

    const ligaSeleccionada = document.getElementById("liga").value;

    const local = document.getElementById("equipoLocal");
    const visitante = document.getElementById("equipoVisitante");

    local.innerHTML = "";
    visitante.innerHTML = "";

    const equiposLiga = equipos.filter(e => e.liga === ligaSeleccionada);

    equiposLiga.forEach(eq => {

      const option1 = document.createElement("option");
      option1.value = eq.equipo;
      option1.textContent = eq.equipo;

      const option2 = option1.cloneNode(true);

      local.appendChild(option1);
      visitante.appendChild(option2);
    });

    evitarEquiposIguales();
    llenarDatos();
  }

  // ✅ Evitar mismo equipo
  function evitarEquiposIguales() {

    const local = document.getElementById("equipoLocal").value;
    const visitante = document.getElementById("equipoVisitante");

    if (visitante.value === local && visitante.options.length > 1) {
      visitante.selectedIndex = 1;
    }
  }

  // ✅ Autollenado de datos
  function llenarDatos() {

    const eqLocal = obtenerEquipo(document.getElementById("equipoLocal").value);
    const eqVisitante = obtenerEquipo(document.getElementById("equipoVisitante").value);

    if (eqLocal) {
      document.getElementById("fol").value = eqLocal.FOL;
      document.getElementById("fdl").value = eqLocal.FD;
      document.getElementById("pgll").value = eqLocal.PGLL;
    }

    if (eqVisitante) {
      document.getElementById("fov").value = eqVisitante.FOL;
      document.getElementById("fdv").value = eqVisitante.FD;
      document.getElementById("pgvl").value = eqVisitante.PGLL;
    }
  }

  // ✅ Eventos
  document.getElementById("liga").addEventListener("change", cargarEquiposPorLiga);

  document.getElementById("equipoLocal").addEventListener("change", function () {
    evitarEquiposIguales();
    llenarDatos();
  });

  document.getElementById("equipoVisitante").addEventListener("change", llenarDatos);

  // ✅ Inicializar
  cargarLigas();
});


// ✅ VALUE
function calcularValue(prob, cuota) {
  if (!cuota || isNaN(cuota)) return null;
  return (prob * cuota) - 1;
}

// ✅ COLORES
function getColorClass(prob) {
  if (prob >= 0.75) return "good";
  if (prob >= 0.60) return "medium";
  return "bad";
}


// ✅ CALCULO FINAL
function calcular() {

  const datos = {
    FOL: +fol.value,
    FDL: +fdl.value,
    PGLL: +pgll.value,
    FOV: +fov.value,
    FDV: +fdv.value,
    PGVL: +pgvl.value,
    linea: +linea.value
  };

  if (Object.values(datos).some(isNaN)) {
    resultado.innerHTML = "❌ Completa todos los campos";
    return;
  }

  const r = calcularProbabilidades(datos);

  const cuotas = {
    over: parseFloat(document.getElementById("cuotaOver").value),
    under: parseFloat(document.getElementById("cuotaUnder").value),
    bttsSi: parseFloat(document.getElementById("cuotaBTTSsi").value),
    bttsNo: parseFloat(document.getElementById("cuotaBTTSno").value)
  };

  const valueOver = calcularValue(r.over, cuotas.over);
  const valueUnder = calcularValue(r.under, cuotas.under);
  const valueBTTSsi = calcularValue(r.bttsSi, cuotas.bttsSi);
  const valueBTTSno = calcularValue(r.bttsNo, cuotas.bttsNo);

  resultado.innerHTML = `
    <p>λ Local: <b>${r.lL.toFixed(2)}</b></p>
    <p>λ Visitante: <b>${r.lV.toFixed(2)}</b></p>

    
<p class="${getColorClass(r.over)}">
  OVER: ${(r.over * 100).toFixed(1)}%
</p>

<p class="${getColorClass(r.under)}">
  UNDER: ${(r.under * 100).toFixed(1)}%
</p>

<hr>

<p class="${getColorClass(r.bttsSi)}">
  BTTS Sí: ${(r.bttsSi * 100).toFixed(1)}%
</p>

<p class="${getColorClass(r.bttsNo)}">
  BTTS No: ${(r.bttsNo * 100).toFixed(1)}%
</p>

    <h4>💰 VALUE</h4>

    <p class="${valueOver > 0 ? 'good' : 'bad'}">
      OVER: ${(valueOver * 100).toFixed(1)}%
    </p>

    <p class="${valueUnder > 0 ? 'good' : 'bad'}">
      UNDER: ${(valueUnder * 100).toFixed(1)}%
    </p>

    <p class="${valueBTTSsi > 0 ? 'good' : 'bad'}">
      BTTS Sí: ${(valueBTTSsi * 100).toFixed(1)}%
    </p>

    <p class="${valueBTTSno > 0 ? 'good' : 'bad'}">
      BTTS No: ${(valueBTTSno * 100).toFixed(1)}%
    </p>
  `;
}
let recomendacion = "";

if (r.over > 0.70 && valueOver > 0) {
  recomendacion = "✅ APOSTAR OVER 🔥";
} else if (r.bttsSi > 0.65 && valueBTTSsi > 0) {
  recomendacion = "✅ APOSTAR BTTS SÍ ⚽";
} else if (r.under > 0.60 && valueUnder > 0) {
  recomendacion = "✅ APOSTAR UNDER 🧊";
} else {
  recomendacion = "⚠️ SIN VALOR CLARO";
}

resultado.innerHTML += `<h3>${recomendacion}</h3>`;

// ✅ LIMPIAR
function limpiar() {
  document.querySelectorAll("input").forEach(i => i.value = "");
  resultado.innerHTML = "";
}
