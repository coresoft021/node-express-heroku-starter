const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8080;

const app = express();

//set the path to the public folder for static assets
app.use(express.static(path.join(__dirname, 'public')));





app.get('/', (req,res) => {
    const pageTitle = "Home";
    res.render("index", {
        pageTitle: pageTitle
    })
});


app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
