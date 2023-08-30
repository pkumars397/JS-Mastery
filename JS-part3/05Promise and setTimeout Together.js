function promise() {
   
    return new Promise((resolve, reject) => {
        let value = false;
        setTimeout(() => {
            if (value) { console.log("resolved") }
            else {
                console.log("rejected")
            }
        },2000)
    })
}
promise().then(()=>{console.log("resolved")}).catch(()=>{console.log("rejected")})