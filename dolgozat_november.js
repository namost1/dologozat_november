function disemvowel(str) {
    return str.replace(/[aeiouAEUIOU]/g, '');
  }

  function dateCorrect(datestring) {
    if (typeof datestring === 'string') {
    
      if (datestring.length === 0 ) {
        return '';
      }
    
      var found = datestring.match(/(\d{1,2})\.(\d{1,2})\.(\d{4})/);
  
      if (found) {
        var date = new Date(found[3], found[2] - 1, found[1]),
            day = date.getDate(),
            month = date.getMonth() + 1;
  
        if (day < 10)  {
          day = '0' + day;
        }
        
        if (month < 10)  {
          month = '0' + month;
        }
  
        return `${day}.${month}.${date.getFullYear()}`;
      }
    }
  
    return null;
}

  
function DNAtoRNA(dna){
    return dna.replace(/T/g, 'U');
}
function fizzBuzz(n) {
    return (n % 3 === 0 ? 'Fizz' : '') + (n % 5 === 0 ? 'Buzz' : '') || n;
}
