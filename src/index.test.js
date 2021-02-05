const dyca = require('./index')

test('auto key', () => {
  const store = dyca(new Map())
  const id = store.set(1)
  expect(store.get(id)).toBe(1)
})

test('ad hoc collection (1 level)', () => {
  const store = dyca(new Map())
  const id = store.set('a', 1)
  expect(store.get(id)).toEqual(1)
  expect(store.get('a')).toEqual([1])
})

test('ad hoc collection (recursive)', () => {
  const store = dyca(new Map())
  store.set('foo/bar/baz', 1)
  expect(store.get('foo/bar/baz')).toEqual([1])
})

test.skip('get nested property via path', () => {
  const store = dyca(new Map())
  store.set('foo', {
    bar: {
      baz: 1
    }
  })
  expect(store.get('foo/bar/baz')).toBe(1)
})
