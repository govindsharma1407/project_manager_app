const router = require("express").Router();
const { signup, login } = require("../controllers/authController");

router.post("/signup", signup);
router.post("/login", login);

router.get("/", (req, res) => {
  res.send("Auth route working");
});

module.exports = router;