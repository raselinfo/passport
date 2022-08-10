const router = require("express").Router();
const passport = require("passport");

// Failed route
router.get("/login/failed", (req, res) => {
  // We can send the failed message
  res.status(401).json({
    message: "failed",
  });
});
// Success route
router.get("/login/success", (req, res) => {
  console.log(req.user);
  // We can generate jwt token
  res.status(200).json({
    message: "Success",
    data: req.user,
    // jwt:jwt
  });
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successMessage: "/login/failed",
    failureMessage: "/login/success",
  })
);
module.exports = router;
