var tips = [
	"Banana's aren't yellow.",
	"Learn to use a text editor.",
	"Sometimes lightning goes backward.",
	"Don't feel like making anymore tips",
];

exports.getFortune = function () {
	var randomIndex = Math.floor(Math.random() * tips.length);
	return tips[randomIndex];
};
