const handleDelete = (req, res, db) => {
  const { id } = req.body;
  db("users")
    .where("id", id)
    .del()
    .then(() => {
      db.select("*")
        .from("users")
        .then((data) => {
          console.log(data);
        });
    });
  db("login").where("id", id).del();
};

export const remove = handleDelete;
