function palindrome(str) {

  str2 = str.replace(/[^0-9a-z]/gi, '');
  var bool = false;
  
  var arr1 = str2.split("");
  var strRev = arr1.reverse().join("");
  
  if(str2.toLowerCase() === strRev.toLowerCase())
    bool = true;
  
  return bool;
}



palindrome("A man, a plan, a canal. Panama");
