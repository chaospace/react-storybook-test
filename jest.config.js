const config = {
  verbose: true, //실행 중에 각 개별 테스트를 보고해야 하는지 여부
  rootDir: '.',
  roots: ['<rootDir>/src/', '<rootDir>/tests/'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  testMatch: ['<rootDir>/**/*.test.(ts|tsx)'],
  //Jest가 테스트와 모듈을 스캔해야 하는 루트 디렉터리
  testEnvironment: 'jsdom',
  //테스트에 사용할 테스트 환경
  transformIgnorePatterns: ['<rootDir>/node_modules/', '\\.pnp\\.[^\\/]+$'],
  moduleDirectories: ['node_modules'],
  // 파일 경로가 패턴과 일치하면 변환되지 않습니다.
  coveragePathIgnorePatterns: ['src/index.ts'],
  setupFiles: ['./tests/setup.js'],
  setupFilesAfterEnv: ['./tests/setupAfter.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.scss$': '<rootDir>/node_modules/jest-scss-transform',
    '^.+\\.mdx$': '@storybook/addon-docs/jest-transform-mdx'
  },
  // 파일 경로가 패턴 중 하나와 일치하면 적용 범위 정보를 건너뜁
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/__mocks__/fileMock.ts',
    '\\.(css|scss|less)$': '<rootDir>/tests/__mocks__/styleMock.ts'
  }
};

module.exports = config;
