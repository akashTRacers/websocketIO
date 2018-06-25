const  path='../views/index.pug';
const articles= require('../models/article.js');
class openHomeController{
  static getHome(req,res)
  {
    res.sendFile('index.html');
 
  }
}
module.exports =openHomeController;