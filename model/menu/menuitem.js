'use strict';

let mongoose = require('mongoose');

let menuitemSchema = mongoose.Schema({
    sysName: String,
    id: String,
    icon: String,
    url: String
});

let MenuItem = mongoose.model('MenuItem', menuitemSchema);

module.exports = MenuItem;