sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("com.inbc.scp-fundamentos.controller.Base.controller", {
		
		getModel: function (sModel) {
			var oModel = this.getView().getModel(sModel);
			oModel = (!oModel) ? this.getOwnerComponent().getModel(sModel) : oModel;
			return oModel;
		}
		
	});
});