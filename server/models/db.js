// const mongoose = require('mongoose');

// const User = mongoose.model('User');

// module.exports.register = (req, res, next) => {
//     var user = new User();
//     user.fullName = req.body.fullName;
//     user.mobile = req.body.mobile;
//     user.email = req.body.email;
//     user.password = req.body.password;
//     user.confirmPassword = req.body.confirmPassword;
//     user.save((err, doc) => {
//         if (!err)
//             res.send(doc);
//         else {
//             //error handling
//         }

//     });
// }
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {useUnifiedTopology: true,useNewUrlParser: true,
}).then(() => console.log('DB Connected!')).catch(err => {
    console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2));
});
// mongoose.connect(process.env.MONGODB_URI, (err) => {
//     if (!err) { console.log('MongoDB connection succeeded.'); }
//     else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
// });
require('./user.model');
