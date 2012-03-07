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

	for(var i=0; i<twoPlayerMap.length ; i++){
		mapGrid[i] = [];
		for(var j=0; j<twoPlayerMap[i].length ; j++){
			mapGrid[i][j] = new MapCell(cellSize*j,cellSize*i,cellSize,cellSize,twoPlayerMap[i][j]);
		}
	}

	// mapGrid[0] = [new MapCell(0,0,20,20,0),new MapCell(20,0,20,20,0)];
	// mapGrid[1] = [new MapCell(0,20,20,20,0),new MapCell(20,20,20,20,1)];
}

Map.prototype.draw = function() {
	mapGrid.forEach(function(r){
		r.forEach(function(cell){
			cell.draw();
		});
	});
};