(function (namespace) {

	var log=Painter.Util.log,
			extend=Painter.Util.extend,
			util=Painter.Util,
			Module=Painter.Gui.Module,
			MoveElem =Painter.Gui.MoveElem,
			paint=Painter.paint,
			timeProcessArray=Painter.Util.timeProcessArray,
			center=util.center;

	var drawerpanel= new Module({
		id: 'drawerpanel',
		title: "你画我猜",
		contents: ['<div id="gamepannel" width="700" height="75" style="position: absolute; z-index: 0; background: url(images/op_8x8.gif);cursor:crosshair;"></div>'],
		width: 720,
		height: 100,
		container:'#painter',
		onload:function () {
		}
	});
	center(drawerpanel.M[0]);
	drawerpanel.M.hide();
	var guesserpanel= new Module({
		id: 'guesserpanel',
		title: "你画我猜",
		contents: ['<div id="gamepannel" width="700" height="75" style="position: absolute; z-index: 0; background: url(images/op_8x8.gif);cursor:crosshair;"></div>'],
		width: 720,
		height: 100,
		container:'#painter',
		onload:function () {
		}
	});
	center(guesserpanel.M[0]);
	guesserpanel.M.hide();
})(Painter);
