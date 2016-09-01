<p align="center">
  <br><strong>random-anime-wallpapers</strong> <br>brought you some nice anime wallpapers 😋.
</p>

<p align="center">
  <a href="https://npmjs.com/package/random-anime-wallpapers"><img src="https://img.shields.io/npm/v/random-anime-wallpapers.svg?style=flat-square" alt="NPM version"></a>
  <a href="https://npmjs.com/package/random-anime-wallpapers"><img src="https://img.shields.io/npm/dm/random-anime-wallpapers.svg?style=flat-square" alt="NPM downloads"></a>
  <a href="https://circleci.com/gh/egoist/random-anime-wallpapers"><img src="https://img.shields.io/circleci/project/egoist/random-anime-wallpapers/master.svg?style=flat-square" alt="Build Status"></a>
</p>

## Install

```bash
$ npm install --save random-anime-wallpapers
```

## Usage

```js
const randomAnimeWallpapers = require('random-anime-wallpapers')

randomAnimeWallpapers()
  .then(images => {
    console.log(images)
    //=> [{id, thumb, full}, ...]
  })

// you can also specific a keyword to search
randomAnimeWallpapers(keyword).then() //...
```

## License

MIT © [EGOIST](https://github.com/egoist)
