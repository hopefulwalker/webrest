'use strict';

var mongoose = require('mongoose');

var menufolderSchema = mongoose.Schema({
    sysName: String,
    id: {type: String, unique: true},
    root: Boolean,
    icon: String,
    items: [{type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem'}],
    folders: [{type: mongoose.Schema.Types.ObjectId, ref: 'MenuFolder'}]
});

var deepPopulate = require('mongoose-deep-populate')(mongoose);
menufolderSchema.plugin(deepPopulate);

var MenuFolder = mongoose.model('MenuFolder', menufolderSchema, 'menufolders');

module.exports = MenuFolder;