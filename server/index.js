const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000;

const reactRenderer = require('./react-renderer');
const routes = ['/', '/news/:page?'];

/**
 * initialize the application and create the routes
 */
const app = express();

/** 
 * "/path-in-out-routes-arr" should always serve our server rendered page;
 * otherwise, continue with next handlers 
 */
app.get('/', reactRenderer.render(routes));
app.get('/news/:page?', reactRenderer.render(routes));

/**
 * Set the location of the static assets (ie the js bundle generated by webapck)
 */
app.use(express.static(path.resolve(__dirname, '../build')))

/**
 * Since this is the last non-error-handling
 * middleware use()d, we assume 404, as nothing else
 * responded.
 */
app.use(reactRenderer.render(routes));

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
