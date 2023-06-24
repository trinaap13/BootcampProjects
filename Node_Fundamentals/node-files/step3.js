const fs = require('fs')
const process = require('process');
const axios = require('axios');

function handleOutput(text, out) {
  if (out) {
    fs.writeFile(out, text, 'utf8', function(err) {
      if (err) {
        console.error(`Could not write ${out}: ${err}`);
        process.exit(1);
      }
    });
  } else {
    console.log(text);
  }
}

function cat(path) {

    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            process.kill(1)
        }
        console.log(data)
    })
}

cat(process.argv[2]);

async function webCat(url, out) {
  try {
    let response = await axios.get(url);
    console.log(response.data, out);
  } catch (err) {
    console.error(`Error fetching ${url}: ${err}`);
    process.exit(1);
  }
}

let path;
let out;

if (process.argv[2] === '--out') {
  out = process.argv[3];
  path = process.argv[4];
} else {
  path = process.argv[2];
}

if (path.slice(0, 4) === 'http') {
  webCat(path, out);
} else {
  cat(path, out);
}

