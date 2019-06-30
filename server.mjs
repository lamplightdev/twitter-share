import express from 'express';
import template from './public/js/twitter-share-template.mjs';

const app = express();
app.use(express.static('public'));

app.get('/', async (request, response) => {
  response.writeHead(200);
  response.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <link rel="stylesheet" href="/css/app.css">
        <link rel="stylesheet" href="/css/twitter-share.css">
        <script type="module" src="/js/twitter-share.js" async></script>
      </head>
      <body>
  `);

  const props = {
    text: 'A Twitter share button with progressive enhancement',
    url: 'https://grave-mirror.glitch.me',
    via: 'lamplightdev'
  };

  response.write(`
    <twitter-share text="${props.text}" url="${props.url}" via="${props.via}">
      ${template(props)}
    </twitter-share>
  `);

  response.write(`
      </body>
    </html>
  `);

  response.end();
});

// listen for requests :)
const listener = app.listen(process.env.PORT || 8081, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
