const funcs = require('../functions');
const expect = require('chai').expect;

describe('sum function', () => {
    it('should correctly sum 2 INTS', () => {
        expect(funcs.sum(2, 3)).to.equal(5);
    })
});

describe('subtract function', () => {
    it('should correctly subtract between 2 INTs', () => {
        expect(funcs.subtract(20, 3)).to.equal(17);
    })
});