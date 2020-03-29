const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  autoplay: false,
  audio: [
    {
      name: "Coming home",
      artist: 'Skylar Grey',
      url: 'https://raw.githubusercontent.com/xiaohui96/picture/master/music/Coming.mp3',
      cover:'https://raw.githubusercontent.com/xiaohui96/picture/master/Coming.jpg',
    }
  ]
});
