const myself = {     //  Key-Value
    name:'Skye', //  String
    age:20,      //  Number
    gender:'male',
    job:'student',    //  多个Key-Value间用，隔开
    hometown:"North",
    isSingle:true,    //  Boolean
    Chase:function(girl){  //  方法
        console.log(this.name+' '+'give u flowers'+' '+girl.name);
        (girl.receiveFlowers)();  //  调用xm对象的receiveFlowers方法
    }
}


const xm ={
    name:'xm',
    age:18,
    gender:'female',
    room:'408',
    job:'student',
    hometown:'South',
    isSingle:true,
// 都具有receiveFlowers方法，对象
receiveFlowers:function(Sender){
    console.log(this.name+' '+'received flowers'+"from "+Sender.name);
}
}

const xh = {
name:'xh',
age:19,
room:'408',
gender:'female',
job:'student',
hometown:'East',
isSingle:true,
receiveFlowers:function(Sender){
    setTimeout(()=>{
        console.log(xm.name+' '+'received flowers'+"from "+Sender.name);
    },2000)
    
    
}
}


xh.receiveFlowers(myself);
//xm.receiveFlowers();


