

var status=0;

var m={};

m.getstatus=function(){
  return status;
};

m.incStatus=function(){
  status+=1;
};


module.exports=m;