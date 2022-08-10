const passport = require("passport");
var GoogleStrategy = require("passport-google-oauth20").Strategy;

const CLIENT_ID =
  "642165220764-2khvsfgpm17br7fokbgr64rvltgr72r5.apps.googleusercontent.com";
const CLIENT_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      // Here you can
      cb(null, profile);
    }
  )
);

// if i use session i have to use these two function
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
