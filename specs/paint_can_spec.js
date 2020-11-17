const assert = require('assert');
const PaintCan = require('../paint_can.js');

describe('PaintCan', function() {
    let paintCan;

    beforeEach(function() {
        paintCan = new PaintCan("white", 5, false)
    });

    it('should have a colour', function() {
        const actual = paintCan.colour;
        assert.strictEqual(actual, 'white');
    })

    it('should have a number of litres', function() {
        const actual = paintCan.litres;
        assert.strictEqual(actual, 5);
    })

    it('should be able to check if empty', function() {
        const actual = paintCan.checkIfEmpty(litres);
        assert.strictEqual(actual, true);
    })
})