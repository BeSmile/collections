const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject('promise reject');
	}, 3000)
});

promise.then( success => {
	console.log('success', success);
}, error => {
	console.log('error', error);
});

async function demo() {
	return 'hello promise';
}
console.log(demo())

console.log('wait');

function save(user){
    return new Promise((resolve, reject) => {
        return reject('save error');
    });
}
async function add() {
    try {
        await save('ddd');
    } catch (e) {
        console.log(e);
    } 
}
add();