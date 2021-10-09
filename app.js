//Obter e armazenar pelo id as referencias dos elementos que são exibidos
const segundosContainer = document.querySelector('#seconds')
const minutosContainer = document.querySelector('#minutes')
const horasContainer = document.querySelector('#hours')
const diasContainer = document.querySelector('#days')
const proximoAnoContainer = document.querySelector('#year')
const spinnerLoading = document.querySelector('#loading')
const countdownContainer = document.querySelector('#countdown')

const proximoAno = new Date().getFullYear() + 1 //pega o ano e soma mais um, então pega o próximo ano
const novoAnoTempo = new Date(`Janeiro 01 ${proximoAno} 00:00:00`)//gera um objeto que representa um momento no tempo

proximoAnoContainer.textContent = proximoAno

const getUnidadeDeTempo = unidade => unidade < 10 ? '0' + unidade : unidade

const inseriValorDaContagemRegressiva = ({ dias, horas, minutos, segundos }) => {
    segundosContainer.textContent = getUnidadeDeTempo(segundos)//inseri o valor dos elementos em h2
    minutosContainer.textContent = getUnidadeDeTempo(minutos)
    horasContainer.textContent = getUnidadeDeTempo(horas)
    diasContainer.textContent = getUnidadeDeTempo(dias)
}

const atualizarContagemRegressiva = () => {
    const tempoCorrente = new Date()//gera um objeto que representa a data atual
    const diferenca = novoAnoTempo - tempoCorrente//obter a diferença em milesegundos da zero hora do primeiro dia do ano que vem e a data atual
    const dias = Math.floor(diferenca / 1000 / 60 / 60 / 24)
    const horas = Math.floor(diferenca / 1000 / 60 / 60) % 24
    const minutos = Math.floor(diferenca / 1000 / 60) % 60
    const segundos = Math.floor(diferenca / 1000) % 60

    inseriValorDaContagemRegressiva({ dias, horas, minutos, segundos })
}

const displayDeContagemRegressiva = () => {
    spinnerLoading.remove()
    countdownContainer.style.display = 'flex'
}//função para desaparecer o spinner e aparecer o display de contagem

setTimeout(displayDeContagemRegressiva, 1000)//depois de um segundo a função para desaparecer o spinner será invocada

setInterval(atualizarContagemRegressiva, 1000)//dispara a função a cada 1000 milisegundos