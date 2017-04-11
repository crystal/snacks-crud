// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/snacker'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/snacker-test'
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    }
  }
};
