sap.ui.define([
	"sap/m/MessageBox",
	"sap/ui/core/TextDirection"
], function (MessageBox, TextDirection) {
	"use strict";

	return {
		showConfirmation: function(sMsg, callback) {
			MessageBox.confirm(sMsg, {
				title: "Confirmación",
				styleClass: "sapUiSizeCompact",
				textDirection: TextDirection.Inherit,
				actions: [MessageBox.Action.YES, MessageBox.Action.NO],
				onClose: function (oAction) {
					if (oAction === "YES"){
						callback();
					}
				} 
			});
		}
	};
});