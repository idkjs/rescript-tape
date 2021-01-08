// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Tape = require("tape");
var Js_exn = require("bs-platform/lib/js/js_exn.js");

Tape.test(undefined, undefined, (function (t) {
        t.plan(2);
        t.ok(true, undefined);
        t.equal(123, 123, undefined);
        
      }));

Tape.skip(undefined, (function (t) {
        t.plan(2);
        t.ok(true, undefined);
        
      }));

var Plan = { };

Tape.skip(undefined, (function (t) {
        t.fail("this failed");
        
      }));

var Fail = { };

Tape.test(undefined, undefined, (function (t) {
        t.pass("this passed");
        t.end(0);
        
      }));

var Pass = { };

Tape.test(undefined, undefined, (function (t) {
        t.timeoutAfter(200);
        setTimeout((function (param) {
                t.end(0);
                
              }), 190);
        
      }));

Tape.skip(undefined, (function (t) {
        t.timeoutAfter(200);
        setTimeout((function (param) {
                t.end(0);
                
              }), 210);
        
      }));

var TimeoutAfter = { };

Tape.test(undefined, undefined, (function (t) {
        t.ok("foo", undefined);
        t.notOk("", undefined);
        t.end(0);
        
      }));

Tape.skip(undefined, (function (t) {
        t.ok("", undefined);
        t.notOk("foo", undefined);
        t.end(0);
        
      }));

var Ok = { };

Tape.test(undefined, undefined, (function (t) {
        t.equal("foo", "foo", undefined);
        t.notEqual("foo", "bar", undefined);
        t.end(0);
        
      }));

Tape.skip(undefined, (function (t) {
        t.equal("foo", "bar", undefined);
        t.notEqual("foo", "foo", undefined);
        t.end(0);
        
      }));

var Equal = { };

Tape.test(undefined, undefined, (function (t) {
        t.deepEqual({
              foo: 123
            }, {
              foo: 123
            }, undefined);
        t.notDeepEqual({
              foo: 123
            }, {
              foo: 456
            }, undefined);
        t.end(0);
        
      }));

Tape.skip(undefined, (function (t) {
        t.equal({
              foo: 123
            }, {
              foo: 123
            }, undefined);
        t.deepEqual({
              foo: 123
            }, {
              foo: 456
            }, undefined);
        t.notDeepEqual({
              foo: 123
            }, {
              foo: 123
            }, undefined);
        t.end(0);
        
      }));

var DeepEqual = { };

Tape.test(undefined, undefined, (function (t) {
        t.throws((function (param) {
                return Js_exn.raiseError("throws");
              }), undefined, undefined);
        t.end(0);
        
      }));

Tape.skip(undefined, (function (t) {
        t.doesNotThrow((function (param) {
                return Js_exn.raiseError("throws");
              }), undefined, undefined);
        t.end(0);
        
      }));

var Throws = { };

exports.Plan = Plan;
exports.Fail = Fail;
exports.Pass = Pass;
exports.TimeoutAfter = TimeoutAfter;
exports.Ok = Ok;
exports.Equal = Equal;
exports.DeepEqual = DeepEqual;
exports.Throws = Throws;
/*  Not a pure module */