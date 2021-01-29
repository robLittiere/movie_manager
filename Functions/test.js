/*
let choosedMovies = [];
let file = [1, 4, 4, 4, 4, 8, 9, 10, 10, 10, 12, 15];
let date = 12;
 
function search(file, date) {
    index = Math.floor(file.length / 2); //take the middle index of "file"
    let leftfile = file.slice(0, index) //cut the array in half, begin of 0 to "index"
    let rightfile = file.slice(index, file.length) //cut the array in half, begin of "index" to the file length
 
    if (file[index] < date) {
        //console.log(file[index]);
        return search(rightfile, date); //return the function with the right part of the array in arguments
 
    } else if (file[index] > date) {
        //console.log(file[index]);
        return search(leftfile, date); //return the function with the right part of the array in arguments
 
    } else if (file[index] == date) {
        choosedMovies.push(file[index])
        let offset = index + 1
        for (offset; offset < file.length; offset++) {
            if(date == file[offset]){
                choosedMovies.push(file[offset])
                console.log(choosedMovies)
            }
        }    
        for (index -= 1; index != 0; index--){
            if (date == file[index]){
                choosedMovies.push(file[index])
                console.log(choosedMovies)
            }
        }    
    return choosedMovies
            
    }
    

}

let movies = [];
movies = search(file, date);
console.log(movies)
*/

let choosedMovies = [];
let file = [1, 2, 4, 5, 5, 8, 9, 10, 10, 10, 11, 15];
let date = 10;
 
function search(file, date) {
    index = Math.floor(file.length / 2); //take the middle index of "file"
    let leftfile = file.slice(0, index) //cut the array in half, begin of 0 to "index"
    let rightfile = file.slice(index, file.length) //cut the array in half, begin of "index" to the file length
 
    if (file[index] < date) {
        //console.log(file[index]);
        return search(rightfile, date) + leftfile.length; //return the function with the right part of the array in arguments
 
    } else if (file[index] > date) {
        //console.log(file[index]);
        return search(leftfile, date); //return the function with the right part of the array in arguments
 
    } else if (file[index] == date) {
 
        for (index; index < file.length; index++) {
 
            if (file[index] == date) {
                choosedMovies.push(" à l'index " + index + " il y a " + file[index]);
                console.log(" à l'index " + index + " il y a " + file[index]);
 
            } else if (file[index] > date) {
                console.log(" pas ici " + file[index]);
 
                for (index = index - 2; index < file.length; index--){
 
                    if (file[index] == date){
                        choosedMovies.push(" à l'index " + index + " il y a " + file[index]);
                        console.log(" à l'index " + index + " il y a " + file[index]);
 
                    } else if (file[index] < date) {
                        return choosedMovies;
 
                    }
                }
            }
        }
    }
}
console.log(search(file, date));
