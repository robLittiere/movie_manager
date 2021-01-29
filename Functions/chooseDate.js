fs = require('fs')
const sort = require('./sort.js');
const getImages = require('./GetImage')

module.exports = {
    chooseMovie
}

function chooseMovie(file, date, isSort, path) {
    fs.readFile(file, { encoding: 'utf8' }, function (err, data) {
        let startDate = Date.now();
        if (err) {
            return console.error(err);
        }
        let moviePerDate = [];
        let json = JSON.parse(data)

        if (isSort == "false") {
            for (let i = 0; i < json.length; i++) {

                var annee = new Date(json[i]["release_date"] * 1000).getFullYear();

                if (annee == date) {
                    moviePerDate.push((json[i]))

                }
            }
            let endDate = Date.now()

            for (let i = 0; i < moviePerDate.length; i++){
                console.log(moviePerDate[i].title)
            }

            console.log('Here on top are the movies released in %s, It took me %s seconds to order them', date, ((endDate - startDate) / 1000))    
        } 


        
        //If a path was indicated, it means the user is expecting the posters in that particular path
        if(path != undefined){
            getImages.getImagesFromMovies(moviePerDate, path)
            // Final endDate after all processes from this function
            let finalEndDate = Date.now()
            console.log('The total process of ordering your movies by the year %s and downloading their poster took me %s seconds to do', date, ((finalEndDate - startDate) / 1000))
        }   
    })
}

function get_fast_date(file, date) {
    index = Math.floor(file.length / 2); //take the middle index of "file"
    let leftfile = file.slice(0, index) //cut the array in half, begin of 0 to "index"
    let rightfile = file.slice(index, file.length) //cut the array in half, begin of "index" to the file length
    let year = new Date(file[index]["release_date"] * 1000).getFullYear();

    if (year < date) {
        //console.log(file[index]);
        return get_fast_date(rightfile, date) + leftfile; //return the function with the right part of the array in arguments
 
    } else if (year > date) {
        //console.log(file[index]);
        return get_fast_date(leftfile, date); //return the function with the right part of the array in arguments
 
    } else if (year == date) {
        choosedMovies.push(file[index])
        let offset = index + 1
        for (offset; offset < file.length; offset++) {
            let year = new Date(file[offset]["release_date"] * 1000).getFullYear()
            if(year == date){
                choosedMovies.push(file[offset])
                console.log(choosedMovies)
            }
        }    
        for (index -= 1; index != 0; index--){
            let year = new Date(file[index]["release_date"] * 1000).getFullYear()
            if (year == date){
                choosedMovies.push(file[index])
                console.log(choosedMovies)
            }
        }    
    return choosedMovies
            
    }
}