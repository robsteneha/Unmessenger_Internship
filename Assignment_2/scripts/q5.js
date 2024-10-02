function highlightTopTenHighestSalariedEmployees() {
    var spreadsheet = SpreadsheetApp.getActive()
    var salaryRange = spreadsheet.getRange("M8:M" + spreadsheet.getLastRow())
  
    var conditionalFormatRules = spreadsheet.getActiveSheet().getConditionalFormatRules();
    conditionalFormatRules.push(SpreadsheetApp.newConditionalFormatRule()
    .setRanges([spreadsheet.getRange("E8:M" + spreadsheet.getLastRow())])
    .whenFormulaSatisfied('=rank($M8,$M$8:$M$55,false)<=10')
    .setBackground('#FF9900')
    .build());
    SpreadsheetApp.getActiveSheet().setConditionalFormatRules(conditionalFormatRules);
  }
  