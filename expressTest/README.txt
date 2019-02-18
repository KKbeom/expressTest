$ cd expressTest

# 아래의 명령어를 통해 package.json 을 생성한다. 해당 파일은 추후 프로젝트의 정보와 설치된 패키지 등을 관리하는데 용이하다
$ npm init
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (blog) 
version: (1.0.0) 
description: 
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: 
license: (ISC) 
About to write to /[경로]/blog/package.json:

{
  "name": "blog",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this ok? (yes) yes

# npm 을 사용할 떄에는 --save 를 입력해주어 package.json 에 저장되도록 해주는게 추후 관리하는데 좋다.
#    임시로 사용하고 추후 관리가 필요없다면 --save 옵션을 제거한다
$ npm install express --save
[출처] [Node.js] express 로 웹서버 생성 + 정적파일(css, js 등) 설정|작성자 demonic