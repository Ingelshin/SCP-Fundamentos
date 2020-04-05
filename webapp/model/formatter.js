sap.ui.define([
	
], function () {
	"use strict";

	return {
		
		setColorState: function(iState){
			var sValue;
			switch(iState) {
				case "0":
					sValue = "Indication01";
					break;
				case "1":
					sValue = "Error";
					break;
			}
			return sValue;
		}
		
	};
});