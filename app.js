const { program, command } = require('commander');
const transform = require('./transform.js');
const sort = require('./sort.js');

program.version('0.0.1');

program 
    .command("transform <input> <output>")
    .alias("t", "ts")
    .description("add the release year of a film next to it title ")
    .action(function(input, output){
        transform.transform(input, output);
    })

program 
    .command("sort_title <input> <output>")
    .alias("st")
    .description("Sort in alphabetical order, according to their title")
    .action(function(input, output){
        sort.sort_title(input, output);
    })


/*
program    
    .arguments("<input> <output>")
    .option('-t, --transform, transform', 'add the release year of a film next to it title')
    .action(function(input, output){
        transform.transform(input, output);
    })
*/    
    
program.parse(process.argv);

