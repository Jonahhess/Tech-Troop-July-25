const SongsManager = function () {
  const _URLPrefix = "https://www.youtube.com/watch?v=";
  const _songs = {};

  const addSong = (title, link) => {
    _songs[title] = link;
  };

  const getSong = (title) => {
    console.log(
      title in _songs ? `${_URLPrefix}${_songs[title]}` : "Not found"
    );
  };

  return { addSong, getSong };
};

const songsManager = SongsManager();
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ");
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U");
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8");

songsManager.getSong("sax"); // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
songsManager.getSong("cha cha slide");
