//Warming Up (Fundamentals) 
function getCount(str) {
    var vowelsCount = 0;
    for(var i = 0;i < str.length;i++){
      if(str[i] == "a" | str[i] == "e" | str[i] == "i" | str[i] == "o" | str[i] == "u"){
        vowelsCount += 1;
      }
    } 
    return vowelsCount;
  }


  function even_or_odd(number) {
    let msg="";
    if (number%2 == 0) {
      msg="Even";
    } else {
      msg="Odd";
    }
    return msg;
  }

  
  function getMiddle(s)
{
 /*if(s.length%2==0){
    return s[(s.length/2)-1]+""+s[(s.length/2)];
  }
  else if(s.lenght%2!=0) {
    return s[(s.length/2)+1]
  }
  else if(s.length==1){
    return s;
  }*/
    return  (s.length % 2 === 0)? s.charAt(s.length/2-1).concat(s.charAt(s.length/2)):s.charAt(s.length/2)
  
}


function opposite(number) {
  return -number;
}


function accum(s) {
  const tab=[];
  const lowerStr = s.toLowerCase()
  for(let i = 0; i < lowerStr.length; i++) {
    let str = lowerStr[i].toUpperCase()
    for(let j = 0; j < i; j++) {
      str += lowerStr[i]
    }
    tab.push(str)
  }
  return tab.join("-")
  }

  var isSquare = function(n){
 
    if(n<0){
      return false;
    } else{
      return Math.sqrt(n)%1==0? true:false; // fix me
    }
  }

  function disemvowel(str) {
    var newStr = "", i;
    
        for (i = 0; i < str.length; i++) {
            if ("aeiou".includes(str[i].toLowerCase())) continue;
            newStr += str[i];
        }
        return newStr;
    }

    function highAndLow(numbers){
      //let tabNew= numbers.replace(/ /g,"");
      //let tabNew= numbers.split(/\s+/).join('');
        let tabNew=  numbers.split(" ");
        let    tab= numbers.split(/\D/);
      let maxNum= parseInt(tabNew[1]);
      let minNum=parseInt(tabNew[1]);
      
      for(let i=0; i<tabNew.length; i++){
        if(parseInt(tabNew[i])>maxNum){
          maxNum=parseInt(tabNew[i]);
        }
        if(parseInt(tabNew[i])<minNum){
          minNum=parseInt(tabNew[i]);
        }
      }
      return maxNum+" "+minNum;
    }


    function XO(str) {
      let nbrX=0;
      let nbrO=0;
      let msg=false;
      for(let i=0;i<str.length;i++){
        if(str[i]=="x" | str[i]=="X"){
          nbrX++;
        } else if(str[i]=="o" | str[i]=="O"){
          nbrO++;
        }
      }
      if(nbrX==nbrO){
        msg=true;
      }else{
        msg=false;
      }
      return msg;
    }

    function squareDigits(num){
      let  valeur=0;
      let newStr="";
    /*var myArr = String(num).split("").map((num)=>{
      return Number(num);
    })*/
      
      let myFunc = nume => Number(nume);
      var intArr = Array.from(String(num), myFunc);
      
      for(let i=0;i<intArr.length;i++){
      let valeur = intArr[i]*intArr[i];
        newStr = newStr + valeur;
    }
      return parseInt(newStr);
    }

    function findShort(s){
      let tab = s.split(" ");
       let shortestLength = tab[0].length;
       for(let i=0;i<tab.length;i++){
         if(tab[i].length<shortestLength){
           shortestLength = tab[i].length;
         }
       }
       return shortestLength;
     }


     function DNAStrand(dna){
      let newDNA="";
      for(let i=0;i<dna.length;i++){
        if(dna[i]==="A"){
          newDNA=newDNA+"T";
        }else if(dna[i]==="T"){
           newDNA=newDNA+"A";
        }else if(dna[i]==="G"){
          newDNA=newDNA+"C";
        }else if(dna[i]==="C"){
          newDNA=newDNA+"G";
        }
      }
      return newDNA;
    }

    function descendingOrder(n){
      var digits = (""+n).split("").sort(function(a, b){return b-a});
      digits = digits.join("");
      return Number(digits);
    }



    function positiveSum(arr) {
      let sum=0;
      for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
          sum=sum+arr[i];
        }
        }
      return sum;
    }


    function isIsogram(str){
  
      //if empty return true.
     if (str.isEmpty) {
       return true;
     } else {
       // All lower case.
       str = str.toLowerCase();
     }
     //split string into individual characters. 
     var array = str.split('');
     var sortedArr = array.slice().sort();
   
     for (var i = 0; i < array.length; i++) {
       //if duplicate is found return false.
       if (sortedArr[i + 1] == sortedArr[i]) {
         return false;
       }
     }
     //else return true
     return true;
   }


   function filter_list(arr) {
    let newTab=[];
    for(let i=0;i<arr.length;i++){
      if(typeof(arr[i])=== 'number'){
        newTab.push(arr[i]);
      }
    }
    
    return newTab;
  }


  class SmallestIntegerFinder {
  
    findSmallestInt(args) {
      let min=args[0];
      
      for(let i=0;i<args.length;i++){
        if(args[i]<min){
          min=args[i];
        }
      }
      return min;
    }
  }


  function sumTwoSmallestNumbers(numbers) {
    let arr= numbers.sort(function(a, b){return a-b});
    return arr[0]+arr[1];
  }


  function nbYear(p0, percent, aug, p) {

    var population_perc = p0 * percent/100;
    
    population_total = p0 + (population_perc) + aug ;
    
    var number_of_years = 1;
    
    while(population_total < p)
    {        
    
        population_perc = population_total * percent/100;
            population_total = population_total + population_perc + aug;
            number_of_years += 1;
        
     }
              
            return number_of_years;
    }


    function repeatStr (n, s) {
  
      let arrStr=[];
      
      for(let i=0;i<n;i++){
        arrStr.push(s);
      }
      
      //return arrStr.toString();
      return arrStr.join('');
    }

    //Algorithms

    // return masked string
function maskify(cc) {
  
  let arr=cc.split("");
  for(let i=0;i<=arr.length-5;i++){
    arr[i]="#";
  }
  
  return arr.join("");

}


function rowSumOddNumbers(n) {
	// TODO
  return Math.pow(n,3);
}

/*function divisors(integer) {
  
  var arrDivisors=[];
  
  for(var i=2;i<integer.length;i++){
    if(integer % i == 0){
      arrDivisors.push(i);
    }
  }
  if(integer%2!=0){
    return (integer+'is '+' prime');
  }
  return arrDivisors;
};*/
function divisors(integer) {
  let r = []
 for(let i = 2; i<integer; i++){
   if(integer%i == 0) 
     r.push(i)
 }
 let res = r.length !== 0 ? r : `${integer} is prime`;
 return res
};

//Data Types

function makeNegative(num) {
  if(num<0){
    return num;
  }else if(num>0){
    num=-1*num
    return num;
  }else{
    return 0;
  }
}

function removeChar(str){
  str=str.replace(/^[0-9a-z]|[0-9a-z]$/g,"");
  
  return str;
};

function noSpace(x){
  
  return x.replace(/\s/g,"");
  }

  function boolToWord( bool ){
    if(bool){
      return "Yes";
    }else{
      return "No";
    }
  }

  function numberToString(num) {
    return num.toString();
  }

  //Numbers

  function basicOp(operation, value1, value2)
{
  switch(operation){
      case '+':
      return (value1+value2);
      break;
      case '-':
      return (value1-value2);
      break;
      case '/':
      return (value1/value2);
      break;
      case '*':
      return (value1*value2);
      break;
      default:
      return "erreur";
  }
}

function SeriesSum(n)
{
  let sum=1;
  let i=1;
  if(0 == n){ 
    return "0.00";
    }
  
  while(i<n){
  sum=sum + 1/(1+3*i);
    i++;
    }
  return sum.toFixed(2);
  }

  function litres(time) {
  
    let sol=time*1/2;
    return Math.floor(sol);
  }

  function century(year) {
    if(year%100==0){
      return year/100;
    }else {
      return Math.floor(((year/100)+1));
    }
    return;
  }

  function maps(arr){
    return arr.map(x => x * 2);
    }

//Strings

function solution(str){
  let str2=str.split("");
  let arr=[];
  for(let i=str2.length;i>=0; i--){
    arr.push(str2[i]);
  }
  return arr.join("");
}

function solution(str, ending){
  let indice= str.length-ending.length;
  if(ending==str.substr(indice)){
    return true;
  }else{
    return false;
  }
}

function bonusTime(salary, bonus) {
  if(bonus){
    salary=salary*10;
    return "£"+salary;
  }else{
    salary=salary;
    return "£"+salary;
  }
}

function abbrevName(name){

  name=name.toUpperCase();
  let indice=0;
  for(let i=0;i<name.length;i++){
    if(name[i]==" "){
      indice=i;
    }
  }
  return name[0]+"."+name[indice+1];
}

function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");;
}


//Arrays

function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let count= 0;
  
  for(let i = 0; i < arrayOfSheep.length; i++)
    if(arrayOfSheep[i] == true)
      count++;
      
  return count;
}

/*const binaryArrayToNumber = arr => {
  let num=0;
  let n=0;
  for(let i=arr.length-1;i<=0;i--){
    num+= arr[i]*(Math.pow(2,n++));
  }
  return num;
};*/


const binaryArrayToNumber = arr => {
  
  let num = 0; 
  let pow = 0;

  for(let i = arr.length - 1; i >= 0; i--) {
      num += Math.pow(2, (pow++)) * arr[i];
  }

  return num;
};

function findNeedle(haystack) {
  for(let i=0;i<haystack.length;i++){
    if(haystack[i]=="needle"){
      return "found the needle at position "+i;
    }
  }
  }

  function findNeedle(haystack) {
    for(let i=0;i<haystack.length;i++){
      if(haystack[i]=="needle"){
        return "found the needle at position "+i;
      }
    }
    }

    function removeSmallest(numbers) {
      //1)
      /*let smallest=numbers[0];
      let smallestInd=0;
        if(!numbers){
          return numbers
        }
      smallest=Math.min.apply(null, numbers);
     // numbers=numbers.toString();
      numbers.splice(numbers.indexOf(smallest), 1);
      return numbers;*/
      //2)
      /* if(!numbers)return [];
      var min=Math.min.apply(null,numbers);
      numbers.splice(numbers.indexOf(min),1);
      return numbers;
    }*/
    //3)
      const copy = numbers.slice(0)
       let smallestValue = numbers.indexOf(Math.min(...numbers))
       copy.splice(smallestValue, 1);
       return copy
      }


      function digitize(n) {
        n=n.toString();
        n=n.split("");
        n=n.reverse();
        
        n = n.map(str => {
        return Number(str);
      });
        return n;
      }


      //////Objects

      function arithmetic(a, b, operator){
  
        switch(operator){
            case "add":
            return a+b;
            break;
             case "subtract":
            return a-b;
            break;
             case "divide":
            return a/b;
            break;
             case "multiply":
            return a*b;
            break;
            default:
            return "error";
        }
      }


      var Ball = function(ballType) {
        if(!ballType){  
        this.ballType="regular";
          }else {
            this.ballType=ballType;
          }
          
    };
    
    function getBall() {
        return this.ballType;
    }



    // TODO: solve the barking problem!
function Dog(name, breed, sex, age){
  this.name  = name;
  this.breed = breed;
  this.sex   = sex;
  this.age   = age;
}

Dog.prototype.bark = function() {
  return "Woof!";
};

questions.forEach(function(q) {
  q.usersAnswer = null
})

class Dinglemouse{

  constructor( firstName, lastName ){
    this.firstName=firstName;
    this.lastName=lastName;
  }
  
  getFullName(){
    if(this.firstName != "" && this.lastName != "") {
        return this.firstName + " " + this.lastName;
   }
   if(this.firstName == "" && this.lastName == "") {
     return "";
   }
   return this.firstName == "" ? this.lastName: this.firstName;
  }
}

///Basic Language Features

var summation = function (num) {
  let sum=0;
    for(let i=1;i<=num;i++){
      sum=sum+i;
    }
    return sum;
  }

  function greet(name){
    if(name === "Johnny"){
      return "Hello, my love!";
      }
    return "Hello, "+ name + "!";
  }

  // Write a function "greet" that returns "hello world!"
function greet(){
  return "hello world!";
}

function monkeyCount(n) {
  let arr=[];
  
  for(let i=1;i<=n;i++){
    arr.push(i);
  }
  return arr;
}

function areYouPlayingBanjo(name) {

  if(name.charAt(0)=="R" || name.charAt(0)=="r"){
    return name+" plays banjo";
  }else {
    return name+" does not play banjo";
  }
}

///Conditional Statements (Control Flow)
var capitals = function (word) {
  /*let alph=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
   let list=[];
    
    for(let i=0;i<word.length;i++){
       for(let j=0;j<alph.length;j++){
      if(word[i]==alph[j]){
        list.push(i);
      }
        }
    }
    return list;*/
    
    let list=[];
    const regex = /[A-Z]/g;
    const found = word.match(regex);
      for(let j=0;j<found.length;j++){
        list.push(word.indexOf(found[j]));
   }
    return list;
  };

  function plural(n) {
    if((n>=0 && n<1) || n>1){
      return true;
    }else if(n==1){
      return false;
    }
    }

    function leo(oscar){
  
      if(oscar==88){
        return "Leo finally won the oscar! Leo is happy!";
      }
      else if(oscar==86){
        return "Not even for Wolf of wallstreet?!";
      }
      else if((oscar!=88 || oscar!=86) && oscar<88){
        return "When will you give Leo an Oscar?";
      }
      else if(oscar>88){
        return "Leo got one already!";
      }
    }

    function evalObject(value){
      var result = 0;
      switch(value.operation){
        case'+': result = value.a + value.b;break;
        case'-': result = value.a - value.b;break;
        case'/': result = value.a / value.b;break;
        case'*': result = value.a * value.b;break;
        case'%': result = value.a % value.b;break;
        case'^': result = Math.pow(value.a, value.b);break;
          default: result= "error";
      }
      return result;
    }

    function smash (words) {
  
      words=words.join(" ");
       return words;
    };


    var countSheep = function (num){
      let phrase="";
      for(let i=1;i<=num;i++){
        phrase= phrase + i+" sheep...";
      }
      
      return phrase;
    }


    function doubleChar(str) {
      let newStr="";
      
      for(let i=0;i<str.length;i++){
        newStr=newStr + str[i]+""+str[i];
      }
      
      return newStr;
    }

    function createArray(number){
      var newArray = [];
      
      for(var counter = 1; counter <= number;counter++){
        newArray.push(counter);
      }
      
      return newArray;
    }


    var SequenceSum = (function() {
      function SequenceSum() {}
    
      SequenceSum.showSequence = function(count) {
        // for
          //while
        let i=0;
        let sum=0;
        let phrase="";
        while(i<=count){
          sum=sum+i
          phrase=phrase+"+"+i
          i++;
        }
        if( count==0){
          return "0=0";
        }else if(count<0){
          return count+"<0";
        }
        return phrase.replace(/^[+]/,"")+" = "+sum;
      };
    
      return SequenceSum;
    
    })();


    function solution(number){
      let sum=0;
      for(let i=0;i<number;i++){
        if((i%3==0 || i%5==0) || (i%3==0 && i%5==0)){
          sum=sum+i;
        }
      }
      
      return sum;
    }


    function digitalRoot(num) {
      /* let sum=0;
      var myArr = String(num).split("").map((num)=>{
       return Number(num)
     })
      
      if(myArr.length>1){
        for(let i=0;i<myArr.length;i++){
          sum=sum+myArr[i]
        }
      }
       return sum*/
       let result = 0;
       String(num).split('').map(num => {
         result += Number(num);
       });
       return result >= 10 ? digitalRoot(result) : result
     }

     function likes(names) {
  
      if(names.length>4){
        let n=names.length-2;
        return names[0]+", "+names[1]+" and "+n+" others like this";
      }
      
      switch(names.length){
          case 0:
          return "no one likes this"; break;
          case 1:
          return names[0]+" likes this";break;
          case 2:
          return names[0]+" and "+names[1]+" like this"; break;
          case 3:
          return names[0]+", "+names[1]+" and "+names[2]+" like this"; break;
          case 4:
          let n=names.length-2;
          return names[0]+", "+names[1]+" and "+n+" others like this"; break;
          default:
          return "";break;
      }
    }


    function findOutlier(integers){
      var evens = [];
       var odds = [];
       for (var i = 0; i < integers.length; i++) 
       {
           if ((integers[i] % 2) == 0) 
           {
               evens.push(integers[i]);
           } 
           else 
           {
               odds.push(integers[i]);
           }
       }
       var elen = evens.length;
       var olen = odds.length;
    
       if (elen > olen)
       {
           return odds[0];
       } 
       else 
       {
           return evens[0];
       }
    }
    

    function spinWords(string){
      var splitWords = string.split(' ');
      var length = splitWords.length;
      for(var i = 0; i < length; i++)
      {
         if (splitWords[i].length >= 5 ) 
         {
           splitWords[i] = reverseWords(splitWords[i]);
           
         }     
       }
       return splitWords.join(' ');
     }
     
     function reverseWords(str) {
     var i=str.length;
     i=i-1;
     
     var reversedwords=""; 
     for (var x = i; x >=0; x--)
     {
         reversedwords +=(str.charAt(x));
     }
     
     return reversedwords;
     
     }







