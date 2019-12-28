sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";
	
	var oModel;
	
	return Controller.extend("com.inbc.scp-fundamentos.controller.Master", {
		onInit: function () {
			this._loadModels();
			this._loadControls(); 
		},
		
		_loadModels: function(){
			oModel = new JSONModel();
			oModel.loadData("mockdata/week.json");
		},
		
		_loadControls: function(){
			var oTable = this.byId("tblWeekend");
			oTable.setModel(oModel);
			oTable.bindRows("/week");
		}
		
	});
});