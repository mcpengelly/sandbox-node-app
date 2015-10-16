//headless browser
var Browser = require('zombie');
var assert = require('chai').assert;
var browser;

suite('Cross page tests', function() {
	setup(function(){
		browser = new Browser();
	});

	//headless browser test: request group rate request came from /tours/hood-river
	test('requesting a group rate quote from the HOOD RIVER tour page', function(done) {
		 this.timeout(100000);
		 var referrer = 'http://localhost:3000/tours/hood-river';
		 browser.visit(referrer, function() {
		 	browser.clickLink('.requestGroupRate', function() {
		 		assert(browser.field('referrer').value === referrer);
		 		done();
		 	});
		 });
	});

	test('requesting a group rate quote from the OREGON COAST tour page', function(done) {
		 this.timeout(100000);
		 var referrer = 'http://localhost:3000/tours/oregon-coast';
		 browser.visit(referrer, function() {
		 	browser.clickLink('.requestGroupRate', function() {
		 		assert(browser.field('referrer').value === referrer);
		 		done();
		 	});
		 });
	});
});