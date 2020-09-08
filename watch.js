function Stopwatch(){
    let duration=0,start,stop,bstart=false,bstop=false;
    
     this.reset=function(){
         duration=0;
         start=0;
         stop=0;
         bstart=false;
         bstop=false;
         };
     this.start=function(){
         if (bstart==true){
            throw new Error("Stopwatch is already started");
        }
         start =new Date();
         bstart=true;
 
     };
     this.stop=function(){
         
         
         if( bstop==true){
             throw new Error("Stopwath is already stoped ")
         }
         stop=new Date();
         bstop=true;
 
     
 
     }
     this.display=function(){
         duration=(stop.getTime()-start.getTime())/1000;
         
         console.log(duration);
 
     }
 
 
 }
 const sw=new Stopwatch();