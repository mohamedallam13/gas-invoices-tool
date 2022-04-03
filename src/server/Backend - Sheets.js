; (function (root, factory) {
  root.SHEETS = factory()
})(this, function () {

  var SHEETS = {};

  const SHEETOPTIONS = {
    LPF: {
      ssid: "1BXjk42Y10Cp73dEytaaJ7Yo-rcKu8sN8lzJJ5Po81xQ",
      sheetName: "LPF",
      headerRow: 1,
      skipRows: 1,
      countByCol: 1
    },
    AGAS: {
      ssid: "1BXjk42Y10Cp73dEytaaJ7Yo-rcKu8sN8lzJJ5Po81xQ",
      sheetName: "AGAS",
      headerRow: 1,
      skipRows: 1,
      countByCol: 1
    }
  }

  function writeEntryToSheet(answersObj) {
    var invoiceType = answersObj.invoiceType[0].value;
    var sheetOptions = SHEETOPTIONS[invoiceType];
    var sheet = getSheet(sheetOptions);
    var header = getHeader(sheet, sheetOptions);
    console.log(header);
    var lastRow = getlastRow(sheet, sheetOptions);
    var writeArray = getWriteArr(answersObj, header);
    try {
      writeToSheet(writeArray, sheet, lastRow);
    } catch (e) {
      return e;
    }
  }

  function getSheet(sheetOptions) {
    var sheet = SpreadsheetApp.openById(sheetOptions.ssid).getSheetByName(sheetOptions.sheetName);
    return sheet;
  }

  function getWriteArr(answersObj, header) {
    var writeArr = [];
    var linesCount = answersObj.amount.length;
    for (let i = 0; i < linesCount; i++) {
      var rowArray = createRowArray(answersObj, header, i);
      writeArr.push(rowArray);
    }
    return writeArr;
  }

  function createRowArray(answersObj, header, i) {
    var rowArray = header.map(head => {
      return createArrayEntry(answersObj, head, i);
    })
    return rowArray;
  }

  function createArrayEntry(answersObj, head, i) {
    console.log([answersObj,head,i])
    if (answersObj[head]) {
      if (answersObj[head][i]) {
        return answersObj[head][i].value;
      }
      return answersObj[head][0].value;
    }
    return null
  }

  function getlastRow(sheet, sheetOptions) {
    var countByColValues = sheet.getRange(sheetOptions.headerRow, sheetOptions.countByCol, sheet.getLastRow(), 1).getValues();
    countByColValues = countByColValues.filter(row => {
      return row.length != 0 && row[0] != "";
    });
    return countByColValues.length;
  }

  function getHeader(sheet, sheetOptions) {
    var header = sheet.getRange(sheetOptions.headerRow, 1, 1, sheet.getLastColumn()).getValues()[0];
    header = header.filter(row => {
      return row.length != 0 && row[0] != "";
    });
    return header
  }

  function writeToSheet(writeArray, sheet, lastRow) {
    console.log(writeArray);
    sheet.getRange(lastRow + 1, 1, writeArray.length, writeArray[0].length).setValues(writeArray);
  }

  SHEETS.writeEntryToSheet = writeEntryToSheet;

  return SHEETS;

})