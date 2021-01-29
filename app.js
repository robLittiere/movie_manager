const { program, command } = require('commander');
const transform = require('./Functions/transform.js');
const sort = require('./Functions/sort.js');
const chooseMovie = require('./Functions/chooseDate.js')
const search_keyword = require('./Functions/search_keyword.js')
const getImages = require('./Functions/GetImage.js')
const fs = require('fs')

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
    .option('-s, --save <path>', 'Save prints in files')
    .action(function(input, date, isSort, args){
        if (args.save != undefined){
            if (!fs.existsSync(args.save)){
                fs.mkdirSync(args.save);
            }         
            chooseMovie.chooseMovie(input, date, isSort, args.save)
        }
        else{
            chooseMovie.chooseMovie(input, date, isSort, args.save)
        }    
    }) 
 


program 
    .command("search_key_word <file> <key_word> <genre>")
    .alias("skw")
    .description("Find the most recent movie in a specified genre, in which a keyword can be found in the description")
    .action((file, key_word, genre) => {
        search_keyword.findMovie(file, key_word, genre)
    })       


program.parse(process.argv);