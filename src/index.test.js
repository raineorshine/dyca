const dyca = require('./index')

describe('set', () => {

  test('simple', () => {
    const store = dyca(new Map())
    store.set('a', 1)
    expect(store.get('a')).toBe(1)
  })

})
