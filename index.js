const express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
const passportSetup = require("./passport");
const cors = require("cors");
const app = express();
app.use(express.json({ limit: 120000 }));
app.use(express.urlencoded({ extended: true }));

// Todo: Cors Middleware
app.use(cors());
// Todo:Cookie Middleware
app.use(
  cookieSession({
    name: "session",
    keys: ["Secret-Key"],
    maxAge: 24 * 60 * 60 * 1000,
  })
);
// Todo: Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Auth Router
app.use("/auth", require("./authRouter"));

app.get("/", (req, res) => {
  res.send("Ok");
});

app.listen(4000, () => {
  console.log("http://localhost:4000");
});
