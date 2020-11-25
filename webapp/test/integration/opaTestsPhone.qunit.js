/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"com/sap/ua/Gateway_171/test/integration/PhoneJourneys"
	], function() {
		QUnit.start();
	});
});