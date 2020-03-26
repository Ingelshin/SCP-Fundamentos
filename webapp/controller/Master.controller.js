sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"./Base.controller",
	"com/inbc/scp-fundamentos/controls/TrafficLightIndicator"
], function (Controller, JSONModel, Base, TrafficLightIndicator) {
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
			var oPage = this.getView().byId("page");
			var oTraffic = new TrafficLightIndicator({
				currentState: "2",
				stopColor: "#F11224",
				warningColor: "#FFF400",
				goColor: "#36FF00"
			});
			oPage.addContent(oTraffic);
		}
		
	});
});