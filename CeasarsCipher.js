function rot13(str) { // LBH QVQ VG!
  var str2 ='A';
  var hi;
  var arr = [];
  
  for(var i = 0; i < str.length; i++)
    {
      if(str[i] >= 'A' && str[i] <= 'Z')
        {
          if(str[i].charCodeAt() > 77)
            {
              arr[i] = ((str[i].charCodeAt() + 13) - 90) + 65 - 1;
            }
          else
            arr[i] = str[i].charCodeAt() + 13;
        }
      else
        arr[i] = str[i].charCodeAt();
    }
  
  //return str2.charCodeAt();//prints int
  return String.fromCharCode.apply(null, arr);
}

// Change the inputs below to test
rot13("LBH QVQ VG!");
