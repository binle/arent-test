# 1. Project information

- the test project for arent company with 3 screens
- build from create react app with typescript `https://create-react-app.dev/docs/adding-typescript/`

## 1.1 Special libraries:

- antd => library for common components, UIs.
- axios => library for call APIs, use interceptor for check common request, response, header...
- node-sass => structure css as object
- react-router-dom => routing the pages
- recharts => chart library, use for render body weight and body fat graph.

## 1.2 ENV

- .env.development => this file is used when run `yarn start`, `npm start`
- .env.development => this file is used when run `yarn build`, `npm build`

# 2 Project structure, special folders, files

- .github/workflow
  - deploy.yml => CICD in github.
- public => static files relate to create react app, favicon and title are changed
- src
  - contains => contain the contain values of this project
  - definition => define the interface, data to object (Dto) which are used in calling the Apis, UI, Component
  - initialization => process first time when the app is start
  - processes => contain almost processing of application
    - common.tsx => common processing
    - apis => all most function to call API to BE
      - test-dat => use for test at local when don't exist BE
  - styles => contain scss files, font files, images, icons which are used for application
    - css => include scss file, the common files will be define in css folder, almost scss file will be include to app.scss
      - pages => contain scss file for each page.
    - fonts => contain the font files which use in this app
    - image => contain images, icons which use in this app
  - utils
    - some utilities which don't relate to app's data
  - view => the main folder contain almost UI, component, page of this application
    - common-components => components which often are re-used in app.
    - pages => contain the page base on each path in router
      - [page-name] => folder contain main processing relate to UI and data of the page
        - components => divide to small components to maintain, review, study code easier.
        - [page-name].page.tsx => file include all UI, data process relate to the page
        - **Note, if the page have many data, we can define more folder like "page-store" to implement the storing data with redux, application context**
    - router.tsx => routing path relate to each page.
  - App.tsx
  - index.tsx => there is a special process: `call initialization before render app.`
  - Dockerfile => build the app to container image
  - docker-compose.yml => build the app with docker-compose
  - other files, folder as CRA.

#3. Note:

- the UI design is not consistent, require use `https://fonts.google.com/noto/specimen/Noto+Sans+JP` but UI design have many items which use font `Hiragino Kaku Gothic Pro`
- some UI, navigation which are not defined will be consider as `coming-soon` features, not found page...
- the calling APIs are implemented but, will fake data with test account
- the authentication flow will be auto process with test account
- I also implement some UI don't have in UI design as: loading...
-
