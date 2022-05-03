const { validationResult } = require("express-validator");

module.exports = {
  home: (req, res) => {
    const errors = req.session.errors;
    req.session.errors = undefined;

    res.render("home", {
      errors: errors,
      userData: req.session.userData,
    });
  },
  homeForm: (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      const data = req.body;
      req.session.userData = data;
      res.redirect("/");
    } else {
      req.session.errors = errors.mapped();
      res.redirect("/");
    }
  },
};
