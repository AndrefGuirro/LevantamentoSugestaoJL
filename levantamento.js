// Seletores globais
const headerContainer = document.getElementById('header-container');
const footerContainer = document.getElementById('footer-container');
const searchInput = document.getElementById('searchInput');
const shareButton = document.getElementById('shareButton');
const limparDadosBtn = document.getElementById('limparDados');
const tabelaProdutos = document.getElementById('tabelaProdutos');
const grupoProduto = document.getElementById('grupoProduto');
const btnApenasCadastrados = document.getElementById('btnApenasCadastrados');
const btnTodosProdutos = document.getElementById('btnTodosProdutos');

let apenasCadastradosAtivado = false;

const produtosIniciais = [
    { nome: 'CREME CHANTILLY GRAN FINALE FLEISCHMANN SPRAY 12UNI 250G', grupo: 'AB MAURI' },
    { nome: 'CREME CHANTILLY GRAN FINALE FLEISCHMANN TP 27UNI 200ML', grupo: 'AB MAURI' },
    { nome: 'CREME CROCANTE OVOMALTINE 10PTX100G', grupo: 'AB MAURI' },
    { nome: 'CREME CROCANTE OVOMALTINE PET 12X260G', grupo: 'AB MAURI' },
    { nome: 'FERMENTO BIOL SECO FLEISCHMANN 12DPX23X10G', grupo: 'AB MAURI' },
    { nome: 'FERMENTO BIOL SECO FLEISCHMANN 4DPX69X10G', grupo: 'AB MAURI' },
    { nome: 'MELHORADOR FAR MAIS MACIO FLEISCHMANN 6DPX32X10G', grupo: 'AB MAURI' },
    { nome: 'MISTURA BOLO FLEISCHM AIPIM 20X390G', grupo: 'AB MAURI' },
    { nome: 'MISTURA BOLO FLEISCHM BROWNIE 20X400G', grupo: 'AB MAURI' },
    { nome: 'MISTURA BOLO FLEISCHM CHOCOMOUSSE 400G', grupo: 'AB MAURI' },
    { nome: 'MISTURA BOLO FLEISCHM COCO CREMOSO 20X390G', grupo: 'AB MAURI' },
    { nome: 'MISTURA BOLO FLEISCHM LARANJA CREMOSO 20X390G', grupo: 'AB MAURI' },
    { nome: 'MISTURA BOLO FLEISCHM LIMAO CREMOSO 20X390G', grupo: 'AB MAURI' },
    { nome: 'MISTURA BOLO FLEISCHM MILHO CREMOSO 20X390G', grupo: 'AB MAURI' },
    { nome: 'MISTURA BOLO FLEISCHMANN CHOCOLATE 390G', grupo: 'AB MAURI' },
    { nome: 'OVOMALTINE FLOCOS CROCANTE 12X190G', grupo: 'AB MAURI' },
    { nome: 'OVOMALTINE FLOCOS CROCANTE 12X300G', grupo: 'AB MAURI' },
    { nome: 'OVOMALTINE ROCKS 6DPX18X40G', grupo: 'AB MAURI' },
    { nome: 'AMENDOIM DADINHO CROCKS CEBOLA E SALSA 24X90G', grupo: 'DADINHO' },
    { nome: 'AMENDOIM DADINHO CROCKS CHURRASCO 24X90G', grupo: 'DADINHO' },
    { nome: 'AMENDOIM DADINHO CROCKS PIMENTA 24X90G', grupo: 'DADINHO' },
    { nome: 'AMENDOIM DADINHO CROCKS TRADICIONAL 24X90G', grupo: 'DADINHO' },
    { nome: 'DADINHO TRAD SACHE 40X90G', grupo: 'DADINHO' },
    { nome: 'DADINHO TRIBOMBOM AVELA 15X12X30G', grupo: 'DADINHO' },
    { nome: 'PAÇOCA DADINHO QUADRADA EMBR 12X40X20G', grupo: 'DADINHO' },
    { nome: 'PAÇOCA DADINHO ZERO QUADRADA 8DPX24UNX18G', grupo: 'DADINHO' },
    { nome: 'TRENTO BITES AO LEITE 8DPX12UNX40G', grupo: 'PECCIN SA' },
    { nome: 'TRENTO BITES AVELA 8DPX12UNX40G', grupo: 'PECCIN SA' },
    { nome: 'TRENTO BITES BCO-DARK 8DPX12UNX40G', grupo: 'PECCIN SA' },
    { nome: 'TRENTO BITES DARK 8DPX12UNX40G', grupo: 'PECCIN SA' },
    { nome: 'TRENTO BITES DUO 8DPX12UNX40G', grupo: 'PECCIN SA' },
    { nome: 'TRENTO BITES MOUSSE MARACUJA 8DPX12UNX40G', grupo: 'PECCIN SA' },
    { nome: 'TRENTO BITES TORTA LIMAO 8DPX12UNX40G', grupo: 'PECCIN SA' },
    { nome: 'TRENTO MASSIMO BRANCO C/ COOKIES 8DPX15UNX25G', grupo: 'PECCIN SA' },
    { nome: 'TRENTO MASSIMO CHOCOLATE 8DPX15UNX25G', grupo: 'PECCIN SA' },
    { nome: 'TRENTO MASSIMO DUO 8DPX15UNX25G', grupo: 'PECCIN SA' },
    { nome: 'TRENTO SPECIALE AVELAS AO LEITE 8DISPX12UNX26G', grupo: 'PECCIN SA' },
    { nome: 'TRENTO SPECIALE AVELAS BRANCO 8DISPX12UNX26G', grupo: 'PECCIN SA' },
    { nome: 'TRENTO SPECIALE PISTACHE C/AVELAS 8DISPX12UNX26G', grupo: 'PECCIN SA' },
    { nome: 'TRENTO WAFER AVELAS 8DPX16UNX29G', grupo: 'PECCIN SA' },
    { nome: 'TRENTO WAFER CHEESECAKE DE MORANGO 8DPX16UNX29G', grupo: 'PECCIN SA' },
    { nome: 'TRENTO WAFER CHOCOLATE 8DPX16UNX29G', grupo: 'PECCIN SA' },
    { nome: 'TRENTO WAFER CHOCOLATE BRANCO 8DPX16UNX29G', grupo: 'PECCIN SA' },
    { nome: 'TRENTO WAFER DARK 8DPX16UNX29G', grupo: 'PECCIN SA' },
    { nome: 'TRENTO WAFER DUO 8DPX16UNX29G', grupo: 'PECCIN SA' },
    { nome: 'TRENTO WAFER MOUSSE MARACUJA 8DPX16UNX29G', grupo: 'PECCIN SA' },
    { nome: 'TRENTO WAFER PISTACHE 8DPX16UNX29G', grupo: 'PECCIN SA' },
    { nome: 'TRENTO WAFER TORTA LIMAO 8DPX16UNX29G', grupo: 'PECCIN SA' },
    { nome: 'NUTRATA BARRA CHARGE 6X12UNX45G', grupo: 'NUTRATA' },
    { nome: 'NUTRATA BARRA GREGO BAR BEIJINHO 6X12UNX40G', grupo: 'NUTRATA' },
    { nome: 'NUTRATA BARRA GREGO BAR BRIGADEIRO 6X12UNX40G', grupo: 'NUTRATA' },
    { nome: 'NUTRATA BARRA GREGO BAR BROWNIE HAVANNA 6X12UNX40G', grupo: 'NUTRATA' },
    { nome: 'NUTRATA BARRA GREGO BAR DOCE DE LEITE HAVANNA 6X12UNX40G', grupo: 'NUTRATA' },
    { nome: 'NUTRATA BARRA GREGO BAR MORANGO COM CHANTILLY 6X12UNX40G', grupo: 'NUTRATA' },
    { nome: 'NUTRATA BARRA GREGO COOKIES & CREAM 6X12UNX40G', grupo: 'NUTRATA' },
    { nome: 'NUTRATA BARRA YOPRO CHOCOLATE 6X12UNX55G', grupo: 'NUTRATA' },
    { nome: 'NUTRATA BARRA YOPRO MORANGO 6X12UNX55G', grupo: 'NUTRATA' },
    { nome: 'NUTRATA PROTO WAFER SABOR DOCE DE LEITE HAVANNA 4X12UNX30G', grupo: 'NUTRATA' },
    { nome: 'ADOCANTE ADOCYL LIQ SACARINA 12X100ML', grupo: 'HYPERA' },
    { nome: 'ADOCANTE ADOCYL LIQ SACARINA 12X200ML', grupo: 'HYPERA' },
    { nome: 'ADOCANTE ADOCYL LIQ STEVIA 80ML', grupo: 'HYPERA' },
    { nome: 'ADOCANTE ZERO CAL LIQ SACARINA 12X100ML', grupo: 'HYPERA' },
    { nome: 'ADOCANTE ZERO CAL LIQ SACARINA 12X200ML', grupo: 'HYPERA' },
    { nome: 'BEBIDA FUNC ENGOV AFTER CITRUS 6X250ML', grupo: 'HYPERA' },
    { nome: 'BEBIDA FUNCIONAL ENGOV AFTER TANGERINA 6X250ML', grupo: 'HYPERA' },
    { nome: 'AMENDOIM DORI CONF CHOCOLATE 30X70G', grupo: 'DORI ALIMENTOS' },
    { nome: 'AMENDOIM DORI JAPONES 30X70G', grupo: 'DORI ALIMENTOS' },
    { nome: 'AMENDOIM DORI TORRADO SALG S/PELE 30X70G', grupo: 'DORI ALIMENTOS' },
    { nome: 'BALA BOLETE TUTTI FRUTTI 36X100G', grupo: 'DORI ALIMENTOS' },
    { nome: 'BALA GOTA COLA 36X100G', grupo: 'DORI ALIMENTOS' },
    { nome: 'BALA HORTELA MINT 36X100G', grupo: 'DORI ALIMENTOS' },
    { nome: 'BALA LUA CHEIA CHANTILLY 36X100G', grupo: 'DORI ALIMENTOS' },
    { nome: 'BALA LUA CHEIA FRUTAS 36X100G', grupo: 'DORI ALIMENTOS' },
    { nome: 'BALA TRINK FRUTAS 36X100G', grupo: 'DORI ALIMENTOS' },
    { nome: 'BALA YOGURTE100 MORANGO 36X100G', grupo: 'DORI ALIMENTOS' },
    { nome: 'DELIKET JELLY BEANS 30X100G', grupo: 'DORI ALIMENTOS' },
    { nome: 'DELIKET JELLY BEANS 30X70G', grupo: 'DORI ALIMENTOS' },
    { nome: 'DISQUETI AMENDOIM CHOC CONF 6X18X39G', grupo: 'DORI ALIMENTOS' },
    { nome: 'DISQUETI AMENDOIM CHOC CONF POUCH 30X120G', grupo: 'DORI ALIMENTOS' },
    { nome: 'DISQUETI CHOCOLATE BRANCO CONF 4X16X60G', grupo: 'DORI ALIMENTOS' },
    { nome: 'DISQUETI CHOCOLATE BRANCO CONF 6X18X40G', grupo: 'DORI ALIMENTOS' },
    { nome: 'DISQUETI CHOCOLATE CONF 4X16X60G', grupo: 'DORI ALIMENTOS' },
    { nome: 'DISQUETI CHOCOLATE CONF 6X18X40G', grupo: 'DORI ALIMENTOS' },
    { nome: 'DISQUETI VICEVERSA CHOC CONF 6X18X40G', grupo: 'DORI ALIMENTOS' },
    { nome: 'DISQUETI VICEVERSA CHOCOLA CONF 4X16X60G', grupo: 'DORI ALIMENTOS' },
    { nome: 'DORI GELATINA AMORA 16X60G', grupo: 'DORI ALIMENTOS' },
    { nome: 'DORI GELATINA BANANA 16X60G', grupo: 'DORI ALIMENTOS' },
    { nome: 'DORI GELATINA BEIJO 16X60G', grupo: 'DORI ALIMENTOS' },
    { nome: 'DORI GELATINA BOCA 16X60G', grupo: 'DORI ALIMENTOS' },
    { nome: 'DORI GELATINA MINHOCA 16X60G', grupo: 'DORI ALIMENTOS' },
    { nome: 'DORI GELATINA MINHOCA ÁCIDA 16X60G', grupo: 'DORI ALIMENTOS' },
    { nome: 'DORI GELATINA URSO 16X60G', grupo: 'DORI ALIMENTOS' },
    { nome: 'DORI REG.PESC.GIRAFA FRAMBOESA 2X30X30G', grupo: 'DORI ALIMENTOS' },
    { nome: 'DORI REG.PESCOÇO GIRAFA MORANGO 2X30X30G', grupo: 'DORI ALIMENTOS' },
    { nome: 'DORI REG.TUBO YOGURTE100 ÁCID.REC 12X70G', grupo: 'DORI ALIMENTOS' },
    { nome: 'DORI REGA.TUBO MORANGO ÁCIDO RECH 12X70G', grupo: 'DORI ALIMENTOS' },
    { nome: 'DORI REGALIZ FLOR 16X60G', grupo: 'DORI ALIMENTOS' },
    { nome: 'DORI REGALIZ TIJOLO 16X60G', grupo: 'DORI ALIMENTOS' },
    { nome: 'DORI REGALIZ TUBO MORANGO RECH.12X70G', grupo: 'DORI ALIMENTOS' },
    { nome: 'DORI REGALIZ TUBO UVA ÁCIDO RECH 12X70G', grupo: 'DORI ALIMENTOS' },
    { nome: 'DORI REGALIZ TUBO YOGURTE100 RECH 12X70G', grupo: 'DORI ALIMENTOS' },
    { nome: 'GOMETS FRUTAS SORTIDAS DP 12X30X32G', grupo: 'DORI ALIMENTOS' },
    { nome: 'GOMETS GOMA ANEL ACIDO 36X150G', grupo: 'DORI ALIMENTOS' },
    { nome: 'GOMETS GOMA SINO 36X150G', grupo: 'DORI ALIMENTOS' },
    { nome: 'GRAN CONFEITARTE GOURMET +CACAU 20X100G', grupo: 'DORI ALIMENTOS' },
    { nome: 'GRAN CONFEITARTE TIJOLINHO TRAD 20X100G', grupo: 'DORI ALIMENTOS' },
    { nome: 'GRANULADO CHOCOLATE DORI 30X120G', grupo: 'DORI ALIMENTOS' },
    { nome: 'GRANULADO CHOCOLATE MESCLAD DORI 30X120G', grupo: 'DORI ALIMENTOS' },
    { nome: 'GRANULADO DORI CHOC 30X70G', grupo: 'DORI ALIMENTOS' },
    { nome: 'MINI DISQUETI CHOCOLATE CONF 4X16X60G', grupo: 'DORI ALIMENTOS' },
    { nome: 'PIRULITO BOLETE MAST 12X50X11,2G', grupo: 'DORI ALIMENTOS' },
    { nome: 'PIRULITO YOGURTE100 MOR. MAST 12X50X11,2G', grupo: 'DORI ALIMENTOS' },
    { nome: 'ACUCAR MASCAVO VITAO 500G F12', grupo: 'VITAO ALIMENTOS' },
    { nome: 'AVEIA FLOCOS FINOS S/ GLUTEN VITAO 12X170G', grupo: 'VITAO ALIMENTOS' },
    { nome: 'AVEIA FLOCOS FINOS VITAO 12X170G', grupo: 'VITAO ALIMENTOS' },
    { nome: 'AVEIA FLOCOS FINOS VITAO 12X400G', grupo: 'VITAO ALIMENTOS' },
    { nome: 'AVEIA FLOCOS GROSSOS VITAO 12X170G', grupo: 'VITAO ALIMENTOS' },
    { nome: 'BEIJINHO ZERO VITAO 8X200G', grupo: 'VITAO ALIMENTOS' },
    { nome: 'BRIGADEIRO ZERO VITAO 8X200G', grupo: 'VITAO ALIMENTOS' },
    { nome: 'CACAU EM PO VITAO 100G F12', grupo: 'VITAO ALIMENTOS' },
    { nome: 'CHIA EM GRAOS VITAO 120G F12', grupo: 'VITAO ALIMENTOS' },
    { nome: 'CHOC BRANCO MARCANTE MOR CRANBERRY VITAO 4X6X70G', grupo: 'VITAO ALIMENTOS' },
    { nome: 'CHOC DARK MARCANTE NIBS ZERO VITAO 4X6X70G 70% CACAU', grupo: 'VITAO ALIMENTOS' },
    { nome: 'CHOC LEITE MARCANTE ZERO VITAO 4X6X70G 40% CACAU', grupo: 'VITAO ALIMENTOS' },
    { nome: 'COOKIES INTEGRAL CACAU VITAO 8X120G', grupo: 'VITAO ALIMENTOS' },
    { nome: 'COOKIES INTEGRAL CASTANHA DE CAJU VITAO 8X120G', grupo: 'VITAO ALIMENTOS' },
    { nome: 'COOKIES INTEGRAL CASTANHA DO PARA VITAO 8X120G', grupo: 'VITAO ALIMENTOS' },
    { nome: 'CREME DE AVELA VEGANO ZERO VITAO 8X200G', grupo: 'VITAO ALIMENTOS' },
    { nome: 'DOCE DE LEITE ZERO PURO VITAO 8X200G', grupo: 'VITAO ALIMENTOS' },
    { nome: 'PSYLLIUM 100G F12', grupo: 'VITAO ALIMENTOS' },
    { nome: 'AGUA DESMINERALIZADA TECBRIL 12X1L', grupo: 'BASTON' },
    { nome: 'DESO ABOVE FEEL FREE ZERO S/ALU MEN 12X150ML/90G', grupo: 'BASTON' },
    { nome: 'DESO ABOVE FEEL FREE ZERO S/ALU WOMEN 12X150ML/90G', grupo: 'BASTON' },
    { nome: 'DESO ANT ABOVE DERMA WOMEN CLAREADOR 72H 24X150ML/90G', grupo: 'BASTON' },
    { nome: 'DESO ANT ABOVE DERMACLINICAL MEN 96H 24X150ML/90G', grupo: 'BASTON' },
    { nome: 'DESO ANT ABOVE DERMACLINICAL S/PERF 96H 24X150ML/90G', grupo: 'BASTON' },
    { nome: 'DESO ANT ABOVE DERMACLINICAL WOMEN 72H 24X150ML/90G', grupo: 'BASTON' },
    { nome: 'DESO ANT AERO ABOVE FEM. CLAS CANDY 24X150ML/90G', grupo: 'BASTON' },
    { nome: 'DESO ANT AERO ABOVE FEM. CLAS DOLCE 24X150ML/90G', grupo: 'BASTON' },
    { nome: 'DESO ANT AERO ABOVE FEM. CLAS FRESH 24X150ML/90G', grupo: 'BASTON' },
    { nome: 'DESO ANT AERO ABOVE FEM. CLAS LADY 24X150ML/90G', grupo: 'BASTON' },
    { nome: 'DESO ANT.ABOVE CLAS S/PERFUME 24X150ML/90G', grupo: 'BASTON' },
    { nome: 'DESO ANT.ABOVE CREAM ORIGINAL 72H 24X150ML/90G', grupo: 'BASTON' },
    { nome: 'DESO ANT.ABOVE CREAM VANILLA 72H 24X150ML/90G', grupo: 'BASTON' },
    { nome: 'DESO ANT.ABOVE ELEMENTS CARBON ACTIVE 24X150ML/90G', grupo: 'BASTON' },
    { nome: 'DESO ANT.ABOVE ELEMENTS HURRICANE 24X150ML/90G', grupo: 'BASTON' },
    { nome: 'DESO ANT.ABOVE ELEMENTS OCEAN 24X150ML/90G', grupo: 'BASTON' },
    { nome: 'DESO ANT.ABOVE ELEMENTS VULCAN 24X150ML/90G', grupo: 'BASTON' },
    { nome: 'DESO ANT.ABOVE EXTR INVISIBLE MEN 72H AC 24X150ML/90G', grupo: 'BASTON' },
    { nome: 'DESO ANT.ABOVE EXTREME BLACK MEN 72H AC 24X150ML/90G', grupo: 'BASTON' },
    { nome: 'DESO ANT.ABOVE EXTREME MOV MEN 72H AC 24X150ML/90G', grupo: 'BASTON' },
    { nome: 'DESO ANT.ABOVE EXTREME SPORT MEN 72H AL 24X150ML/90G', grupo: 'BASTON' },
    { nome: 'DESO ANT.ABOVE INVISIBLE WOMAN 24X150ML/90G', grupo: 'BASTON' },
    { nome: 'DESO ANT.ABOVE MAXX CREAM ORIGINAL L250ML P150ML', grupo: 'BASTON' },
    { nome: 'DESO ANT.ABOVE SPORT ENERGY MEN 24X150ML/90G', grupo: 'BASTON' },
    { nome: 'DESO ANT.ABOVE SPORT ENERGY WOMAN 24X150ML/90G', grupo: 'BASTON' },
    { nome: 'ESPUMA BARBA ABOVE 24X150ML/145G', grupo: 'BASTON' },
    { nome: 'MULTI-INSET PROINSET 12X250ML/120G', grupo: 'BASTON' },
    { nome: 'MULTI-INSET PROINSET ACAO TOTAL 12X250ML/120G', grupo: 'BASTON' },
    { nome: 'MULTI-INSET PROINSET EMB.ECON ACAO TOTAL 12X350ML/185G', grupo: 'BASTON' },
    { nome: 'MULTI-INSET PROINSET EMB.ECON CITRONELA 12X350ML/185G', grupo: 'BASTON' },
    { nome: 'MULTI-INSET PROINSET EMB.ECON S/CHEIRO 12X350ML/185G', grupo: 'BASTON' },
    { nome: 'MULTI-INSET PROINSET EMB.ECONOMICA EUCALIPTO 12X350ML/185G', grupo: 'BASTON' },
    { nome: 'MULTI-INSET PROINSET PROMOCIONAL 12X450ML/330G', grupo: 'BASTON' },
    { nome: 'MULTI-INSET PROINSET PROMOCIONAL S/CHEIRO 12X450ML/330G', grupo: 'BASTON' },
    { nome: 'MULTI-INSET PROINSET S/CHEIRO 12X250ML/120G', grupo: 'BASTON' },
    { nome: 'NEUTRALIZADOR PURO AR CAPIM LIMAO 12X250ML', grupo: 'BASTON' },
    { nome: 'NEUTRALIZADOR PURO AR LAVANDA 12X250ML', grupo: 'BASTON' },
    { nome: 'NEUTRALIZADOR PURO AR NEUTRO 12X250ML', grupo: 'BASTON' },
    { nome: 'SABONETE INTIMO ABOVE 12X200ML', grupo: 'BASTON' },
    { nome: 'SABONETE INTIMO ABOVE PACKS DUO 200ML 12UN', grupo: 'BASTON' },
    { nome: 'TALCO ANTISSEPTICO ABOVE PE PROT TRADIC 12X100G', grupo: 'BASTON' },
    { nome: 'CHUPA CHUPS TRIO SORTIDO 6DPX20X29G', grupo: 'PERFETTI VAN MELLE' },
    { nome: 'FRUITTELLA CHEWY SOUR 16STX24DPX40G', grupo: 'PERFETTI VAN MELLE' },
    { nome: 'FRUITTELLA MAST MELANCIA 40GX16STX24DP', grupo: 'PERFETTI VAN MELLE' },
    { nome: 'FRUITTELLA MAST. MORANGO VIT. C 10X16 C/24', grupo: 'PERFETTI VAN MELLE' },
    { nome: 'FRUITTELLA SWIRL CARAMELO 10X15 C/12', grupo: 'PERFETTI VAN MELLE' },
    { nome: 'FRUITTELLA SWIRL MORANGO VIT.C 10X15 C/12', grupo: 'PERFETTI VAN MELLE' },
    { nome: 'FRUITTELLA SWIRL MOUSSE MARACUJA 12DPX15 41G', grupo: 'PERFETTI VAN MELLE' },
    { nome: 'MENTOS COOL WHITE TUTTI FRESH (3 CAM+) 5X15 C/12', grupo: 'PERFETTI VAN MELLE' },
    { nome: 'MENTOS COOL WHITE BLUE RASPBERRY (3 CAM+) 5X15 C/12', grupo: 'PERFETTI VAN MELLE' },
    { nome: 'MENTOS GOMA GARRAFA FRESH MINT 28X6 C/6', grupo: 'PERFETTI VAN MELLE' },
    { nome: 'MENTOS GOMA GARRAFA MORANGO 28X6 C/6', grupo: 'PERFETTI VAN MELLE' },
    { nome: 'MENTOS GOMA GARRAFA P.FRESH MELANCIA 6DPX6X56G', grupo: 'PERFETTI VAN MELLE' },
    { nome: 'MENTOS GOMA GARRAFA P.WHITE SPEARMINT 6DPX6X56G', grupo: 'PERFETTI VAN MELLE' },
    { nome: 'MENTOS GOMA GARRAFA UP 2U 28X6 C/6', grupo: 'PERFETTI VAN MELLE' },
    { nome: 'MENTOS GOMA GARRAFA WTERGREEN 28X6 C/6', grupo: 'PERFETTI VAN MELLE' },
    { nome: 'MENTOS KISS MINT LTA 50X12 C/12', grupo: 'PERFETTI VAN MELLE' },
    { nome: 'MENTOS KISS MORANGO LTA 50X12 C/12', grupo: 'PERFETTI VAN MELLE' },
    { nome: 'MENTOS KISS TUTTI FRUTTI LTA 12X12X35G', grupo: 'PERFETTI VAN MELLE' },
    { nome: 'MENTOS KISS XTREME LTA 50X12 C/12', grupo: 'PERFETTI VAN MELLE' },
    { nome: 'MENTOS STICK FRUIT 14X16 C/24', grupo: 'PERFETTI VAN MELLE' },
    { nome: 'MENTOS STICK FRUTAS VERMELHAS 14X16 C/24', grupo: 'PERFETTI VAN MELLE' },
    { nome: 'MENTOS STICK MINT 14X16 C/24', grupo: 'PERFETTI VAN MELLE' },
    { nome: 'MENTOS STICK MORANGO/IOG 14X16 C/24', grupo: 'PERFETTI VAN MELLE' },
    { nome: 'MENTOS STICK RAINBOW 14X16 C/24', grupo: 'PERFETTI VAN MELLE' },
    { nome: 'MENTOS STICK TUTTI FRUTTI 14X16 C/ 24', grupo: 'PERFETTI VAN MELLE' },
    { nome: 'MENTOS STICK WILDSPEARMINT 14X16 C/24', grupo: 'PERFETTI VAN MELLE' },
    { nome: 'PURE FRESH FRUIT (3 CAM+) 5X15 C/12', grupo: 'PERFETTI VAN MELLE' },
    { nome: 'PURE FRESH MINT (3 CAM+) 5X15 C/12', grupo: 'PERFETTI VAN MELLE' },
    { nome: 'PURE FRESH SPEARMINT (3 CAM+) 5X15 C/12', grupo: 'PERFETTI VAN MELLE' },
    { nome: 'PURE FRESH STRONG (3 CAM+) 5X15 C/12', grupo: 'PERFETTI VAN MELLE' }
];

// Função para carregar o cabeçalho
function carregarHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => headerContainer.innerHTML = data)
        .catch(error => console.error('Erro ao carregar o cabeçalho:', error));
}

// Função para carregar o rodapé
function carregarFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => footerContainer.innerHTML = data)
        .catch(error => console.error('Erro ao carregar o rodapé:', error));
}

// Carregar o cabeçalho, o rodapé e os produtos quando a página for carregada
document.addEventListener('DOMContentLoaded', function () {
    carregarHeader();
    carregarFooter();
    renderizarProdutos();
    carregarDadosTabela();
});

function linhaTemCadastro(linha) {
    const colunas = linha.querySelectorAll('td');
    if (colunas.length < 3) return false;

    const estoque = colunas[1].innerText.trim();
    const sugestao = colunas[2].innerText.trim();

    return estoque !== '' || sugestao !== '';
}

function aplicarFiltros() {
    const filtroGrupo = grupoProduto ? grupoProduto.value : '';
    const termoBusca = searchInput ? searchInput.value.trim().toLowerCase() : '';

    document.querySelectorAll('#tabelaProdutos tr').forEach(linha => {
        const grupoLinha = linha.getAttribute('data-grupo');
        const nomeProduto = linha.querySelector('td')?.innerText.toLowerCase() || '';

        let exibida = true;

        if (filtroGrupo !== '' && grupoLinha !== filtroGrupo) {
            exibida = false;
        }

        if (termoBusca && !nomeProduto.includes(termoBusca)) {
            exibida = false;
        }

        if (apenasCadastradosAtivado && !linhaTemCadastro(linha)) {
            exibida = false;
        }

        linha.style.display = exibida ? '' : 'none';
    });
}

// Filtrar produtos pelo grupo selecionado
if (grupoProduto) {
    grupoProduto.addEventListener('change', function () {
        aplicarFiltros();
    });
}

if (btnApenasCadastrados) {
    btnApenasCadastrados.addEventListener('click', function () {
        apenasCadastradosAtivado = true;
        btnApenasCadastrados.classList.add('active');
        btnTodosProdutos.classList.remove('active');
        aplicarFiltros();
    });
}

if (btnTodosProdutos) {
    btnTodosProdutos.addEventListener('click', function () {
        apenasCadastradosAtivado = false;
        btnTodosProdutos.classList.add('active');
        btnApenasCadastrados.classList.remove('active');
        aplicarFiltros();
    });
}

function renderizarProdutos() {
    if (!tabelaProdutos) return;

    localStorage.removeItem('dadosTabela');
    tabelaProdutos.innerHTML = '';

    produtosIniciais.forEach(produto => {
        const linha = document.createElement('tr');
        linha.setAttribute('data-grupo', produto.grupo);

        const celulaNome = document.createElement('td');
        celulaNome.textContent = produto.nome;

        const celulaEstoque = document.createElement('td');
        celulaEstoque.contentEditable = true;
        celulaEstoque.dataset.campo = 'estoque';
        celulaEstoque.className = 'editable-cell';

        const celulaSugestao = document.createElement('td');
        celulaSugestao.contentEditable = true;
        celulaSugestao.dataset.campo = 'sugestao';
        celulaSugestao.className = 'editable-cell';

        [celulaEstoque, celulaSugestao].forEach(celula => {
            celula.addEventListener('input', salvarDadosTabela);
        });

        linha.appendChild(celulaNome);
        linha.appendChild(celulaEstoque);
        linha.appendChild(celulaSugestao);
        tabelaProdutos.appendChild(linha);
    });
}

// Função de pesquisa
if (searchInput) {
    searchInput.addEventListener('input', function () {
        aplicarFiltros();
    });
}

// Compartilhar no WhatsApp
if (shareButton) {
    shareButton.addEventListener('click', function () {
        let message = 'Segue Levantamento de Estoque e Sugestão de pedido:\n------------------------\n\n';
        document.querySelectorAll('#tabelaProdutos tr').forEach(linha => {
            const colunas = linha.querySelectorAll('td');
            if (colunas.length < 3) return; // Garante que há colunas suficientes

            const nomeProduto = colunas[0].innerText;
            const estoque = colunas[1].innerText.trim();
            const sugestao = colunas[2].innerText.trim();

            if (estoque !== '' && sugestao !== '') {
                message += `Produto: ${nomeProduto}\nEstoque: ${estoque}\nSugestão: ${sugestao}\n\n------------------------\n`;
            }
        });

        if (message === 'Segue Levantamento de Estoque e Sugestão de pedido:\n------------------------\n\n') {
            alert('Falta produto preenchido para compartilhar. Preencha as 2 colunas, Estoque e sugestão, mesmo que seja 0');
            return;
        }

        window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
    });
}

// Salvar dados localmente
function salvarDadosTabela() {
    const dados = [];
    document.querySelectorAll('#tabelaProdutos tr').forEach(linha => {
        const colunas = linha.querySelectorAll('td');
        if (colunas.length < 3) return;

        dados.push({
            produto: colunas[0].innerText,
            estoque: colunas[1].innerText,
            sugestao: colunas[2].innerText
        });
    });

    localStorage.setItem('dadosTabela', JSON.stringify(dados));
}

// Carregar dados salvos
function carregarDadosTabela() {
    const dadosSalvos = localStorage.getItem('dadosTabela');
    if (!dadosSalvos) return;

    const dados = JSON.parse(dadosSalvos);
    document.querySelectorAll('#tabelaProdutos tr').forEach((linha, index) => {
        const colunas = linha.querySelectorAll('td');
        if (colunas.length < 3 || !dados[index]) return;

        colunas[1].innerText = dados[index].estoque;
        colunas[2].innerText = dados[index].sugestao;
    });
}

// Botão LIMPAR DADOS
if (limparDadosBtn) {
    limparDadosBtn.addEventListener('click', function () {
        localStorage.removeItem('dadosTabela');
        document.querySelectorAll('#tabelaProdutos tr td:nth-child(2), #tabelaProdutos tr td:nth-child(3)').forEach(td => td.innerText = '');
        alert('Dados apagados!');
    });
}
