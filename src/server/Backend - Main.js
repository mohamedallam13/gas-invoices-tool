function doGet(e) {
  var isAccountAllowed = getIfAccountIsAllowed();
  var variables = {};
  if (SITE_PAGES_MANAGER.Route[e.parameters.v]) {
    return SITE_PAGES_MANAGER.render(e.parameters.v, variables);
  }
  if (!isAccountAllowed) {
    return SITE_PAGES_MANAGER.render('forbidden');
  }
  return SITE_PAGES_MANAGER.render('index');
}

function getIfAccountIsAllowed() {
  const allowedAccounts = ["mohamed.allam@auto1.com", "philipp.lux@auto1.com"];
  var currentEmail = Session.getActiveUser().getEmail();
  if (allowedAccounts.indexOf(currentEmail) != -1) {
    return true;
  }
  return false;
}

function sendToSheets(answersObj) {
  addAdditionalParametersToAnswersObj(answersObj);
  var response = SHEETS.writeEntryToSheet(answersObj)
  return response;
}


function addAdditionalParametersToAnswersObj(answersObj) {
  addUser(answersObj);
  addTimestamp(answersObj);
  addLines(answersObj);
}

function addTimestamp(answersObj) {
  var timestamp = createTimestamp("dd.MM.YYYY HH:mm:ss");
  answersObj.timestamp = [{
    value: timestamp
  }];
}

function addUser(answersObj) {
  var user = Session.getActiveUser().getEmail();
  answersObj.user = [{
    value: user
  }];
}

function addLines() {
  answersObj.lineNumber = [];
  answersObj.amount.forEach(amountObj => {
    var lineNumObj = {
      value: amountObj.lineNumber
    }
    answersObj.lineNumber.push(lineNumObj);
  })
}

function createTimestamp(format) {
  var timestamp = Utilities.formatDate(new Date(), "Europe/Berlin", format);
  return timestamp;
}