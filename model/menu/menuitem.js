'use strict';

let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

let menuitemSchema = mongoose.Schema({
    sysName: String,
    id: String,
    icon: String,
    url: String
});

let MenuItem = mongoose.model('MenuItem', menuitemSchema);

module.exports = MenuItem;