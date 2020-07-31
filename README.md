### notes
* 'dev': run and watch /src .ts files
* 'build:start': build to /dist and run .js files
* 'test': run and watch /src tests
* 'migrate': local postgrator migrations
* pg, knex
* type declarations:  /src/@types
* .env
  * PORT
  * NODE_ENV
  * DB_URL
  * MIGRATION_DB_HOST
  * MIGRATION_DB_PORT
  * MIGRATION_DB_NAME
  * MIGRATION_DB_USER
  * MIGRATION_DB_PASS

  ### branches
  * jwt-auth
    * bcryptjs, jsonwebtoken
    * .env (addition)
      * JWT_SECRET
      * JWT_EXPIRY
