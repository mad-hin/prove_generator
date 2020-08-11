let yajuu = {
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

function numProve(s, dic, object) {
    if (s !== 24) {
        var t = object + "年齡是" + s + "而" + s + " = "
        while (s >= 10) {
            digi = Math.floor(Math.log10(s))
            tmp = s % Math.pow(10, digi)
            t += '(' + dic[(s - tmp) / Math.pow(10, digi)] + ')*(1+1+4+5-1^4)^(' + dic[digi] + ')+'
            s -= s - tmp
        }
        return (t + dic[s])
    } else {
        var t = object + "年齡是" + s + "而野獸先輩是24歲"
    }
}

function isMan(gender, object) {
    switch (gender) {
        case "man": return "1. " + object + "是男性，而野獸先輩毫無疑問是男性。\n"
        case "girl": return "1. 一直以來有野獸先輩女子說，所以" + object + "是女性也可以是野獸先輩。\n"
        case "notSure": return "1. 由於野獸先輩性别成謎，所以野獸先輩可以是男也可以是女，而" + object + "也没有確定的性别也可以是野獸先輩。\n"
    }
}

function proveArtical() {
    let object = document.getElementById("object").value
    let e = document.getElementById("gender")
    let gender = e.options[e.selectedIndex].value
    let age = document.getElementById("age").value
    var proving = "論證" + object + "是野獸先輩:\n"
    proving += isMan(gender, object)
    proving += "2. " + numProve(age, yajuu, object)
    var artical = document.getElementById("artical")
    artical.innerText = proving
}