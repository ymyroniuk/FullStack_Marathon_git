const express = require('express');
const fs = require('fs');
const request = require('request');
const sharp = require('sharp');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(__dirname + "/")); // !CSS

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
});

app.get('/upload', async (req, res) => {
  const img = './image.png';
  let url = req.query.url;
  request.head(url, () => {
    request(url)
      .pipe(fs.createWriteStream(img))
      .on("close", imageCheck);
  });

  function imageCheck() {
    let arr = [
      [
        [1, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
      [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 0],
      ],
      [
        [0, 0, 0],
        [0, 0, 0],
        [1, 0, 0],
      ],
    ];
    for (let i = 1; i <= 4; i++) {
      let image = sharp('image.png');
      if (i > 1) {
        image = image.recomb(arr[i - 2]);
      }
      image.resize(250, 250).toFile(`image${i}.png`, () => {
        if (i === 4) {
          res.json({
            img: [`image1.png`, `image2.png`, `image3.png`, `image4.png`],
          });
        }
      });
    }
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(
    `Server has been started on PORT ${PORT}`
  );
});
