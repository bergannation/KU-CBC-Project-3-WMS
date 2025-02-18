# RTCJ Project #3

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This is a Warehouse Management System (WMS) application that allows a Warehouse Manager to assign tasks for personnel to execute as part of an order fulfillment process. The application is expected to run in tandem with an ERP system from which orders, items, customers, users, and other system parameters are pulled. The application keeps track of inventory by item, location, and lot, and keeps a separate record of inventory transactions in a cardex. It has been designed to support future development of core features of a WMS like receiving, replenishment, and barcode scanning.

## Table of Contents

- [Deployed Application](#deployed-application)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Mock-Up](#mock-up)
- [Tech-Used](#tech-used)
- [Installation](#installation)
- [License](#license)
- [Contribute](#contribute)

## Deployed Application

The live application can be found at this link:

https://ku-cbc-wms.herokuapp.com/

Although a sign up form has been provided for development purposes, in a production environment, users will be created through an admininistration page from which they will be assigned a profile, including the types of operations that they can perform in the WMS system.

## User Story

```md
AS A Warehouse Inventory Manager
I WANT to be able to pick inventory from locations in my warehouse for order fulfillment purposes
SO THAT I can keep track of my inventory, fullfill my sales orders, and make better use of the available pickers and inventory lots in the warehouse
```

For additional features to be deployed in a future release, please check the [Project Kanban](https://github.com/japinell/KU-CBC-Project-3-WMS/projects/1).

## Acceptance Criteria

```md
GIVEN a WMS system integrated to the company's ERP system
WHEN I start my day shift as a supervisor
THEN I login to the WMS system and review the sales orders to pick so that I can assign the orders based on priority
WHEN I select an order to pick
THEN I can assign the picking task to a picker
WHEN I login to the WMS system as a picker
THEN I can see the tasks assigned to me within the Tasks module
WHEN I select a Picking task to fullfill
THEN I am provided with the order and item details
WHEN I select an item to pick in the Picking module
THEN I am provided with information about the unit of measure and quantity to pick for that item
WHEN I pick the item physically
THEN I can submit the transaction to the WMS system so that the inventory for that location is updated to reflect a new balance
AND a record tracking the details of that operation are recorded in the system ledger (cardex)
WHEN I select another item to pick
THEN I am provided with information about that item, I can pick the item physically, and I can update the system to its new state
WHEN I press the cancel button
THEN I go back to the main page of the system
WHEN I press the logout button
THEN I am disconnected from the system
```

## Mock-Up

The following images portray the look and feel of the deployed application in Heroku.

### Login Page

<img src="./Assets/login.png" alt="Login Page" width="300"/>

### Main Page

<img src="./Assets/main-page.png" alt="Main Page" width="300"/>

### Tasks Page

<img src="./Assets/tasks.png" alt="Tasks Page" width="300"/>

### Picking Page

<img src="./Assets/picking.png" alt="Picking Page" width="300"/>

### Administration Page

<img src="./Assets/admin1.png" alt="Administration Page" width="300"/>
<img src="./Assets/admin2.png" alt="Administration Page" width="300"/>

## Tech-Used

This project was completed using the following technologies:

### Front End Development:

- React
- Material UI
- PWA - Service Worker

### Back End Development:

- GraphQL
- Apollo
- JWT
- Node.js
- Express.js
- MongoDB
- Mongoose
- MongoDb Atlas
- Heroku PaaS

## Installation

A JSON file containing the dependencies for the development environment as outlined above is included with this project. To set up the development environment, simply run the following command from the root folder:

```bash
npm run install
```

Next, execute the following command to seed the database with sample data from the server folder:

```bash
npm run seed
```

Once the database is seeded, run the following command from the root folder to start the application:

```bash
npm run develop
```

## License

Licensed under the [MIT](https://choosealicense.com/licenses/mit/)

    MIT License

    Copyright (c) [2021] [RTCJ]

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.

## Collaborators

Project 3: Mini-WMS

Travis Brown @ https://github.com/bergannation

Rigo A. Pinell @ https://github.com/japinell

Connor Gannaway @ https://github.com/gannacon

Joel Stockard @ https://github.com/jtstockard

## Questions

If you have any questions regarding this application please contact the team on GitHub here: (https://github.com/japinell/KU-CBC-Project-3-WMS)

---

© 2021 RTCJ. All Rights Reserved.
