module.exports = {
  host     : process.env.PG_HOST || 'localhost',
  user     : process.env.PG_USER || 'astonkhor',
  password : process.env.PG_PASSWORD ||  '',
  database : process.env.PG_DATABASE || 'indoorgyms',
  port     : 5432,
};