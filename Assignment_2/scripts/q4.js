function deleteRowsMissingNameAndEmail() {
    var spreadsheet = SpreadsheetApp.getActive()
    var nameRange = spreadsheet.getRange("F8:F" + spreadsheet.getLastRow())
    var emailRange = spreadsheet.getRange("J8:J" + spreadsheet.getLastRow())
  
    var nameRangeValues = nameRange.getValues()
    var emailRangeValues = emailRange.getValues()
    var deletedCount = 0
    for(var i=0; i<nameRangeValues.length; i++) {
      if(nameRangeValues[i]=='' && emailRangeValues[i] == ''){
        spreadsheet.deleteRow(i+8-deletedCount)
        deletedCount+=1
      }
    }
  }
  