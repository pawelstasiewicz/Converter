const scel = document.querySelector('.scel');
const sfar = document.querySelector('.sfar');

const input = document.querySelector('#converter');
const result = document.querySelector('.result');

const cbtn = document.querySelector('.convert');
const rbtn = document.querySelector('.reset');
const chbtn = document.querySelector('.change');

const cnaf = () => {
	let data = input.value;
	let fvalue = data * 33.8;
	result.textContent = `${data}ºC is ${fvalue.toFixed(1)}ºF`;
	input.value = '';
};

const fnac = () => {
	let data = input.value;
	let fvalue = data * -17.2;
	result.textContent = `${data}ºF is ${fvalue.toFixed(1)}ºC`;
	input.value = '';
};

const res = () => {
	input.value = '';
	result.textContent = '';
};

const chan = () => {
	if (scel.textContent === 'ºC') {
		scel.textContent = 'ºF';
		sfar.textContent = 'ºC';
		result.textContent = '';
	} else {
		scel.textContent = 'ºC';
		sfar.textContent = 'ºF';
		result.textContent = '';
	}
};

const conversion = () => {
	if (scel.textContent === 'ºC') {
		cnaf();
	} else {
		fnac();
	}
};

cbtn.addEventListener('click', conversion);
rbtn.addEventListener('click', res);
chbtn.addEventListener('click', chan);
