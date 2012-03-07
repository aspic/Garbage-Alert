function Map(players){
	switch(players){
		case(2):
			initTwoPlayerMap();
			break;
		case(3):
			//initThreePlayerMap();
			break;
		case(4):
			//initFourPlayerMap();
			break;
	}
}

var cellSize = 20;
var mapGrid = [];

function initTwoPlayerMap(){
	// Initialize map
	for(var i=0; i<jsonMap.height; i++) {
		mapGrid[i] = [];
		for(var j=0; j<jsonMap.width; j++) {
			mapGrid[i][j] = new MapCell(cellSize*j,cellSize*i,cellSize,cellSize,jsonMap.type);
		}
	}
	// Set content from json
	for(var i=0; i<jsonMap.tiles.length ; i++){
		mapGrid[jsonMap.tiles[i].y][jsonMap.tiles[i].x] = new MapCell(cellSize*jsonMap.tiles[i].x,cellSize*jsonMap.tiles[i].y,cellSize,cellSize,jsonMap.tiles[i].type);
	}
}

Map.prototype.draw = function() {
	mapGrid.forEach(function(r){
		r.forEach(function(cell){
			cell.draw();
		});
	});
};
