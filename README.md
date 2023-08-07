# cointab

## Introduction
The website consists of two pages: the Home Page and the User Detail Page that allows users to interact with the application in three main ways - fetching user data from an external API, deleting user data from the database, and viewing user details in a paginated and filtered table format.

## Video Walkthrough of the project
<a href="https://drive.google.com/file/d/1Tb11QrfaW9Zy1qR39lw-Wai2-8i1RUJG/view?usp=sharing">Demo<a>

## Home Page

### Fetch Users: 
This button allows users to fetch user data from the randomuser.me API. The application is designed to fetch a bulk of around 50 to 100 user records on a single click. The retrieved data is then stored in an SQL database table.

### Delete Users: 
This button enables users to remove all entries in the database, effectively clearing all user data. However, it provides a validation step to confirm the user's intent before proceeding with the deletion.

### User Details:
Clicking this button takes users to Page 2, the User Detail Page. Here, they can view the user data stored in the database in a tabular format, with pagination and filtering options.



## User Detail Page
The User Detail Page presents the user data stored in the database in a well-organized table format. The table is designed to display ten records per page, making navigation through the data seamless and convenient. Users can utilize pagination buttons to move between different pages. Additionally, a filtering feature allows users to search and display specific data based on selected criteria.


## Screenshots
<img align = "left" src="https://www.linkpicture.com/q/Screenshot-141_1.png">
<img  align = "left" src="https://www.linkpicture.com/q/Screenshot-142_2.png" >

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
