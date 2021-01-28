fs = require('fs')
const sort = require('./sort.js');

module.exports = {
    chooseMovie
}

function chooseMovie(file, date, isSort) {
    fs.readFile(file, { encoding: 'utf8' }, function (err, data) {

        if (err) {
            return console.error(err);
        }

        if (isSort == "false") {
            let json = JSON.parse(data)

            for (let i = 0; i < json.length; i++) {

                var annee = new Date(json[i]["release_date"] * 1000).getFullYear();

                if (annee == date) {
                    let choosedMovie = (json[i]["title"] += ' (' + annee + ')')
                    console.log(choosedMovie);
                }
            }

        } 

        else if (isSort == "true") {
            let moviePerDate = []
            console.log(search(tab, date));

        } 
        else {
            console.log("unaivaible");
        }
    })
}

function search(json, date, movie_year) {
    
    milieux = Math.floor(json.length / 2);
    let leftJson = json.slice(0, milieux)
    let rightJson = json.slice(milieux, json.length)

    if (json[milieux].release_date < date) {
        //console.log(file[milieux]);
        return search(rightJson, date) + leftJson.length;

    } 

    else if (json[milieux].release_date > date) {
        //console.log(file[milieux]);
        return search(leftJson, date);

    } 

    else if(json[milieux].release_date == date) {
        movie_year.push(json[milieux])
        json.slice(milieux, 1)
        return search(json, date, movie_year);
    }

    else if(milieux == 0 || milieux == json.length -1){
        return movie_year
    }


}

function quick_sorting(file){
    
    fs.readFile(file, {encoding: 'utf8'}, function (err, data){
        startDate = Date.now();

        if (err){
            return console.error(err);
        }
        
        //Parse all movies in json object
        let json = JSON.parse(data)
        
        sort.tri_rapide(json, 0, json.length-1, 'release_date');
        let movie_year = []
        let new_movie_year = search(json, '2018', movie_year)
        console.log(new_movie_year)

        
    })
};    


