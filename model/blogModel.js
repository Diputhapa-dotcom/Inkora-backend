module.exports = (sequelize, DataTypes) => {
    const Blog = sequelize.define("blog", {
  
      title: {
        type: DataTypes.STRING,
        allowNull: true
      },
      subtitle:{
        type: DataTypes.STRING,
        allowNull: true
    },
    image :{
        type: DataTypes.STRING,
        allowNull: true
      },
    description: {
        type: DataTypes.STRING,
        allowNull: true
      }
     
    });
    return Blog;
  };