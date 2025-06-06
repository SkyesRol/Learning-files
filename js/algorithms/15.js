/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let ans = [];
    const len =nums.length;
    if(nums == null || len <3) return ans;
    nums.sort((a,b)=>a-b);
    for(let i =0;i<len;i++){
        if(nums[i]>0) {
            break;
        }
        if(i>0 && nums[i]==nums[i-1]) continue;
        let L = i+1;
        let R = len-1;
        while(L<R){
            const sum = nums[i]+nums[L]+nums[R];
            if(sum == 0){
                ans.push([nums[i],nums[L],nums[R]]);
                while(L<R && nums[L]==nums[L+1] ) L++;
                while(L<R && nums[R]==nums[R-1] ) R--;
                L++;
                R--;
            }
            else if (sum<0) L++;
            else R--;
        }
        
    }
    return ans;
};

/*总结：做了几次，答题思路和答案几乎一模一样，没处理好的就是循环的条件，以及去重没有处理好，对于数组能存储的数据不够清晰 */