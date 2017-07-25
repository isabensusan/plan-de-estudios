var materias = [
    {
        "id": "241",
        "materia": "Análisis Matemático I",
        "depto": "M",
        "vh": "6",
        "requisitos": ["0"],
        "orden": "1",
        "correlativa": ["248","250","653"]
    },
    {
        "id": "242",
        "materia": "Economía",
        "depto": "E",
        "vh": "4",
        "requisitos": ["0"],
        "orden": "2",
        "correlativa": ["249", "250"]
    },
    {
        "id": "243",
        "materia": "Sociología",
        "depto": "H",
        "vh": "4",
        "requisitos": ["0"],
        "orden": "3",
        "correlativa": ["452"]
    },
    {
        "id": "244",
        "materia": "Metodología de las Ciencias Sociales",
        "depto": "H",
        "vh": "4",
        "requisitos": ["0"],
        "orden": "4",
        "correlativa": ["249","452","651"]
    },
    {
        "id": "245",
        "materia": "Álgebra",
        "depto": "M",
        "vh": "4",
        "requisitos": ["0"],
        "orden": "5",
        "correlativa": ["0"]
    },
    {
        "id": "246",
        "materia": "Historia Económica y Social General",
        "depto": "H",
        "vh": "4",
        "requisitos": ["0"],
        "orden": "6",
        "correlativa": ["249"]
    },
    {
        "id": "247",
        "materia": "Teoría Contable",
        "depto": "C",
        "vh": "6",
        "requisitos": ["0"],
        "orden": "7",
        "correlativa": ["277"]
    },
    {
        "id": "248",
        "materia": "Estadística I",
        "depto": "M",
        "vh": "6",
        "requisitos": ["241"],
        "orden": "8",
        "correlativa": ["276"]
    },
    {
        "id": "249",
        "materia": "Historia Económica y Social Argentina",
        "depto": "H",
        "vh": "4",
        "requisitos": ["242","244","246"],
        "orden": "9",
        "correlativa": ["0"]
    },
    {
        "id": "250",
        "materia": "Microeconomía I",
        "depto": "E",
        "vh": "4",
        "requisitos": ["241","242"],
        "orden": "10",
        "correlativa": ["278"]
    },
    {
        "id": "251",
        "materia": "Instituciones de Derecho Público",
        "depto": "D",
        "vh": "4",
        "requisitos": ["0"],
        "orden": "11",
        "correlativa": ["0"]
    },
    {
        "id": "252",
        "materia": "Administración General",
        "depto": "A",
        "vh": "4",
        "requisitos": ["0"],
        "orden": "12",
        "correlativa": ["274","279","452"]
    },
    {
        "id": "273",
        "materia": "Instituciones de Derecho Privado",
        "depto": "D",
        "vh": "4",
        "requisitos": ["0"],
        "orden": "18",
        "correlativa": ["659","799"]
    },
    {
        "id": "274",
        "materia": "Sistemas Administrativos",
        "depto": "A",
        "vh": "4",
        "requisitos": ["252"],
        "orden": "13",
        "correlativa": ["275","656"]
    },
    {
        "id": "275",
        "materia": "Tecnología de la Información",
        "depto": "S",
        "vh": "6",
        "requisitos": ["274"],
        "orden": "24",
        "correlativa": ["660"]
    },
    {
        "id": "276",
        "materia": "Cálculo Financiero",
        "depto": "M",
        "vh": "4",
        "requisitos": ["248"],
        "orden": "14",
        "correlativa": ["279"]
    },
    {
        "id": "277",
        "materia": "Gestión y Costos",
        "depto": "C",
        "vh": "6",
        "requisitos": ["247"],
        "orden": "15"        ,
        "correlativa": ["457","656"]
    },
    {
        "id": "278",
        "materia": "Macroeconomía y Política Económica",
        "depto": "E",
        "vh": "6",
        "requisitos": ["250"],
        "orden": "19",
        "correlativa": ["0"]
    },
    {
        "id": "279",
        "materia": "Administración Financiera",
        "depto": "A",
        "vh": "6",
        "requisitos": ["252","276"],
        "orden": "20",
        "correlativa": ["0"]
    },
    {
        "id": "452",
        "materia": "Sociología de la Organización",
        "depto": "H",
        "vh": "4",
        "requisitos": ["243","244","252"],
        "orden": "16",
        "correlativa": ["656"]
    },
    {
        "id": "457",
        "materia": "Teoría de la Decisión",
        "depto": "A",
        "vh": "6",
        "requisitos": ["277"],
        "orden": "21",
        "correlativa": ["657"]
    },
    {
        "id": "651",
        "materia": "Lógica",
        "depto": "H",
        "vh": "4",
        "requisitos": ["244"],
        "orden": "17",
        "correlativa": ["652","653"]
    },
    {
        "id": "652",
        "materia": "Teoría de los Lenguajes y Sistemas Operativos",
        "depto": "S",
        "vh": "6",
        "requisitos": ["275","651"],
        "orden": "24",
        "correlativa": ["654","658","659"]
    },
    {
        "id": "653",
        "materia": "Tecnología de los Computadores",
        "depto": "S",
        "vh": "4",
        "requisitos": ["241","651"],
        "orden": "22",
        "correlativa": ["655"]
    },
    {
        "id": "654",
        "materia": "Construcción de Aplicaciones Informáticas",
        "depto": "S",
        "vh": "4",
        "requisitos": ["652"],
        "orden": "29",
        "correlativa": ["660"]
    },
    {
        "id": "655",
        "materia": "Tecnología de las Comunicaciones",
        "depto": "S",
        "vh": "4",
        "requisitos": ["653"],
        "orden": "26",
        "correlativa": ["660"]
    },
    {
        "id": "656",
        "materia": "Organización",
        "depto": "A",
        "vh": "6",
        "requisitos": ["274","277","452"],
        "orden": "23",
        "correlativa": ["0"]
    },
    {
        "id": "657",
        "materia": "Sistemas de Datos",
        "depto": "S",
        "vh": "4",
        "requisitos": ["274","277","457"],
        "orden": "27",
        "correlativa": ["658","659","660"]
    },
    {
        "id": "658",
        "materia": "Metodología de los Sistemas de Información",
        "depto": "S",
        "vh": "6",
        "requisitos": ["277","652","657"],
        "orden": "30",
        "correlativa": ["0"]
    },
    {
        "id": "659",
        "materia": "Auditoría y Control de Sistemas de Información",
        "depto": "S",
        "vh": "6",
        "requisitos": ["273","652","657"],
        "orden": "31",
        "correlativa": ["0"]
    },
    {
        "id": "740",
        "materia": "Redes Informáticas",
        "depto": "S",
        "vh": "4",
        "requisitos": ["655"],
        "orden": "32",
        "correlativa": ["0"]
    },
    {
        "id": "799",
        "materia": "Administración de Recursos Informáticos",
        "depto": "S",
        "vh": "4",
        "requisitos": ["273","652","657"],
        "orden": "33",
        "correlativa": ["0"]
    },
    {
        "id": "660",
        "materia": "Seminario de Integración y Aplicación",
        "depto": "S",
        "vh": "",
        "requisitos": ["654","655","657"],
        "orden": "34",
        "correlativa": ["0"]
    },
    {
        "id": "715",
        "materia": "Inteligencia de Negocios",
        "depto": "S",
        "vh": "4",
        "requisitos": [""],
        "orden": "28",
        "correlativa": ["0"]
    }
]
