function sum(a,b,c){
    if(a>b && a>c){
        return a
    }
    if(b>a && b>c){
        return b
    }
    else{
        return c
    }
}
let r=sum(10,40,30)
console.log(r)

