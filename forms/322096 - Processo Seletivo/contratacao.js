

$(document).ready(function(){
    var atividadeAtual;
    
    if(document.getElementById('nivelEduCandidato').value == "OutraEscolariedade"){
        $("#faculdadeC").hide();
    }else if(document.getElementById('nivelEduCandidato').value == "SuperiorCompleto" ){
        $("#semestre").hide();  
    }
    atividadeAtual = getWKNumState();
    if(atividadeAtual != "0"){
        console.log("Entrou")
        var local = document.getElementById('fdCurriculoCandidato').value;
        var localp = document.getElementById('nivelEduCandidato').value
        var link = document.querySelector("a");
        var setor = document.getElementById('areaCandidato').value;
        if(localp == "medioCompleto"){
            link.getAttribute("href");
            link.setAttribute("href", "https://thomasie156267.fluig.cloudtotvs.com.br/portal/p/1/ecmnavigation?app_ecm_navigation_doc=341104");
            link.textContent = "Salvo em: Documentos/Arquivo Digital - THCM/ARQUIVOS CURRICULUM/CURRÍCULOS/2° Grau Completo/"+local+".pdf";
        }else{
            if (setor == "Ciências Contábeis"){
                link.getAttribute("href");
                link.setAttribute("href", "https://thomasie156267.fluig.cloudtotvs.com.br/portal/p/1/ecmnavigation?app_ecm_navigation_doc=322087");
                link.textContent = "Salvo em: Documentos/Arquivo Digital - THCM/ARQUIVOS CURRICULUM/CURRÍCULOS/CIÊNCIAS CONTÁBEIS/"+local+".pdf";
            }else if (setor == "Arquitetura/Engenharia"){
                link.getAttribute("href");
                link.setAttribute("href", "https://thomasie156267.fluig.cloudtotvs.com.br/portal/p/1/ecmnavigation?app_ecm_navigation_doc=322091");
                link.textContent = "Salvo em: Documentos/Arquivo Digital - THCM/ARQUIVOS CURRICULUM/CURRÍCULOS/ARQUITETURA - ENGENHARIA/"+local+".pdf";
            }else if (setor == "Administração"){
                link.getAttribute("href");
                link.setAttribute("href", "https://thomasie156267.fluig.cloudtotvs.com.br/portal/p/1/ecmnavigation?app_ecm_navigation_doc=322085");
                link.textContent = "Salvo em: Documentos/Arquivo Digital - THCM/ARQUIVOS CURRICULUM/CURRÍCULOS/ADMINISTRAÇÃO/"+local+".pdf";
            }else if (setor == "Direito"){
                link.getAttribute("href");
                link.setAttribute("href", "https://thomasie156267.fluig.cloudtotvs.com.br/portal/p/1/ecmnavigation?app_ecm_navigation_doc=322088");
                link.textContent = "Salvo em: Documentos/Arquivo Digital - THCM/ARQUIVOS CURRICULUM/CURRÍCULOS/DIREITO/"+local+".pdf";
            }else if (setor == "Tecnologia da Informação"){
                link.getAttribute("href");
                link.setAttribute("href", "https://thomasie156267.fluig.cloudtotvs.com.br/portal/p/1/ecmnavigation?app_ecm_navigation_doc=322092");
                link.textContent = "Salvo em: Documentos/Arquivo Digital - THCM/ARQUIVOS CURRICULUM/CURRÍCULOS/TI/"+local+".pdf";
            }else if (setor == "Comercial"){
                link.getAttribute("href");
                link.setAttribute("href", "https://thomasie156267.fluig.cloudtotvs.com.br/portal/p/1/ecmnavigation?app_ecm_navigation_doc=322089");
                link.textContent = "Salvo em: Documentos/Arquivo Digital - THCM/ARQUIVOS CURRICULUM/CURRÍCULOS/COMERCIAL/"+local+".pdf";
            }else{
                link.getAttribute("href");
                link.setAttribute("href", "https://thomasie156267.fluig.cloudtotvs.com.br/portal/p/1/ecmnavigation?app_ecm_navigation_doc=322477");
                link.textContent = "Salvo em: Documentos/Arquivo Digital - THCM/ARQUIVOS CURRICULUM/CURRÍCULOS/OUTROS/"+local+".pdf"
            }
        }
        
        $("#localSalvo").show();
        $("#status").show();
    }else{
        $("#faculdadeC").hide();
        $("#status").hide();
    }
})

function calculaIdade(){
    const today = new Date();
    const data = document.getElementById("nascimentoCandidato").value;
    console.log(data)
    const birthDate = new Date(data);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    console.log(age)
    document.getElementById("idadeCandidato").value = age;
}

function exibeFacu(event){
   
   if( event.value == "OutraEscolariedade" || event.value == "medioCompleto"){
        $("#faculdadeCandidato").hide();
        // document.getElementById("semestreCandidato").setAttribute("data-fluig-required", "false");
        // document.getElementById("conclusaoCandidato").setAttribute("data-fluig-required", "false");
        // document.getElementById("faculdadeCandidato").setAttribute("data-fluig-required", "false");
        $("#faculdadeC").hide();
    }else{
        if(event.value == "SuperiorCompleto"){
            $("#faculdadeCandidato").show();
            $("#semestre").hide();        
            // document.getElementById("semestreCandidato").setAttribute("data-fluig-required", "false");
            // document.getElementById("conclusaoCandidato").setAttribute("data-fluig-required", "true");
            // document.getElementById("faculdadeCandidato").setAttribute("data-fluig-required", "true");
        }else{
            $("#semestre").show();
            $("#faculdadeCandidato").show();
            // document.getElementById("semestreCandidato").setAttribute("data-fluig-required", "true");
            // document.getElementById("conclusaoCandidato").setAttribute("data-fluig-required", "true");
            // document.getElementById("faculdadeCandidato").setAttribute("data-fluig-required", "true");
        }
        $("#faculdadeC").show();
    }

}