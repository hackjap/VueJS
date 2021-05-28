# 웹팩 시작하기

## Node.js 와 NPM

- node.js 와 npm 설치

- npm (node package manager) 자바스크립트 라이브러리들을 관리해주는 도구

### npm의 장점과 이유

- 라이브러리의 의존성 및 버전 관리가 유용하다( package.json에서 관리)
- CDN을 불러오는 가져오는 과정을 생략하여 편리하고 효율적
-

### dependencies와 divDependencies 차이

- dependencies

      애플리케이션의 동작과 화면에 조직 및 로직과 연관이 있는 라이브러리

- divDependencies

         개발에 도움을 주는 개발 라이브러리

## 웹팩이란

- 웹팩이란 최신 프론트엔드 프레임워크에서 가장 많이 사용되는 "모듈 번들러(Module Bundler)"

### 모듈번들링

- 웹 애플리케이션을 구성하는 몇십, 몇백개의 자원들을 하나의 파일로 병합 및 압축해주는 동작을 모듈 번들링이라고 합니다.
  ( 빌드 = 번들링 = 변환 )

### 웹펙이 필요한 이유

### 웹팩의 등장 배경

- 파일 단위의 자바 스크립트 모듈
- 웹 개발 작업 자동화 도구
- 웹 애플리케이션의 빠른 로딩 속도와 높은 성능
  - 웹 팩은 기본적으로 필요한 자원은 미리 로딩하는게 아니라 그 떄 그 떄 요청하는 철학
  - 레이지 로딩

### 웹펙으로 해결하려는 문제

- 자바스크립트 변수 유효 범위
- 브라우저별 HTTP 요청 숫자의 제약(최대 연결 횟수)
  - 크롬 6, 사파리 6, 안드로이드 6
- Dynamic Loading & Lazy Loading 미지원

  - 모듈을 원하는 타이밍에 로딩

### 웹팩 설정

    // webpack.configure.js
    devtool: 'source-map' // 빌드한 결과물과 빌드되기전 결과물을 연결해주는 기능

### 웹펙의 주요속성 4가지

    - entry : 빌드를 할 대상파일
    - output : 빌드 후 결과물에 대한 파일
    - mudules : entry에서 output으로 변환을 할 때 개입
    - plugin :

### Loader

- 웹팩이 웹 어플리케이션을 해석할 때 자바스크립트 파일이 아닌 웹 자원(HTML,CSS,Images, 폰트 등)들을 변환할 수 있도록 도와주는 속성

          // use:['css-loader','style-loader'] // 애러
           // 로드의 우선순위는  오른쪽에서 왼쪽으로


          //  test: /\.scss$/, //.sass 확장자를 가진 파일
          //  use: ['style-loader', 'css-loader','sass-loader']

  <br/>

## 실습 명령어

### npm 명령어

       node -v : node version 확인

        npm init : npm 초기화

        npm init -y : npm 생성 시 기본 값으로 바로 생성

        npm install jquery :  jquery 라이브러리 설치 (package.json에서 버전도 확인 가능 )

        npm install gulp : gulp 라이브러리 설치(지역설치)
            - 해당위치에 node_modules라는 폴더와 폴더 하위에 라이브러리 파일 생성
            - --save-prod(기본 값) - 배포용 라이브러리
            - --save-dev - 개발용 라이브러리

        npm uninstall gulp : gulp 삭제

        npm install gulp --global : 전역으로 라이브러리 설치
            - 전역 설치( 경로 : %USERPROFILE%\AppData\Roaming\npm\node_modules(window) 에 파일 생성  )
            - 보통 cli 환경에서 라이브러리 명령어를 사용하기 위해 설치

        npm install vue --save-dev
            npm i vue -D 로 축약 가능


        npm init -y
        npm i webpack webpack-cli -D
        npm i lodash : 자바스크립트 유틸리티 라이브러리 설치
        npm run build

        npm i  : package.json 에 등록된 라이브러리 설치


        // splitting
        npm init -y
        npm i webpack webpack-cli css-loader style-loader mini-css-extract-plugin -D

## 참고 사이트

- 웹팩 핸드북 : https://joshua1988.github.io/webpack-guide/guide.html
- npm : https://www.npmjs.com/ : 자바스크립트 관련 여러 라이브러리들의 저장소
- 웹펙 공식사이트(documentation) : https://webpack.js.org/concepts/

## 개발 환경 설정

- [Chrome](https://www.google.com/intl/ko/chrome/)
- [Git](https://git-scm.com/downloads)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js LTS 버전(v12.x 이상)](https://nodejs.org/ko/)

## VSCode 유용한 플러그인 목록

- 색 테마 : [Night Owl](https://marketplace.visualstudio.com/items?itemName=sdras.night-owl)
- 파일 아이콘 테마 : [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- 문법 검사 : ESLint, [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)
- 실습 환경 보조 : [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- 기타 : [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), [Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager), [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag), [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens), [Atom Keymap](https://marketplace.visualstudio.com/items?itemName=ms-vscode.atom-keybindings), [Jetbrains IDE Keymap](https://marketplace.visualstudio.com/items?itemName=isudox.vscode-jetbrains-keybindings) 등
