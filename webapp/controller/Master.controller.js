sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"./Base.controller"
], function (Controller, JSONModel, Base) {
	"use strict";
	
	var mGeneral;
	
	return Base.extend("com.inbc.scp-fundamentos.controller.Master", {
		
		onInit: function () {
			this._loadModels();
			this._loadControls();
			this._loadData();
		},
		
		onAfterRendering: function(){
			debugger
		},
		
		_loadModels: function(){
			mGeneral = this.getModel();
		},
		
		_loadData: function(){
			
		},
		
		_loadControls: function(){
			
		},
		
		onPress: function() {
			
		}
		
	});
});