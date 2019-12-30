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
				Categories: [
					{
						id: 1,
						name: "Centers Junior"
					},
					{
						id: 2,
						name: "Centers Developers"
					},
					{
						id: 3,
						name: "Centers Developer Leader"
					}
				]
			});
			return oModel;
		},
		
		createPersonModel: function() {
			var oModel = new JSONModel({
				id: 0,
				name: "",
				lastname: "",
				idCategory: 0
			});
			return oModel;
		}

	};
});