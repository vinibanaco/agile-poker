'use strict';

module.exports = {
  testEnvironment: 'node',
  coverageDirectory: 'testCoverage',
  coverageReporters: ['text'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  clearMocks: true,
};
