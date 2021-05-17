/**时间自定义对象获取 */
function getTime(t=new Date()){
    if(!isNaN(t.getTime())){
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
    }else{
        return null;
    }
}
/**基本整数随机函数 */
function rand(range=10,start=0){
    return Math.floor(Math.random()*(range || 10)+start)
}
/**十六进制 六位 随机数 字串生成 */
function hexRand(){
    return Math.floor(Math.random()*0x1000000).toString(16).padStart(6,'0')
}
/**判断能否转为日期对象 */
function canTurnInDate(...any){
    return !isNaN(new Date(...any).getTime())
}
module.exports={
    getTime,
    rand,
    hexRand,
    canTurnInDate,
}