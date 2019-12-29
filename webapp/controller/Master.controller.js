sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"./Base.controller",
	"../components/Message.custom"
], function (Controller, JSONModel, Base, MessageCustom) {
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
			MessageCustom.showConfirmation("Hola", this._loadModels);
		}
		
	});
});