fs = require('fs')

module.exports = {
    findMovie,
};
    


function findMovie(file, keyword, genre){
    fs.readFile(file, {encoding: 'utf8'}, function (err, data){
        startDate = Date.now();

        if (err){
            return console.error(err);
        }
        
        //Parse all movies in json object
        let json = JSON.parse(data)

        //Init empty table that will stock all movies in given genre
        let movie_par_genre = []

        //Iterate on JSON
        for (let i = 0; i < json.length; i++){
            if (json[i].hasOwnProperty("genres")){
                //Itertate over genres on a specific movie
                for(let j = 0; j < json[i].genres.length; j++){
                    //If we find the genre
                    if (genre == json[i].genres[j]){
                        //We push the movie in our new table
                        movie_par_genre.push(json[i])
                    }
                }    
            }
        }

        //If we didnt find any movie for the given genre, we sent back a response
        if(movie_par_genre.length != 0){
            //Init empty table that will stock the movies that contained keyword in overview
            let movie_genre_description = [];
            
            //iterate on the table
            for (let i = 0; i < movie_par_genre.length; i++){
                //Get string from description, then make a list of it so we can iterate on that list
                let string = movie_par_genre[i].overview;
                let overview = string.split(" ")
                
                //Iterate on list
                for (let j = 0; j < overview.length; j++){
                    //If keyword in description, push movie in our new table
                    if (keyword == overview[j]){
                        movie_genre_description.push(movie_par_genre[i])
                    }
                }
            }    
            
            //If our table is empty, it means we didnt find the specified keyword
            if (movie_genre_description.length != 0){

                //Init our most_recent_movie variable, we'll stock there our most recent movie
                //Iterate over movies with specified genre and description
                let most_recent_movie;
                for (let i = 0; i < movie_genre_description.length; i++){
                    //If we are at the end of table, check if the last movie is more recent than our actual most recent movie
                    if (i == movie_genre_description.length - 1){
                        if(most_recent_movie < movie_genre_description[i].release_date){
                            most_recent_movie = movie_genre_description[i]
                            
                        }
                    }
                    //If movie[i] is more recent than the next movie in table
                    //It will become our new most_recent_movie
                    else if (movie_genre_description[i].release_date > movie_genre_description[i + 1].release_date){
                        most_recent_movie = movie_genre_description[i]
            
                    }
                    //If movie[i] has the same date release than the next movie, it stays the most recent movie
                    else if (movie_genre_description[i].release_date == movie_genre_description[i + 1].release_date){
                        most_recent_movie = movie_genre_description[i]
                    }
                    //Otherwise, the movie[i+1] becomes our most recent movie
                    else{
                        most_recent_movie = movie_genre_description[i + 1]
                    }
                }
                //Log our results
                console.log("The most recent %s movie containing the keyword %s is %s ", genre, keyword, most_recent_movie.title)
                //Print execution time
                let endDate = Date.now();
                console.log("It took me %s seconds to find it", (endDate - startDate) / 1000)
            }
            else {
                console.log("There are no words in the %s movies description that match your keyword %s", genre, keyword)
            }    
        }  

        else {
                console.log("There are no movies in the genre %s or you entered a genre that doesn't exist in our database", genre)
        }         
    })
}    

