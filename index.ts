import { AnyElement } from "soap/lib/wsdl/elements";

const soap = require('soap');
const path = require('path');
var url = path.resolve('wsdl/WS_Covid_LaboratorioCentral.wsdl');


soap.createClient(url, function(err: any, client: any) {
    if (err) {
        return  console.log('Error al crear cliente:', err)
    }
  // para saber los serivcios que tiene consulto al cliente
  console.log(client.describe());
  //  
  client.addSoapHeader({
      'xrd:client': {
      xRoadInstance: 'roksnet',
      memberClass: 'GOV',
      memberCode: '70000101',
      subsystemCode: 'GP-SALUD'
    },
      'xrd:service': {
      xRoadInstance: 'roksnet',
      memberClass: 'GOV',
      memberCode: '70000101',
      subsystemCode: 'GP-SALUD',
      serviceCode: 'WS_Covid_LaboratorioCentral',
      serviceVersion: 'v1'
    },
    "xrd:id": 'ID11234',
    "xrd:userId": 'EE1234567890',
    "xrd:protocolVersion": '4.0'
    },
    null, null, null
  );
  let userId = 'AR22920765';
  let id = '1231232';
  let protocolVersion = '4.0';
  let args = {userId, id, protocolVersion};


   client.WS_Covid_LaboratorioCentral(args,function(err:any, result: any){
    //  if (err) {
    //    console.log('Palenque: ', err);
    //    return err;
    //  }
    console.log(result);
   })

});



