export default ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'db'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'nodejs'),
      user: env('DATABASE_USERNAME', 'nodejs'),
      password: env('DATABASE_PASSWORD', 'nodejs'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
