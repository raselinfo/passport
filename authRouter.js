const router = require("express").Router();
const passport = require("passport");

router.post("/login", (req, res, next) => {
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      return next(next);
    }
    res.send({ user: user, err: err, info: info });
  })(req, res, next);
});

module.exports = router;
