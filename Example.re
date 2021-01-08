open Test;

module Plan = {
  test
  (
    (t) => {
      t |> T.plan(2);
      t |> T.ok(true,_);
      t |> T.equal(123, 123,_);
    }
  );
  skip
  (
    (t) => {
      t |> T.plan(2,_);
      t |> T.ok(true,_);
    }
  );
};

module Fail = {
  skip ((t) => t |> T.fail("this failed"));
};

module Pass = {
  test
  (
    (t) => {
      t |> T.pass("this passed",_);
      t |> T.end_;
    }
  );
};

module TimeoutAfter = {
  test(
    (t) => {
      let ms = 200;
      t |> T.timeoutAfter(ms);
      ms - 10 |> Js.Global.setTimeout((_) => t |> T.end_) |> ignore;
    }
  );
  skip
  (
    (t) => {
      let ms = 200;
      t |> T.timeoutAfter(ms);
      ms + 10 |> Js.Global.setTimeout((_) => t |> T.end_) |> ignore;
    }
  );
};

module Ok = {
  test
  (
    (t) => {
      t |> T.ok("foo",_);
      t |> T.notOk("",_);
      t |> T.end_;
    }
  );
  skip
  (
    (t) => {
      t |> T.ok("",_);
      t |> T.notOk("foo",_);
      t |> T.end_;
    }
  );
};

module Equal = {
  test
  (
    (t) => {
      t |> T.equal("foo", "foo",_);
      t |> T.notEqual("foo", "bar",_);
      t |> T.end_;
    }
  );
  skip
  (
    (t) => {
      t |> T.equal("foo", "bar",_);
      t |> T.notEqual("foo", "foo",_);
      t |> T.end_;
    }
  );
};

module DeepEqual = {
  test
  (
    (t) => {
      t |> T.deepEqual([%obj {foo: 123}], [%obj {foo: 123}],_);
      t |> T.notDeepEqual([%obj {foo: 123}], [%obj {foo: 456}],_);
      t |> T.end_;
    }
  );
  skip
  (
    (t) => {
      t |> T.equal([%obj {foo: 123}], [%obj {foo: 123}],_);
      t |> T.deepEqual([%obj {foo: 123}], [%obj {foo: 456}],_);
      t |> T.notDeepEqual([%obj {foo: 123}], [%obj {foo: 123}],_);
      t |> T.end_;
    }
  );
};

module Throws = {
  test
  (
    (t) => {
      t |> T.throws((_) => Js.Exn.raiseError("throws"),_);
      t |> T.end_;
    }
  );
  skip
  (
    (t) => {
      t |> T.doesNotThrow((_) => Js.Exn.raiseError("throws"),_);
      t |> T.end_;
    }
  );
};
