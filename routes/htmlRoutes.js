const path = require('path');

module.exports = (app) => {

  // app.get('/notes', (req, res) => {
  //   res.sendFile(path.join(__dirname, '../public/notes.html'));
  // });

  app.get('*', (req, res) => {
    res.sendFile('index.html', {root: 'public'});
  });

  app.get('/notes', (req, res) => {
    res.sendFile('index.html', {root: 'public'});
  })
};

//  app.get('*', (req, res) => {
//  res.sendFile(path.join(__dirname, '../public/index.html'));
//   })
// };