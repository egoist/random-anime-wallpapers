import aimer from 'aimer'

export default function random(keyword = '') {
  return aimer(`https://alpha.wallhaven.cc/search?q=${keyword}&categories=010&purity=100&sorting=random&order=desc&page=1`)
    .then($ => {
      const ids = []
      $('.thumb-listing-page').find('figure').each(function () {
        const id = $(this).attr('data-wallpaper-id')
        ids.push({
          id,
          thumb: `https://wallpapers.wallhaven.cc/wallpapers/thumb/small/th-${id}.jpg`,
          full: `https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-${id}.jpg`
        })
      })
      return ids
    })
}
