function cleanDepartment() {
    var spreadsheet = SpreadsheetApp.getActive()
    var deptRange = spreadsheet.getRange("I8:I" + spreadsheet.getLastRow())
    
    var deptRangeValues = deptRange.getValues()
    var newValues = []
    for( var i=0; i<deptRangeValues.length; i++) {
      if(deptRangeValues[i][0] !=0 ) {
        newValues.push([toProperCase(deptRangeValues[i][0])])
      }
      else {
        newValues.push(deptRangeValues[i])
      }
    }
    // console.log(newValues)
    deptRange.setValues(newValues)
    spellcheck() //there's no spell check function in languageApp for Apps Script yet
  }
  
  function toProperCase(str) {
    var properStr = ''
    for (word of str.split(" ")) {
      if(word.toUpperCase() == 'HR') {
        properStr += ' HR'
      }
      else if(word.toUpperCase() == 'IT') {
        properStr += ' IT'
      }
      else {
      properStr += ' ' + word[0].toUpperCase() + word.slice(1).toLowerCase()
      }
    }
    return properStr.trim()
  }
  
  function spellcheck() {
    var spreadsheet = SpreadsheetApp.getActive();
    spreadsheet.getRange('I10').activate();
    spreadsheet.getCurrentCell().setValue('IT Development');
    spreadsheet.getRange('I12').activate();
    spreadsheet.getCurrentCell().setValue('Sales');
    spreadsheet.getRange('I14').activate();
    spreadsheet.getCurrentCell().setValue('IT Development');
    spreadsheet.getRange('I16').activate();
    spreadsheet.getCurrentCell().setValue('Sales');
    spreadsheet.getRange('I22').activate();
    spreadsheet.getCurrentCell().setValue('Management');
    spreadsheet.getRange('I27').activate();
    spreadsheet.getCurrentCell().setValue('Management');
    spreadsheet.getRange('I32').activate();
    spreadsheet.getCurrentCell().setValue('Management');
    spreadsheet.getRange('I34').activate();
    spreadsheet.getCurrentCell().setValue('IT Development');
    spreadsheet.getRange('I36').activate();
    spreadsheet.getCurrentCell().setValue('Sales');
    spreadsheet.getRange('I38').activate();
    spreadsheet.getCurrentCell().setValue('Management');
    spreadsheet.getRange('I40').activate();
    spreadsheet.getCurrentCell().setValue('IT Development');
    spreadsheet.getRange('I42').activate();
    spreadsheet.getCurrentCell().setValue('Sales');
    spreadsheet.getRange('I45').activate();
    spreadsheet.getCurrentCell().setValue('Operation');
    spreadsheet.getRange('I47').activate();
    spreadsheet.getCurrentCell().setValue('Sales');
    spreadsheet.getRange('I49').activate();
    spreadsheet.getCurrentCell().setValue('Management');
    spreadsheet.getRange('I53').activate();
    spreadsheet.getCurrentCell().setValue('IT Development');
    spreadsheet.getRange('I55').activate();
    spreadsheet.getCurrentCell().setValue('Sales');
  };