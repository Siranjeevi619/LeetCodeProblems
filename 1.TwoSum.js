var twoSum = function(nums, target) {
    var return_nums = []
    for(let i = 0; i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i] + nums[j] == target){
                return_nums.push(i)
                return_nums.push(j)
            }
        }
    }
    return return_nums;
};
