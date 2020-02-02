import * as http from 'http';
import { Sheet } from './model/Sheet';
import { Clazz } from './model/Clazz';
import { Race } from './model/Race';
import { Nephilim } from './model/Nephilim';
import { Sex } from './model/Sex';

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end("");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  let sheet = Sheet.builder()
    .withName("BANANA NAME")
    .withSex(Sex.MALE)
    .withAppearance(10)
    .withAgi(1)
    .withCon(2)
    .withDes(3)
    .withFue(4)
    .withInt(20)
    .withPer(8)
    .withPod(12)
    .withVol(15)
    .withLevel(1)
    .withClazz(Clazz.GUERRERO)
    .withRace(Race.HUMANO)
    .withNephilim(Nephilim.SYLVAIN)
    .withGnosis(10)
    .build();
    console.log(sheet)
});