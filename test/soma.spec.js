const { expect } = require('code');
const { it } = exports.lab = require('lab').script();
const { somar } = require('../soma');

it('2 + 3 = 5', () => {
	expect(somar(2, 3)).to.equal(5);
});


it('0 + 0 = 0', () => {
	expect(somar()).to.equal(0);
});
