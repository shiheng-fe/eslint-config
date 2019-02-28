## 使用方法

在你的项目根目录下创建 .eslintrc.js，根据不同情况，将代码复制到文件中：

### Javascript

```bash
npm install --save-dev eslint babel-eslint @shihengtech/eslint-config-javascript
```

```javascript
module.exports = {
  extends: ["@shihengtech/javascript"]
};
```

### React

```bash
npm install --save-dev eslint babel-eslint eslint-plugin-react @shihengtech/eslint-config-react
```

```javascript
module.exports = {
  extends: ["@shihengtech/react"]
};
```

### TypeScript

```bash
npm install --save-dev eslint babel-eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin @shihengtech/eslint-config-typescript
```

```javascript
module.exports = {
  extends: ["@shihengtech/typescript"]
};
```

### React TypeScript

```bash
npm install --save-dev eslint typescript babel-eslint eslint-plugin-react @typescript-eslint/parser @typescript-eslint/eslint-plugin @shihengtech/eslint-config-react-typescript
```

```javascript
module.exports = {
  extends: ["@shihengtech/react-typescript"]
};
```
