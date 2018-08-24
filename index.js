express = require('express');
bodyParser = require('body-parser');
var sommaArray = require('./sommaArray');

app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 5000;
var router = express.Router();


router.get("/sommaArray", function(req, res) {
    var n1 = req.query.side1;
    var n2 = req.query.side2;
    var n3 = req.query.side3;
    var n4 = req.query.side4;

    var status = 200;

    var side1 = parseFloat(n1);
    var side2 = parseFloat(n2);
    var side3 = parseFloat(n3);
    var side4 = parseFloat(n4);

        response = {Somma: sommaArray([side1, side2, side3, side4])};
        if(response.area == -1) {
            status = 400;
        }

    res.status(status).json(response);
});



//Enable CORS
app.use(function (req, res, next) {
    console.log('Something is happening.');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Content-Type', 'application/json');
    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE');
        return res.status(200).json({});
    }
    next();
});
// register our router on /api
app.use('/', router);
// handle invalid requests and internal error
app.use(function(req, res, next) {
    const err = new Error('Not Found');
    res.status(404);
    next(err);
});
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({ error: {message: err.message}});
});
app.listen(port);
console.log('Server started on port ' + port);
