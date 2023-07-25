# senew-tech-task-1

This project is the solution for the task 1 given to me for recruiting purposes. It contains both back-end and front-end folders named respectively 'front' and 'back'

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [APIs](#apis)

## Installation

1. Install dependencies using command 'npm i' in both 'front' and 'back' directories
2. Create and include '.env' file in the root directory of 'back'. Following are the variable names to include in the .env file.
   . DB_USERNAME
   . DB_PASSWORD
   . DB_DATABASE=senew
   . DB_HOST
3. Create a database using MySQL and provide its name to the .env file
4. Start the server using command 'npm start' in both 'front' and 'back'. The back-end server will start on port 4000, while front-end will start on port 3000. A table named 'people' will be created in your database, if it is not already created, when back-end server is started.

## Usage

After starting back-end server, make api requests to the server. Use http://localhost:4000 as the domain name for the endpoints. After starting front-end server, go to the url 'http://localhost:3000' on your browser.

## APIs

### API 1: [Get People]

Displays all records in the 'people' table.

**Endpoint:** `/api/person/get-people`
**Method:** `GET`

### API 2: [Creat Single Person]

Use this api to create a single person

**Endpoint:** `/api/person/single`
**Method:** `POST`

**Request Body:**

```json
{
  "id": "unique id", // string datatype. Optional field
  "name": "name", // string datatype
  "contact": "value2" // string datatype
}
```

### API 3: [Insert Random People]

This api inserts random people to the 'people' table

**Endpoint:** `/api/person/insert-random-people`
**Method:** `POST`

### API 4: [Insert People from CSV file]

This api inserts data to the 'people' table after extracting it from a csv file. File should contain minimum 20 records, otherwise an error is returned.

**Endpoint:** `/api/person/multi`
**Method:** `POST`

**Request Body:**

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| csvFile   | file | Upload file |
