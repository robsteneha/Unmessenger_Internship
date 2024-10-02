function fillMissingEmails() {
    var defaultGmail = "support@unmessenger.com"
  
    var spreadsheet = SpreadsheetApp.getActive()
    var nameRange = spreadsheet.getRange("F8:F" + spreadsheet.getLastRow())
    var emailRange = spreadsheet.getRange("J8:J" + spreadsheet.getLastRow())
  
    var nameRangeValues = nameRange.getValues()
    var emailRangeValues = emailRange.getValues()
    var newValues = []
  
    for(var i=0; i<nameRangeValues.length; i++) {
      if(nameRangeValues[i]!='' && emailRangeValues[i] == ''){
        newValues.push([defaultGmail])
      }
      else {
        newValues.push(emailRangeValues[i])
      }
    }
    // console.log(newValues)
    emailRange.setValues(newValues)
  }
  