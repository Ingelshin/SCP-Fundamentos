/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/inbc/scp-fundamentos/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});