// Do not change any of the function names

function getBiggest(x, y) {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
    if(x > y){
      
     console.log(x);
    }
      else if(x < y){

        return y;
      }
      else if ( x===y){

        console.log( x && y);
      }

function greeting(language) {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'Mandarin' -> 'Ni Hao!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
      var germanLanguage = German;
      germanLanguage = 'Guten Tag';

      var chineseLanguage = Chinese;
      chineseLanguage ='Ni Hao';

      var spanishLanguage = Spanish;
      spanishLanguage = 'Hola';

      if(language===German){
        
        console.log(germanLanguage);
      }
        else if(language===Chinese){

          console.log(chineseLanguage);
        }
          else if(language===Spanish){

            console.log(spanishLanguage);
          }
              else{
                console.log('Hello');
              }
}

function isTenOrFive(num) {
  // return true if num is 10 or 5
  // otherwise return false
    if(num===10 || num===5){
      
      console.log(true);
     }
        else if(num!==10||5){
          
          console.log(false);
        }
}

function isInRange(num) {
  // return true if num is less than 50 and greater than 20
  // otherwise return false
  if(num< 50 && num > 20){
    
    console.log(true);
  }
    else if(!num< 50 &&!num >20){

      console.log(false);
    }
}

function isInteger(num) {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
  if(num <=0 && num >=0){

      console.log(Math.floor(num));
  }
      else if(!Math.floor(num)){

        console.log(false);
      }
  }
}

function fizzBuzz(num) {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  if((num/3)===0){

    console.log(fizz);
  }
  else if((num/5)===0){

    console.log(buzz);
  }
     else if((num/3)===0 && (num/5)===0){
    
         console.log(fizzbuzz);
     }
      else{
       console.log(num);
      }
  }




function isPrime(num) {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers

}// if not prime
    if(num <=2){
      for(let i=2; i< num;i++){
        if(num % i===0){
          console.log(false);
        }
          else{
          
            console.log(true);
         }
    }


// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest,
  greeting,
  isTenOrFive,
  isInRange,
  isInteger,
  fizzBuzz,
  isPrime,
};
