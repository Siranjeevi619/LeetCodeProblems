var isPalindrome = function(x) {
   var numString = x.toString()
   var revString = numString.split('').reverse().join('')
   if (numString == revString){
    return true
   }
   else{
    return false
   }
};
