var express = require('express');
var router = express.Router();
var MenuItem = require('../model/menu/menuitem.js');
var MenuFolder = require('../model/menu/menufolder.js');


/* Get menufolder by sysName */
router.get('/menufolder', function (req, res, next) {
    // if (req.sysName.isUndefined()) {
    //     res.sendStatus(400);
    // } else {
    // MenuFolder.findOne
    MenuFolder.findOne({root: true}).deepPopulate('items folders').exec(function (err, folder) {
        if (err) return res.send(500, 'Error occurred: database error.');
        res.json(folder);
    });
    // }
});

// /* GET users listing. */
// router.get('/', function (req, res, next) {
//     MenuItem.find(function (err, items) {
//         if (err) return res.send(500, 'Error occurred: database error.');
//         res.json(items.map(function (a) {
//             return {
//                 sysName: a.sysName,
//                 id: a.id,
//                 icon: a.icon,
//                 url: a.url
//             }
//         }));
//     });
// });

/* Add menufolder
 sysName: String,
 id: {type: String, unique: true},
 root: Boolean,
 icon: String,
 items: [{type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem'}],
 folders: [{type: mongoose.Schema.Types.ObjectId, ref: 'MenuFolder'}]
 */
// router.post('/menufolder, function (req, res, next) {
//     var folder = new MenuFolder({
//         sysName: req.body.sysName,
//         id: req.body.id,
//         root: req.body.root,
//         icon: req.body.icon,
//
//     });
//     item.save(function (err, item) {
//         if (err) return res.send(500, 'Error occurred: database error.');
//         res.json(item);
//     });
// });

/* Add menuitem */
router.post('/menuitem', function (req, res, next) {
    var item = new MenuItem({
        sysName: req.body.sysName,
        id: req.body.id,
        icon: req.body.icon,
        url: req.body.url
    });
    item.save(function (err, item) {
        if (err) return res.send(500, 'Error occurred: database error.');
        res.json(item);
    });
});

module.exports = router;