sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"com/inbc/scp-fundamentos/model/models"
], function (UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("com.inbc.scp-fundamentos.Component", {

		metadata: {
			manifest: "json"
		},
		
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
		
			// enable routing
			this.getRouter().initialize();
			
			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			
			// set the help model
			this.setModel(models.createHelpModel(), "help");
			
			// set the model constantes
			this.setModel(models.createConstModel(), "const");
			
			// get root path
			this.getRootPath();
			
			// retrieve the parameters send by url 
			this.recoverParameters();
			
		},
		
		// Obtiene el Roth del proyecto
		getRootPath: function() {
			var oRootPath = jQuery.sap.getModulePath("com.inbc.scp-fundamentos");
			var oData	  = this.getModel("help").getData();
			oData.root	  = oRootPath;
		},
		
		// Obtiene los parámetros pasados por Url
		recoverParameters: function(){
			var oData			 = this.getModel("const").getData();
			oData.aParametersUrl = this.getComponentData().startupParameters;
		},
		
		// Detecta el dispositivo y ajusta la densidad 
		getContentDensityClass: function(){
			if (!this._sContentDensityClass){
				if(!Device.support.touch){
					this._sContentDensityClass = "sapUiSizeCompact";
				}else{
					this._sContentDensityClass = "sapUiSizeCozy";
				}
			}
			return this._sContentDensityClass;
		}
		
	});
});