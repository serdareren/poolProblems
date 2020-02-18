/* global TweenMax, TimelineMax, SteppedEase, parseFloat, Power0, parseInt, TweenLite, Elastic */

//FUNCTIONS

function questionDecision(questionType, fillTapSize, emptyTapSize, hourEmpty, hourFill) {

  switch (questionType) {
    case 1:
      
      equations(questionType, fillTapSize, emptyTapSize, hourEmpty, hourFill);
      break;

    case 2:
      
      if (hourFill === 1)
        hourFill += hourFill;        

      equations(questionType, fillTapSize, emptyTapSize, hourEmpty, hourFill);

      break;

    case 3:

      equations(questionType, fillTapSize, emptyTapSize, hourEmpty, hourFill);
      break;
  }

}
function equations(questionType, fillTapSize, emptyTapSize, hourEmpty, hourFill) {
  var q1;
  switch (questionType) {

    case 1:
      q1 = "&emsp;" + fillTapSize + " özdeş musluk bir havuzu birlikte " + hourFill + " saatte doldurmaktadır. Aynı Havuzu bu " + fillTapSize + " musluğun " + hourEmpty + " saatte doldurması için kaçar saat arayla açılmaları gerekir? ";
      $("#question").append(q1);
      
      solutions(questionType,fillTapSize,hourFill,hourEmpty);
      break;

    case 2:
      var hour ;
      if(emptyTapSize === 1){
        hour = Math.floor(Math.random() * ((hourFill+6)- hourFill) + hourFill);
      }
      else
        hour = Math.floor(Math.random() * (hourFill - 1) + 1);
      var taps = fillTapSize + emptyTapSize;
      
      q1 = "&emsp;" + fillTapSize + " musluk bir havuzu " + hourFill + " saatte doldurabiliyor, " + emptyTapSize + " musluk ise " + hourEmpty + " saatte boşaltabiliyor. Havuz boş iken " + taps + " muslukta birlikte açılırsa " + hour + " saat sonra havuzun kaçta kaçı dolar?";
      $("#question").append(q1);
      
      solutions(questionType,fillTapSize,hourFill,hourEmpty,emptyTapSize,taps,hour);
      break;

    case 3:
      var ifZero ="";
      var hour = Math.floor(Math.random() * ((hourFill / fillTapSize )- 1) + 1); 
      var tap = Math.floor(Math.random() * (fillTapSize - 1) + 1);
          
          if(hourFill <= (fillTapSize * hour)){
            hourFill = Math.floor(Math.random() * ((1.5*fillTapSize * hour) - (hour*2) ) + (hour*2) );
          }
          if(hour === 0){
            ifZero = "aynı anda açılarak";
          }
          else
            ifZero = hour + " saat arayla açılarak";
      q1 = "&emsp;Özdeş " + fillTapSize + " musluk " + ifZero +", boş bir havuzu " + hourFill + " saatte dolduruyor. Bu musluklardan " + tap + " tanesi aynı havuzun yarısını kaç saatte doldurur? ";
      $("#question").append(q1);
      $("#hide").append(hour);
      $("#hide3").append(hourFill);
      
      solutions(questionType,fillTapSize,hourFill,hour,tap);
      break;
  }
}
function solutions(solutionType, fillTap, hourFill, hourEmpty, emptyTap, totalTap, hour) {
  switch (solutionType) {

    case 1:
      var formul;
      var symbol = "=";
      var sol;
      var sol2;
      var total = (fillTap * hourFill);
      var result;
      var res;
      var clock = "";
      var hour;
      var minu;
      var total1;

      if (fillTap === 4) {
        result = (hourEmpty * 4 - total);
        res = (result / 6);
        hour = parseInt(res);
        if (Math.round(res) !== res) {
          res = parseFloat(Math.round(res * 100) / 100).toFixed(2);
          minu = (((res - (hour)).toFixed(2)) * 60).toFixed(0);
          symbol = "&cong;";
          clock = " Bu da " + hour + " saat " + minu + " dakika olarak hesaplanır.";
          total1 = hour*60+parseInt(minu);
          $("#hide2").append(total1);
        }
        sol = hourEmpty + "/" + total + " + (" + hourEmpty + "-x) /" + total + " + (" + hourEmpty + "-2x) /" + total + " + (" + hourEmpty + "-3x) /" + total + " = 1";
        sol2 = hourEmpty * 4 + "- 6x =" + total + "&emsp;&emsp; 6x = " + result + "&emsp;&emsp;<br> x " + symbol + res + " olarak bulunur.  <br>" + clock;
        formul = "ilk musluk " + hourEmpty + " saat, ikinci musluk " + hourEmpty + "-x saat, üçüncü musluk " + hourEmpty + "-2x saat, dördüncü musluk " + hourEmpty + "-3x saat açık kalmıştır.<br><br>";
        $("#hide").append(hour);
        $("#maths").append("<br><br>"+ sol + "<br>" + sol2);
      }
      if (fillTap === 3) {
        result = (hourEmpty * 3 - total);
        res = (result / 3);
        hour = parseInt(res);
        if (Math.round(res) !== res) {
          res = parseFloat(Math.round(res * 100) / 100).toFixed(2);
          minu = (((res - (hour)).toFixed(2)) * 60).toFixed(0);
          symbol = "&cong;";
          clock = " Bu da " + parseInt(res) + " saat " + minu + " dakika olarak hesaplanır.";
          total1 = hour*60+parseInt(minu);
          $("#hide2").append(total1);
        }
        sol = hourEmpty + "/" + total + " + (" + hourEmpty + "-x) /" + total + " + (" + hourEmpty + "-2x) /" + total + " = 1";
        sol2 = hourEmpty * 3 + "- 3x =" + total + "&emsp;&emsp; 3x = " + result + "&emsp;&emsp;<br> x " + symbol + res + " olarak bulunur. <br>" + clock;
        formul = "ilk musluk " + hourEmpty + " saat, ikinci musluk " + hourEmpty + "-x saat, üçüncü musluk " + hourEmpty + "-2x saat açık kalmıştır.<br><br>";
        $("#hide").append(hour);
      $("#maths").append("<br><br>"+ sol + "<br>" + sol2);
      }
      if (fillTap === 2) {
        result = (hourEmpty * 2 - total);
        hour = parseInt(result);

        if (Math.round(result) !== result) {
          result = parseFloat(Math.round(result * 100) / 100).toFixed(2);
          minu = (((res - (hour)).toFixed(2)) * 60).toFixed(0);
          symbol = "&cong;";
          clock = " Bu da " + hour + " saat " + minu + " dakika olarak hesaplanır.";
          total1 = hour*60+parseInt(minu);
          $("#hide2").append(total1);
        }
        sol = hourEmpty + "/" + total + " + (" + hourEmpty + "-x) /" + total + " = 1";
        sol2 = hourEmpty * 2 + "- x =" + total + "&emsp;&emsp;<br> x "+symbol  + result + " olarak bulunur. <br> " + clock;
        formul = "ilk musluk " + hourEmpty + " saat, ikinci musluk " + hourEmpty + "-x saat açık kalmıştır. ";
      $("#hide").append(hour);
      $("#maths").append("<br><br>"+ sol + "<br>" + sol2);
      }
      
      var s1 = "<br>&emsp;" + fillTap + " musluk " + hourFill + " saatte dolduruyorsa, ters orantılı olduğu için 1 musluk " + (fillTap * hourFill) + " saatte doldurur. Muslukların açılma aralığına x diyelim. Havuz " + hourEmpty + " saatte doluyorsa, " + formul;
      $("#answer").append(s1);
      $("#hide3").append(hourFill);
      $("#hide4").append(hourEmpty);
      break;

    case 2:
      var halfHour = hour / hourFill;
      var emptyHourHalf = hour / hourEmpty;
      var symbol = "=";
      var extra = "";
      
      if(Math.round(halfHour) !== halfHour)
       halfHour = parseFloat(Math.round(halfHour * 100) / 100).toFixed(2);
     
      if(Math.round(emptyHourHalf) !== emptyHourHalf)
       emptyHourHalf = parseFloat(Math.round(emptyHourHalf * 100) / 100).toFixed(2);
     
      var result = (halfHour - emptyHourHalf);
      
      if(Math.round(result) !== result){
       result = parseFloat(Math.round(result * 100) / 100).toFixed(2);
       symbol = "&cong;";
     }
     if(result < 0){
        extra = "Boşaltılan su miktarı doldurulan su miktarından fazla olduğu için " + hour + " saat sonra havuz da su olmayacaktır.";
      }
     if(result > 1){
       extra = "Doldurulan su miktarı boşaltılandan çok fazla olduğu için " + hour + " saat sonra havuzun kapasitesini aşacağından havuz taşacaktır.";
     }
      var res ="<br><br>"+ halfHour + " - " + emptyHourHalf + symbol + result + "<br><br>" + extra;
      
      var s1 = "<br>&emsp; " + fillTap + " musluk tamamını " + hourFill + " saatte dolduruyorsa, " + hour + " saatte " + halfHour + " kadarını doldurur. " + emptyTap + " musluk tamamını " + hourEmpty + " saatte boşaltıyorsa, " + hour + " saatte " + emptyHourHalf + " kadar boşaltır. <br><br>";
      $("#answer").append(s1);
      $("#maths").append(res);
      $("#hide").append(result);
      $("#hide2").append(hour);
      break;

    case 3:
      var set;
      var res1 = (hourFill - hourEmpty);
      var res4 = (hourFill - (hourEmpty * 2));
      var res7 = (hourFill - (hourEmpty * 3));
      var res2 = (res1 + hourFill);
      var res5 = (res1 + hourFill + res4);
      var res8 = (res1 + hourFill + res4 + res7);
      var res3 = res2 / 2;
      var res6 = res5 / 2;
      var res9 = res8 / 2;
      var min="";
      
      if (fillTap === 2){
        if(Math.round(res3 / emptyTap) !== (res3 / emptyTap)){
          min = parseFloat(res3 / emptyTap).toFixed(2);
        }else{
        min = (res3 / emptyTap);
      }
        $("#hide2").append( (res3 / emptyTap));
        set = "<br>" + hourFill + "/x + " + res1 + "/x = 1 <br><br>" + "x = " + res2 + "<br><br>x/2 =" + res3 + "<br><br>" + res3 + "/" + emptyTap + "=" + min;
    }
      if (fillTap === 3){
       if(Math.round(res6 / emptyTap) !== (res6 / emptyTap)){
         min = parseFloat(res6 / emptyTap).toFixed(2);
        }else{
        min = (res6 / emptyTap);
      }
        $("#hide2").append( (res6 / emptyTap));
        set = "<br>" + hourFill + "/x + " + res1 + "/x + " + res4 + "/x = 1 <br><br>" + "x = " + res5 + "<br><br> x/2 =" + res6 + "<br><br>" + res6 + "/" + emptyTap + "=" + min;
    }
      if (fillTap === 4){
        if(Math.round(res9 / emptyTap) !== (res9 / emptyTap)){
        min = parseFloat(res9 / emptyTap).toFixed(2);
        }else{
        min = (res9 / emptyTap);
      }
        $("#hide2").append( (res9 / emptyTap));
        set = "<br>" + hourFill + "/x + " + res1 + "/x + " + res4 + "/x + " + res7 + "/x = 1 <br><br>" + "x = " + res8 + "<br><br> x/2 =" + res9 + "<br><br>" + res9 + "/" + emptyTap + "=" + min;
    }
      var s1 = "<br>&emsp; Musluklardan biri havuzu x saatte doldursun. <br><br>";
      $("#answer").append(s1);
      $("#maths").append(set);
      $("#hide4").append(emptyTap);
      break;

  }
}

function PoolGame() {
  this.questions = $("#question");
  this.water = $("#water");

  this.waterTime = 48;
  this.fillTime = 48;
  this.waterMaxVolume = 435;
  this.waterStartVolume = 0;
  
  this.tapCnt = 0;

  this.question_type = Math.floor(Math.random() * (4 - 1) + 1);
  this.fill_tap_size = Math.floor(Math.random() * (5 - 1) + 1);
  this.empty_tap_size = Math.floor(Math.random() * (3 - 1) + 1);
  this.hour_for_fill = Math.floor(Math.random() * (25 - 1) + 1);
  this.hour_for_empty = Math.floor(Math.random() * (25 - 1) + 1);

  this.initialize();
}

PoolGame.prototype = {
  initialize: function () {
    this.createQuestion();
    this.questionAnim();
  },
  
  createQuestion: function () {
    
    if (this.question_type === 1 && this.fill_tap_size === 1) {
      this.fill_tap_size = Math.floor(Math.random() * (5 - 2) + 2);
    }
    
    if(this.question_type === 1){
      this.hour_for_empty = Math.floor(Math.random() * (Math.floor(this.hour_for_fill*2*this.fill_tap_size/(this.fill_tap_size+1))-this.hour_for_fill) + (this.hour_for_fill+1));
    }
    
    if (this.question_type === 2 && this.fill_tap_size === 1) {
      this.fill_tap_size += this.fill_tap_size;
      this.emptyTaps(this.empty_tap_size);
    }

    if (this.question_type === 2)
      this.emptyTaps(this.empty_tap_size);

    if (this.question_type === 3 && this.fill_tap_size === 1)
      this.fill_tap_size += 2;

    if (this.question_type === 5){
      this.emptyTaps(this.empty_tap_size);
    }
    
      this.fillTaps(this.fill_tap_size);
    
    
    questionDecision(this.question_type, this.fill_tap_size, this.empty_tap_size, this.hour_for_empty, this.hour_for_fill);
    this.Animations(this.question_type,this.fill_tap_size,this.empty_tap_size);
         
  },
  
  fillTaps: function (size) {
    var i;
    switch (size) {
      case 1:
        $("#tap_left").show();
        this.waterFallAnim(1);
        break;
      case 2:
        $("#tap_left").show();
        $("#tap_right").show();
        for(i=1;i<=2;i++){
        this.waterFallAnim(i);
        }
        break;
      case 3:
        $("#tap_left").show();
        $("#tap_right").show();
        $("#tap_middle_left").show();
        for(i=1;i<=3;i++){
        this.waterFallAnim(i);
        }
        break;
      case 4:
        $("#tap_left").show();
        $("#tap_right").show();
        $("#tap_middle_left").show();
        $("#tap_middle_right").show();
        for(i=1;i<=4;i++){
        this.waterFallAnim(i);
        }
        break;
    }
  },
  
  emptyTaps: function (size) {
    switch (size) {
      case 1:
        $("#tap_bottom_left").show();
        this.waterFallAnim(5);

        break;
      case 2:
        $("#tap_bottom_left").show();
        $("#tap_bottom_right").show();
        this.waterFallAnim(5);
        this.waterFallAnim(6);
        break;
    }
  },
  
  questionAnim: function (){
    return TweenMax.fromTo($("#equation"),1,{x:910},{x:0,ease:Elastic.easeOut.config(1,2),y:0});
  },
  
  Animations: function(questionType,fillingTaps,drainingTaps){
    
    var _this = this;
    $("#play").on("click",function(){
    _this.start(questionType,fillingTaps,drainingTaps);
    $("#play").hide();
    });
    
  },
  
  start: function (questionType,fillingTaps,drainingTaps) {
    var i;
    var hour;
    var min;
    var maxVolume=430;
    var emptyHour;
    var totalHour;
    var newVolume;
    var pureHour ;
    
    this.tapCnt = fillingTaps;
    
    this.waterTime = this.waterTime/this.tapCnt; 
   
    switch (questionType) {
      case 1:
        $("#clock").show();
        
        hour = parseInt($("#hide").text());
        min = parseInt($("#hide2").text());
        totalHour = parseInt($("#hide3").text());
        emptyHour = parseInt($("#hide4").text());
        pureHour=hour;
        
        if(min){
          hour = min;
          pureHour = hour / 60;
        }
        newVolume = (maxVolume * pureHour) / (fillingTaps * totalHour);

        var tl = new TimelineMax();
        var tl1 = new TimelineMax();
        
        tl1.add(this.clockAnim(emptyHour * 60), 3);

        for(var i=2;i<=fillingTaps;i++){
        tl1.add(this.waterUpAnim(i, emptyHour, 403,0,3), 3);
        }
        tl1.add(this.waterUpAnim(1, emptyHour, 403,0,2), 3);
        tl1.addCallback(function(){
          $("#left_fill1").show();
        },3);
        tl1.addCallback(function(){
          $("#left_fill2").show();
        }, pureHour + 3);
        tl1.add(this.PoolAnim(this.waterStartVolume, 430, emptyHour, 4), 3);
        tl1.add(this.signAnim(this.waterStartVolume, 439, emptyHour), 3);
        if (fillingTaps > 2) {
          tl1.addCallback(function () {
            $("#left_fill3").show();
          }, 2*pureHour + 3);
        }
        if (fillingTaps > 3) {
          tl1.addCallback(function () {
            $("#left_fill4").show();
          }, 3*pureHour + 3);
        }
        tl1.add(this.PoolAnim(0,0, 0.1, 4), 0);
        tl1.add(this.signAnim(0,0,0.1),0);
        tl1.eventCallback("onComplete", function(){
          for(var i = 1; i<=fillingTaps;i++){
            $("#left_fill"+i).hide();
          }
          $("#solution").show();
          $("#next").show();
          TweenMax.fromTo($("#solution"),1,{scale:0,opacity:0},{scale:1,opacity:1});
          TweenMax.fromTo($("#next"),1,{scale:0,opacity:0},{scale:1,opacity:1});
        });
        
        tl1.pause();


        tl.add(this.clockAnim(totalHour * 60), 0);
        for (var i = 1; i <= fillingTaps; i++) {
          tl.add(this.waterUpAnim(i, totalHour, 403,0,1), 0);
        }
        tl.add(this.PoolAnim(this.waterStartVolume,430, totalHour, 4), 0);
        tl.add(this.signAnim(this.waterStartVolume,439,totalHour),0);
        tl.eventCallback("onComplete", function () {
          for (var i = 1; i <= fillingTaps; i++) {
            $("#left_fill" + i).hide();
          }
          tl1.play();
        });
           
        break;
        
      case 2:
        $("#clock").show();
        
        min = parseInt($("#hide2").text());
        
        this.waterMaxVolume = $("#hide").text() * this.waterMaxVolume;
        this.fillTime = min;
        maxVolume = $("#hide").text() * maxVolume;
        
        this.clockAnim(min * 60);
        
        for (i = 1; i <= fillingTaps; i++) {
          $("#left_fill" + i).show();
          if ($("#hide").text() > 0 && $("#hide").text() < 1) {
            this.waterUpAnim(i, this.fillTime, maxVolume,0,1);
          } else if ($("#hide").text() > 1) {
            this.waterUpAnim(i, (this.fillTime*2), 403,0,1);
          }
        }
        var tl = new TimelineMax();
        if (drainingTaps === 1)
          $("#left_fill5").show();

        if (drainingTaps === 2) {
          $("#left_fill5").show();
          $("#left_fill6").show();
        }
        if ($("#hide").text() > 1) {
          tl.add(this.PoolAnim(this.waterStartVolume,435,this.fillTime,2),0);
          tl.add(this.signAnim(0,439,this.fillTime),0);
          tl.add(function(){
          $("#solution").show();
          $("#next").show();
          TweenMax.fromTo($("#solution"),1,{scale:0,opacity:0},{scale:1,opacity:1});
          TweenMax.fromTo($("#next"),1,{scale:0,opacity:0},{scale:1,opacity:1});
        },this.fillTime);
        } 
        else {
          tl.add(this.PoolAnim(this.waterStartVolume,this.waterMaxVolume,this.fillTime,2),0);
          tl.add(this.signAnim(0,this.waterMaxVolume,this.fillTime),0);
          tl.add(function(){
          $("#solution").show();
          $("#next").show();
          TweenMax.fromTo($("#solution"),1,{scale:0,opacity:0},{scale:1,opacity:1});
          TweenMax.fromTo($("#next"),1,{scale:0,opacity:0},{scale:1,opacity:1});
        },this.fillTime);
        }
        if ($("#hide").text() < 0){
          tl.add(this.signAnim(0,0,this.fillTime),0);
        tl.add(function(){
          $("#solution").show();
          $("#next").show();
          TweenMax.fromTo($("#solution"),1,{scale:0,opacity:0},{scale:1,opacity:1});
          TweenMax.fromTo($("#next"),1,{scale:0,opacity:0},{scale:1,opacity:1});
        },2);
        }
        break;
        
      case 3:
        $("#clock").show();

        pureHour = parseInt($("#hide").text());
        emptyHour = parseInt($("#hide2").text());
        totalHour = parseInt($("#hide3").text());
        var empty = parseInt($("#hide4").text());
               
        newVolume = (maxVolume * pureHour) / (fillingTaps * totalHour);

        var tl = new TimelineMax();
        var tl1 = new TimelineMax();
        tl1.add(this.clockAnim(totalHour * 60), 1);
        
        tl1.add(this.waterUpAnim(1, totalHour, 403,0,2), 1);
        
        for(var i=2;i<=fillingTaps;i++){
        tl1.add(this.waterUpAnim(i, totalHour, 403,0,3), 1);
        }
        tl1.addCallback(function(){
          $("#left_fill1").show();
        },1);
        tl1.addCallback(function(){
          $("#left_fill2").show();
        },pureHour+1);
        tl1.add(this.PoolAnim(newVolume,maxVolume, totalHour, 4), 1);
        tl1.add(this.signAnim(newVolume,439,totalHour),1);
        if (fillingTaps >2) {
          tl1.addCallback(function(){
           $("#left_fill3").show();
            },2*pureHour+1);
      }
        if (fillingTaps >3) {
        tl1.addCallback(function(){
          $("#left_fill4").show();
        },3*pureHour+1);
      }
        tl1.add(this.PoolAnim(0,0, 0.1, 4), 0);
        tl1.add(this.signAnim(0,0,0.1),0);
        tl1.eventCallback("onComplete", function(){
          for(var i = 1; i<=fillingTaps;i++){
            $("#left_fill"+i).hide();
          }
          tl.play();
        });
        
        tl.add(this.clockAnim(emptyHour * 60), 2);
        for (var i = 1; i <= empty; i++) {
          tl.add(this.waterUpAnim(i, emptyHour, 150,0,2),2);
        }
        tl.add(this.PoolAnim(this.waterStartVolume,215, emptyHour, 4), 2);
        tl.add(this.signAnim(this.waterStartVolume,219.5,emptyHour),2);
//        tl.addCallback(function () {
//          
//          for (var i = 1; i <= empty; i++) {
//            TweenMax.set($("#left_fill" + i), {y: 0});
//            $("#left_fill" + i).show();
//          }
//        }, 2);
        tl.eventCallback("onComplete", function () {
          for (var i = 1; i <= fillingTaps; i++) {
            $("#left_fill" + i).hide();
          }
          $("#solution").show();
          $("#next").show();
          TweenMax.fromTo($("#solution"),1,{scale:0,opacity:0},{scale:1,opacity:1});
          TweenMax.fromTo($("#next"),1,{scale:0,opacity:0},{scale:1,opacity:1});
        });
        tl.pause();
        
        break;
       
    }
    
    $("#next").on("click",function(){
      location.reload();
    });
  },
    
  waterFallAnim: function (i) {
    return TweenMax.fromTo($("#left_fill" + i), 1,{backgroundPosition:"0px"}, {repeat: -1, backgroundPosition: "-451px", ease: SteppedEase.config(5)});
  },
  
  waterUpAnim: function (i, fillTime, maxVolume,startVolume,question) {
    return TweenMax.fromTo($("#left_fill" + i), fillTime, {y: startVolume}, {y: -maxVolume,ease: Power0.easeNone, onStart: function(){
        if(question === 3){
        $("#left_fill" + i).hide();
        }
        else
        $("#left_fill" + i).show();
    }});
  },
  
  PoolAnim: function (waterStartVolume,waterMaxVolume,speed,question) {
    return TweenMax.fromTo(this.water, speed, {y: -waterStartVolume}, {y: -waterMaxVolume, ease: Power0.easeNone, onComplete: function () {
        if(question === 2){
        if ($("#hide").text() < 1 && $("#hide").text() > 0) {
          for (var i = 1; i <= 6; i++) {
            $("#left_fill" + i).hide();
          }
        }
      }
      }});
  },
  
  signAnim: function (startVolume,waterMaxVolume,time) {
    return TweenMax.fromTo($("#sign"), time, {y: -startVolume}, {y: -waterMaxVolume, ease: Power0.easeNone});
  },
  
  clockAnim: function (duration) {
    
    var dummy = {t: 0};
    var $hour = $("#hour");
    var $min = $("#min");
    var onUpdate = function () {
      var t = dummy.t;
      var hour = Math.floor(t / 60);
      var min = Math.floor(t % 60);
      $hour.html(hour);
      $min.html(min);
    };
    return TweenMax.fromTo(dummy, duration / 60, {t: 0}, {t: duration, onUpdate: onUpdate, ease: Power0.easeNone});
  }
  
};

var Pool;
$(document).ready(function () {
  Pool = new PoolGame();
});