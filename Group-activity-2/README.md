## Tasks

> Work in group to solve these tasks.

## Task 1

Inside the `src` directory

1. Run:

```sh
npm install
npm run dev
```

2. create a file `.env` and add the following content:

```text
MONGODB_URI=mongodb+srv://tivi:SqZsopHbsRtRDO24@cluster0.1x4ks.mongodb.net/tht2?retryWrites=true&w=majority
PORT=3001
```

2. Test the endpoints with **POSTMAN**

## Task 2

- What is the URL of the database? - mongodb+srv://tivi:SqZsopHbsRtRDO24@cluster0.1x4ks.mongodb.net/tht2?retryWrites=true&w=majority
- What is the the password for the database? - SqZsopHbsRtRDO24
- Why are we using `.env` file? - So they're can be stored locally and not be uploaded to code repositories online for everyone to read.
- How do access environment variables? - process.env.EXAMPLE_ID
