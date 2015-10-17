# flasher-desktop

flasherはElectron, React, Babelによる最もシンプルなノートブックです.

## How to Run Local

packageは`npm`によって管理します.

タスク管理は`gulp`によって行っています.

`npm run-script watch`のコマンドを起動しておけば, ファイルの変更時に差分コンパイルが走ります.

```
$ npm install -g electron-prebuilt
$ npm install
$ npm run-script watch
$ electron ./app
```
