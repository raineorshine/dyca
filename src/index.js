const dyca = db => {
  const store = {
    set: (path, value) => db.set(path, value),
    get: key => db.get(key),
    delete: key => db.delete(key),
    index: key => {},
  }
  return store
}

module.exports = dyca
