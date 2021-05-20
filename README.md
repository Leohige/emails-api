# emails-api

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
git clone git@github.com:leohige/emails-api.git # or clone your own fork
cd emails-api
npm install
node app.js
```
[heroku deployed api](https://emails-api-v1.herokuapp.com/api/v1/emails/)

## API Requests

Get all emails
```sh
GET https://emails-api-v1.herokuapp.com/api/v1/emails/
```
Create email
```sh
POST https://emails-api-v1.herokuapp.com/api/v1/emails/
```
Get single email
```sh
GET https://emails-api-v1.herokuapp.com/api/v1/emails/:id
```
Update email
```sh
PUT https://emails-api-v1.herokuapp.com/api/v1/emails/:id
```
Remove email
```sh
DELETE https://emails-api-v1.herokuapp.com/api/v1/emails/:id
```
