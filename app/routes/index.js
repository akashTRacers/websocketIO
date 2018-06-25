
const openHome= require("./openHome.js");
const initRoutes = (app) => {
    console.log("inside index.js");
    app.use('/', openHome());
    
}
module.exports = initRoutes;

