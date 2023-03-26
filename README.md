## 실행 방법

```
npm install
```

```
npm start
```

## 개발 요약

- Typescript와 React를 기반으로 개발했습니다.

- 상태 관리 라이브러리로는 redux-toolkit과 react-query를 사용했습니다. 새로고침했을 때 검색어를 유지하기 위해 redux-persist로 로컬스토리지에 검색어를 저장했습니다.

- CSS-in-JS 라이브러리로 Styled-Component을 이용하여 컴포넌트를 스타일링했습니다.

- react-query의 useInfiniteQuery와 IntersectionObserver를 사용하여 인티니티 스크롤을 구현했습니다.

- redux와 custom hook을 사용하여 modal을 전역으로 사용했습니다. 검색어가 없을 경우의 400 error를 막기 위해 모달 처리했습니다.

- assets 이미지 경로를 객체로 만들었습니다. 검색어 초기화, 뒤로가기, 북마크 저장 등 아이콘을 컴포넌트로 만들었습니다.

- input을 컴포넌트 만들고 onFocus, onBlur, onChange, onClose 등 필요한 함수와 state를 custom 훅을 이용해 재사용성을 늘렸습니다.

- 논리연산자와 onError를 이용해 에러가 난 파비콘과 이미지를 default 이미지로 변경했습니다.

- 텍스트 세로 길이에 맞춘 스켈레콘 로딩을 디자인하여 사용자 경험을 개선했습니다.

## 해결하지 못한 부분

- 랜더링이 될 때마다 onError 함수가 동작하면서 정상적인 이미지인지 체크합니다. 이 체크에는 대략 0.3초의 시간이 걸리는데 이 시간동안 잠시 기존에 로드되었던 대체 이미지가 깜빡이는 현상을 보입니다. 해당 문제를 해결하기 위해 useInfinityQuery가 아닌 배열 형식의 state를 만들어 API통신한 값을 쌓아주는 형식으로도 만들어 보았으나, 데이터가 쌓이면 state의 값이 변경되는 것은 똑같기 때문에 해결하지 못했습니다. 만약 해당 문제를 해결할 수 있는 방법이 존재한다면 리뷰 부탁드립니다.
