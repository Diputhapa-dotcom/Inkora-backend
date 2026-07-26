module.exports = (sequelize, DataTypes) => {
    const Profile = sequelize.define("profile", {
      bio: {
        type: DataTypes.STRING,
        allowNull: true
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true
      }
     
    });
    return Profile;
  };