const express = require("express");
const passport = require("passport");
const session = require("express-session");
require("./passport");
const cors = require("cors");
const app = express();
app.use(express.json({ limit: 120000 }));
app.use(express.urlencoded({ extended: true }));


// Todo: Cors Middleware
app.use(cors());
// Todo: Session Middleware
app.set("trust proxy", 1);
app.use(
  session({
    secret: "Cookie_Secret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
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
