/**
 * Takes two command line arguments
 * A URL and a local file path // node fetcher.js http://www.example.edu/ ./index.html
 *
 * Make an HTTP request and wait for the response
 * After the http request is complete, take the data and write it to the file
 * Try using a promise function?
*/
const request = require('request');
const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const processArgs = process.argv;
const url = processArgs[2];
const localPath = processArgs[3];


request(url, (error, response, body) => {
  if (!localPath) {
    console.log('Invalid local path');
  }
  if (!error && response.statusCode === 200) {
    fs.access(localPath, fs.constants.F_OK, (err) =>{
      console.log(`${localPath} ${err ? 'does not exist' : 'exists'}`);
      if (err) {
        fs.writeFile(localPath, body, (err) => {
          if (err) throw err;
          console.log("Data has been written to the file successfully!");
          console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`);
          rl.close();
        });
      } else {
        rl.question("Would you like to overwrite file? (y/n)", (answer) => {
          if (answer == 'y' || answer == "yes") {
            fs.writeFile(localPath, body, (err) => {
              if (err) throw err;
              console.log("Data has been written to the file successfully!");
              console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`);
              rl.close();
            });
          } else {
            console.log("File unchanged.");
            rl.close();
          }
        });
      }
    });
  } else {
    console.log(`See response for details: ${response.statusCode}`);
    console.log(`An error has occured: ${error}`);
  }
});