var assignSantas  = require('../js/app').assignSantas;
var parseNames  = require('../js/app').parseNames;
var assert  = require('chai').assert;

describe('secret santa app', function() {
  describe('assignSantas', function() {
    it('should return null for empty array', function () {
      var actual = assignSantas([]);

      assert.strictEqual(null, actual);
    });

    it('should return null for null', function () {
      var actual = assignSantas(null);

      assert.strictEqual(null, actual);
    });

    it('returns a list that equals the length of the original list', function () {
      var actual = assignSantas(['Cersei', 'Jamie', 'Tyrion']);
      var expected = 3;

      assert.lengthOf(actual, expected);
    });

    it('returns a list of pairs containing a santa and a recipient', function() {
      assert.fail(true, false);
    });

    it('returns a list of pairs where santa and recipient are never the same', function() {
      assert.fail(true, false);
    });

    it('returns a list with no duplicate recipients', function() {
      assert.fail(true, false);
    });
  });

  describe('parseNames', function() {
    it('should return an array', function() {
      var actual = parseNames('Cersei\nJamie\nTyrion');
      var expected = ['Cersei', 'Jamie', 'Tyrion'];

      assert.deepEqual(actual, expected);
    });

    it('should remove empty lines', function(){

    });

    it('should trim each line', function(){

    });
  });
})

