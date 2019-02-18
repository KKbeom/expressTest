// 설치한 express 를 등록한다.
var express = require('express');
var app = express();
var fs = require('fs');
// localhost:3000 으로 접속하면 아래에서 받는다. (GET 방식만 유용)
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// 사용할 포트번호.
var port=3000;
app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});

app.use('/lib',express.static(__dirname+"/web/lib/"));
//위 명령어로 /lib으로 접근하는 경우 오른쪽과 같이 포워딩해줌.
app.use('/',express.static(__dirname));

app.get('/test',(req,res)=>{
    res.send('tttttttttttttttttttt');
});
app.post('/test2',(req,res)=>{
    var val = 'data';
    res.send(val);
})