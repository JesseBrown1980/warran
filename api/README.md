# ⌛️ API Node - Warren Code Challenge

<br>

----

<br>

## 🚀 Challenge
Create an API that process deposits, payments and withdrawls

## 👨🏽‍💻 Tech Stack
- Node.js
- Typescript
- Express
- Jest
- Docker
- Mongoose
- MongoDB
- React
- Javascript

## 📝 Functional Requirements
- Get user statement
- Make a deposit
- Make a payment
- Make a withdrawl

- `TODO` Monetize the balance
- `TODO` Add transactions seed

## 🚙 How to run this application

1. `git clone` to download the repository;
2. `npm install` to install the dependencies;
3. `migrate:up` to seed the Docker database; 
3. `cd api && npm run start` to run the project locally;
4. `cd api && docker-compose build --no-cache && docker-compose up -d --force-recreate` to run in Docker

## 🛤 Endpoints

### 🛒 Base URL: If the backend is running locally, the base url is: http://localhost:3000/, else it's http://localhost/ .

### 🔐 Routes

<br>

**`GET /users/all`** This endpoint returns a list the users registered
<br>
**`GET /users/{id}`** This endpoint returns the details of a given user from it's `id`
<br>
**`POST /users/signup`** This endpoint registers an user

The body of the resquest must be:

```
{
    "email": "warren@mail.com",
    "password": "123456",
    "name": "Warren"
}

```
<br>

**`POST /wallet` ** This is a generic endpoint to handle the user transactions. The transaction `category` must be `deposit`, `payment` or `withdrawl`.

```
{
    "user_id": "602c982bba4ca81124ae0b2b",
    "category": "payment",
    "amount": 100
}

```


<br>

**`GET /wallet/{id}`** This endpoint returns the user statement from it's `id`. Also it must be provided the _query parameters_ `limit`,`skip` and `order_by` for the pagination.  


#### 👋🏽 How to reach me

Lourenço Passos | Fullstack Software Engineer | lo.passos93@gmail.com | 55-51-996106010





