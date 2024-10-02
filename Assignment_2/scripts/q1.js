function fillNamesBasedOnGmail() {
  var spreadsheet = SpreadsheetApp.getActive()
  var nameRange = spreadsheet.getRange("F8:F" + spreadsheet.getLastRow())
  var gmailRange = spreadsheet.getRange("J8:J" + spreadsheet.getLastRow())
  var newRange = []
  nameRangeValues = nameRange.getValues()
  gmailRangeValues = gmailRange.getValues()
  // console.log(nameRangeValues)
  // console.log(gmailRangeValues[1][0].split("@")[0].split(".").join(" "))
  for(i=0; i<nameRangeValues.length; i++) {
    if(nameRangeValues[i][0] == '') {
      newRange.push([gmailRangeValues[i][0].split("@")[0].split(".").join(" ")])
    }
    else {
      newRange.push(nameRangeValues[i])
    }
  }
  nameRange.setValues(newRange)
}
