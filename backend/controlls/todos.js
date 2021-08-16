const todos = {
  async read(req, res) {
    res.send([1111, 222, 333]);
  },

  async write(req, res) {
    console.log(req.body);
  },
};

export default todos;
