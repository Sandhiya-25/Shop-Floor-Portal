sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function(Controller,MessageBox) {
	"use strict";

	return Controller.extend("keerthu_sfkeerthu_sf.controller.View1", {
		onClick   : function(){
			

		var user=this.getView().byId("user").getValue();
		var pass=this.getView().byId("pass").getValue();
		
		if(user==="2"&& pass==="SAP123")
		{
			window.console.log("success");
			var oR = sap.ui.core.UIComponent.getRouterFor(this);
			oR.navTo("plannedorder");
	}
	else
	{
		window.console.log("invalid");
	}}
	});
});