const { exec } = require('child_process');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //exec("docker rm -f test-12345 && docker build -t test-12345 /home/app/data/instances/test/ && docker run --name test-12345 --mount type=bind,source=/home/mc-manager/data/server-instances/test/vanilla,target=/home/app -p 25565:25565 test-12345", (error, stdout, stderr) => {
  //exec("docker run --name test-12345 -v /home/app/data/instances/test/vanilla:/home/app -p 25565:25565 test-12345", (error, stdout, stderr) => {
 exec("docker-compose -f ./data/instances/test/docker-compose.yml up --build -d", (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
  res.render('index', { title: 'Express' });
});

module.exports = router;
