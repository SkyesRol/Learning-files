/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let res = '';
    
    let l = 0;
    let r = 0;
    
    let map = new Map();
    
    
    for(let i=0;i<t.length;i++){
        map.set(t[i],map.get(t[i])?map.get(t[i])+1:1)
    }
    let typeNum = map.size;
    while(r<s.length){
        if(map.has(s[r])){
            map.set(s[r],map.get(s[r])-1);
        }
        if(map.get(s[r])===0){
            typeNum--;
        }
        while(typeNum===0){
            let newRes = s.substring(l,r+1);
            if(newRes.length<res.length||!res){
                res =newRes;
            }
            if(map.has(s[l])){
                
               if(map.get(s[l])===0 ) typeNum++;
               map.set(s[l],map.get(s[l])+1);
            }
            

            l++;
        }
        r++;
    }

        return res;


};