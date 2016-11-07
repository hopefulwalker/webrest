var db = require('../mongodb');
var MenuItem = require('./menuitem');
var MenuFolder = require('./menufolder');

MenuItem.remove(function (err) {
    if (!err) {
        console.log(err);
    }
});

MenuFolder.remove(function (err) {
    if (!err) {
        console.log(err);
    }
});

var item1 = new MenuItem({
    sysName: "TEST",
    id: "ITEM-1",
    icon: "icon-1",
    url: "url-1"
});

item1.save(function (err) {
    if (!err) {
        console.log('Item-1 saved!');
    } else {
        console.log(err);
    }
});

var item2 = new MenuItem({
    sysName: "TEST",
    id: "ITEM-2",
    icon: "icon-2",
    url: "url-2"
});

item2.save(function (err) {
    if (!err) {
        console.log('Item-2 saved!');
    } else {
        console.log(err);
    }
});

var item3 = new MenuItem({
    sysName: "TEST",
    id: "ITEM-3",
    icon: "icon-3",
    url: "url-3"
});

item3.save(function (err) {
    if (!err) {
        console.log('Item-3 saved!');
    } else {
        console.log(err);
    }
});

var folder1 = new MenuFolder({
    sysName: "TEST",
    id: "FOLDER-1",
    root: false,
    icon: "FOLDER-ICON-1",
    items: [item1],
    folders: []
});

folder1.save(function (err) {
    if (!err) {
        console.log('Folder-1 saved!');
    } else {
        console.log(err);
    }
});

var folder2 = new MenuFolder({
    sysName: "TEST",
    id: "FOLDER-2",
    root: false,
    icon: "FOLDER-ICON-2",
    items: [item2],
    folders: []
});

folder2.save(function (err) {
    if (!err) {
        console.log('Folder-2 saved!');
    } else {
        console.log(err);
    }
});

var folder3 = new MenuFolder({
    sysName: "TEST",
    id: "FOLDER-3",
    root: true,
    icon: "FOLDER-ICON-3",
    items: [item3],
    folders: [folder1,folder2]
});

folder3.save(function (err) {
    if (!err) {
        console.log('Folder-3 saved!');
    } else {
        console.log(err);
    }
});