## i. Database Structure

<img src="https://github.com/yahoogm/Midterm-Project-Gigih/assets/100346233/6122f49a-91e7-46b9-9cb5-3210878956d0"/>

## iii. List API request and response

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

## iv. How to run in local
