//importing express
const express = require("express");
// importing path
const path = require("path");

// initiating express
const app = express();

//middle for conditional availability depending on time of the request
app.use((req, res, next) => {
  let requestTime = new Date().getHours();
  console.log(requestTime);
  requestTime < 8 || requestTime > 17
    ? res.send(
        '<h1>Our office is not open now!!</h1><br/><h2 style="color:#fff;">Go Away!</h2>'
      )
    : next();
});

//setting a static folder
app.use(express.static(path.join(__dirname, "public")));

//endpoints and route handlers
app.get("/", function(req, res) {
  res.send(
    '<h1>Add "<span style="color:blue">home.html</span>", "<span style="color:blue">ourservices.html</span>" or "<span style="color:blue">contact.html</span>" after a "<span style="color:blue">/</span>" in the URL above to navigate.</h1>'
  );
});

// listening to port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
