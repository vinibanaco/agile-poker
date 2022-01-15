'use strict';

const express = require('express');

const router = express.Router();

// health check
router.get('/', (_, res) => {
  res.sendStatus(200);
});

// TODO: Docs
// if (config.get(enums.CONFIG_KEYS.ENV) !== enums.ENVS.PRODUCTION) {
//   router.use('/docs', docs.API);
// }

// 404 catch all
router.use((_, res) => {
  if (res.headersSent) {
    return;
  }
  res.sendStatus(404);
});

module.exports = router;
