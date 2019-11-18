const Users = require("../students/students-model");

module.exports = {
  validateStudent,
  validateStudentId
};

function validateStudent(req, res, next) {
  let student = req.body;
  if (!student) {
    res.status(400).json({ message: "missing student data" });
  } else if (!student.name) {
    res
      .status(400)
      .json({ message: "missing required name field for student record" });
  } else {
    req.student = student;
    next();
  }
}

function validateStudentId(req, res, next) {
  Users.findById(req.params.id)
    .then(student => {
      if (student) {
        next();
      } else {
        res.status(400).json({ message: "invalid student id" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: `Something terrible happend while checking student id: ${error.message}`
      });
    });
}
