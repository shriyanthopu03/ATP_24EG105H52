let a=[90,75,65,98]
let small=a[0]
for(let i=0;i<a.length;i++)
{
    if(a[i]<small){
        small=a[i]
    }
}
console.log(small)
