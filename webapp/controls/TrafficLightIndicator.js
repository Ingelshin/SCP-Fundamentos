jQuery.sap.declare("com.inbc.scp-fundamentos.controls.TrafficLightIndicator");

jQuery.sap.require("sap.ui.core.Control");

sap.ui.core.Control.extend("com.inbc.scp-fundamentos.controls.TrafficLightIndicator", {
	
	metadata: {
		library: "com.inbc.scp-fundamentos.controls",
		properties: {
			currentState:	 {type: "string"},
			stopColor:		 {type: "string"},
			warningColor:	 {type: "string"},
			goColor:		 {type: "string"}
		}
	},
	
	renderer: function(oRm, oControl){
		var iCurrentState = parseInt(oControl.getCurrentState()),
			aColors		  = [];
		
		aColors.push(oControl.getStopColor());
		aColors.push(oControl.getWarningColor());
		aColors.push(oControl.getGoColor());
		
		oRm.writeClasses();
		oRm.writeStyles();
		
		oRm.write("<div");
		oRm.writeControlData(oControl);
		oRm.addClass("traffic-light-container");
		oRm.writeClasses();
		oRm.write(">");
		
		for(var i = 0;  i < 3; i++){
			oRm.write("<div");
			
			if(iCurrentState === i){
				oRm.addStyle("background-color", aColors[i]);
				oRm.writeStyles();
			}
			
			oRm.addClass("traffic-light-indicator");
			oRm.writeClasses();
			oRm.write(">");
			oRm.write("</div>");
			
		}
		
		oRm.write("</div>");
		
	}
	
});