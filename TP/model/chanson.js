module.exports = (sequelize, Sequelize) => {
    const Chanson = sequelize.define("song", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true,
        },
        genre: {
            type: Sequelize.STRING,
        },
        titre: {
            type: Sequelize.STRING,
        },
        temps: {
            type: Sequelize.INTEGER,
            validate: {
                min: 0,
                max: 1000,
            },
        },
        auteur: {
            type: Sequelize.STRING,
        },
    });

    return Chanson;
};
