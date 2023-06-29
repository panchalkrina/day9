document.write("<br/>"+Number("3.14787868"));
document.write("<br/>"+Number(" "));
document.write("<br/>"+Number(" "));
document.write("<br/>"+Number("99 98 "));
//toExponential
let numexp=3.14;
document.write("<br/>"+numexp.toExponential(1));
document.write("<br/>"+numexp.toExponential(2));
document.write("<br/>"+numexp.toExponential(4));
document.write("<br/>"+numexp.toExponential(6));
//tofixed()
let numfixed=3.14;
document.write("<br/>"+numfixed.toFixed());
document.write("<br/>"+numfixed.toFixed(2));
document.write("<br/>"+numfixed.toFixed(4));
document.write("<br/>"+numfixed.toFixed(6));
//topreision()
let numprec=3.14;
document.write("<br/>"+numprec.toPrecision());
document.write("<br/>"+numprec.toPrecision(2));
document.write("<br/>"+numprec.toPrecision(4));
document.write("<br/>"+numprec.toPrecision(6));
//max number possible in js
document.write("<br/>" +Number .MAX_VALUE );
//min number possible in js
document.write("<br/>" +Number .MIN_VALUE );
//1./0;
document.write("<br/>" +Number .POSITIVE_INFINITY );
//-1/0;
document.write("<br/>" +Number .NEGATIVE_INFINITY);
//parseInt()
document.write("<br/>"+parseInt("-10"));
document.write("<br/>"+parseInt("-10.33"));
document.write("<br/>"+parseInt("10"));
document.write("<br/>"+parseInt("10.33"));
document.write("<br/>"+parseInt("10 20 30"));
document.write("<br/>"+parseInt("year is:10"));
//parseFloat()
document.write("<br/>"+parseFloat("-10"));
document.write("<br/>"+parseFloat("-10.33"));
document.write("<br/>"+parseFloat("10"));
document.write("<br/>"+parseFloat("10.33"));
document.write("<br/>"+parseFloat("10 20 30"));
document.write("<br/>"+parseFloat("year is :10"));
//date-year,month,day,hours,minutes,seconds,milliseconds
document.write("<br/>"+new Date());
document.write("<br/>"+new Date("1970-01-01"));
document.write("<br/>"+new Date(2018,11,24,10,33,30,0));
document.write("<br/>"+new Date("October 13,2014 11:13:00"));

var d=new Date();
document.write("<br/>"+d.toString());
document.write("<br/>"+d.toUTCString());
document.write("<br/>"+d.toDateString());
document.write("<br/>"+d.toISOString());


document.write("<br/>"+d.getTime());
document.write("<br/>"+d.getDate());
document.write("<br/>"+d.getDay());
document.write("<br/>"+d.getFullYear());
document.write("<br/>"+d.getHours());
document.write("<br/>"+d.getMonth());















