var upper;
var lower;
var a;
function findEven(){
    upper=parseInt(document.getElementById('upper').value);
    lower=parseInt(document.getElementById('lower').value);
    var evenNums="Even Numbers=";
    console.log('even numbers');
    for( a=lower;a<=upper;a++){
      if(a%2==0){
          evenNums+=""+a;
          document.getElementById('result').innerHTML=evenNums;
          document.getElementById('result').style.color='white';
          console.log(a);
      }
    }
    return false;
}

function findodd(){
    upper=parseInt(document.getElementById('upper').value);
    lower=parseInt(document.getElementById('lower').value);
    var oddNums="oddNums";
    console.log('odd numbers');
    for( a=lower;a<=upper;a++){
      if(a%2!=0){
          oddNums+=""+a;
          document.getElementById('result').innerHTML=oddNums;
          document.getElementById('result').style.color='white';
          console.log(a);
      }
    }
    return false;
}