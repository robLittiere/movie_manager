const { program, command } = require('commander');
const transform = require('./transform.js');
program.version('0.0.1');

program 
    .command("transform")
    .alias("t")
    .description("add the release year of a film next to it title ")
    .action(function(){
        transform.transform("JSON/movies.json", "JSON/.movies.out.json");
    })

program.parse(process.argv);