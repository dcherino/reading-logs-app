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
      return resolve(logs);
    });
  });
}

app.get("/api/logs", async (req, res) => {
  const mockData = "MOCK_DATA.txt";
  fillArrayWithFileData(mockData)
  .then(response => console.log(response))
  .catch(error => console.log(error))
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})