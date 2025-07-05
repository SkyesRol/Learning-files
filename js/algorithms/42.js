/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let ans = 0 ;
    let leftMax = 0;
    let left = 0;
    let rightMax = 0;
    let right = height.length - 1 ;
    while(left<right){
        leftMax = Math.max(height[left],leftMax);
        rightMax = Math.max(height[right],rightMax);
        if(height[left]<height[right]){
            ans+=leftMax-height[left];
            left++;
        }
        else{
            ans+=rightMax-height[right];
            right--;
        }
    }
    return ans;
};