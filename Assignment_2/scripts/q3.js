function cleanPhoneNumber() {
    var spreadsheet = SpreadsheetApp.getActive()
    var phNoRange = spreadsheet.getRange("K8:K" + spreadsheet.getLastRow())
    var newValues = []
  
    values = phNoRange.getValues()
    formulas = phNoRange.getFormulas()
  
    // console.log(phNoRange.getValues())
    // console.log(phNoRange.getFormulas())
  
    for(var i=0; i<values.length; i++) {
      if(formulas[i] != '' ) {
        //convert formula to text
        newValues.push(["91-"+formulas[i][0].split("=")[1].split("-")[1]])
      }
      else {
        if(values[i] != '') {
          newValues.push(["91-"+values[i][0].split("-")[1]])
        }
        else {
          newValues.push([''])
        }
      }
    
    }
    phNoRange.setValues(newValues)
    // console.log(newValues)
  }
  