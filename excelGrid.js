//Esta clase es solo para uso en desarrollo 

var classes = [
	'../core/excelGrid.js',
	'../core/element.js',
	'../core/header/headerGrid.js',
	'../core/grid.js',
	'../core/guide/guideRow.js',
	'../core/header/headerRow.js',
	'../core/row.js',
	'../core/cell/cell.js',
	'../core/cell/dataCell.js',
	'../core/header/headerCell.js',
	'../core/cell/textCell.js'
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
