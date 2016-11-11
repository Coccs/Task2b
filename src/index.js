import express from 'express';
import cors from 'cors';
import FIO from './FIO';

const app = express();
app.use(cors());
app.get('/task_2b', (req, res) => {
  let {fullname} = req.query;
  res.send(FIO(fullname));
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
