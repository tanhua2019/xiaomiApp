const express = require('express')
const app = express();
const fs = require('fs')
const path = require('path')



app.get('/swiper/:type', (req, res) => {
  let { type } = req.params;
  fs.readFile(path.join(__dirname, './home/swiper.json'), 'utf-8', (err, data) => {
    let { commendSlider, smartSlider, tvSlider, computerSlider, lifeSlider } = JSON.parse(data);
    switch (type) {
      case 'commend': //推荐
        res.send(commendSlider)
        break;
      case "smart":  //智能
        res.send(smartSlider);
        break;
      case "tv":  //电视
        res.send(tvSlider);
        break;
      case "computer":  //电脑
        res.send(computerSlider);
        break;
      case "life":  //生活周边
        res.send(lifeSlider);
        break;
      default:
        break;
    }
  })
})

app.listen(8888, (err) => {
  console.log('server is running 8888');
})