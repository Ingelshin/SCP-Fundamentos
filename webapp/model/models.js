sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function (JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function () {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		
		createHelpModel: function() {
			var oModel = new JSONModel({
				root: {}
			});
			return oModel;
		},
		
		// Modelo para asignación de constantes y HardCodes
		createConstModel: function() {
			var oModel = new JSONModel({
				aParametersUrl: {}  //Array de parametros enviados por la url
			});
			return oModel;
		}

	};
});