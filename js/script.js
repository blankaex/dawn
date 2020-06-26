const $  = (e) => document.querySelector(e),
      $$ = (e) => document.querySelectorAll(e);

function engines () {
  return {
    g: ['https://google.com/search?q=', 'Google'],
    y: ['https://youtube.com/results?search_query=', 'Youtube'],
    i: ['https://www.google.com/search?tbm=isch&q=', 'Google Images'],
    j: ['http://jisho.org/search/', 'Jisho'],
    k: ['https://kotobank.jp/gs/?q=', 'Kotobank'],
    n: ['https://nyaa.si/?f=0&c=0_0&q=', 'Nyaa'],
    s: ['https://sukebei.nyaa.si/?f=0&c=0_0&q=', 'Sukebei.Nyaa'],
    r: ['https://runescape.wiki/?search=', 'RuneScape Wiki'],
    a: ['https://www.anime-planet.com/anime/all?name=', 'Anime-Planet'],
    v: ['https://vndb.org/v/all?sq=', 'VNDB'],
    w: ['https://en.wikipedia.org/w/index.php?search=', 'Wikipedia']
  };
}

const { parse, stringify } = JSON;

const nodes = (elem) =>
      Array.prototype.slice.call($(elem).children);

new Weather('sydney').getWeather;
new DateTime().setDateTime();
