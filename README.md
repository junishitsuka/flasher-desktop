# flasher-desktop

flasherは最もシンプルなノートブックです.

## 使用されている技術

* Electron
* React
* Redux
* Babel（ES6）
* gulp
* npm
* sqlite3

## How to Run Local

packageは`npm`によって管理します.

タスク管理は`gulp`によって行っています.

ES6を使用しているので, Babelによるコンパイルを事前に実行する必要があります.

`npm run-script watch`のコマンドを起動しておけば, ファイルの変更時に差分コンパイルが走ります.

```
$ npm install -g electron-prebuilt gulp watchify
$ npm install
$ npm run-script watch
$ electron ./app
```
