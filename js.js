
for (var i = 4; i<= 400; i++) {
	document.write(i + '<br>');
  }

var out =document.getElementById('out');
for (var i = 4; i<= 400; i++) {
	out.innerHTML +=i+' ';
}

for (var i=4; i<=13; i+=3){
	document.write(i + '<br>');
}
var out =document.getElementById('out');
for (var i=4; i<=13; i+=3){
	out.innerHTML+=i+' ';
}

for (var i=654; i>=0; i--){
	document.write(i + '<br>');
}

var out=document.getElementById('out');
for(var i=654; i>=0; i--){
	out.innerHTML+=i+' ';
}

for (var i=1983; i<=2017; i++){
	document.write(i + '<br>');
}

var out= document.getElementById('out');
for (var i=1983; i<=2017; i++){
	out.innerHTML+=i+' ';
}

for(var i= -4; i<=100; i+=2){
	document.write(i + '<br>');
}

var out= document.getElementById('out');
for (var i=-4; i<=100; i+=2){
	out.innerHTML+=i+' ';
}

var number = [3, 6, 1, 13, 88, 43];  //1.
alert ( number[0]);
alert ( number[3]);

var mass = ['Hi', "hello", 34, "prima"];     //2.
alert ( mass[0]);
alert ( mass[3]);

var masss = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
alert(masss);

var mas = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];   //4.
mas[2] = 'new element';
alert ( mas[2]);

var num = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];   //5.
num [1]= '22';
num [3]= '44';
alert (num[1]);
alert (num[3]);

var numm = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];   //6.
numm [10]= '100';
alert (numm[10]);

var nam = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43, 100];  //7.
nam [12]='200';
alert(nam);
alert (nam[10]);

var arr =  [31, 24, 35, 47, 12];    //8.
alert (arr[3]);
alert (arr[60]);

var arr = [31, 24, 35, 47, 12];   //9.
var f =1;
 alert(arr[f]);
var f =4;
alert(arr[f]);
var f =7;
alert(arr[f]);


 var arr = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];    //10.
 for (var i=1; i<=5; i++){
  console.log(arr[i]);
 }
 
 var arr = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];    //11.
  for (var i=0; i<=arr.length; i++){
  	console.log(arr[i]);
  }

  var arr = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];  //12. 
  for (var i=0; i<=arr.length; i++){

  	console.log(arr + ' ');
  }
  
 
var arr = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];    //13.
 for (var i=0; i>=arr.length; i++){
 console.log(arr[i]);
  }
arr.reverse();
console.log( arr ); 


var arr = [2, 3, [4,5]];                                     //14.
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

var arr = [2, 3, [4,5] ];                            //15.
console.log(arr[2][0]);
console.log(arr[2][1]);

var arr =  [2, [4, 5], [4, 5] ];                         //16.?????
console.log(arr[1]);

var arr =  [2, [4, 5,[4, 5 ] ] ];                         //16.??????
console.log(arr[1].length);

var arr = [ 2, [3,4,5], [6,7,8]  ];              // 17.
console.log(arr[1][1]);
console.log(arr[2][2]);

var arr = [ 2, [3,4,5], [6,7,8]  ];                  //18.
console.log(arr[2]);
console.log(arr[0]);

var arr = [ 2, [3,4,5], [6,7,8,9, 11, 12, 13, 14]  ];      //19.
console.log(arr[2]);

var  arr = [ ['hi', 3, 'beta'], ['foo', 'jam', 'tritto']  ];     //20.
console.log(arr[1][0]);
console.log(arr[0][2]);


 











