const express = require("express");
const router = express.Router();

//Get request to root
router.get("/", (req, res) => {
  console.log(req.query.name);
  res.send("User List");
});

//A get request to a route
router.get("/new", (req, res) => {
  //render the view users/new.ejs and fill the firstname field with default value as test
  res.render("users/new", { firstName: "test" });
});

//A post request to a route
router.post("/", (req, res) => {
  const isValid = false;
  if (isValid) {
    users.push({ firstName: req.body.firstName });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("Error");
    //Populate the field so the user doesnt have to retype
    res.render("users/new", { firstName: req.body.firstName });
    //res.render("users/new");
  }
  //get the form field's name= value and capture the value
  console.log(req.body.firstName);
  res.send("hi");
});

//dynamic parameter is created by : and then a variable
//make sure you put the dynamic routes below any other
router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`Get the user with the ID ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Change the user with the ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete the user with the ID ${req.params.id}`);
  });

const users = [{ name: "Rachel" }, { name: "Nickey" }];
//works like a middleware, runs between the request being sent
//and the response coming back
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});
module.exports = router;
