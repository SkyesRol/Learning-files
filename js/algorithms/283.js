
// 很暴力的解法，时间复杂度O(n^2)
var moveZeroes = function(nums) {
    let i =nums.length-1
        for(let j = i-1;j>=0;j--){
            if(nums[j]==0){
                for(let k = j;k<=i;k++){
                    nums[k]=nums[k+1];
                
                
            }
            nums[i]=0;
                i--;
        }
        }
    return nums;
};

// 后来想到用数组的性质的解法

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
        let len =nums.length;
        for(let i=0;i<len;i++){
           if(nums[i]==0){
            nums.splice(i,1)
            nums.push(0);
            len--;
            i--;
           }
            

        }
        
    
};

// 快慢双指针解法

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
        let fast=0;
        let slow = 0;
       while(fast<nums.length){
            if(nums[fast]!=0){
                nums[slow] = nums[fast];
                slow++;
            }
            fast++;
       }
    while(slow<nums.length){
        nums[slow++]=0;
    }
};
