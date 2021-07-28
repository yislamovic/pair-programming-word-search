const wordSearch = (letters, word) => {
    
    const horizontalJoin = letters.map(ls => ls.join(''))
    let newLetters = verticalLetters(letters);
    const verJoin = newLetters.map(ls => ls.join(''))
    
    let bool = false;
    console.log(horizontalJoin);
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            bool = true;
        } 
        console.log(bool);
    }
    if (!bool) {
        let bool1 = false;
        for (let l of verJoin) {
            if (l.includes(word)) {
                bool1 = true;
            }
        }
        return bool1;
    } else {
        
        return bool;
    }
    
}

let verticalLetters = function(letters){
    let newColomn = [];
    const nestedArrLength = letters[0].length;
    
    for (let j = 0; j < nestedArrLength; j++) { // row
      let newRow = [];
      for(let i = 0; i < letters.length; i++) { // colounm
        newRow.push(letters[i][j]);
      }
      newColomn.push(newRow);
    }
    return newColomn;
}

module.exports = wordSearch
