function fillAddress() {
    var defaultAddress = "Address not Available"
  
    var spreadsheet = SpreadsheetApp.getActive()
    var addressRange = spreadsheet.getRange("L8:L" + spreadsheet.getLastRow())
  
    var addressRangeValues = addressRange.getValues()
    var newValues = []
  
    for(var i=0; i<addressRangeValues.length; i++) {
      if(addressRangeValues[i] ==''){
        newValues.push([defaultAddress])
      }
      else {
        newValues.push(addressRangeValues[i])
      }
    }
    // console.log(newValues)
    addressRange.setValues(newValues)
  }
  