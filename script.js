async function getAddressByCep(){
    const cep = document.getElementById("cepInput").value
    try {
        const response =  await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const data = await response.json()
        console.log(data)
        document.getElementById('responseLog').value=data.logradouro
        document.getElementById( 'responseDistrict' ).value=data.bairro;
        document.getElementById('responseUF').value=data.uf;
    }catch (error){
        alert('CEP não encontrado')
    }
  }

  async function temperaturaCep(){
    const longitude = document.getElementById("longitude").value
    const latitude = document.getElementById("latitude").value
    try{    
        const responseC =  await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`)
        const dataC = await responseC.json()
        console.log(dataC)
        document.getElementById('resultTemp').value=dataC.current.temperature_2m
    
    }
    catch(erro){
        console.log(erro);
    }
  }