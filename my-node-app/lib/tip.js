var tips = [
	"Banana's aren't yellow.",
	"Learn to use a text editor.",
	"Sometimes lightning goes backward.",
	"Don't feel like making anymore tips",
	"Sounding smart doesnt mean anything if you cant back it up."
];
/*
module.exports = {
    tipper: {
        getRandomTip: function() {
            var randomIndex = Math.floor(Math.random() * tips.length);
						return tips[randomIndex];
        }
    }
};*/


exports.getRandomTip = function () {
		var randomIndex = Math.floor(Math.random() * tips.length);
		return tips[randomIndex];
};

