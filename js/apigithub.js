/* Código completo da solicitação */
/* Realizando uma solicitação GET */
//const ul = document.querySelector("#listProject")
const ul = document.querySelector('#listProject')

    //if(window.navigator.online == false) {
        function getApiGitHUB() {
        /* Fetch para fazer uma requisição */
        /* https://api.github.com/users/nomeUsuario/repos */
        /* fetch('https://api.github.com/users/bernadin18/repos') */
        fetch('https://api.github.com/users/han19githtbr/repos')   
            .then(async response => {

            if(!response.ok) {
                throw new Error(response.status)  
            }

            var data = await response.json()
                
            data.map(item => {
                let li = document.createElement('li')

                li.innerHTML = `
                <strong>${item.name.toUpperCase()}</strong>
                <span>URL: ${item.url}</span>
                <span><a href= "${item.url}">${item.url}</a></span>
                <span>Data Criação:
                ${Intl.DateTimeFormat('pt-BR')
                    .format(new Date(item.created_at))}  
                </span>
            `
            
            ul.appendChild(li)
            
            })

            }).catch(e => console.log(e)) 
        }

        getApiGitHUB()