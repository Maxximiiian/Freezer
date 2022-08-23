const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Freezer, Category, User }) {
      // define association here
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Freezer, { foreignKey: 'freezerId' });
      this.belongsTo(Category, { foreignKey: 'categoryId' });
    }
  }
  Food.init({
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    freezerId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Food',
  });
  return Food;
};
