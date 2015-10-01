suite('Global Tests', function() {
	test('page has a valid title ' + document.title, function() {
		//test to check that title is valid, aka not null, not blank and not todo.
		assert(document.title && document.title.match(/\S/) &&
			document.title.toUpperCase() !== 'TODO');
	});
});
