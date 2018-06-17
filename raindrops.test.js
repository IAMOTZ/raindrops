const chai = require('chai');
const expect = chai.expect;

const raindropSpeak = require('./raindrops');

describe('RaindropSpeak', () => {
	describe('Handle invalid inputs', () => {
		it('return undefined for 0', () => {
			expect(raindropSpeak(0)).to.equal(undefined);
		});

		it('return undefined for decimal numbers', () => {
			expect(raindropSpeak(17.56)).to.equal(undefined);
		});

		it('return undefined for string inputs', () => {
			expect(raindropSpeak('tunmise')).to.equal(undefined);
			expect(raindropSpeak('1234')).to.equal(undefined);
			expect(raindropSpeak('')).to.equal(undefined);
		});

		it('return undefined for array inputs', () => {
			expect(raindropSpeak([25, 367, 10])).to.equal(undefined);
			expect(raindropSpeak([123])).to.equal(undefined);
			expect(raindropSpeak([])).to.equal(undefined);
		});

		it('return undefined for object inputs', () => {
			expect(raindropSpeak({ a: 123, b: 345 })).to.equal(undefined);
			expect(raindropSpeak({})).to.equal(undefined);
		});

		it('return undefined for function inputs', () => {
			expect(raindropSpeak(() => { return 123 })).to.equal(undefined);
		});
	});

	describe('Handle valid inputs', () => {
		it('returns Pling for 6', () => {
			// Factors that contain 3
			expect(raindropSpeak(6)).to.equal('Pling');
		});

		it('returns Plang for 10', () => {
			// Factors that contain 5
			expect(raindropSpeak(10)).to.equal('Plang');
		});

		it('returns Plong for 28', () => {
			// Factors that contain 7
			expect(raindropSpeak(28)).to.equal('Plong');
		});

		it('returns 34 for 34', () => {
			// Factors that don't contain 3,5 and 7.
			expect(raindropSpeak(34)).to.equal(34);
		});

		it('returns PlingPlang for 30', () => {
			// Factors that contain 3 and 5
			expect(raindropSpeak(30)).to.equal('PlingPlang');
		});

		it('returns PlingPlong for 42', () => {
			// Factors that contain 3 and 7
			expect(raindropSpeak(42)).to.equal('PlingPlong');
		});

		it('returns PlangPlong for 70', () => {
			// Factors that contain 5 and 7
			expect(raindropSpeak(70)).to.equal('PlangPlong');
		});
	});
});
