const db = require("../model");
const Chanson = db.chansons;
const sql = require("../config/chansonSql");
const mysql = require('mysql');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "pzw19971021",
    database: "tp"
});

/**
 * Chanson repository
 */
const ChansonRepository = {
    findAll: () => {
        return Chanson.findAll();
    },
    findById: (id) => {
        const chanson = Chanson.findByPk(id);
        return chanson;
    },
    findByArtist: (name) => {
        const chanson = Chanson.findAll({ where: { auteur: name } });
        return chanson;
    },
    create: (chanson) => {
        return Chanson.create(chanson);
    },
    update: (id, chanson) => {
        return Chanson.update(chanson, { where: { id: id } });
    },
    delete: (id) => {
        return Chanson.destroy({ where: { id: id } });
    },
    findByGroup: (res) => {
        con.query(sql.queryByGroup,function (err, result) {
            if (err) throw err;
            res.status(200).send(result);
        });
    }
};

module.exports = ChansonRepository;
