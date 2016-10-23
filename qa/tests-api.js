var assert = require('chai').assert;
var http = require('http');
var rest = require('restler');
suite('API tests', function () {
    var menuItem = {
        sysName: 'WebRest',
        id:'item-1',
        icon:'fa fa-table, fa-fw',
        url:'item=1'
    };
    var base = 'http://localhost:3000';

    test('should be able to add an menu item', function (done) {
        rest.post(base + '/api/menuitem', {data: menuItem}).on('success',
            function (data) {
                assert.match(data.id, /\w/, 'id must be set');
                done();
            });
    });

    test('should be able to retrieve an menu item', function (done) {
        rest.post(base + '/api/menuitem', {data: menuItem}).on('success',
            function (data) {
                rest.get(base + '/api/menuitem/' + data.id).on('success',
                    function (data) {
                        assert(data.name === attraction.name);
                        assert(data.description === attraction.description);
                        done();
                    })
            })
    });
});