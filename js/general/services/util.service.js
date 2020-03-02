export const utilService = {
    getRandomInt,
    makeLorem,
    makeId,
    getTodayDate,
    getShortTxt,
    getTimeByTimestamp,
    getRandomName
}
let words = []
_populateWords()

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function makeId(length = 5) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function getTodayDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    return today;
}

function getShortTxt(txt, numOfChars) {
    let txtToShow = txt.substring(0, numOfChars - 3);
    txtToShow += '...';
    return txtToShow;
}

function getTimeByTimestamp(timestamp) {
    var date = new Date(timestamp * 1000);
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDay();
    var hour = date.getHours();
    var minute = date.getMinutes();
    return day + '-' + month + '-' + year + '  ' + hour + ':' + minute
}


function makeLorem(length) {
    var randStr = '';
    while (randStr.length < length) {
        let word = words[getRandomInt(1, 28)];
        randStr += word + ' ';
    }
    randStr = randStr[0].toUpperCase() + randStr.substr(1)
    return randStr;
}

function _getRandChar() {
    var LETTERS = 'abcdefghijklmnopqrstuvwxyz';
    var randIndex = parseInt(Math.random() * LETTERS.length)
    return LETTERS.charAt(randIndex);
}

function getRandomName() {
    var names = ['Guy', 'Oz', 'Rami', 'Ran', 'Aviv', 'Alex']
    return names [getRandomInt(0, names.length-1)]
}

function _createWord(length) {
    var word = '';
    while (word.length < length) {
        var randChar = _getRandChar();
        word += randChar;
    }

    return word;
}

function _populateWords() {
    words[1] = "escapology"
    words[2] = "brightwork"
    words[3] = "verkrampte"
    words[4] = "protectrix"
    words[5] = "nudibranch"
    words[6] = "grandchild"
    words[7] = "newfangled"
    words[8] = "flugelhorn"
    words[9] = "mythologer"
    words[10] = "pluperfect"
    words[11] = "jellygraph"
    words[12] = "quickthorn"
    words[13] = "rottweiler"
    words[14] = "technician"
    words[15] = "cowpuncher"
    words[16] = "middlebrow"
    words[17] = "jackhammer"
    words[18] = "triphthong"
    words[19] = "wunderkind"
    words[20] = "dazzlement"
    words[21] = "jabberwock"
    words[22] = "witchcraft"
    words[23] = "pawnbroker"
    words[24] = "thumbprint"
    words[25] = "motorcycle"
    words[26] = "cryptogram"
    words[27] = "torchlight"
    words[28] = "bankruptcy"
}