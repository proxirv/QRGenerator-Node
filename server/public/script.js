function createqr() {
	const aux =document.getElementById('url').value;
	console.log(aux);
	let test='http://127.0.0.1:3040/api/qrgenerator';
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
				'Mensaje: '+
				JSON.stringify(response.msj)
			);
            console.log(
				'Estatus: '+
				JSON.stringify(response.status)
			);

			if (response.data) {
				console.log(
					'Data: '+
					JSON.stringify(response.data)
				);
				let image = `
				<div>
					<h2>Este es el QR generado</h2>
					<img src="${response.data}">
				</div>
				`;
				document.getElementById("resultado").innerHTML = image;
			}  else {
				let valor ='';
				document.getElementById("resultado").innerHTML = valor;
				alert(response.msj);
			};
		}
	).catch(
		(error) => { 
			console.log('Error:'+error);
			console.log('error en mostrar detalles');
		}
	);
};

