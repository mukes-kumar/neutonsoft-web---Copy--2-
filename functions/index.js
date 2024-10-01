const functions = require('firebase-functions');
const next = require('next');
const express = require('express');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();

server.all('*', (req, res) => {
  return handle(req, res);
});

exports.nextjsFunc = functions.https.onRequest(server);
