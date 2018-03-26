async function getSomething() {
    return "something";
}

async function testAsync() {
    return new Promise((resolve, reject) => {
    	setTimeout(() => {
    		return resolve('xxx');
    	}, 3000)
    });
}

async function test() {
    const p1 = await testAsync();
    console.log('xx')
    console.log(p1)
}

test();
console.log('xx');