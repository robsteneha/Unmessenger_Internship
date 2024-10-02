function fillAgeBasedOnMeanAge() {
    var spreadsheet = SpreadsheetApp.getActive()
    var ageRange = spreadsheet.getRange("G8:G" + spreadsheet.getLastRow())
    var newRange = []
    var ageRangeValues = ageRange.getValues()
    // var avg = ageRangeValues.reduce((a, b) => parseFloat(a) + parseFloat(b)) / ageRangeValues.length
    // console.log(ageRangeValues)
    // console.log(avg)
    var average = 0
    var count = 0
    ageRange.getValues().map(function(value) {
      if(value[0] != '') {
        average += value[0]
        count +=1
      }
    })
    average = Math.ceil(average/count)
  
    ageRange.getValues().map(function(value) {
      if(value[0] == '') {
        newRange.push([average])
      }
      else {
        newRange.push([value[0]])
      }
    })
    ageRange.setValues(newRange)
    // console.log(newRange)
  }
  