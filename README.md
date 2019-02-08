## Bank Service APIs 
Application to do CRUD operations on a bank system using Nodejs and Postgresql. 

### Requirements
- Nodejs
- Express js
- Postgresql 
- Postman
- Knex 
- Bookshelf

### Install all the dependencies 
- `npm install --save`

### Run the migration script
- `knex migration:latest` from the migration folder. 
- Setup the database

### Run the code locally
- Port is 8899
- Run the script by `node app.js`

### Endpoint
- \branch : GET all the branch details.
- \branch\:ifsc : GET the branch details based on the ifsc code given
