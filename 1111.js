function chineseNumber(alaberNumber) {
    var chineseNumber = ("零壹貳參肆伍陸柒捌玖").split('');
    var amountSmallUnit = ['', '拾', '佰', '仟'];
    var amountBigUnit = ['', '萬', '億', '兆', '京', '垓', '秭', '穰', '溝', '澗', '正', '載'];
    var alaberNumberSplit = new Array();
    var alaberNumberSplitCount = parseInt(alaberNumber.length / 4);
    
    for (var i = 0; i <= alaberNumberSplitCount; i++) {
        if (i == 0 && alaberNumber.length % 4 != 0) {
            alaberNumberSplit[i] = alaberNumber.substr(0, alaberNumber.length % 4);
            alaberNumber = alaberNumber.slice(alaberNumber.length % 4);
        } else if (alaberNumber != '') {
            alaberNumberSplit[i] = alaberNumber.substr(0, 4);
            alaberNumber = alaberNumber.slice(4);
        }
    }
    
    var chineseBigNumber = '';
    
    for (var i = 0; i < alaberNumberSplit.length; i++) {
        for (var j = 0; j < alaberNumberSplit[i].length; j++) {
            if (alaberNumberSplit[i][0] != 0 && j == 1 
                && alaberNumberSplit[i][j] == 0 
                && alaberNumberSplit[i].length == 4 
                && alaberNumberSplit[i][2] != 0) {
                chineseBigNumber += chineseNumber[alaberNumberSplit[i][j]];
            } else if (alaberNumberSplit[i][j] != 0) {
                chineseBigNumber += chineseNumber[alaberNumberSplit[i][j]];
                chineseBigNumber += amountSmallUnit[alaberNumberSplit[i].length - 1 - j];
            } else if (alaberNumberSplit[i][j] == 0 && alaberNumberSplit[i][j - 1] != 0) {
                if (alaberNumberSplit[i][alaberNumberSplit[i].length - 1] != 0) {
                    chineseBigNumber += chineseNumber[alaberNumberSplit[i][j]];
                }
            }
        }
        if (parseInt(alaberNumberSplit[i]) != 0) {
            chineseBigNumber += amountBigUnit[alaberNumberSplit.length - 1 - i];
        }
    }

    if (chineseBigNumber != '') {
        /* chineseBigNumber += '元整'; */
        chineseBigNumber = '新台幣' + chineseBigNumber + '元整';
    }
    return chineseBigNumber;
}