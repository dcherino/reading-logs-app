const express = require("express");
const app = express();
const fs = require("fs");
const readline = require("readline");
const Promise = require("bluebird");

function fillArrayWithFileData(file) {
  return new Promise((resolve, reject) => {
    const logs = [];
    let rl = readline.createInterface({
      input: fs.createReadStream(file),
    });

    rl.on("line", (line) => {
      // First we split the line by the first ocurrence of comma to get the date
      const items = line.split(/,(.+)/);
      // Remove the tab space between date and time
      const dateTimeStr = items[0].replace(/\t/, " ");
      // Conver the date string in a Javavscript Date object
      const dateObj = new Date(dateTimeStr);

      // Split the second part of the line by tabs
      const remainingItems = items[1].split("\t");

      // Line object
      const lineObj = {
        date: dateObj,
        code: remainingItems[0],
        type: remainingItems[1],
        message: remainingItems[2],
      };
      logs.push(lineObj);
    });

    rl.on("close", () => {
      const sortedLogs = logs.sort((a, b) => b.date - a.date);
      return resolve(sortedLogs);
    });
  });
}

function convertDate(date) {
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = date.getFullYear();
  const hh = (date.getHours() < 10 ? '0' : '') + date.getHours();
  const min = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();

  return `${yyyy}-${mm}-${dd}	${hh}:${min}`;
}

const logsEndpoint = "/api/logs";

app.get(logsEndpoint, async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const mockData = "MOCK_DATA.txt";

  fillArrayWithFileData(mockData)
    .then((response) => res.send(response))
    .catch((error) => res.status(500).send(error));
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

const writeErrorEndpoint = "/api/write/error";

app.get(writeErrorEndpoint, async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  // 'a' flag stands for 'append'
  const log = fs.createWriteStream("MOCK_DATA.txt", { flags: "a" });
  const entry = `${new Date()},994	ERROR	Random error message\n`
  // on new log entry ->
  log.write(entry);

  // you can skip closing the stream if you want it to be opened while
  // a program runs, then file handle will be closed
  log.end();
  res.status(200).send('Log type ERROR has been added');
});

const writeWarningEndpoint = "/api/write/warning";

app.get(writeWarningEndpoint, async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  // 'a' flag stands for 'append'
  const log = fs.createWriteStream("MOCK_DATA.txt", { flags: "a" });
  const entry = `${new Date()},994	WARNING	Random warning message\n`
  // on new log entry ->
  log.write(entry);

  // you can skip closing the stream if you want it to be opened while
  // a program runs, then file handle will be closed
  log.end();
  res.status(200).send('Log type WARNING has been added');
});

const writeInfoEndpoint = "/api/write/info";

app.get(writeInfoEndpoint, async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  // 'a' flag stands for 'append'
  const log = fs.createWriteStream("MOCK_DATA.txt", { flags: "a" });
  const entry = `${convertDate(new Date())},994	INFO	Random info message\n`
  console.log(entry)
  // on new log entry ->
  log.write(entry);

  // you can skip closing the stream if you want it to be opened while
  // a program runs, then file handle will be closed
  log.end();
  res.status(200).send('Log type INFO has been added');
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
