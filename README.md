## swensonHeco-coffeeMachine

# installation

- clone the repo

  ```sh
  git clone https://github.com/i-mostafa/swensonHeco-coffeeMachine.git
  ```

- run mongodb server
  ```sh
  mongod
  ```
- install packages

```sh
cd swensonHeco-coffeeMachine
npm i
```

- add .env file containing:

PORT = `server port number`

MAX_DOCS_LIMIT = `maximum documents returned on query`
DBURL = `database url`

MAx_DEV_RECORDS = `maximum dev data records on resource`
MIN_DEV_RECORDS = `minimum dev data records on resource`

NODE_ENV = `node environment`

for example:

```sh

PORT = 5050

MAX_DOCS_LIMIT = 20
DBURL = mongodb://localhost:27017/swensonHe

MAx_DEV_RECORDS = 50
MIN_DEV_RECORDS = 20

NODE_ENV = development

```

- generate random develop data to test

```sh
npm run data:import
```

- run the server

```sh
npm run dev
```

## License

MIT
