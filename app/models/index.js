const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');

const Livre = sequelize.define('Livre', {
    ISBN: {
        type: DataTypes.STRING(17),
        primaryKey: true,
    },
    Titre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Auteur: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Editeur: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    AnneePublication: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Categorie: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    NombreCopies: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},{
    tableName: 'Livre',
    timestamps: false,
});

const Utilisateur = sequelize.define('Utilisateur', {
    IDUtilisateur: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Nom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Prenom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    TypeUtilisateur: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    DateInscription: {
        type: DataTypes.DATE,
        allowNull: false,
    },
},{
    tableName: 'Utilisateur',
    timestamps: false,
});

const Emprunt = sequelize.define('Emprunt', {
    IDEmprunt: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    ISBN: {
        type: DataTypes.STRING(17),
        references: {
            model: Livre,
            key: 'ISBN',
        },
        allowNull: false,
    },
    IDUtilisateur: {
        type: DataTypes.INTEGER,
        references: {
            model: Utilisateur,
            key: 'IDUtilisateur',
        },
        allowNull: false,
    },
    DateEmprunt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    DateRetourPrevue: {
        type: DataTypes.DATE,
        allowNull: false,
    },
},{
    tableName: 'Emprunt',
    timestamps: false,
});

const Retour = sequelize.define('Retour', {
    IDRetour: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    IDEmprunt: {
        type: DataTypes.INTEGER,
        references: {
            model: Emprunt,
            key: 'IDEmprunt',
        },
        allowNull: false,
    },
    DateRetourEffective: {
        type: DataTypes.DATE,
        allowNull: false,
    },
},{
    tableName: 'Retour',
    timestamps: false,
});


Livre.hasMany(Emprunt, { foreignKey: 'ISBN' });
Utilisateur.hasMany(Emprunt, { foreignKey: 'IDUtilisateur' });
Emprunt.belongsTo(Livre, { foreignKey: 'ISBN' });
Emprunt.belongsTo(Utilisateur, { foreignKey: 'IDUtilisateur' });
Emprunt.hasMany(Retour, { foreignKey: 'IDEmprunt' });
Retour.belongsTo(Emprunt, { foreignKey: 'IDEmprunt' });

module.exports = {
    Livre,
    Utilisateur,
    Emprunt,
    Retour,
};