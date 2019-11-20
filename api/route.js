var services = require('./dbservices');
var conn = require('./dbconfig');
var collname = conn.collname;

exports.routers = function(route)
{
  route.post('/insert',(req,res) => {
    //console.log(req.body);
    services.insertDB(collname,req.body).then(response=>{
      res.send(response);
    });
  });
  route.get('/select',(req,res)=>{
    services.findDB(collname,{},{}).then(response=>{
      res.send(response);
    })
  });
  return route;
}