const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;


passport.use(
  new LocalStrategy(function (username, password, done) {
    done(null, { username, password, token: "fafafaf" });
  })
);

// if i use session i have to use these two function
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
