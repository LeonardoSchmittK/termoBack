import Typo from "typo-js";

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

  "muito",

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

  "genro",

  "dever",

  "pária",

  "posse",

  "tenaz",

  "sendo",

  "brado",

  "prole",

  "crivo",

  "comum",

  "temor",

  "ainda",

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

  "impor",

  "banal",

  "homem",

  "clava",

  "feliz",

  "pedir",

  "limbo",

  "coisa",

  "usura",

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

  "claro",

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

  "verso",

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

  "tosco",

  "exame",

  "época",

  "bando",

  "traga",

  "malta",

  "anciã",

  "festa",

  "prova",

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

  "faria",
];

const wordsTest = ["anciã", "útero"];

function getData(req, res) {
  res
    .status(200)
    .json({ word: words[Math.floor(Math.random() * words.length)] });
}

export default getData;
