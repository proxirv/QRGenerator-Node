function createqr() {
	const aux =document.getElementById('url').value;
	console.log(aux);
	let test='http://127.0.0.1:3040/api/generateqr';
	fetch(
      test,
		{
			method:'POST',
			headers:{
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			},
			body:JSON.stringify({
				url:aux
			})
		}
	).then(
		(res) => res.json()
	).then(
		(response) => {
            console.log(
				'el servidor devuelve el siguiente mensaje 1: '+
				JSON.stringify(response.msj)
			);
            console.log(
				'el servidor devuelve el siguiente mensaje 2: '+
				JSON.stringify(response.status)
			);
			console.log(
				'el servidor devuelve el siguiente mensaje 3: '+
				JSON.stringify(response.data)
			);
			let image = `
				<div>
					<h2>Este es el QR generado</h2>
					<img src="${response.data}">
				</div>
			`;
			document.getElementById("resultado").innerHTML = image;
		}
	).catch(
		(error) => { 
			console.log('Error:'+error);
			console.log('error en mostrar detalles');
		}
	);
};

