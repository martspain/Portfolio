module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|pdf)$': '<rootDir>/fileMock.js',
    '\\.(scss|css|less)$': '<rootDir>/fileMock.js',
  },
  testEnvironment: 'jsdom',
};
