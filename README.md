# cointab

## Introduction
An assignment where users data is fetched from an API and saved to sql database to get all the user details and delete it.

## Video Walkthrough of the project
Link:- <a href="https://drive.google.com/file/d/1Tb11QrfaW9Zy1qR39lw-Wai2-8i1RUJG/view?usp=sharing">Demo<a>
## Features

- fetch users data and add in to SQL database
- delete all users data
- render all user details
- pagination
- search users data by country
- filter users data by gender

## Installation & Getting started

```bash
npm install 
npm run server
```

## APIs Used
random-user-API :- https://randomuser.me/api

## API Endpoints

### GET Method /fetch-users
  response:
  ```bash
            200 ok {message: "Users fetched and stored successfully."}
            500 { error: 'An error occurred while fetching and storing users.' }
  ```
  
### GET Method /get-all-users
  response:
   ```bash
                200 ok (users data)
                500 { error: "Internal Server Error" }
   ```

  ### DELETE Method /delete-all-users
  response: -
   ```bash
          200 ok { message: 'All users deleted successfully.' }
          500 { error: 'An error occurred while deleting users.' }
   ```

## Technology Stack

- Node.js
- Express.js
- SQL
- sequelize
- HTML
- CSS
- Javascript
