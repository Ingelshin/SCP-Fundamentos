sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.inbc.scp-fundamentos.controller.Base.controller", {
		
		getModel: function (sModel) {
			var oModel = this.getView().getModel(sModel);
			oModel     = (!oModel) ? this.getOwnerComponent().getModel(sModel) : oModel;
			return oModel;
		}
		
	});
});