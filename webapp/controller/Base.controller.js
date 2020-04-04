sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function (Controller, History) {
	"use strict";

	return Controller.extend("com.inbc.scp-fundamentos.controller.Base.controller", {
		
		getModel: function (sModel) {
			var oModel = this.getView().getModel(sModel);
			oModel     = (!oModel) ? this.getOwnerComponent().getModel(sModel) : oModel;
			return oModel;
		},
		
		getRouter: function (){
			return sap.ui.core.UIComponent.getRouterFor(this);
		},
		
		onNavBack: function (){
			var oHistory	  = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			if(!sPreviousHash){
				window.history.go(-1);
			}else{
				this.getRouter().navTo("appMaster",{},true);
			}
		}
		
	});
});