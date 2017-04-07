//question 16
 var val = +prompt("Enter Number to decrement of .5 to print reverse value   ");
 var gar = [];
 var saveval=val;
 for(var z = 0 ; z<val*2+1;z++){
        
        gar.push(saveval); 
            saveval=saveval-0.5;
 }
 for(var n = 0 ; n<gar.length;n++){
 document.write(gar[n]+",");
 }