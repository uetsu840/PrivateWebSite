function loadFile(fileName, callback){
    httpObj = new XMLHttpRequest();
    httpObj.open('GET', fileName+"?"+(new Date()).getTime(),true);
    // ?�ȍ~�̓L���b�V�����ꂽ�t�@�C���ł͂Ȃ��A����ǂݍ��ނ��߂̂���
    httpObj.send(null);
    httpObj.onreadystatechange = function(){
       if ( (httpObj.readyState == 4) && (httpObj.status == 200) ){
           callback(httpObj.responseText);
       }
    }
 }
 
 var list = [];
 var src = document.getElementById( 'markdown_src' ).getAttribute( 'name' );
 loadFile(src, function(resultText) {
     var md = marked(resultText);
     $("#container").append(md);
 });