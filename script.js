
// var strTime;
// pull the date and comapre time slots to current time 
$(document).ready(function(){
      				var date=new Date();
      				var val=(date.getMonth()+1)+"/"+ date.getDate()+"/"+date.getFullYear();
      					$("#printDate").text(val);
      					console.log(date.getHours());

      					$('textarea').each(function(i, obj)  {
							  console.log(i+18);
							  if (i+18>date.getHours()) {
								  $(obj).css('background','green')
								} if (i+18 == date.getHours()) {
									$(obj).css('background','red')
							// 	}; else  {
							// 		$(obj).css('background','green')
							//   };
							}
      						
							});
      			});


//get the hour of the day
      function formatAMPM(date) {
        var hours = date.getHours();
        // var minutes = date.getMinutes();
		// var ampm = hours >= 12 ? 'pm' : 'am';
		// console.log(ampm);
		
        // hours = hours % 12;
		// hours = hours ? hours : 12; // the hour '0' should be '12'
		// console.log(hours);
		
        // minutes = minutes < 10 ? '0'+minutes : minutes;
        //  strTime = hours + ampm;
        // return strTime;
      }

      // console.log(formatAMPM(new Date));


      //get local storage value;
       document.getElementById("Ninemsg").innerHTML = localStorage.getItem("NineAM");
       document.getElementById("tenmsg").innerHTML = localStorage.getItem("TenAM");
       document.getElementById("elevmsg").innerHTML = localStorage.getItem("ElevAM");
       document.getElementById("twevmsg").innerHTML = localStorage.getItem("TwevAM");
       document.getElementById("onemsg").innerHTML = localStorage.getItem("OnePM");
       document.getElementById("twomsg").innerHTML = localStorage.getItem("TwoPM");
       document.getElementById("threemsg").innerHTML = localStorage.getItem("ThreePM");
       document.getElementById("fourmsg").innerHTML = localStorage.getItem("FourPM");
       document.getElementById("fivemsg").innerHTML = localStorage.getItem("FivePM");
//    save what you enter
      function saveData() {
        
        var ninemsg = document.getElementById("Ninemsg").value;
        localStorage.setItem("NineAM", ninemsg);
        var tenmsg = document.getElementById("tenmsg").value;
        localStorage.setItem("TenAM", tenmsg);
        var elevmsg = document.getElementById("elevmsg").value;
        localStorage.setItem("ElevAM", elevmsg);
        var twevmsg = document.getElementById("twevmsg").value;
        localStorage.setItem("TwevAM", twevmsg);
        var onemsg = document.getElementById("onemsg").value;
        localStorage.setItem("OnePM", onemsg);
        var twomsg = document.getElementById("twomsg").value;
        localStorage.setItem("TwoPM", twomsg);
        var threemsg = document.getElementById("threemsg").value;
        localStorage.setItem("ThreePM", threemsg);
        var fourmsg = document.getElementById("fourmsg").value;
        localStorage.setItem("FourPM", fourmsg);
        var fivemsg = document.getElementById("fivemsg").value;
        localStorage.setItem("FivePM", fivemsg);
      }
   