module.exports = {
  name: 'angular-package-builder',
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
  // resolver: '@nrwl/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageReporters: ['html'],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.json',
    }
  },
  coverageDirectory: '../../coverage/apps/functions'
};
