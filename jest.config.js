module.exports = {
  transform: {
    '.(ts|tsx)': 'ts-jest'
  },
  testPathIgnorePatterns: ['/node_modules/', '/lib/', '/es/'],
  testRegex: '(\\.(test|spec))\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  // setupFiles: ['<rootDir>/scripts/setup.js'],
  // auto import files auto
  // setupFilesAfterEnv: ['<rootDir>/scripts/setupEnv.ts'],
  coveragePathIgnorePatterns: ['<rootDir>/scripts']
}
