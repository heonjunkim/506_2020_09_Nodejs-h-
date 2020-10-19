firebase
  .auth()
  .sendSignInLinkToEmail(email, actionCodeSettings)
  .then(function () {
    // The link was successfully sent. Inform the user.
    // Save the email locally so you don't need to ask the user for it again
    // if they open the link on the same device.
    window.localStorage.setItem("emailForSignIn", email);
  })
  .catch(function (error) {
    // Some error occurred, you can inspect the code: error.code
  });
// Confirm the link is a sign-in with email link.
if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
  // Additional state parameters can also be passed via URL.
  // This can be used to continue the user's intended action before triggering
  // the sign-in operation.
  // Get the email if available. This should be available if the user completes
  // the flow on the same device where they started it.
  var email = window.localStorage.getItem("emailForSignIn");
  if (!email) {
    // User opened the link on a different device. To prevent session fixation
    // attacks, ask the user to provide the associated email again. For example:
    email = window.prompt("Please provide your email for confirmation");
  }
  // The client SDK will parse the code from the link for you.
  firebase
    .auth()
    .signInWithEmailLink(email, window.location.href)
    .then(function (result) {
      // Clear email from storage.
      window.localStorage.removeItem("emailForSignIn");
      // You can access the new user via result.user
      // Additional user info profile not available via:
      // result.additionalUserInfo.profile == null
      // You can check if the user is new or existing:
      // result.additionalUserInfo.isNewUser
    })
    .catch(function (error) {
      // Some error occurred, you can inspect the code: error.code
      // Common errors could be invalid email and invalid or expired OTPs.
    });
}
$(function () {
  $("button.btn-delete").click(function () {
    let text = $(this).text();
    let id = $(this).data("id");
    if (text === "삭제") {
      if (confirm("정말 삭제할까요?")) {
        document.location.replace("/delete/" + id);
      }
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#btn-save").addEventListener("click", function () {
    let todo_input = document.querySelector("input[name='t_text']");
    let t_text = todo_input.value;
    if (t_text === "") {
      alert("하고싶은거 입력 !");
      document.querySelector("input[name='t_text']").focus();
      return false;
    }
    if (confirm("저장할까요?")) {
      document.querySelector("form").submit();
    }
  });
});
