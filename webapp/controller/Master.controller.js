sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"com/inbc/scp-fundamentos/controller/Base.controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/model/Sorter"
], function (Controller, JSONModel, Base, Filter, FilterOperator, Sorter) {
	"use strict";
	
	//var mGeneral;     // MOdelos de ls servicios
	var mHelp;		  // Modelos locales
	var dHelp;		  // Datos de los modelos locales
	
	return Base.extend("com.inbc.scp-fundamentos.controller.Master", {
		
		onInit: function () {
			this._loadModels();
			this._loadControls();
			this._loadData();
		},
		
		onAfterRendering: function(){
		},
		
		_loadModels: function(){
		//	mGeneral = this.getModel();
			mHelp	 = this.getModel("help");
		},
		
		_loadData: function(){
			dHelp    = mHelp.getData();
		},
		
		_loadControls: function(){
			
		},
		
		onPressOrder: function(){
			var aSorts = [];
			var oTable = this.getView().byId("tblUsuario");
			var oSort  = new Sorter("Stat2", false);
			aSorts.push(oSort);
			oSort  = new Sorter("Name", false);
			aSorts.push(oSort);
			oTable.getBinding("rows").sort(aSorts);
		},
		
		onPressOrder2: function(){
			var aSorts = [];
			var oTable = this.getView().byId("tblUsuario");
			var oSort  = new Sorter("Stat2", false);
			aSorts.push(oSort);
			oSort  = new Sorter("Name", true);
			aSorts.push(oSort);
			oTable.getBinding("rows").sort(aSorts);
		},
		
		onPressFilter: function() {
			var aFilters = this.setFiltersBar();
			var oTable   = this.getView().byId("tblUsuario");
			this.fireFilterTable(aFilters, oTable);
		},
		
		setFiltersBar: function(aFilters = []){
			var oFilters = dHelp.filters;
			for(var key in oFilters){
				if(oFilters[key]){
					aFilters.push(this._createFilter(key, oFilters));
				}
			}
			return aFilters;
		},
		
		fireFilterTable: function(aFilters, oTable){
			oTable.getBinding("rows").filter(aFilters);
		},
		
		_createFilter: function(sKey, oFilters, oFilter = {}){
			switch(sKey){
				case "Stat2":
					oFilter = new Filter(sKey, FilterOperator.EQ, oFilters[sKey]);
					break;
				case "Name":
					oFilter = new Filter(sKey, FilterOperator.Contains, oFilters[sKey]);
					break;
			}
			return oFilter;
		}
		
	});
});