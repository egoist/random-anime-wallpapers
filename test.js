import test from 'ava'
import random from './src'

test('main', async t => {
  const images = await random()
  t.true(images.length > 10)
  t.truthy(images[0].id)
  t.truthy(images[0].thumb)
  t.truthy(images[0].full)
})
