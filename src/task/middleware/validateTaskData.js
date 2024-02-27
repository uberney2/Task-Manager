function validateTaskData(req, res, next) {
  const { id, name, description, createdDate, dueDate, status } = req.body;

  if (!name || !description || !createdDate || !dueDate || !status) {
    return res.status(400).json({ error: "All field are mandatory" });
  }
  console.log(id);
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Id should be a number' });
  }
  next();
}

module.exports = { validateTaskData };
