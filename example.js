'use strct'
const random = require('./')

random('rem')
  .then(images => {
    console.log(images[0].thumb)
  })
