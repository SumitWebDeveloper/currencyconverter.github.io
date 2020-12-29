
      function currency(){
        
        var from =document.getElementById("usd").value;
        var to =document.getElementById("rupees").value;
        var x ="EUR";
        var xmlhttp = new XMLHttpRequest();
        var url = "http://data.fixer.io/api/latest?access_key=b4cd984c5d98c1e7448f4d6db70acaba&base=EUR&symbols="+from+","+to+","+x;
        xmlhttp.open("GET",url,true);
        xmlhttp.send();
        xmlhttp.onreadystatechange = function(){
           if(xmlhttp.readyState==4 && xmlhttp.status==200)
           {
             var result = xmlhttp.responseText;
             var jsResult = JSON.parse(result);

             var oneunits = jsResult.rates[from]/jsResult.rates[to];
             var oneunit = jsResult.rates[to]/jsResult.rates[from];

             var onepointinr = (oneunit).toFixed(4); 
             var onepointusd = (oneunits).toFixed(4); ;
             
             var amt = document.getElementById("raid").value;
              
             var ans1 =(oneunit*amt).toFixed(5);
             var ans = (oneunit*amt).toFixed(2);

             
            
            document.getElementById("print").innerHTML=ans;
            alert("data calculate");
            var display="<hr> <h2 align='center'; style='text-decoration:underline;'>Conversion</h2>  <hr> <div style='text-align:center;'> <span style='font-size:30px;'> "+amt+" "+from+" =</span><br>  <span style='font-size:50px;' >"
            + ans1 +" "+to+ "</span>  <br> <span style='font-size:20px;' >  1 "+to+ " = "+onepointusd+"</span> "+from+"<br> <span style='font-size:20px;' > 1"+" "+from+" = "+onepointinr+"</span> "+to+ "<br><br> <p style='font-size:18px;'> All figures are show live rates, which are not available to consumers and are for<br> informational purposes only.(lastupdate : 1 Hour ago)</p> </div>";
            document.getElementById("print").innerHTML=display;
           }
           
        }
        
      }