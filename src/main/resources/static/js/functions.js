     var data;
     function getanswer(q){
     $.get("https://www.omdbapi.com/?t="+q+"&apikey=a18e1268", function(rawdata){
     var rawstring =JSON.stringify(rawdata);
     data =JSON.parse(rawstring);
     var title = data.Title;
     var year = data.Year;
     var posterurl =data.Poster;
     var plot = data.Plot;
     var genre = data.Genre;
     var runtime =data.Runtime;
     var lang = data.Language;
     var director = data.Director;
     var actors= data.Actors;
     var writer = data.Writer;
     var imdb = data.imdbRating;
     var votes = data.imdbVotes;

    document.getElementById('answer').innerHTML="<hr><h1>"+title+"</h1><br><img src= '"+posterurl+"'><p> Year Released:"+year+"</p><br><button>More info</button>";


            $("button").click(function(data){
             document.getElementById('result').innerHTML="<p >Plot:"+plot+"</p><p class=fade>Genre:"+genre+"</p><p >Runtime:"+runtime+"</p><p >Languages:"+lang+"</p><p >Director:"+director+"</p><p >Actors:"+actors+"</p><p >Writer:"+writer+"</p><p >IMDB Raring:"+imdb+"<br>from "+votes+" votes</p>";
             });
        });
     }