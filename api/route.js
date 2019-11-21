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
  route.post('/getSpecific',(req,res)=>{
    services.findDB(collname,{videoId:req.body.videoId},{}).then(response=>{
      res.send(response);
    })
  });
  route.post('/update',(req,res)=>{
    var id=req.body.videoId;
    delete req.body.videoId;
    services.updateDB(collname,{videoId:id},{$set:req.body}).then(response=>{
      res.send(response);
    })
  });
  route.post('/delete',(req,res)=>{
      services.deleteDB(collname,{videoId:req.body.videoId}).then(response=>{
      res.send(response);
    })
  });
  
  return route;
}