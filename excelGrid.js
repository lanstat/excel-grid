//Esta clase es solo para uso en desarrollo 

var classes = [
	'../core/excelGrid.js',
	'../core/event.js',
	'../core/element.js',
	'../core/row.js',
	'../core/cell.js',
	'../core/globals.js',
	'../core/grid.js',
	'../core/guide/guideRow.js',
	'../core/header/headerGrid.js',
	'../core/header/headerColumn.js',
	'../core/header/headerRow.js',
	'../core/header/diagonalCell.js',
	'../core/header/headerCell.js',
	'../core/data/dataCell.js',
	'../core/data/dataGrid.js',
	'../core/data/dataRow.js',
	'../core/data/textCell.js',
	'../core/selectContainer.js'
];

var styles = [
    '../dist/excelGrid.css'
];


window.autoload = function(iter){
	if (iter >= classes.length){
		return;
	}
	var script = document.createElement('script');
	script.onload = function(){
		window.autoload(iter+1);
	};
	script.src = classes[iter];
	document.getElementsByTagName('head')[0].appendChild(script);
};

var autoStyles = function(){
	for (var i=0; i<styles.length; i++){
		var style = document.createElement('link');
		style.href = styles[i];
		style.rel = 'stylesheet';
        document.getElementsByTagName('head')[0].appendChild(style);
	}
};

autoStyles();
autoload(0);
