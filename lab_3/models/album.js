
let albums = [
    {id: "a0", name: "Thriller", artist: "Michael Jackson"},
    {id: "001", name: "Baby One More Time", artist: "Britney Spears"},
    {id: "002", name: "Ladies' Night", artist: "Kool & the Gang"}
  ]


  module.exports = {
      getAll,
      getOne,
  };

  function getAll() {
      return albums;
  }

  function getOne(id) {
      return albums.find((album) => album.id == id)
  }