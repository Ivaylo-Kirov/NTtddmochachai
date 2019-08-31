const sum = require('../functions');
const expect = require('chai').expect;

describe('sum function', () => {
    it('should correctly sum 2 INTS', () => {
        expect(sum(2, 3)).to.equal(5);
    })
});