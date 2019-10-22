import test from 'ava';

import Item from '../../src/Item';


test.beforeEach((ava) => {
	ava.context.item = new Item('phaser', 'name', {});
});

test('the Item constructor', (ava) => {
    const item = ava.context.item;
    ava.is(item.phaser, 'phaser');
    ava.is(item.name, 'name');
    ava.deepEqual(item.options, {});
});


test('the setSize method', (ava) => {
	const item = ava.context.item;
	item.item = {displayWidth: null, displayHeight: null};
	item.setSize(10, 20);
	ava.is(item.item.displayWidth, 10);
	ava.is(item.item.displayHeight, 20);
});

test('the creationContext method', (ava) => {
    const item = ava.context.item;
    ava.is(item.creationContext(), item.phaser);
});

test('the creationContext with options', (ava) => {
    const item = ava.context.item;
    item.options.physics = true;
    item.phaser = { physics: 'physics' };
    ava.is(item.creationContext(), 'physics');
});
