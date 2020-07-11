function pascoa(ano) {
    a = ano % 19
    b = parseInt(ano / 100)
    c = ano % 100
    d = parseInt(b / 4)
    e = b % 4
    f = parseInt((b + 8) / 25)
    g = parseInt((b - f + 1) / 3)
    h = (19 * a + b - d - g + 15) % 30
    i = parseInt(c / 4)
    k = c % 4
    L = (32 + 2 * e + 2 * i - h - k) % 7
    m = parseInt((a + 11 * h + 22 * L) / 451)
    MES = parseInt((h + L - 7 * m + 114) / 31)
    DIA = 1 + (h + L - 7 * m + 114) % 31

    console.log(DIA, MES)
}
pascoa(2015)