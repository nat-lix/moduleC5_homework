const btn = document.querySelector('.j-btn');
const result = document.querySelector('.j-result');
function useRequest(url){
	return fetch(url)
		.then((response) => {
			return response.url;
		})
		.then((url) => {
			return url;
		})
		.catch(() => {
			console.log('Error');
		});
}
btn.addEventListener ('click', async() =>{
	const width = Number(document.querySelector('.width-input').value);
	const height = Number(document.querySelector('.height-input').value);
	if((width >= 100 && width <= 300)&&(height >= 100 && height <= 300)){
		let url = `https://picsum.photos/${width}/${height}`
		let resultUrl = await useRequest(url);
		const image = `<img src="${resultUrl}" width="auto" height="auto"/>`;
		result.innerHTML = image;
	}else{
		result.innerHTML = 'Одно из чисел вне диапазона от 100 до 300!';
	}
});