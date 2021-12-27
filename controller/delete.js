const handleDelete = (req, res, db) => {
  const { id } = req.body;
  db("users").where("id", "=", id).del();

  db("login").where("id", "=", id).del();
};

export const remove = handleDelete;
