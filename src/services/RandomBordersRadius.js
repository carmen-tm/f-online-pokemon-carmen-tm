function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}

function borderRadiusSintaxis(a, b) {
	const sintaxis = `${getRandomArbitrary(a, b)}% ${getRandomArbitrary(
		a,
		b
	)}% ${getRandomArbitrary(a, b)}% ${getRandomArbitrary(
		a,
		b
	)}% / ${getRandomArbitrary(a, b)}% ${getRandomArbitrary(
		a,
		b
	)}% ${getRandomArbitrary(a, b)}% ${getRandomArbitrary(a, b)}% `;
	return sintaxis;
}

export { borderRadiusSintaxis };
