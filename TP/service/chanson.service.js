const ChansonRepository = require("../repository/chanson.repository");

const ChansonService = {
    findAll: async () => {
        return await ChansonRepository.findAll();
    },
    findById: async (id) => {
        const chanson = await ChansonRepository.findById(id);
        return chanson;
    },
    findByArtist: async (name) => {
        const chanson = await ChansonRepository.findByArtist(name);
        return chanson;
    },
    create: async (chanson) => {
        await ChansonRepository.create(chanson);
    },
    update: async (id, chansonInfo) => {
        const chanson = await ChansonRepository.findById(id);
        if (!chanson) {
            throw Error("chanson not found");
        }
        await ChansonRepository.update(id, chansonInfo);
    },
    delete: async (id) => {
        const chanson = await ChansonRepository.findById(id);
        if (!chanson) {
            throw Error("chanson not found");
        }
        return await ChansonRepository.delete(id);
    },
    // isBetter: (chanson1, chanson2) => {
    //     if (!chanson1) {
    //         throw Error("chanson1 is null");
    //     }
    //     if (!chanson2) {
    //         throw Error("chanson2 is null");
    //     }
    //     return chanson1.note > chanson2.note;
    // },
    findByGroup: async (res) => {
        return ChansonRepository.findByGroup(res);
    }
};

module.exports = ChansonService;
