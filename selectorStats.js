'use strict';

function RunSelectorStats() {

    var result = {};
    var unused_selectors = [];
    result.unused_selectors = unused_selectors;
    var selector_times = [];
    result.selector_times = selector_times;
    var sheets = document.styleSheets;
    var sheetsLength = sheets.length;
    for (var i = 0; i < sheetsLength; i++) {
        var sheetRules = sheets[i].rules;
        if (sheetRules != null) {
            var sheetRulesLength = sheetRules.length;
            for (var j = 0; j < sheetRulesLength; j++) {
                var sheetRule = sheetRules[j];
                var selectorText = sheetRule.selectorText;
                var startTime = new Date;
                var selectorResults = document.querySelectorAll(selectorText);
                if (selectorResults.length == 0) {
                    unused_selectors.push(selectorText);
                }
                var time = new Date - startTime;
                selector_times.push({selector_text: selectorText, selector_time: time});
            }
        }
    }
    selector_times.sort(function (a, b) {
        return b.selector_time - a.selector_time;
    });
    return result;
}
