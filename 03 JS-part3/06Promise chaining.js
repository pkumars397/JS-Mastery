function promise() {
    return new Promise((resolve, reject) => {
        resolve("foo")
    })
}
// * then returns promise;
promise()
    .then((value) => {
        console.log(value);
        value += "bar"
        return value;//! it is like resolve(value)
    })
    .then((value) => {
         console.log(value);//?will print foobaar
    })
    .then((value) => {
        console.log(value);//! will return undefined because no promise resolved in previous then
    });