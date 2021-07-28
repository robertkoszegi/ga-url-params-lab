
const Album = require("../models/album");

function index(req, res) {
    res.render("albums/index", {
        albums: Album.getAll(),
    });
};

function show(req, res) {
    res.render("albums/show", {
        album: Album.getOne(req.params.id),
    });
};

module.exports = {
    index,
    show,
};

// -----------------------------------------------------------------------------

// *****This option:
// The controller provides the data (albums), not the model

// let albums = [
//     {id: "a0", name: "Thriller", artist: "Michael Jackson"},
//     {id: "001", name: "Baby One More Time", artist: "Britney Spears"},
//     {id: "002", name: "Ladies' Night", artist: "Kool & the Gang"}
// ]

// function getAll() {
//     return albums;
// }

// function getOne(id) {
//     return albums.find((album) => album.id == id)
// }

// function index(req, res) {
//     res.render("albums/index", {
//         albums: getAll(),
//     });
// };

// function show(req, res) {
//     res.render("albums/show", {
//         album: getOne(req.params.id),
//     });
// };

// module.exports = {
//     index,
//     show,
// };