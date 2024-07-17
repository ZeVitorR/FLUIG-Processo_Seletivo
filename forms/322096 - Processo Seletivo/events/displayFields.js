function displayFields(form,customHTML){
	var mode1     = form.getFormMode();
    var state    = getValue("WKNumState");
    var complete = getValue("WKCompletTask");
    var user     = getValue("WKUser");
    var locale   = getValue("WKUserLocale");
    var mobile1   = form.getMobile();
    var processo1 = getValue("WKNumProces");

    if (form.getFormMode() == "VIEW"){
        form.setShowDisabledFields(true);
    }
    customHTML.append("<script>");
    customHTML.append("        function getFormMode(){ return '" + mode1 + "'};");
    customHTML.append("        function getMobile(){ return '" + mobile1 + "'};");
    customHTML.append("        function getWKNumState(){ return '" + state + "'};");
    customHTML.append("        function getWKUser(){ return '" + user + "'};");
    customHTML.append("        function getWKNumProces(){ return '" + processo1 + "'};");
    customHTML.append("        function getWKUserLocale(){ return '" + locale + "'};");
    customHTML.append("</script>");

	form.setShowDisabledFields(true);
	form.setHidePrintLink(true);
	
	var ATIVIDADE = Number(getValue("WKNumState")) ? Number(getValue("WKNumState")) : INICIO;
	var MOBILE = form.getMobile();
	var MODE = form.getFormMode()
	var usuarioCorrente = fluigAPI.getUserService().getCurrent();
	var customJS = "<script>";		
	if(MODE == "VIEW"){
		customJS += "$('.btnAddNewRow').remove();";
		customJS += "$('.tdDeleteRow').remove();";
	}
	customJS += "function getAtividade(){ return '" + ATIVIDADE + "'};";
	customJS += "function getMode(){ return '" + MODE + "'};";
	customJS += "function getMobile(){ return " + MOBILE + "};";
	customJS += "displayBtnFiles();";
	customJS += "</script>"
	customHTML.append(customJS)
	
 }