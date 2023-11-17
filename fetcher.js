/**
 * Takes two command line arguments
 * A URL and a local file path // node fetcher.js http://www.example.edu/ ./index.html
 * 
 * Make an HTTP request and wait for the response
 * After the http request is complete, take the data and write it to the file
 * Try using a promise function?
*/

const processArgs = process.argv;
const url = processArgs[2];
const localPath = processArgs[3];

const request = require('request');

request(url, (error, response, body) => {
  console.log('error: ', error);
  console.log('response:', response);
  console.log('body: ', body);
}) 