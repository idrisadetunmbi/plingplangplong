import assert from 'chai';
import expect from 'chai';

describe('plingplangplong function', () => {
  
  describe('handles invalid input', () => {
    expect(plingPlangPlong).to.be.function();

    it('should return undefined for a string iput', () => {
      assert.equal(plingPlangPlong(''), undefined);
    });

    it('should return undefined for undefined as input', () => {
      assert.equal(plingPlangPlong(undefined), undefined);
    });

    it('should return undefined for no arguments', () => {
      assert.equal(plingPlangPlong(), undefined);
    });
  });
});
