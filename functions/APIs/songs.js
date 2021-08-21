const { db } = require("../util/admin");

exports.getAllSongs = (request, response) => {
  db.collection("songs")
    .get()
    .then((data) => {
      let songs = [];
      data.forEach((doc) => {
        songs.push({
          songId: doc.Key,
          title: doc.data().title,
          richieType: doc.data().richieType,
          key: doc.data().key,
        });
      });
      return response.json(songs);
    })
    .catch((err) => {
      console.error(err);
      return response.status(500).json({ error: err.code });
    });
};
