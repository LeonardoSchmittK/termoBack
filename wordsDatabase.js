const words = [
  "sagaz",

  "âmago",

  "negro",

  "termo",

  "êxito",

  "mexer",

  "nobre",

  "senso",

  "afeto",

  "algoz",

  "ética",

  "plena",

  "fazer",

  "tênue",

  "mútua",

  "assim",

  "vigor",

  "sutil",

  "aquém",

  "porém",

  "seção",

  "fosse",

  "poder",

  "sobre",

  "sanar",

  "ideia",

  "audaz",

  "cerne",

  "inato",

  "moral",

  "desde",

  "coisa",

  "justo",

  "quiçá",

  "honra",

  "torpe",

  "sonho",

  "razão",

  "fútil",

  "etnia",

  "ícone",

  "amigo",

  "anexo",

  "égide",

  "tange",

  "lapso",

  "haver",

  "dengo",

  "expor",

  "tempo",

  "então",

  "mútuo",

  "seara",

  "casal",

  "boçal",

  "hábil",

  "saber",

  "ávido",

  "ardil",

  "pesar",

  "graça",

  "dizer",

  "causa",

  "óbice",

  "genro",

  "dever",

  "coser",

  "pária",

  "posse",

  "tenaz",

  "sendo",

  "brado",

  "prole",
  "calvo",
  "tribo",
  "grito",
  "brita",

  "crivo",

  "comum",

  "temor",

  "ainda",

  "xibiu",

  "estar",

  "corja",

  "ápice",

  "detém",

  "ânimo",

  "ceder",

  "assaz",

  "pauta",

  "ânsia",

  "culto",

  "digno",

  "fugaz",

  "censo",

  "mundo",

  "atroz",

  "gleba",

  "forte",

  "vício",

  "vulgo",

  "cozer",

  "valha",

  "coala",

  "tanso",

  "panda",

  "cinza",

  "cache",

  "fenda",

  "fosco",

  "tosco",

  "muito",

  "denso",

  "criar",

  "revés",

  "neném",

  "saúde",

  "mesmo",

  "pudor",

  "dogma",

  "jeito",

  "regra",

  "louco",

  "todos",

  "atrás",

  "ordem",

  "mercê",

  "round",

  "impor",

  "banal",

  "homem",

  "clava",

  "feliz",

  "pedir",

  "limbo",

  "trono",

  "palha",

  "valsa",

  "claro",

  "melão",

  "longo",

  "dista",

  "clero",

  "banco",

  "louça",

  "feroz",

  "navio",

  "pedra",

  "régua",

  "broto",

  "fruto",

  "canto",

  "vento",

  "venda",

  "colhe",

  "folha",

  "molho",

  "corar",

  "bater",

  "couve",

  "cobre",

  "meios",

  "tonto",

  "zonzo",

  "potro",

  "pinto",

  "neném",

  "somar",

  "litro",

  "cetro",
  "cedro",

  "torre",

  "pasto",

  "ombro",

  "tombo",

  "susto",

  "custo",
  "furto",
  "filha",

  "busto",
  "carta",
  "corda",
  "nitro",
  "zinco",
  "dente",
  "tchau",
  "cisto",
  "tampa",
  "lança",

  "verso",

  "usura",

  "apraz",

  "juízo",

  "sábio",

  "servo",

  "tenro",

  "forma",

  "desse",

  "prosa",

  "pífio",

  "presa",

  "falar",

  "ontem",

  "viril",

  "cunho",

  "posso",

  "certo",

  "devir",

  "vendo",

  "manso",

  "reaça",

  "herói",

  "meiga",

  "valor",

  "ébrio",

  "mágoa",

  "legal",

  "falso",

  "visar",

  "sério",

  "fluir",

  "acaso",

  "puder",

  "fácil",

  "afago",

  "guisa",

  "platô",

  "ajuda",

  "lugar",

  "temer",

  "ímpio",

  "abrir",

  "garbo",

  "linda",

  "afins",

  "cisma",

  "obter",

  "praxe",

  "gerar",

  "óbvio",

  "bruma",

  "pleno",

  "burro",

  "matiz",

  "êxodo",

  "crise",

  "união",

  "havia",

  "fluxo",

  "vênia",

  "senil",

  "tédio",

  "ritmo",

  "enfim",

  "tomar",

  "morte",

  "visão",

  "olhar",

  "levar",

  "brega",

  "prumo",

  "parvo",

  "casta",

  "álibi",

  "gênio",

  "favor",

  "bravo",

  "vital",

  "pulha",

  "reles",

  "reter",

  "vivaz",

  "falta",

  "parco",

  "valia",

  "cabal",

  "ouvir",

  "tecer",

  "grato",

  "laico",

  "ameno",

  "sábia",

  "calma",

  "possa",

  "outro",

  "viver",

  "noção",

  "carma",

  "força",

  "passo",

  "ranço",

  "tendo",

  "nicho",

  "achar",

  "único",

  "terra",

  "noite",

  "prime",

  "pobre",

  "façam",

  "óbito",

  "rever",

  "rogar",

  "fator",

  "fardo",

  "selar",

  "ativo",

  "farsa",

  "coeso",

  "anelo",

  "épico",

  "dúbio",

  "citar",

  "sinto",

  "cisão",

  "leigo",

  "sesta",

  "sonso",

  "adiar",

  "ciúme",

  "haste",

  "gente",

  "cesta",

  "humor",

  "tende",

  "deter",

  "velho",

  "revel",

  "atuar",

  "papel",

  "sulco",

  "líder",

  "exato",

  "vemos",

  "amplo",

  "ideal",

  "nossa",

  "árduo",

  "igual",

  "feixe",

  "labor",

  "ponto",

  "marco",

  "fonte",

  "lavra",

  "ficar",

  "terno",

  "débil",

  "vazio",

  "hiato",

  "gesto",

  "imune",

  "ótica",

  "cauda",

  "senão",

  "remir",

  "ambos",

  "capaz",

  "varão",

  "vácuo",

  "jovem",

  "tanto",

  "toada",

  "sonsa",

  "inata",

  "tenra",

  "apoio",

  "coçar",

  "velar",

  "relva",

  "caçar",

  "algum",

  "xeque",

  "série",

  "ciclo",

  "raiva",

  "horda",

  "pouco",

  "vimos",

  "farão",

  "fusão",

  "leito",

  "advém",

  "probo",

  "entre",

  "doido",

  "feito",

  "sente",

  "chuva",

  "coesa",

  "minha",

  "frase",

  "torço",

  "anuir",

  "cruel",

  "botar",

  "rigor",

  "brisa",

  "trama",

  "carro",

  "ímpar",

  "blasé",

  "massa",

  "chata",

  "prece",

  "dorso",

  "maior",

  "lazer",

  "signo",

  "pegar",

  "moção",

  "fauna",

  "credo",

  "covil",

  "seita",

  "preso",

  "sorte",

  "furor",

  "casto",

  "morar",

  "flora",

  "peste",

  "ambas",

  "dócil",

  "livro",

  "vetor",

  "adeus",

  "faina",

  "houve",

  "senda",

  "árido",

  "comer",

  "plano",

  "liame",

  "setor",

  "pecha",

  "vírus",

  "nunca",

  "ocaso",

  "manha",

  "saiba",

  "aliás",

  "meses",

  "peixe",

  "ardor",

  "visse",

  "beata",

  "praia",

  "salvo",

  "aceso",

  "vulto",

  "vasto",

  "antro",

  "breve",

  "mudar",

  "rezar",

  "pajem",

  "banzo",

  "morro",

  "saída",

  "agora",

  "parte",

  "junto",

  "reger",

  "ótimo",

  "prado",

  "birra",

  "campo",

  "avaro",

  "sinal",

  "risco",

  "segue",

  "áureo",

  "grupo",

  "motim",

  "anais",

  "serão",

  "lenda",

  "andar",

  "chulo",

  "acima",

  "antes",

  "opção",

  "átomo",

  "fugir",

  "nação",

  "leite",

  "brava",

  "treta",

  "rapaz",

  "vilão",

  "parar",

  "fruir",

  "conta",

  "ídolo",

  "fitar",

  "estão",

  "jazia",

  "texto",

  "prazo",

  "áurea",

  "tenso",

  "verbo",

  "gerir",

  "puxar",

  "reino",

  "tirar",

  "alude",

  "oxalá",

  "norma",

  "índio",

  "exame",

  "época",

  "bando",

  "traga",

  "malta",

  "anciã",

  "festa",

  "prova",

  "psico",

  "filho",

  "corpo",

  "arcar",

  "átrio",

  "sinhá",

  "preto",

  "aonde",

  "avião",

  "turba",

  "fatal",

  "cheio",

  "voraz",

  "praga",

  "acesa",

  "quase",

  "venal",

  "sarça",

  "certa",

  "fatos",

  "quota",

  "cópia",

  "logro",

  "manhã",

  "ligar",

  "apego",

  "fixar",

  "oásis",
];

export default words;
