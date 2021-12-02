const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) 
        {
            //console.log(l);
            return true
        }
    }

    const verticleJoin =[];
    for (let i = 0; i < letters[0].length; i++) {
        let col = [];
        for (let j = 0; j < letters.length; j++) {
          col.push(letters[j][i]);
        }
        verticleJoin .push(col.join(''));
      }
      
    for (h of verticleJoin )
    {    //console.log(h);
        if (h.includes(word)) 
        {
            //console.log(h);
            return true
        }
    }
    return false;
    //console.log(word);
    console.log(horizontalJoin);
}

module.exports = wordSearch