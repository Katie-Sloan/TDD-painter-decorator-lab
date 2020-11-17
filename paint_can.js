const PaintCan = function(colour, litres, empty=false) {
    this.colour = colour
    this.litres = litres
    this.empty = empty
    
}

PaintCan.prototype.checkIfEmpty = function(litres) {
    if (this.litres > 0) {
        return false;
    } else {
    return true
}};

module.exports = PaintCan;