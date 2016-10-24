var express = require('express');
var router = express.Router();
var MenuItem = require('../model/menu/menuitem.js');

/* GET users listing. */
router.get('/', function (req, res, next) {
    MenuItem.find(function (err, items) {
        if (err) return res.send(500, 'Error occurred: database error.');
        res.json(items.map(function (a) {
            return {
                sysName: a.sysName,
                id: a.id,
                icon: a.icon,
                url: a.url
            }
        }));
    });
});

router.post('/', function (req, res, next) {
    var item = new MenuItem({
        sysName: 'req.body.sysName',
        id: 'req.body.id',
        icon: 'req.body.icon',
        url: 'req.body.url'
    });
    item.save(function (err, item) {
        if (err) return res.send(500, 'Error occurred: database error.');
        res.json(item);
    });
});

module.exports = router;