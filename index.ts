import XRoad from 'xroad-client';
const atob = require('atob');

async function llama() {

  // Create the configuration object pointing to 
  // the consumer security server
  const xRoadConfig: any = {
      securityServer: '10.1.62.67', // The security server address
      client: {
        xRoadInstance: 'roksnet',
        memberClass: 'GOV',
        memberCode: '70000101',
        subsystemCode: 'GP-SALUD'
      }
  }
  
  // create the consumer instance
  const consumer = new XRoad(xRoadConfig);
  
  // Create the request object
  const requestConfig = {
    secure: "false", // If true uses https instead of http 
    service: {
      xRoadInstance: 'roksnet',
      memberClass: 'GOV',
      memberCode:'70000101',
      subsystemCode:'GP-SALUD',
      serviceCode: 'WS_Covid_LaboratorioCentral',
      serviceVersion: 'v1'
    },
     
    headers: {
      
  },
    body: (
      `<WS_Covid_LaboratorioCentral xmlns="http://thinknet.x-road.eu/producer/">
      <request xmlns="">
      <fuenteautentica/>
      <servicio/>
      <involucrado>Desde=01/08/2020;Hasta=02/08/2020</involucrado>
      </request>
      </WS_Covid_LaboratorioCentral>
      `
    )
  };
    
  const soapClient: any =  consumer.getSoapClient();
  const result = await soapClient.request(requestConfig);
  const res = (result['SOAP-ENV:Envelope']['SOAP-ENV:Body']['tns:WS_Covid_LaboratorioCentralResponse']);
  // Con esto vemos el texto (falta poner bonito)
  console.log(atob(res.response.resultado1));
}

llama();
