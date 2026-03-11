function s(a,key)
{
   for(let i=0;i<a.length;i++)
    {
        if(a[i]==key){
            return "found"
        }
    }
    return "not found"
}
let r=s([10,20,30],20)
console.log(r)
