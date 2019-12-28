/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/inbc/scp-fundamentos/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});