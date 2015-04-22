(function(window, google, mapster) {

mapster.MAP_OPTIONS = {
	//КООРДИНАТЫ
	center: {
		lat: 55.163900, 
		lng: 61.294984
	},
	//КАК БЛИЗКО НУЖНО ПОКАЗАТЬ ВЫБРАНУЮ ТОЧКУ
	zoom: 12,
	//УБИРАЕТ СТАНДАРТНОЕ УПРОВЛЕНИЯ 
	disableDefaultUI: false,
	//ОТКЛЮЧИТЬ СКРОЛ
	scrollwheel: true,
	//ОТКЛЮЧИТЬ ДВИЖЕНИЯ КАРТЫ МЫШКАЙ
	draggable: true,
	//ТИП КАРТЫ HYBRID,SATELLITE,ROADMAP
	mapTypeId: google.maps.MapTypeId.HYBRID,
	
	//ПОЛОЖЕНИЯ УПРАВЛЯЮЩИХ ЭЛЕМЕНТОВ НА ЭКРАНЕ
	zoomControlOptions: {
		position: google.maps.ControlPosition.LEFT_CENTER,
		style: google.maps.ZoomControlStyle.DEFAULT//SMALL,DEFAULT
	},
	panControlOptions: {
		position: google.maps.ControlPosition.LEFT_CENTER
	}
};

}(window, google, window.Mapster || (window.Mapster = {})))