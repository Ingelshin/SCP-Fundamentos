sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"../Base.controller"
], function (Controller, JSONModel, Base) {
	"use strict";

	return Base.extend("com.inbc.scp-fundamentos.controller.employee.employeeList", {
		
		onInit: function () {
			
		},
		
		onAfterRendering: function(){
			
		},
		onBack: function(){
			this.onNavBack();         
		}
		
	});
});