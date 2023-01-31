const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
     id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
     }, 
     comment:{
        type: DataTypes.STRING,
        allownull:false,

     },
     comment_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
    //  user_id:{
    //     type: DataTypes.INTEGER, 
    //       references: {
    //         model:'user', 
    //         key: 'id', 
    //       },
      //  } ,
     post_id:{
      type: DataTypes.INTEGER, 
        references: {
          model:'post', 
          key: 'id'
        },
        allownull:true,
     } 
     
    },
    {
      sequelize,
      timestamps: true,
      freezeTableName: true,
      underscored: true,
      modelName: 'comment',
    }
  );

module.exports = Comment;