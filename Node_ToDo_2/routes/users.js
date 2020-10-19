var express = require("express");
var router = express.Router();
var actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be whitelisted in the Firebase Console.
  url: "https://www.example.com/finishSignUp?cartId=1234",
  // This must be true.
  handleCodeInApp: true,
  iOS: {
    bundleId: "com.example.ios",
  },
  android: {
    packageName: "com.example.android",
    installApp: true,
    minimumVersion: "12",
  },
  dynamicLinkDomain: "example.page.link",
};
// Construct the email link credential from the current URL.
var credential = firebase.auth.EmailAuthProvider.credentialWithLink(
  email,
  window.location.href
);

// Link the credential to the current user.
firebase
  .auth()
  .currentUser.linkWithCredential(credential)
  .then(function (usercred) {
    // The provider is now successfully linked.
    // The phone user can now sign in with their phone number or email.
  })
  .catch(function (error) {
    // Some error occurred.
  });
// After asking the user for their email.
var email = window.prompt("Please provide your email");
firebase
  .auth()
  .fetchSignInMethodsForEmail(email)
  .then(function (signInMethods) {
    // This returns the same array as fetchProvidersForEmail but for email
    // provider identified by 'password' string, signInMethods would contain 2
    // different strings:
    // 'emailLink' if the user previously signed in with an email/link
    // 'password' if the user has a password.
    // A user could have both.
    if (
      signInMethods.indexOf(
        firebase.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD
      ) != -1
    ) {
      // User can sign in with email/password.
    }
    if (
      signInMethods.indexOf(
        firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
      ) != -1
    ) {
      // User can sign in with email/link.
    }
  })
  .catch(function (error) {
    // Some error occurred, you can inspect the code: error.code
  });
firebase
  .auth()
  .signOut()
  .then(function () {
    // Sign-out successful.
  })
  .catch(function (error) {
    // An error happened.
  });

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
