###  타입스크립트로 리액트 네이티브 앱 만들기

``` 
npm install --save-dev typescript @types/jest @types/react @types/react-native @types/react-test-renderer

```


### 타입스크립트 설정 파일 추가  tsconfig.json  수정  + src 폴더 만들고 App.tsx파일 넣기

```
{
  "compilerOptions": {
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "jsx": "react",
    "lib": ["es6"],
    "moduleResolution": "node",
    "noEmit": true,
    "strict": true,
    "target": "esnext"
  },
  "include": ["src/**/*"]
}

```

### ESLint  및 Prettier 설정 추가

```

리액트 네이티브 프로젝트에 ESLint와 Prettier를 설정하는 과정을 다시 설명해드리겠습니다. 이번에는 yarn을 사용한 설치 과정과 함께, 앞서 언급한 ESLint 규칙을 적용하는 방법을 포함하겠습니다.

### 1단계: 필요한 패키지 설치

#### ESLint와 관련 플러그인 설치:

```sh
yarn add eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-import eslint-config-airbnb --dev
```

#### Prettier 설치:

```sh
yarn add prettier eslint-config-prettier eslint-plugin-prettier --dev
```

### 2단계: ESLint 설정 파일 생성

프로젝트 루트에 `.eslintrc.js` 파일을 생성하고 다음 설정을 추가합니다. 여기에는 Airbnb 스타일 가이드와 함께 앞서 언급한 몇 가지 추가 규칙을 포함하고 있습니다.

```javascript
module.exports = {
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended' // Prettier 플러그인 추가
  ],
  parser: 'babel-eslint',
  env: {
    jest: true,
    browser: true,
    es6: true,
  },
  rules: {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
    'semi': ['error', 'always'],
    'max-len': ['error', { 'code': 100 }],
    'no-lone-blocks': 'error',
    'arrow-parens': ['error', 'always'],
    'object-curly-spacing': ['error', 'always']
    // 여기에 필요한 추가 규칙을 계속 추가할 수 있습니다.
  },
  globals: {
    fetch: false,
  },
};
```

### 3단계: Prettier 설정 파일 생성

프로젝트 루트에 `.prettierrc` 파일을 생성하고 다음 설정을 추가합니다.

```json
module.exports = {
  arrowParens: 'avoid',  // 화살표 함수의 매개변수에 괄호를 사용하지 않음
  bracketSameLine: true, // HTML, JSX에서 마지막 태그를 같은 줄에 위치시킴
  bracketSpacing: false, // 객체 리터럴의 중괄호 사이에 공백을 넣지 않음
  singleQuote: true,     // 문자열을 위해 단일 따옴표 사용
  trailingComma: 'all',  // 가능한 모든 곳에 후행 콤마 사용
  printWidth: 100,       // 한 줄의 최대 너비를 100 문자로 제한
  tabWidth: 2,           // 탭 너비를 2 공백으로 설정
  semi: true             // 세미콜론을 사용하여 문장을 종료
};

``` 
### 리액트 네이티브 프로젝트에 자주 사용되는 라이브러리 설치
리액트 네이티브 프로젝트에 자주 사용되는 라이브러리들을 간결하게 설치할 수 있는 명령어 리스트를 제공해드리겠습니다. 아래의 명령어들은 `yarn`을 사용하여 필요한 라이브러리들을 한 번에 설치할 수 있게 해줍니다.



### 앱 이름 변경하기  https://www.npmjs.com/package/react-native-rename
```
먼저 새 지점으로 전환합니다(선택 사항이지만 권장됨).
$ git checkout -b rename-app
그런 다음 앱 이름을 바꾸세요.
$ npx react-native-rename "Travel App"
사용자 정의 번들 식별자 사용

$ npx react-native-rename "Travel App" -b "com.junedomingo.travelapp"
```


### 필수 리액트 네이티브 라이브러리 설치

1. **React Navigation** (네비게이션 라이브러리)
   
   ```bash
   yarn add @react-navigation/native react-native-screens react-native-safe-area-context
   ```

   스택 네비게이터 추가 설치 (필요한 경우):
   
   ```bash
   yarn add @react-navigation/stack
   ```

2. **Zustand** (상태 관리 라이브러리)

   ```bash
   yarn add zustand
   ```

3. **Axios** (HTTP 클라이언트)

   ```bash
   yarn add axios
   ```

4. **AsyncStorage** (로컬 저장소)

   ```sh
   yarn add @react-native-async-storage/async-storage
   ```

5. **React Native Magnus** (UI 라이브러리)

   ```sh
   yarn add react-native-magnus
   ```

### 선택적 라이브러리 설치

- **Redux**와 **React Redux** (상태 관리, 필요한 경우)

  ```sh
  yarn add redux react-redux
  ```

이 명령어 리스트를 사용하면 리액트 네이티브 프로젝트에 대부분의 기본적인 라이브러리를 간편하게 추가할 수 있습니다. 각 라이브러리의 공식 문서를 참조하여 추가적인 설정이 필요한지 확인하시길 바랍니다.



리액트 네이티브에서 아이콘을 사용하기 위해 많이 사용되는 라이브러리 중 하나는 `react-native-vector-icons`입니다. 이 라이브러리는 다양한 아이콘 세트(Material Icons, FontAwesome, Ionicons 등)를 제공하여, 앱 내에서 아이콘을 쉽게 사용할 수 있게 해줍니다.

### `react-native-vector-icons` 설치:

```bash
yarn add react-native-vector-icons
```

### iOS 설정:

iOS에서 `react-native-vector-icons`를 사용하기 위해서는 몇 가지 추가 설정이 필요합니다:

1. `ios` 폴더 내에서 `pod install`을 실행하여 필요한 CocoaPods 종속성을 설치합니다.
   
   ```bash
   cd ios && pod install && cd ..
   ```

2. Xcode를 통해 프로젝트를 열고, `Info.plist` 파일에 필요한 폰트 파일을 추가합니다. 대부분의 경우 자동으로 처리되지만, 수동으로 추가해야 할 경우가 있습니다.

### Android 설정:

Android의 경우 대부분의 설정이 자동으로 처리되지만, 아이콘 폰트 파일을 `android/app/src/main/assets/fonts` 폴더에 복사해야 할 수도 있습니다. 대부분의 경우 자동으로 링크되지만, 만약 문제가 발생한다면 다음 명령어를 실행하여 아이콘 폰트 파일을 수동으로 복사할 수 있습니다:

```bash
react-native link react-native-vector-icons
```

### 아이콘 사용 예:

`react-native-vector-icons` 라이브러리를 설치하고 설정한 후, 다음과 같이 앱에서 아이콘을 사용할 수 있습니다:

```javascript
import Icon from 'react-native-vector-icons/FontAwesome';

const MyIcon = <Icon name="rocket" size={30} color="#900" />;
```

이 예제에서는 FontAwesome의 `rocket` 아이콘을 사용하고 있습니다. 아이콘의 이름, 크기, 색상 등은 원하는 대로 변경할 수 있습니다.

`react-native-vector-icons` 라이브러리는 매우 유연하고 다양한 아이콘 세트를 지원하기 때문에, 리액트 네이티브 앱 개발 시 아이콘을 사용하는 데 있어 훌륭한 선택이 될 수 있습니다. 필요한 아이콘과 해당 설정에 대한 더 자세한 정보는 [`react-native-vector-icons` GitHub 페이지](https://github.com/oblador/react-native-vector-icons)에서 확인할 수 있습니다.



### 