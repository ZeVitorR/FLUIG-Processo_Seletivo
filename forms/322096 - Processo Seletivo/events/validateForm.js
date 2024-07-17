function validateForm(form){
	if(parseInt(form.getValue("idadeCandidato")) < 16){
		throw "A idade do candidato não pode ser menor que 16";
	}
}