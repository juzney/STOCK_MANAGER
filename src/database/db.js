const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/syspro1',
{ useUnifiedTopology: true,
 useNewUrlParser: true }
,()=> console.log('mongodb running'))

module.exports = mongoose;