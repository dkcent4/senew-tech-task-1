# Back-End

This is the back-end solution. It primarily contains api's.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [APIs](#apis)

## Installation

1. Install dependencies using command 'npm i' in this directory.
2. Create and include '.env' file in the root directory of 'back'. Following are the variable names to include in the .env file.
   . DB_USERNAME
   . DB_PASSWORD
   . DB_DATABASE=senew
   . DB_HOST
   . PORT
3. Create a database using MySQL and provide its name to the .env file
4. Start the server using command 'npm start' in 'back' directory. The back-end server will start on port 4000. A table named 'people' will be created in your database, if it is not already created when this server starts.

## Usage

After starting back-end server, make api requests to the server. Use http://localhost:4000 as the domain name for the endpoints.

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
