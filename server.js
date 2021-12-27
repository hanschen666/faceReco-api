import express from "express";
import cors from "cors";
import knex from "knex";
import bcrypt from "bcrypt";
import { register } from "./controller/register.js";
import { signin } from "./controller/signin.js";
import { profile } from "./controller/profile.js";
import { image, apiCall } from "./controller/image.js";

const db = knex({
  client: "pg",
  connection: {
    connectionString: process.env.DATABESE_URL,
    ssl: true,
  },
});

db.select("*")
  .from("users")
  .then((data) => {
    console.log(data);
  });

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("it is working");
});

app.post("/signin", (req, res) => {
  signin(req, res, db, bcrypt);
});

app.post("/register", (req, res) => {
  register(req, res, db, bcrypt);
});

app.get("/profile/:id", (req, res) => {
  profile(req, res, db);
});

app.put("/image", (req, res) => {
  image(req, res, db);
});

app.post("/imageurl", (req, res) => {
  apiCall(req, res);
});

app.listen(process.env.PORT || 3002, () => {
  console.log(`listening on ${process.env.PORT}`);
});
