import express from "express"
import path from "path"
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const port = process.env.PORT

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public", "zaliczenie.html"));
});

app.listen(port, () => console.log("listening on localhsot:8080"));