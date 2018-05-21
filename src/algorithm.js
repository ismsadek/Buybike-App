axios.get('https://buy-bike.firebaseio.com/motos.json')
  .then(function (response) {
    console.log(response);
    console.log('Yeah')
  })
  .catch(function (error) {
    console.log(error);
  });
	