const Coffe = require("../models/coffe.models");

module.exports.coffeControllers = {
  getCoffe: (req, res) => {
    Coffe.find().then((coffe) => {
      res.json(coffe);
    }) .cath({ error: "Ошибка при добавлении нового напитка" });
  },

  getCoffeInStock: (req, res) => {
    Coffe.find({ inStock: true }, { price: 1, name: 1, inStock: 1, id: 1 })
      .then((a) => {
        res.json(a);
      })
      .cath({ error: "Ошибка при добавлении нового напитка" });
  },

  getCoffeId: (req, res) => {
    Coffe.find(req.params.CoffeId)
      .then((b) => {
        res.json(b);
      })
      .cath({ error: "Ошибка при добавлении нового напитка" });
  },

  addCoffe: (req, res) => {
    Coffe.create(req.body.coffeId, {
      name: req.body.name,
      price: req.body.price,
      inStock: req.body.inStock,
      conCaff: req.body.conCaff,
      volume: req.body.volume,
      description: req.body.description,
    }),
      then((s) => {
        res.json(s);
      }).cath({ error: "Ошибка при добавлении нового напитка" });
  },

  updateCoffe: (req, res) => {
    Coffe.findByIdAndUpdate(
      req.params.coffeId,
      {
        name: req.body.name,
        price: req.body.price,
        inStock: req.body.inStock,
        conCaff: req.body.conCaff,
        volume: req.body.volume,
        description: req.body.description,
      },
      { new: true }
    ),
      then((a) => {
        res.json(a);
      }).cath({ error: "Ошибка при добавлении нового напитка" });
  },

  delCoffe: (req, res) => {
    Coffe.findByIdDelete(req.params.coffeId),
      then((a) => {
        res.json(a);
      }).cath({ error: "Ошибка при добавлении нового напитка" });
  },
};
