'use strict';

var mongoose = require('mongoose');

var menuitemSchema = mongoose.Schema({
    sysName: String,
    id: {type: String, unique: true},
    icon: String,
    url: String
});

var MenuItem = mongoose.model('MenuItem', menuitemSchema, 'menuitems');

module.exports = MenuItem;