sap.ui.define([
	"sap/ui/core/MessageType",
	"sap/ui/core/IndicationColor"
], function (MessageType, IndicationColor) {
	"use strict";

	return {
		
		setColorState: function(iState){
			var sValue;
			switch(iState) {
				case "0":
					sValue = IndicationColor.Indication01;
					break;
				case "1":
					sValue = MessageType.Error;
					break;
			}
			return sValue;
		},
		
		setColorRow: function(oContext){
			var oDataHelp = this.getOwnerComponent().getModel("helpModel");
			var sValue;
			if (oContext.Stat2  === '09'){
				sValue = MessageType.Success;
			}else if (!oDataHelp.includes(oContext.Orgeh)){
				sValue = IndicationColor.Indication05;             
			}else if (oContext.Estex === "0"  || oContext.Estex === "4"){
				sValue = MessageType.Error;
			}else {
				sValue = MessageType.None;
			}
			return sValue;
		}
		
	};
});