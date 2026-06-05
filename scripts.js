let endereco = "https://api.groq.com/openai/v1/chat/completions"
let prompt = `Você é um designer web premiado e programador.
Crie uma landing page COMPLETA e VISUALMENTE IMPRESSIONANTE para o negócio descrito.

                Regras de resposta:
                - Responda somente com HTML e CSS puros
                - Não use crases, markdown ou explicações
                - Não use tags <img>

                Identidade visual (Capriche e surpreenda):
                - Invente uma paleta de cores única que combine com a essência do negócio
                - Escolha uma Google Font marcante via @import
                - Use emojis grandes no lugar de imagens
                - Use CSS moderno: gradientes, sombras, animações sutis, layout generoso, tipografia forte

                Estrutura da página:
                - Header com nome do negócio e menu
                - Hero impactante com título, subtítulo e botão CTA
                - Seção de diferenciais com emojis
                - Depoimento de cliente
                - Footer com contato

                Todo o conteúdo em Português, criativo e específico para o negócio.`

async function gerarCodigo() {
    let textarea = document.querySelector(".texto-pagina").value

    let resposta = await fetch(endereco, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + "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"
        },
        body: JSON.stringify({
            "model": "llama-3.3-70b-versatile",
            "messages": [
                {
                    "role": "user",
                    "content": textarea
                },
                {
                    "role": "system",
                    "content": prompt
                }
            ],
        })
    })
    let dados = await resposta.json()
    let resultado = dados.choices[0].message.content

    let espacoCodigo = document.querySelector(".bloco-codigo")
    espacoCodigo.textContent = resultado

    let espacoSite = document.querySelector(".bloco-site")
    espacoSite.srcdoc = resultado

    console.log(resultado)

}
