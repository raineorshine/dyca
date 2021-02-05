const uid = require('uuid').v4

const dyca = db => {

  const collections = {}

  const store = {

    set: (path, value) => {
      if (value === undefined) {
        value = path
        path = ''
      }

      // set in db
      const id = uid()
      db.set(id, value)

      // index
      if (!collections[path]) {
        collections[path] = new Set()
      }
      collections[path].add(id)

      return id
    },

    get: path => {
      const parts = path.split('/')

      if (collections[parts[0]]) {
        return Array.from(collections[parts[0]].keys())
          .map(key => db.get(key))
      }

      const collection = collections[parts[0]] || db
      const value = parts.slice(1).reduce((accum, part) => accum[part], db.get(parts[0]))
      return value
    },

    delete: key => db.delete(key),

    index: key => {},

  }
  return store
}

module.exports = dyca
