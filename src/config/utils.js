const feriadosMoveis = {
    carnaval: 'Carnaval',
    'corpus-christi': 'Corpus Christi',
    'sexta-feira-santa': 'Sexta-Feira Santa'
};

const pascoa = function(ano) {
    const b = parseInt(ano / 100);
    const a = ano % 19;
    const c = ano % 100;
    const d = parseInt(b / 4);
    const e = b % 4;
    const f = parseInt((b + 8) / 25);
    const g = parseInt((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = parseInt(c / 4);
    const k = c % 4;
    const L = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = parseInt((a + 11 * h + 22 * L) / 451);
    const MES = parseInt((h + L - 7 * m + 114) / 31);
    const DIA = 1 + (h + L - 7 * m + 114) % 31;

    return {
        dia: DIA,
        mes: MES
    };
};

const carnaval = function(ano) {
    const { dia, mes } = pascoa(ano);
    const dataPascoa = new Date(`${ano}-${mes}-${dia}`);
    const days = 47;
    const result = new Date(dataPascoa);
    result.setDate(result.getDate() - days);

    return {
        dia: result.getDate(),
        mes: result.getMonth() + 1
    };
};

const corpusChristi = function(ano) {
    const { dia, mes } = pascoa(ano);
    const dataPascoa = new Date(`${ano}-${mes}-${dia}`);
    const days = 60;
    const result = new Date(dataPascoa);
    result.setDate(result.getDate() + days);

    return {
        dia: result.getDate(),
        mes: result.getMonth() + 1
    };

};

const sextaFeiraSanta = function(ano) {
    const { dia, mes } = pascoa(ano);
    const dataPascoa = new Date(`${ano}-${mes}-${dia}`);
    const days = 2;
    const result = new Date(dataPascoa);
    result.setDate(result.getDate() - days);

    return {
        dia: result.getDate(),
        mes: result.getMonth() + 1
    };
};

module.exports = {
    pascoa,
    carnaval,
    corpusChristi,
    sextaFeiraSanta,
    feriadosMoveis
};