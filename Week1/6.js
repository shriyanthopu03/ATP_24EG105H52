function sum(a){
    let s=0
    for(let i=0;i<a.length;i++){
        s=s+a[i]
    }
    return s;

}
let r=sum([10,20,30])
console.log(r)
