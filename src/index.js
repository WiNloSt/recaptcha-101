/* global grecaptcha */
import "./styles.css";

grecaptcha.ready(function() {
  console.log("ready");
  grecaptcha
    .execute("6LeRA8MUAAAAAE2DL-xOr5S4unrNxb46Qkt0XpAH", {
      action: "codesandbox"
    })
    .then(token => {
      console.log("token", token);
    });
});
