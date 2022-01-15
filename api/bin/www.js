'use strict';

const { app, server } = require('../src/app');
const log = require('../src/modules/cross-cutting/log');
const config = require('../src/config');
const enums = require('../src/enums');

const port = config.get(enums.CONFIG_KEYS.PORT);
const signals = ['SIGINT', 'SIGTERM', 'SIGQUIT'];

const shutdown = () => {
  log.info('Initiating graceful shutdown...');

  if (server) {
    log.info('Trying to close the HTTP Server...');

    // Force close server after 10secs
    const shutdownTimer = setTimeout(() => {
      log.info('Timed out waiting for server to close, forcing shutdown.');
      process.exit(1); // eslint-disable-line no-process-exit
    }, 10000);

    server.close(() => {
      clearTimeout(shutdownTimer);
      log.info('HTTP server closed successfully');
      log.info('Shutdown complete');
      process.exit(0); // eslint-disable-line no-process-exit
    });
  } else {
    log.info('Shutdown complete');
    process.exit(0); // eslint-disable-line no-process-exit
  }
};

signals.forEach((signal) => {
  process.on(signal, shutdown);
});

app.on('shutdown', shutdown);

app.on('ready', () => {
  server.listen(port, () => {
    log.info(`HTTP Server listening on port ${port}`);
  });
});
