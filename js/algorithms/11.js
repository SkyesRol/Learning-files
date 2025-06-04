/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0;
    let r = height.length-1;
    let ans = 0;
    while(l<r){
        ans = Math.max(ans,Math.min(height[l],height[r])*(r-l));

        if(height[l]<=height[r]){
            l++;
        }
        else{
            r--;
        }
        


    }


return ans;




};
// 盛水最多的容器   错误原因：部分思路没理清晰，但是95%的思路是对的，就差临门一脚。