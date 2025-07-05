/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const set = new Set();
    let ans = 0;
    let r = -1;let l = 0;
    let len = s.length;
    for(let i =0;i<len;i++){
        if(i!=0){
            set.delete(s.charAt(i-1))
        }
        while(r+1<len && !set.has(s.charAt(r+1))){
            set.add(s.charAt(r+1));
            r++;
        }
        ans = Math.max(ans,r-i+1);
    }
    return ans;
};