const arr1=[1,2,3,4,5];
const arr2=[5,4,3,2,1];
const arr3=[2,5,3,7,1];
function checkarray(array)
{
    let assend=true;
    let dessend=true;
    for(let i=0;i<array.length-1;i++)
    {
        if(array[i]>array[i+1])
        {
        assend=false;
       }
    if(array[i]<array[i+1])
    {
        dessend=false;
    }
}
if(assend)
{
    return 1;
}
else if(dessend)
{
    return -1;
}
else
{
    return 0;
}
}
console.log(checkarray(arr1));
console.log(checkarray(arr2));
console.log(checkarray(arr3));
