import test from 'ava'
import random from './src'

test('main', async t => {
  const images = await random()
  t.true(images.length > 10)
})
