function test(){
  // 3 3 3 3
  for(var i=0; i<3;i++){
    setTimeout(        
      function(){
        console.log(i);
      }
    ,1000);    
  }  
  console.log(i);
  // 3 0 1 2
  // for(var i=0; i<3;i++){
  //   setTimeout(        
  //     function(i){
  //       console.log(i);
  //     }.bind(this, i)
  //    ,1000);
  // };
  // console.log(i);

  // 0 1 2 3
  // let promise = {};
  // for(var i=0; i<3;i++){
  //   promise = new Promise(function(resolve, reject){
  //     setTimeout(  
  //       function(i){
  //         console.log(i);
  //         if(i==2){
  //           resolve();
  //         }
  //       }.bind(this, i)
  //     ,1000);
  //   });  
  // };
  // promise.then(function() {
  //   console.log(i);
  // });
}
test();