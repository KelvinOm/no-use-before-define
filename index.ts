let register = (callback) => {
	callback()
	return "some value";
}

let unsubscribe = (id) => {
	console.log(id)
}

let id = register(() => {
	// I believe there must be a error
	unsubscribe(id);
});