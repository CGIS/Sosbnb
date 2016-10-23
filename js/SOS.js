var application = {
	init: function(){
		var mapTag = document.getElementById("TGOS");
		this.map = new TGOS.TGOnlineMap(mapTag, TGOS.TGCoordSys.EPSG3826);
	}
};


$(function() {
    application.init();
});