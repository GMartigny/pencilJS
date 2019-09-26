import test from "ava";
import Heart from ".";

test.beforeEach((t) => {
    t.context = new Heart([100, 100], 2);
});

test("constructor", (t) => {
    t.is(t.context.radius, 2);
    t.is(t.context.position.x, 100);
    t.is(t.context.position.y, 100);
});

test("trace", (t) => {
    t.context.trace({
        moveTo: (...params) => t.deepEqual(params, [150, 80]),
        bezierCurveTo: () => t.pass(),
    });
});

test("toJSON", (t) => {
    const json = t.context.toJSON();

    t.is(json.radius, 2);
    t.is(json.constructor, "Heart");
});