import { test } from 'uvu';
import * as assert from 'uvu/assert';
import resolver from './index.js'

test('initial', () => {
  assert.ok(resolver.includes('h'))
})

test.run()
