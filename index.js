'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const restService = express();

restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());

restService.post('/echo', function(req, res) {
     var speech = req.body.result && req.body.result.parameters && req.body.result.parameters.echoText ? req.body.result.parameters.echoText : "Seems like some problem. Speak again."
    //var speech = "Hola santi";
    /*var type = req.body.result && req.body.result.parameters && req.body.result.parameters.TypeOfQuote;
    switch (type){
        case "felicidad":
             var speech ="Aquellos que quieren cantar siempre encuentran una canción";
            break;
        case "amor":
             var speech ="No hay amor imposible en esta vida, lo que sí existe son las personas que desisten justo antes de alcanzar el verdadero amor";
            break;
        case "amistad":
            var speech ="Lo amigos son la familia que se escoge";
            break;
        case "inspiracion":
            var speech ="Solo los que corren el riesgo de avanzar, pueden saber hasta dónde pueden llegar";
            break;
        default:
            var speech ="El destino mezcla las cartas, y nosotros las jugamos";
    }*/
    return res.json({
        speech: speech,
        displayText: speech,
        source: 'webhook-echo-sample'
    });
});

restService.post('/slack-test', function(req, res) {

    var slack_message = {
        "text": "Details of JIRA board for Browse and Commerce",
        "attachments": [{
            "title": "JIRA Board",
            "title_link": "http://www.google.com",
            "color": "#36a64f",

            "fields": [{
                "title": "Epic Count",
                "value": "50",
                "short": "false"
            }, {
                "title": "Story Count",
                "value": "40",
                "short": "false"
            }],

            "thumb_url": "https://stiltsoft.com/blog/wp-content/uploads/2016/01/5.jira_.png"
        }, {
            "title": "Story status count",
            "title_link": "http://www.google.com",
            "color": "#f49e42",

            "fields": [{
                "title": "Not started",
                "value": "50",
                "short": "false"
            }, {
                "title": "Development",
                "value": "40",
                "short": "false"
            }, {
                "title": "Development",
                "value": "40",
                "short": "false"
            }, {
                "title": "Development",
                "value": "40",
                "short": "false"
            }]
        }]
    }
    return res.json({
        speech: "speech",
        displayText: "speech",
        source: 'webhook-echo-sample',
        data: {
            "slack": slack_message
        }
    });
});



restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
