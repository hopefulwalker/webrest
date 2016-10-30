'use strict';

var mongoose = require('mongoose');

var menufolderSchema = mongoose.Schema({
    sysName: String,
    id: {type: String, unique: true},
    icon: String,
    items: [{type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem'}],
    folders: [{type: mongoose.Schema.Types.ObjectId, ref: 'MenuFolder'}]
});

var MenuFolder = mongoose.model('MenuFolder', menufolderSchema, 'menufolders');

module.exports = MenuFolder;