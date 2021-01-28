const { program, command } = require('commander');
const transform = require('./transform.js');
program.version('0.0.1');

program 
    .command("transform <input> <output>")
    .alias("t")
    .description("add the release year of a film next to it title ")
    .action(function(input, output){
        transform.transform(input, output);
    })

program.parse(process.argv);