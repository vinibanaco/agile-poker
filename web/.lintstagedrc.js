module.exports = {
  '*.+(js|jsx|ts|tsx)': ['npm run lint-staged-files'],
  '*.+(json|css|md|yml|yaml)': ['npm run format-staged-files'],
};
