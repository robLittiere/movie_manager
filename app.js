const { program, command } = require('commander');
const transform = require('./transform.js');
const sort = require('./sort.js');
const chooseMovie = require('./chooseDate.js')

program.version('0.0.1');

program 
    .command("transform <input> <output>")
    .alias("ts")
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

program
    .command("sort_date <input> <output>")
    .alias("sd")
    .description("Sort movies by date, in desc order")
    .action(function(input, output){
        sort.sort_date(input, output);
    })    
    
program 
    .command("chooseByDate <input> <date> <isSort>")
    .alias("cbd")
    .description("choose movie by the date you want")
    .action(function(input, date, isSort){
        chooseMovie.chooseMovie(input, date, isSort)
    })   
       
program.parse(process.argv);