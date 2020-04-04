sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"com/inbc/scp-fundamentos/controller/Base.controller",
	"sap/m/MessageToast"
], function (Controller, JSONModel, Base, MessageToast) {
	"use strict";
	
	var mGeneral;
	
	return Base.extend("com.inbc.scp-fundamentos.controller.Master", {
		
		onInit: function () {
			this._loadModels();
			this._loadControls();
			this._loadData();
		},
		
		onAfterRendering: function(){
		
		},
		
		_loadModels: function(){
			mGeneral = this.getModel();
		},
		
		_loadData: function(){
			
		},
		
		_loadControls: function(){
			var oRouter = this.getRouter();
			oRouter.attachRouteMatched(this.handleRouteMatched, this);
		},
		
		onPressNavigate: function() {
			this.getView().unbindElement();
			this.getRouter().navTo("employeeList");
		},
		
		handleRouteMatched: function(oEvent){
			// Ejecuta cada que hacemos una navegación
			MessageToast.show("Navegaste");
		}
	});
});