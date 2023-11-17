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

const processArgs = process.argv;
const url = processArgs[2];
const localPath = processArgs[3];


request(url, (error, response, body) => {
  if (error !== null) {

  } else {
    console.log(`An error has occured: ${error}`);
  }
}) 