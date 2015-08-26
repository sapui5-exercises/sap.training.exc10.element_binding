sap.ui.controller("sap.training.exc10.element_binding.view.Main", {

	onInit: function() {
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.loadData("json/data.json");
		this.getView().setModel(oModel);
	},
	
	onCarrierSelectionChange: function(oEvent) {
		var sPath = oEvent.getParameter("listItem").getBindingContext().getPath();
		var oTable = this.getView().byId("idConnTable");
		oTable.bindElement(sPath);
	}

});