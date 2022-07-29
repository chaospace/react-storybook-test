# 리액트 storybook/react-test

storybook/testing-react 연습

기존 jest사용 시 없던 빌드 에러가 발생

> ( jest 버전 이라기엔 stack-overflow에 과거 부터 있던 문제였음 )

## jest설정에 transform옵션 추가

- tsx?파일에 ts-jest 처리 적용
- jsx?파일에 babel-jest 처리 적용
- scss파일에 jest-scss-transform 처리 적용

## ETC

- 이전에 경험한 적 없던 에러가 jest 패키지 업데이트와 함께 발생함..
- 명확한 원인을 알아봐야 겠음.
