function getTime(t=new Date()){
    let [yyyy,MM,dd,hh,mm,ss]=[
        t.getFullYear(),
        t.getMonth()+1,
        t.getDate(),
        t.getHours(),
        t.getMinutes(),
        t.getSeconds()
    ].map(function(m){
        return (''+m).padStart(2,'0')
    });
    let w=t.getDay().toString();
    return {yyyy,MM,dd,hh,mm,ss,w}
}
function rand(range=10,start=0){
    return Math.floor(Math.random()*(range || 10)+start)
}
function hexRand(){
    return Math.floor(Math.random()*0x1000000).toString(16).padStart(6,'0')
}

module.exports={
    getTime,
    rand,
    hexRand,
}