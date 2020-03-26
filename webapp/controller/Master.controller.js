sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"./Base.controller"
], function (Controller, JSONModel, Base) {
	"use strict";
	
	// var mHelp;
	
	return Base.extend("com.inbc.scp-fundamentos.controller.Master", {
		onInit: function () {
			this._loadModels();
			this._loadData();
			this._loadControls();
		},
		
		_loadModels: function(){
			
		},
		
		_loadData: function(){
			
		},
		
		_loadControls: function(){
			let oFilter = this.getView().byId("idFilterDemo");      
			oFilter.addEventDelegate({
				"onAfterRendering": function(oEvent) {
					var oButton = oEvent.srcControl._oSearchButton;
					debugger 
				}
			});
		}
		
	});
});