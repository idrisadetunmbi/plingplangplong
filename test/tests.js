import chai from 'chai';
import rainDropSpeaks from '../src/index';

const { assert } = chai;

describe('rainDropSpeaks function', () => {

  describe('handles incorrect input', () => {
    it('should return \'Argument must be an integer\' for a string iput', () => {
      assert.equal(rainDropSpeaks(''), 'Argument must be an integer');
    });
  
    it('should return \'Argument must be an integer\' for a string iput', () => {
      assert.equal(rainDropSpeaks(undefined), 'Argument must be an integer');
    });
  
    it('should return \'Argument must be an integer\' for a string iput', () => {
      assert.equal(rainDropSpeaks(), 'Argument must be an integer');
    });

    it('should return \'Argument must be an integer\' for an array iput', () => {
      assert.equal(rainDropSpeaks([]), 'Argument must be an integer');
    });
  });

  describe('returns correct result', () => {
    it('should return \'Pling\' for 3', () => {
      assert.equal(rainDropSpeaks(3), 'Pling');
    });

    it('should return \'Plang\' for 5', () => {
      assert.equal(rainDropSpeaks(5), 'Plang');
    });

    it('should return \'Plong\' for 7', () => {
      assert.equal(rainDropSpeaks(7), 'Plong');
    });
    
    it('should return \'Plong\' for 28', () => {
      assert.equal(rainDropSpeaks(28), 'Plong');
    });
  
    it('should return \'PlingPlang\' for 1755', () => {
      assert.equal(rainDropSpeaks(1755), 'PlingPlang');
    });
  
    it('should return \'PlangPlong\' for 35', () => {
      assert.equal(rainDropSpeaks(35), 'PlangPlong');
    });

    it('should return \'34\' for 34', () => {
      assert.equal(rainDropSpeaks(34), '34');
    });

    it('should return \'Plang\' for 50', () => {
      assert.equal(rainDropSpeaks(50), 'Plang');
    });

    it('should return \'47\' for 47', () => {
      assert.equal(rainDropSpeaks(47), '47');
    });

    it('should return \'Argument must be greater 0\' for 0', () => {
      assert.equal(rainDropSpeaks(0), 'Argument must be greater than 0');
    });

    it('should return \'Argument must be greater 0\' for -35', () => {
      assert.equal(rainDropSpeaks(-35), 'Argument must be greater than 0');
    });
  });
});

