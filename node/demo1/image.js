function loadImageAsync(url) {
	return new Promise((resolve, reject) => {
		const image = new image();
		image.url = url;
		image.onload = () => {
			resolve(image);
		};
		image.onerror = () => {
			reject(new Error('could no load image at '+ url));
		}
	});
}
loadImageAsync('https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3144148020,1532882597&fm=27&gp=0.jpg').then( image=> {
	console.log(image.url)
}, error => {
	console.log('error', error);
});