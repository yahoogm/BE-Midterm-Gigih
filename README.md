## Database Structure

<img src="https://github.com/yahoogm/Midterm-Project-Gigih/assets/100346233/6122f49a-91e7-46b9-9cb5-3210878956d0"/>

## API Structure

<img src="https://github.com/yahoogm/Midterm-Project-Gigih/assets/100346233/27fe2829-1d62-48a0-8d1f-a5c48200d483"/>

## API Request and Response

#Videos

- Video object

```
{
  id: string,
  image_thumbnail: string,
  video_id: string
}
```

## **GET /videos**

Returns all videos in the system.

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
  data: [
           {<video_object>},
           {<video_object>},
           {<video_object>}
         ]
}
```

#Products

- Product object

```
{
  id: string,
  video_id: string,
  product_id: string,
  link_product: string,
  title: string,
  price: integer
}
```

## **GET /products**

Returns all products in the system.

- **URL Params**  
  _Required:_ `id=[string]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200
  **Content:**

```
{
    data: [
            {<product_object>},
            {<product_object>}
          ]
}
```

- **Error Response:**
- **Code:** 404  
  **Content:** `{ message : "Products not found!" }`

#Comments

- Comment object

```
{
  id: string,
  video: string,
  username: string,
  comment: string,
  timestamp: datetime(iso 8601)
}
```

## **GET /comments**

Returns all comments in the system.

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
  data: [
           {<comment_object>},
           {<comment_object>},
           {<comment_object>}
         ]
}
```

- **Error Response:**
- **Code:** 404  
  **Content:** `{ message : "Comments not found!" }`

## **POST /comments**

Creates a new comment and returns the new object.

- **URL Params**  
  None
- **Data Params**

```
  {
  	video_id: string,
  	userComment: string,
  	username: string
  }
```

- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 201  
  **Content:** `{ <comment_object> }`

- **Error Response:**
- **Code:** 400  
  **Content:** `{ message : "video id, comment, username is required!" }`

## How to run in local

#Description project

This project build to complete the midterm test in Generasi Gigih 3.0 present by Yayasan Anak Bangsa Bisa and GoTo Foundation. This project using tech stack like:

- **Express JS**
- **Node JS**
- **Mongo DB**
- **Mongoosh**
- **Clean Architecture**

#Instruction installation

- **Clone this repositories**

  You need to clone this repositories to your local laptop/computer

- **Download and install MongoDB Compass & MongoDB Shell**

  MongoDB is using for the databases and for simple using database with MongoDB Compass. You can download [MongoDB Compass](https://www.mongodb.com/try/download/compass). MongoDB Shell is using for simple syntax in terminal for create database, use database, and many more. You can download [MongoDBShell](https://www.mongodb.com/try/download/shell). After you finish install all, the next step is making the database. You can follow this step:

  - Open your MongoDB Compass software
  - Hit the button connect for connecting your local to database
  - Create database name is midterm_gigih
  - Create three collection with name **comments**, **products**, and **videos**

- **Initial the project**

  After install the MongoDB and MongoDB Shell you can open the project in your Code Editor. First you nedd to run script

  ```
  yarn install
  ```

  this script is to download all the package for running this project.

- **Run the project**

  After complete initial the project, you can run this script

  ```
  yarn dev
  ```

  this script able to run the project in localhost on port 3000. After it you can use the API in your local Postman software. If you dont have it, you can download it [Postman](https://www.postman.com/downloads/) or you wanna use other software is up to you.
