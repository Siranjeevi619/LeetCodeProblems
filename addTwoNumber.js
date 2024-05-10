const l1 = [2,4,3]
const l2 = [5,6,4]
console.log(addTwoNumbers(l1,l2))

function addTwoNumbers(l1, l2) {
    newList = []
    var arrayLength =   l1.length < l2.length ? l1.length : l2.length
    for(let i=0;i<arrayLength;i++){
        var addValue = l1[i]+l2[i]
        if(addValue <10){
            newList.push(addValue)
        }
        else{git 
            newList.push(addValue%10)
        }
    }
    return newList;
};