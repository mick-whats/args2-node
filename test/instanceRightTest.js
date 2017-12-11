// Generated by CoffeeScript 1.12.7
(function() {
  var _, args2, assert, equal;

  args2 = require('../');

  assert = require('chai').assert;

  _ = require('lodash');

  equal = assert.deepEqual;

  describe("instance test", function() {
    return it("args", function() {
      var fn1, fn2, getArgs;
      getArgs = function() {
        var args;
        args = new args2(arguments);
        assert.lengthOf(args.strs, 2);
        equal(args.rStr(), 'test2');
        assert.lengthOf(args.strs, 1);
        equal(args.rString(), 'test1');
        assert.lengthOf(args.strs, 0);
        assert.isUndefined(args.rStr());
        assert.lengthOf(args.nums, 2);
        equal(args.rNum(), 222);
        assert.lengthOf(args.nums, 1);
        equal(args.rNumber(), 111);
        assert.lengthOf(args.nums, 0);
        assert.isUndefined(args.rNum());
        assert.lengthOf(args.objs, 2);
        equal(args.rObject(), {
          age: 17
        });
        assert.lengthOf(args.objs, 1);
        equal(args.rObj(), {
          name: 'sam'
        });
        assert.lengthOf(args.objs, 0);
        assert.isUndefined(args.rObj());
        assert.lengthOf(args.arrays, 2);
        equal(args.rArray(), ['A', 'B', 'C']);
        assert.lengthOf(args.arrays, 1);
        equal(args.rArr(), [1, 2, 3]);
        assert.lengthOf(args.arrays, 0);
        assert.isUndefined(args.rArr());
        assert.lengthOf(args.bools, 2);
        assert.isFalse(args.rBoolean());
        assert.lengthOf(args.bools, 1);
        assert.isTrue(args.rBool());
        assert.lengthOf(args.bools, 0);
        assert.isUndefined(args.rBool());
        assert.lengthOf(args.funcs, 2);
        equal(args.rFunction()(), 'function2');
        assert.lengthOf(args.funcs, 1);
        equal(args.rFunc()(), 'function1');
        assert.lengthOf(args.funcs, 0);
        assert.isUndefined(args.rFunc());
        assert.lengthOf(args.others, 2);
        assert.isNull(args.rOther());
        assert.lengthOf(args.others, 1);
        assert.isNull(args.rOther());
        assert.lengthOf(args.others, 0);
        return assert.isUndefined(args.rOther());
      };
      fn1 = function() {
        return 'function1';
      };
      fn2 = function() {
        return 'function2';
      };
      getArgs('test1', 'test2', 111, 222, {
        name: 'sam'
      }, {
        age: 17
      }, [1, 2, 3], ['A', 'B', 'C'], true, false, fn1, fn2, null, null);
      return getArgs([1, 2, 3], true, null, null, 'test1', 111, {
        name: 'sam'
      }, fn1, 222, {
        age: 17
      }, ['A', 'B', 'C'], 'test2', false, fn2);
    });
  });

  describe("required test", function() {
    it("required error (String)", function() {
      var fn;
      fn = function() {
        var args;
        args = new args2(arguments);
        return args.rStr(true);
      };
      return assert.throws(fn, "String argument required");
    });
    it("required error (Number)", function() {
      var fn;
      fn = function() {
        var args;
        args = new args2(arguments);
        return args.rNum(true);
      };
      return assert.throws(fn, "Number argument required");
    });
    it("required error (Object)", function() {
      var fn;
      fn = function() {
        var args;
        args = new args2(arguments);
        return args.rObj(true);
      };
      return assert.throws(fn, "Object argument required");
    });
    it("required error (Array)", function() {
      var fn;
      fn = function() {
        var args;
        args = new args2(arguments);
        return args.rArray(true);
      };
      return assert.throws(fn, "Array argument required");
    });
    it("required error (Boolean)", function() {
      var fn;
      fn = function() {
        var args;
        args = new args2(arguments);
        return args.rBool(true);
      };
      return assert.throws(fn, "Boolean argument required");
    });
    return it("required error (Function)", function() {
      var fn;
      fn = function() {
        var args;
        args = new args2(arguments);
        return args.rFunc(true);
      };
      return assert.throws(fn, "Function argument required");
    });
  });

  describe("default value test", function() {
    return it("String", function() {
      var default_test;
      default_test = function() {
        var args;
        args = new args2(arguments);
        equal(args.rStr(false, 'testVal'), 'testVal');
        equal(args.rNum(false, 123), 123);
        equal(args.rObj(false, {
          name: 'jon'
        }), {
          name: 'jon'
        });
        equal(args.rArray(false, [1, 3, 5]), [1, 3, 5]);
        equal(args.rBool(false, true), true);
        equal(args.rFunc(false, function() {
          return 999;
        })(), 999);
        equal(args.rStr(false, 'testVal'), 'testVal');
        assert.isUndefined(args.rNum(false));
        assert.isUndefined(args.rObj(false));
        assert.isUndefined(args.rArray(false));
        assert.isUndefined(args.rBool(false));
        return assert.isUndefined(args.rFunc(false));
      };
      return default_test();
    });
  });

}).call(this);
