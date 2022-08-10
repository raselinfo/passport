const router = require("express").Router();
const passport = require("passport");

// This router for logout user
router.get("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("http://localhost:3000");
  });
});

// This router call from frontend to get user information
router.get("/login/success", (req, res) => {
  console.log(req.user);

  if (!req.user) {
    return res.send({ message: "User not found" });
  }
  res.status(200).json({
    success: true,
    message: "successfull",
    user: req.user,
    //   cookies: req.cookies
  });
});

// These two routes for google popup and /google router call from frontend
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:3000/login",
    successRedirect: "http://localhost:3000",
  })
);

module.exports = router;
