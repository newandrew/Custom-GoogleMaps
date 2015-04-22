(function(window, mapster){

	//ОПЦИЙ КАРТЫ
	 var options = mapster.MAP_OPTIONS,
	//ЗАХВАТЫВАЕМ ЭЛЕМЕНТ НА СТРАНИЦЕ
	element = document.getElementById('map-canvas'),
	//КАРТА
	map = mapster.create(element, options);
	//УПРАВЛЕНИЯ ОТМЕТКАМИ
	map.addMarker(55.166930, 61.296244, true);
	map.addMarker(55.164918, 61.294093, true);
	//МАКСИМАЛЬНОЕ ПРИБЛИЖЕНИЯ К ТОЧКЕ И МИНИМАЛЬНОЕ ОТДОЛЕНИЯ ОТ ТОЧКИ
	map.zoom(15);
	//УПРАВЛЕНИЯ СОБЫТИЯМИ
	map._on('click', function() {

	});

}(window, window.Mapster));