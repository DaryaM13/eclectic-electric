const form = document.querySelector('form');

const button = document.querySelector('.submit');

const input1 = document.querySelector('.input-1');
const input2 = document.querySelector('.input-2');
const input3 = document.querySelector('.input-3');
const input4 = document.querySelector('.input-4');
const input5 = document.querySelector('.input-5');

let inp1 = inp2 = inp3 = inp4 = inp5 = inp6 = inp7 = false;
button.addEventListener('click', () => {
		input1.style.border = 'none';
		input2.style.border = 'none';
		input3.style.border = 'none';
		input4.style.border = 'none';
		
		if(input1.value == ''){
			input1.style.border = '1px solid red';
			input1.style.animation = 'inputAnim .3s ease-out';
			inp1 = false;
			setTimeout(() => {
				input1.style.animation = 'unset';
			}, 400);
		}else{
			inp1 = true;
		}
		if(input2.value == ''){
			input2.style.border = '1px solid red';
			input2.style.animation = 'inputAnim .3s ease-out';
			setTimeout(() => {
				input2.style.animation = 'unset';
			}, 400);
			inp2 = false;
		}else{
			inp2 = true;
		}
		if(input3.value == ''){
			input3.style.border = '1px solid red';
			input3.style.animation = 'inputAnim .3s ease-out';
			setTimeout(() => {
				input3.style.animation = 'unset';
			}, 400);
			inp3 = false;
		}else{
			inp3 = true;
		}
		if(input4.value == ''){
			input4.style.border = '1px solid red';
			input4.style.animation = 'inputAnim .3s ease-out';
			setTimeout(() => {
				input4.style.animation = 'unset';
			}, 400);
			inp4 = false;
		}else{
			inp4 = true;
		}

		if(input5 != undefined){
			input5.style.border = 'none';
			if(input5.value == ''){
				input5.style.border = '1px solid red';
				input5.style.animation = 'inputAnim .3s ease-out';
				setTimeout(() => {
					input5.style.animation = 'unset';
				}, 400);
				inp5 = false;
			}else{
				inp5 = true;
			}
		}else{
			inp5 = true;
		}
		if(input6 != undefined){
			input6.style.border = 'none';
			if(input6.value == ''){
				input6.style.border = '1px solid red';
				input6.style.animation = 'inputAnim .3s ease-out';
				setTimeout(() => {
					input6.style.animation = 'unset';
				}, 400);
				inp6 = false;
			}else{
				inp6 = true;
			}
		}else{
			inp6 = true;
		}
		if(inp1 && inp2 && inp3 && inp4 && inp5){
			form.submit();
		}	
			
})


