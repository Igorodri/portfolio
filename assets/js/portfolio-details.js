var toHelp = document.getElementById("radio1");
var foods = document.getElementById("radio2");
var despesas = document.getElementById("radio3");

var name_project = document.getElementById("name_project");
var desc_project = document.getElementById("desc_project");

function identificar() {
    if(toHelp.checked == true){
        name_project.innerHTML = "<strong>Nome:</strong> ToHelp"
        desc_project.innerText = "ToHelp é uma aplicação web projetada para simplificar a comunicação entre cuidadores e familiares de idosos, estabelecendo uma plataforma eficiente e formal para acordos profissionais. Facilitando atualizações de saúde, rotinas diárias e eventos importantes, a ToHelp promove uma comunicação transparente. Além disso, oferece recursos para formalizar contratos, definindo clareza nas responsabilidades e contribuindo para um ambiente profissional mais respeitoso. Com funcionalidades específicas, como lembretes de medicamentos e diário de atividades, a ToHelp busca aprimorar o cuidado aos idosos, garantindo uma abordagem mais personalizada e integrada."
    }else if(foods.checked == true){
        name_project.innerHTML = "<strong>Nome:</strong> Foods"
        desc_project.innerText = "Foods é uma aplicação web de uma lanchonete fictícia, desenvolvida para propósitos educacionais. Com um cardápio diversificado, o projeto destaca-se por oferecer uma ampla seleção de lanches, proporcionando aos usuários uma experiência de navegação intuitiva e atraente. O ambiente virtual da Foods visa explorar conceitos práticos de design e interação, tornando-o uma ferramenta educativa criativa para entusiastas e desenvolvedores."
    }else if(despesas.checked == true){
        name_project.innerHTML = "<strong>Nome:</strong> Despesas"
        desc_project.innerText = "O Controlador de Despesas é um projeto pessoal desenvolvido para oferecer uma abordagem prática na organização financeira. Sua principal característica é a criação de planilhas editáveis e personalizáveis, simplificando o acompanhamento das despesas. Projetado para uso contínuo, busca proporcionar uma ferramenta flexível e fácil de usar, permitindo que os usuários mantenham o controle de suas finanças de maneira eficaz e adaptada às suas necessidades específicas."
    }
}




