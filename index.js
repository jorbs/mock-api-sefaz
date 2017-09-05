var restify = require('restify');

var server = restify.createServer();

server.use(restify.plugins.bodyParser());

server.post('/api/public/autenticar', (req, res, next) => {
  var { login, idAutorizacao, tokenApp } = req.body;
  
  console.log(req.href(), ': ', login, idAutorizacao);

  res.send({
    id_token: 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyNDAwNjY2NCIsImF1dGgiOiJST0xFX0VNSV9FWFRSQVRPLFJPTEVfUkVMX0RFTlVOX0VTUE9OVEFORUEsUk9MRV9FTUlfQ1AsUk9MRV9SRUxfT01JU1NBTyIsImlkQ29uZXhhbyI6IjYyOTYzNDEzRjg5MERDM0E2NEUzMDBDRDAxNkY1QjYxIiwibnVtUGVzc29hIjoyNjQ4LCJpbmRTdGF0dXMiOiJBIiwiaWRBcGxpY2F0aXZvIjoyMywiaWRBdXRvcml6YWNhbyI6MzkyLCJleHAiOjE1MTk2ODk2MDB9.zCjQaNaSZ4B1pjPHKBkDpL0k0LVGuu0dwa7cIv5fXvr5dq3h_ernaDre3X7pHkJYat1oTk7MFccMxBWem6jXBw'
  });
  
  return next();
});

server.post('/sfz-habilitacao-aplicativo-api/api/public/autorizacao-aplicativo/solicitar', (req, res, next) => {
  var { login, nomeDispositivo, tokenApp } = req.body;

  console.log(req.href(), ': ', login, nomeDispositivo);
  
  res.send({
    idAutorizacao: 20,
    urlAutorizacao: 'http://hackathonhabilitacao.sefaz.al.gov.br/'
  });

  // res.send(401, {
  //   codigo: 401,
  //   mensagem: 'Usuário sem acesso.'
  // });
  // res.send(403, {
  //   codigo: 403,
  //   mensagem: 'Usuário não autorizado a consultar esta função.'
  // });
  // res.send(404, {
  //   codigo: 404,
  //   mensagem: 'Login não encontrado.'
  // });

  return next();
});

server.get('/sfz_cadastro_api/api/public/contribuinte/obterContribuinte/:caceal', (req, res, next) => {
  console.log(req.href());

  res.send({
    razaoSocial: 'Hackathon S/A',
    nomeFantasia: 'Hackathon S/A',
    cnpj: '123456000130',
    descricao: 'Empresa Individual',
    descricaoSituacaoCadastral: 'Ativo',
    endereco: 'Rua Professor Virgínio de Campos, 333, Apartamento 302, Farol',
    numeroTelefone: '+5582996741312',
  });

  return next();
});

server.post('/sfz_certidao_api/api/public/consultaCertidao/consultarCnd', (req, res, next) => {
  console.log(req.href());

  res.send({
    tipoCertidao: 'CP',
    numeroDocumento: '24006664',
    horaEmissao: '16:38:58',
    dataEmissao: '17/08/2017',
    codigoAutenticacao: '1DE37663493043ED',
  });

  return next();
});

server.post('/sfz_fronteiras_api/api/public/termoApreensao/consultar', (req, res, next) => {
  console.log(req.href());

  res.send([
    {
      numeroTermo: 16081,
      dataEmissao: '2017-08-10T14:18:48.000+0000',
      codigoStatus: 12,
      status: 'Pendente',
      posto: 'INFRAESTRUTURA',
      papel: 'Emitente',
    },
    {
      numeroTermo: 16081,
      dataEmissao: '2017-08-10T14:18:48.000+0000',
      codigoStatus: 12,
      status: 'Pendente',
      posto: 'INFRAESTRUTURA',
      papel: 'Emitente',
    }
  ]);

  return next();
});

server.get('/sfz_cadastro_api/api/public/contribuinte/obterRestricoes/:caceal', (req, res, next) => {
  console.log(req.href());

  res.send([
    {
      codigoTipoRestricao: "string",
      dataCompetencia: "2017-08-16T12:45:53.384Z",
      descricaoRestricao: "string",
      id: 0,
      numeroCaceal: 0,
      numeroPessoa: 0,
      restricao: {
          codigo: 0,
          descricao: "string"
      },
      solucao: "string"
    }
  ]);

  return next();
});

server.get('/sfz_certidao_api/api/public/consultaCertidao/consultarPendencias', (req, res, next) => {
  console.log(req.href());

  res.send({});

  return next();
});

server.post('/sfz_fronteiras_api/api/public/antecipacao/consultarValoresAntecipados', (req, res, next) => {
  console.log(req.href());

  res.send([
    {
      sequencialAntecipacao: 402801,
      dataVencimento: '2007-03-20T03:00:00.000+0000',
      valorAntecipado: 7753.7,
      numeroCaceal: 24002198,
      codigoTributo: 15423,
      competencia: '8/2017'
    }
  ]);

  return next();
});

server.post('/sfz_fronteiras_api/api/public/antecipacao/consultarAntecipado', (req, res, next) => {
  console.log(req.href());

  res.send([
    {
      numeroProcessamento: 3354841,
      codigoTributo: 15423,
      competencia: 200702,
      numeroCaceal: 24002198,
      dataEmissao: "2008-10-03T21:09:21.000+0000",
      dataPagamento: null,
      dataVencimento: "2007-03-20T03:00:00.000+0000",
      valorPrincipal: 7753.7,
      valorTotal: 7753.7,
      valorMulta: 0,
      valorJuros: 0,
      codigoBarras: "85670000077 6 53700002200 5 70320000000 7 00335484119 3",
      sequencialAntecipacao: 402801
    }
  ]);

  return next();
});

server.post('/api/public/processosAtivos/consultarPorNumeroProcesso', (req, res, next) => {
  console.log(req.href());

  res.send({
    descricaoAssunto: '2ª via da FIC',
    orgao: 'Secretaria Executiva de Fazenda do Estado de Alagoas',
    numeroProtocolo: 11,
    nomeInteressado: 'Foo Bar',
    situacao: 'Tramitando',
    ultimaMovimentacao: '16/11/2011',
    dataAcatamento: '16/11/2011',
    dataProtocolo: '16/11/2011',
    setor: 'Setor',
  });

  return next();
});

server.post('/sfz_glpi_api/api/public/chamado/abrir', (req, res, next) => {
  console.log(req.href());

  res.send({
    id: 6,
    titulo: "documento teste",
    descricao: "dados adicionais",
    solucao: null,
    dataAbertura: "2017-03-17T10:55:13.000+0000",
    dataFechamento: null,
    idCategoria: 31,
    status: 2,
    dataAgendamento: "2017-08-16T15:27:23.000+0000",
    reservado: 0,
    reservavel: 0,
    dataCriacao: "2017-03-17T10:55:13.000+0000",
  });

  return next();
});

server.get('/sfz_glpi_api/api/public/chamado', (req, res, next) => {
  console.log(req.href());

  res.send([
    {
      id: 6,
      titulo: "documento teste",
      descricao: "dados adicionais",
      solucao: null,
      dataAbertura: "2017-03-17T10:55:13.000+0000",
      dataFechamento: null,
      idCategoria: 31,
      status: 2,
      dataAgendamento: "2017-08-16T15:27:23.000+0000",
      reservado: 0,
      reservavel: 0,
      dataCriacao: "2017-03-17T10:55:13.000+0000",
      statusChamado: [
        {
          id: 27,
          dataAbertura: "2017-03-23T11:35:44.000+0000",
          descricao: "foi efetuada uma ligação onde foi esclarecida a dúvida"
        },
        {
          id: 38,
          dataAbertura: "2017-03-24T08:55:35.000+0000",
          descricao: "teste2"
        }
      ]
    }
  ]);

  return next();
});

server.get('/sfz_glpi_api/api/public/chamado/:idChamado', (req, res, next) => {
  console.log(req.href());

  res.send({
    id: 6,
    titulo: "documento teste",
    descricao: "dados adicionais",
    solucao: null,
    dataAbertura: "2017-03-17T10:55:13.000+0000",
    dataFechamento: null,
    idCategoria: 31,
    status: 2,
    dataAgendamento: "2017-08-16T15:27:23.000+0000",
    reservado: 0,
    reservavel: 0,
    dataCriacao: "2017-03-17T10:55:13.000+0000",
    statusChamado: [
      {
        id: 27,
        dataAbertura: "2017-03-23T11:35:44.000+0000",
        descricao: "foi efetuada uma ligação onde foi esclarecida a dúvida"
      },
      {
        id: 38,
        dataAbertura: "2017-03-24T08:55:35.000+0000",
        descricao: "teste2"
      }
    ]
  });

  return next();
});

server.get('/sfz_glpi_api/api/public/obterCategorias', (req, res, next) => {
  console.log(req.href());

  res.send([
    {
      id: 64,
      descricao: "Dúvida"
    },
    {
      id: 65,
      descricao: "Denúncia"
    }
  ]);

  return next();
});

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
