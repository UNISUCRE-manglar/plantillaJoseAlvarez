const mongoose = require("mongoose");

const { NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE } = process.env;

//const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`;

const MONGODB_URI = 'mongodb+srv://josealvarez123david:Josedavid2408@josealvarez.bwivox0.mongodb.net/DB_SOLARDESIGNPRO?retryWrites=true&w=majority';
//esto lo toman de la pagina de mongodb


mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
  })
  .then(db => console.log("DB is connected"))
  .catch(err => console.error(err));
