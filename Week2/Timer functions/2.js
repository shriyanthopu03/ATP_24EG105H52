//2.OTP Countdown Simulator (Console App)
// ------------------------------------
        
//         Simulate OTP sending flow in Node.js:
        
//         Show “OTP Sent Successfully”
        
//         Start 10-second countdown
        
//         Allow resend only after countdown ends
console.log("OTP Sent Successfully")
let second=10

let intervelid=setInterval(()=>{
    second--
    console.log(`OTP CAN RESEND IN ${second}`)
    if(second===0){
    console.log("resend otp")
    clearInterval(intervelid)
}
},1000)
