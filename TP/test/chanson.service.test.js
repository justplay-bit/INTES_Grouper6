const expect = require("chai").expect;
const ChansonService = require("../service/chanson.service");

//#region data

const chanson1 = {
    "genre": "love song",
    "titre": "Future Us",
    "temps": 300,
    "auteur": "Mayday",
};
const chanson2 = {
    "genre": "rnb",
    "titre": "Sunny Day",
    "temps": 300,
    "auteur": "Jay Chou",
};

//# end region data

describe("ChansonService", () => {
    describe("isBetter", () => {
        it("should return true", () => {
            const result = ChansonService.isBetter(chanson1, chanson2);
            expect(result).to.be.true;
        });
        it("should return false", () => {
            const result = ChansonService.isBetter(chanson2, chanson1);
            expect(result).to.be.false;
        });

        it("should return null", () => {
            const result = ChansonService.isBetter(chanson2, chanson1);
            expect(result).to.be.null;
        });
    });
});
