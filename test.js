let file = [1, 2, 4, 5, 6, 8, 9, 10, 11, 15]
let date = 11;

//let json = JSON.parse(data);

function search(file, date) {
    milieux = Math.floor(file.length / 2);
    let leftfile = file.slice(0, milieux)
    let rightfile = file.slice(milieux, file.length)

    if (file[milieux] < date) {
        console.log(file[milieux]);
        return search(rightfile, date) + leftfile.length;

    } else if (file[milieux] > date) {
        console.log(file[milieux]);
        return search(leftfile, date);

    } else {
        return milieux;
    }
}

console.log(search(file, date)); 