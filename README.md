# dyca
[![npm version](https://img.shields.io/npm/v/dyca.svg)](https://npmjs.org/package/dyca)

A dynamic collection mapper that provides ad hoc collection indexing to any key-value store.

## Install

```sh
npm install --save dyca
```

## Usage

```js
const dyca = require('dyca')

const store = dyca(new Map())
store.set('a', 1)
expect(store.get('a')).toBe(1)
```
