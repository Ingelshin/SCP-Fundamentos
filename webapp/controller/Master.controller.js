sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";
	
	
	return Controller.extend("com.inbc.scp-fundamentos.controller.Master", {
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
		
		}
		
	});
});