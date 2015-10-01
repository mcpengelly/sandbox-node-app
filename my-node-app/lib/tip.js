var tips = [
	"Banana's aren't yellow.",
	"Learn to use a text editor.",
	"Sometimes lightning goes backward."
];

exports.getRandomTip = function () {
		var randomIndex = Math.floor(Math.random() * tips.length);
		return tips[randomIndex];
};

