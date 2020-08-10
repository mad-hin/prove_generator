var yajuu = {
    0: '1+1+4-5-1**4',
    1: '1+1+4-5*1**4',
    2: '1+1+4-5+1**4',
    3: '1+1-4+5*1**4',
    4: '1+1+4-5-1+4',
    5: '1+1+4-5+1*4',
    6: '1+1+4+5-1-4',
    7: '1+1+4+5-1*4',
    8: '1+1+4+5+1-4',
    9: '1+1*4+5-1**4'
}

function numProve(s, dic) {
    var t = s +" = "
    while (s >= 10) {
        digi = Math.floor(Math.log10(s))
        tmp = s % Math.pow(10, digi)
        t += '(' + dic[(s - tmp) / Math.pow(10, digi)] + ')*(1+1+4+5-1^4)^(' + dic[digi] + ')+'
        s -= s - tmp
    }
    return (t + dic[s])
}

function proveArtical() {

}