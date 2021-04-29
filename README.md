# MaltaPark (Featured item test) Project 

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
 * [UI test coverage](#ui-test-coverage)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Project Structure](#project-structure)
  * [Executing tests](#executing-tests)
  
<!-- ABOUT THE PROJECT -->
## About The Project

A small UI test implementation via [CodeceptJS framework](https://codecept.io/).

<!-- UI test coverage --> 
## UI test coverage

In this project the UI tests cover a books, antiques and art classified searches in https://www.maltapark.com.

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow the instructions below:

<!-- Prerequisites -->
### Prerequisites
 
* Node: 
> https://nodejs.org/

* NPM: 
> https://www.npmjs.com/get-npm

*  Java SE Development Kit 16.0.1 (For Allure reporter):
> https://www.oracle.com/java/technologies/javase-jdk16-downloads.html

* Java:
> https://www.java.com/en/download

<!-- Installation -->
### Installation
 
* Clone the repo
```sh
git clone https://github.com/vvarsavv/maltapark.git
```
* Install NPM packages
```sh
npm install
```
* Install Allure reporting
```sh
npm install -g allure-commandline --save-dev
```

<!-- PROJECT STRUCTURE -->
## Project Structure
```
maltapark
│
├───helpers/ 
│   ├───data/
│   │   ├───classifiedsList.js
│   │   ├───domains.js
│   └───pages/
│       ├───homePage.js
│       └───searchResultsPage.js
├───node_modules/
├───output/
├───tests/
│   └───searchClassifiedsTest.js
├───README.md
├───codecept.conf.js
├───jsconfig.json
├───LICENSE
├───package-lock.json
├───package.json
└───steps_file.js
```

Helpers
* data -> The data folder holds info related to the MaltaPark URL (domains.js), and a classifieds list (classifiedsList.js).
* pages  -> The boards' page objects are located in this folder. Page objects' methods are separated depending on their use.

tests -> UI test scenarios are located in this folder.

codecept.conf.js -> The project's configuration is set in this file, example: plugins, page object links, etc.

package.json -> dependencies and scripts are located in this file.

<!-- executing-tests -->
## Executing tests

The scenarios can be launched with the following script: 
```
npm run search
```
The scenarios can be launched with the following script with reporting (Allure reporting):
```
npm run search:reporter
```
