const router = require("express").Router();
const Employee = require("../models/employee");

/*ADD EMPLOYEE */
router.post("/addemployee", async (req, res) => {
  const newEmployee = new Employee({
    image: req.body.image,
    name: req.body.name,
    occupation: req.body.occupation,
    callOffice: req.body.callOffice,
    callMobile: req.body.callMobile,
    sms: req.body.sms,
    email: req.body.email,
  });

  try {
    const savedEmployee = await newEmployee.save();
    res.status(200).json(savedEmployee);
  } catch (err) {
    res.status(500).json(err);
  }
});

/*GET EMPLOYEES*/

router.get("/getallemployees", async (req, res) => {
  try {
    const getAllEmployees = await Employee.find({});
    res.status(200).json(getAllEmployees);
  } catch (err) {
    res.status(500).json(err);
  }
});
// /*DELETE A EMPLOYEE*/
router.delete("/:id", async (req, res) => {
  console.log("request object", req);
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.status(200).json("The information has been deleted");
    console.log(req.headers);
  } catch (err) {
    req.status(500).json(err);
  }
});
/* UPDATE A FRIEND INFO*/
router.put("/:id", async (req, res) => {
  try {
    const updateEmployee = await Employee.findOneAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updateEmployee);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
