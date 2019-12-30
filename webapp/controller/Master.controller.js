sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"./Base.controller",
	"../components/Message.custom"
], function (Controller, JSONModel, Base, MessageCustom) {
	"use strict";
	
	var mPerson;
	
	return Base.extend("com.inbc.scp-fundamentos.controller.Master", {
		onInit: function () {
			this._loadModels();
			this._loadData();
			this._loadControls(); 
		},
		
		_loadModels: function(){
			mPerson = this.getModel("personModel");
		},
		
		_loadData: function(){
			
		},
		
		_loadControls: function(){
		
		},
		
		_resetModelPerson: function(){
			var oModel = new JSONModel();
			return new Promise(function(resolve, reject){
				oModel.loadData("mockdata/person.json");
				oModel.attachRequestCompleted(function(){
					resolve(oModel.getData());
				});
			});
		},
		
		onPressSave: function(oEvent){
			this._resetModelPerson().then(function(oData){
				mPerson.setData(oData);
			});
		}
		
	});
});