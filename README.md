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

- onError 함수가 동작하면서 정상적인 이미지인지 확인하고 아닐 경우 대체 이미지를 불러옵니다. 인피니티 스크롤을 구현할 때 map()으로 반복 될 데이터가 IntersectionObserver의 observer에 감지 될 때 마다 바뀌면서 다시 랜더링 됩니다. 문제는 이 랜더링할 때마다 onError함수가 도작하면서 대체 이미지에 FOUC가 생깁니다.

- useInfinityQuery가 아닌 배열 형식의 state를 만들어 API 통신한 값을 쌓아주는 형태로 바꿔보았으나, 데이터가 쌓이면 state의 값이 변경되는 것은 똑같기 때문에 해결하지 못했습니다.

- 이미지만 리랜더링 되는것을 막기 위해 memo와 areEqual 함수를 사용했지만 해결하지 못했습니다.

- 이미지의 background에 기본적으로 대체 이미지를 적용시켜주는 방법을 사용하려고 했지만 img에는 png처럼 바탕이 보이는 확장자들이 존재했기 떄문에 해결할 수 없었습니다.

- 만약 해당 문제를 해결할 수 있는 방법이 존재한다면 리뷰 부탁드립니다.
