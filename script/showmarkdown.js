function loadFile(fileName, callback){
    httpObj = new XMLHttpRequest();
    httpObj.open('GET', fileName+"?"+(new Date()).getTime(),true);
    // ?以降はキャッシュされたファイルではなく、毎回読み込むためのもの
    httpObj.send(null);
    httpObj.onreadystatechange = function(){
       if ( (httpObj.readyState == 4) && (httpObj.status == 200) ){
           callback(httpObj.responseText);
       }
    }
 }
 
 var list = [];
 loadFile('tech_study_of_web_framework.md', function(resultText) {
     var md = marked(resultText);
     $("#container").append(md);
 });