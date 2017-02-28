"use strict";

var fs = require("fs");

var ImageTracer = require(__dirname +'/../imagetracer_v1.1.2');

var image = require('get-image-data');



image('./panda.png', function(error, png) {
		//console.log(png);
        // creating an ImageData object
        var myImageData = { 'width':512, 'height':512, 'data':png.data };
		
        // tracing
        var options = {"blurdelta":0,"blurradius":0,"colorquantcycles":2,"colorsampling":null,"desc":false,"lcpr":null,"ltres":0.5,"mincolorratio":0.02,"numberofcolors":256,"pathomit":1,"qcpr":null,"qtres":1,"roundcoords":1,"scale":1,"simplifytolerance":0,"viewbox":false}; // optional
        var svgstring = ImageTracer.imagedataToSVG( myImageData, options );

        // writing to file
        fs.writeFile(__dirname+"/test.svg", svgstring, function(err) {
            if (err) throw err;
            console.log(__dirname+"/test.svg was saved!");
        });

    });// End of reader.parse()
