const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

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
      //   Check: You can check your in database
      //   You can save  user
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
