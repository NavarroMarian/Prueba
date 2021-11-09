const express = require('express');
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);

//Global variables

//Routes

//Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
