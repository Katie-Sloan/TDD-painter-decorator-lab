const assert = require('assert');
const Room = require('../room.js');

describe('Room', function() {
    let room;
    
    beforeEach(function() {
        room = new Room('Living Room', 10, false);
    });

    it('should have a name', function() {
        const actual = room.name;
        assert.strictEqual(actual, 'Living Room');
    });

    it('should have an area', function() {
        const actual = room.area;
        assert.strictEqual(actual, 10);
    });

    it('should start unpainted', function() {
        const actual = room.painted;
        assert.strictEqual(actual, false);
    })

    

    it('should be able to be painted', function() { 
        room.paintRoom('Living Room');
        const actual = room.painted;
        assert.strictEqual(actual, true);
    })
});
