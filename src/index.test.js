const dyca = require('./index')

test('auto key', () => {
  const store = dyca(new Map())
  const id = store.set(1)
  expect(store.get(id)).toBe(1)
})

test('key-value', () => {
  const store = dyca(new Map())
  store.set('a', 1)
  expect(store.get('a')).toBe(1)
})

test('get nested property via path', () => {
  const store = dyca(new Map())
  store.set('foo', {
    bar: {
      baz: 1
    }
  })
  expect(store.get('foo/bar/baz')).toBe(1)
})
