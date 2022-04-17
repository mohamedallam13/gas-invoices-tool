# gas-invoices-tool
A simple Google Apps Script WebApp to submit entries to sheet and relies on a components library

![Application](./src/screenshots/Screenshot1.png)


## Table of Contents

* [Technologies](#technologies)
* [Installation](#installation)
* [Features](#features)
* [Questions](#questions)



## Technologies 

* Google Apps Script
* JavaScript ES6
* HTML5
* CSS3
* clasp

## Installation

To install this application, in VS code after cloning the repo, use [clasp CLI](https://developers.google.com/apps-script/guides/clasp) to create the .clasp.json file

```
clasp create [scriptTitle]
```

Then add the destination script id to the .clasp.json file and then push the code using the following command

```
clasp push
```


## Features

* Library that generates HTML modules and components that later is used to create the page elements
* Accepts different types of invoices with different conditions
* Form can add new rows and remove rows dynamically for one type of invoices
* Submits form response to the Google Apps Script backend which then writes into Google sheets



## Questions 

If you have any more questions, please contact me here:

Github Username: [mohamedallam13](https://mohamedallam13.github.io/react-professional-portfolio/)

Email: [mohamedallam.tu@gmail.com](mailto:mohamedallam.tu@gmail.com)

