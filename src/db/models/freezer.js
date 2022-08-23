const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Freezer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Food }) {
      // define association here
      this.hasMany(Food, { foreignKey: 'freezerId' });
    }
  }
  Freezer.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Freezer',
  });
  return Freezer;
};
