/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let ans = []
    const Slen = s.length;
    const Plen = p.length;
    const Scount = new Array(26).fill(0);
    const Pcount = new Array(26).fill(0);
    if(Slen<Plen) return ans;
    for(let i = 0 ;i<Plen;i++){
        Scount[s[i].charCodeAt()-'a'.charCodeAt()]++;
        Pcount[p[i].charCodeAt()-'a'.charCodeAt()]++;
    }
    if(Scount.toString()===Pcount.toString()){
        ans.push(0);
    }
    for(let i =0;i<Slen-Plen;i++){
        Scount[s[i].charCodeAt()-'a'.charCodeAt()]--;
        Scount[s[i+Plen].charCodeAt()-'a'.charCodeAt()]++;
        if(Scount.toString()===Pcount.toString()){
        ans.push(i+1);
    }
    }
    return ans
};a