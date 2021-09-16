const ChansonService = require("../service/chanson.service");
const ChansonController = {
    findAll: async (req, res, next) => {
        const chansons = await ChansonService.findAll();
        res.status(200).send(chansons);
    },
    findById: async (req, res, next) => {
        const chansonId = req.params.id;
        const chanson = await ChansonService.findById(chansonId);
        res.status(200).send(chanson);
    },
    findByArtist: async (req, res, next) => {
        const query = req.query.q;
        const chanson = await ChansonService.findByArtist(query);
        res.status(200).send(chanson);
    },
    create: async (req, res, next) => {
        const chanson = req.body;
        await ChansonService.create(chanson);
        res.status(200).send({ message: "chanson created successfully" });
    },
    update: async (req, res, next) => {
        const chansonId = req.params.id;
        const chansonInfo = req.body;
        try {
            await ChansonService.update(chansonId, chansonInfo);
            res.status(200).send({ message: "chanson updated successfully" });
        } catch (error) {
            res.status(404).send({ message: `chanson with id - ${chansonId} not found` });
        }
    },
    delete: async (req, res, next) => {
        const chansonId = req.params.id;
        try {
            await ChansonService.delete(chansonId);
            res.status(200).send({ message: "chanson deleted successfully" });
        } catch (error) {
            res.status(404).send({ message: `chanson with id - ${chansonId} not found` });
        }
    },
    findByGroup: async (req, res, next) => {
        const chansons = await ChansonService.findByGroup(res);
    }
};

module.exports = ChansonController;
