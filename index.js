const app = require('./server')

app.listen(app.get('port'), () => console.log(`SERVER : Server running in ${process.env.NODE_ENV} on port ${process.env.PORT}`));
