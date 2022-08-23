import express from 'express';
import { renderToString } from 'react-dom/server';
import React from 'react';
import Layout from '../components/Layout';
import layout from '../middlewares/resLayout';
import authCheck from '../middlewares/authCheck';
// import authCheck from '../middlewares/authCheck';

const route = express.Router();
route.use(layout);
route.get('/', async (req, res) => {
  try {
    const initState = { path: req.originalUrl, userSession: req.session.userSession };

    // const html = renderToString(<Layout initState={initState} />);
    // res.write('<!DOCTYPE html>');
    // res.end(html);

    res.layout(initState);
  } catch (err) {
    console.error(err);
  }
});

route.get('/registration', async (req, res) => {
  try {
    const initState = { path: req.originalUrl, userSession: req.session.userSession };
    res.layout(initState);
  } catch (err) {
    console.error(err);
  }
});

route.get('/home', authCheck, async (req, res) => {
  try {
    const initState = { path: req.originalUrl, userSession: req.session.userSession };
    res.layout(initState);
  } catch (err) {
    console.error(err);
  }
});

route.get('/notauth', async (req, res) => {
  try {
    const initState = { path: req.originalUrl, userSession: req.session.userSession };
    res.layout(initState);
  } catch (err) {
    console.error(err);
  }
});

export default route;
