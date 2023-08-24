const express = require("express");
const path = require("path");
const request = require("request");
const PORT = 3003;

const app = express();
app.use(express.static(path.join(__dirname, "public")));

const port = process.env.PORT || PORT;

app.get("/client.zip", (req, res) => {
  const remoteUrl =
    "https://media.githubusercontent.com/media/leeeevi/client-downloader-eos/main/files/client.zip";

  // Forward the request to the remote URL
  req.pipe(request(remoteUrl)).pipe(res);
});

app.get("/Empire_of_Sight_Launcher_Installer.exe", (req, res) => {
  const remoteUrl =
    "https://media.githubusercontent.com/media/leeeevi/client-downloader-eos/main/files/Empire_of_Sight_Launcher_Installer.exe";

  // Forward the request to the remote URL
  req.pipe(request(remoteUrl)).pipe(res);
});

app.listen(port, () => {
  console.log("server running on port 3003");
});
