// Generated by CoffeeScript 1.12.7
(function() {
  var _, args2, assert, equal;

  args2 = require('../');

  assert = require('chai').assert;

  _ = require('lodash');

  equal = assert.deepEqual;

  describe("args2.assign", function() {
    it('case 1', function() {
      var sampleFn;
      sampleFn = function() {
        var fn, ref, text1, text2;
        ref = args2.assign(arguments, ['str', 'str', 'fn']), text1 = ref[0], text2 = ref[1], fn = ref[2];
        equal(text1, 'a');
        equal(text2, 'b');
        return equal(fn(), true);
      };
      return sampleFn('a', 'b', function() {
        return true;
      });
    });
    it('case 2', function() {
      var sampleFn;
      sampleFn = function() {
        var fn, ref, text1, text2;
        ref = args2.assign(arguments, ['str', 'str', 'fn']), text1 = ref[0], text2 = ref[1], fn = ref[2];
        equal(text1, 'a');
        equal(text2, void 0);
        return equal(fn(), true);
      };
      return sampleFn('a', function() {
        return true;
      });
    });
    it('case 3', function() {
      var sampleFn;
      sampleFn = function() {
        var fn, num1, ref, text1;
        ref = args2.assign(arguments, ['str', 'num', 'fn']), text1 = ref[0], num1 = ref[1], fn = ref[2];
        equal(text1, 'a');
        equal(num1, 1);
        return equal(fn(), true);
      };
      return sampleFn('a', 1, function() {
        return true;
      });
    });
    it('case 4', function() {
      var sampleFn;
      sampleFn = function() {
        var fn, num1, ref, text1;
        ref = args2.assign(arguments, ['str', 'num', 'fn']), text1 = ref[0], num1 = ref[1], fn = ref[2];
        equal(text1, 'a');
        equal(num1, void 0);
        return equal(fn(), true);
      };
      return sampleFn('a', function() {
        return true;
      });
    });
    it('case 5', function() {
      var sampleFn;
      sampleFn = function() {
        var fn, obj1, ref, text1;
        ref = args2.assign(arguments, ['str', 'obj', 'fn']), text1 = ref[0], obj1 = ref[1], fn = ref[2];
        equal(text1, 'a');
        equal(obj1, {
          foo: 'bar'
        });
        return equal(fn(), true);
      };
      return sampleFn('a', {
        foo: 'bar'
      }, function() {
        return true;
      });
    });
    it('case 6', function() {
      var sampleFn;
      sampleFn = function() {
        var fn, obj1, ref, text1;
        ref = args2.assign(arguments, ['str', 'obj', 'fn']), text1 = ref[0], obj1 = ref[1], fn = ref[2];
        equal(text1, 'a');
        equal(obj1, void 0);
        return equal(fn(), true);
      };
      return sampleFn('a', function() {
        return true;
      });
    });
    it('case 7', function() {
      var sampleFn;
      sampleFn = function() {
        var arr1, fn, ref, text1;
        ref = args2.assign(arguments, ['str', 'arr', 'fn']), text1 = ref[0], arr1 = ref[1], fn = ref[2];
        equal(text1, 'a');
        equal(arr1, ['x']);
        return equal(fn(), true);
      };
      return sampleFn('a', ['x'], function() {
        return true;
      });
    });
    it('case 8', function() {
      var sampleFn;
      sampleFn = function() {
        var arr1, fn, ref, text1;
        ref = args2.assign(arguments, ['str', 'arr', 'fn']), text1 = ref[0], arr1 = ref[1], fn = ref[2];
        equal(text1, 'a');
        equal(arr1, void 0);
        return equal(fn(), true);
      };
      return sampleFn('a', function() {
        return true;
      });
    });
    it('case 9', function() {
      var sampleFn;
      sampleFn = function() {
        var bool1, fn, ref, text1;
        ref = args2.assign(arguments, ['str', 'bool', 'fn']), text1 = ref[0], bool1 = ref[1], fn = ref[2];
        equal(text1, 'a');
        equal(bool1, false);
        return equal(fn(), true);
      };
      return sampleFn('a', false, function() {
        return true;
      });
    });
    return it('case 10', function() {
      var sampleFn;
      sampleFn = function() {
        var bool1, fn, ref, text1;
        ref = args2.assign(arguments, ['str', 'bool', 'fn']), text1 = ref[0], bool1 = ref[1], fn = ref[2];
        equal(text1, 'a');
        equal(bool1, void 0);
        return equal(fn(), true);
      };
      return sampleFn('a', function() {
        return true;
      });
    });
  });

}).call(this);
