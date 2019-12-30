sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"com/inbc/scp-fundamentos/model/models"
], function (UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("com.inbc.scp-fundamentos.Component", {

		metadata: {
			manifest: "json"
		},
		
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			
			// set the help model
			this.setModel(models.createHelpModel(), "helpModel");
			
			// set the person model
			this.setModel(models.createPersonModel(), "personModel");
		}
	});
});