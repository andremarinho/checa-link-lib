const pegaArquivo = require('../index');

const arrayResultado = [{FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'}];

describe('pegaArquivo::', () => {
  it('deve ser uma função', () => {
    expect(typeof pegaArquivo).toBe('function')
  })

  it('deve retornar resultados', async () => {
    const resultado = await pegaArquivo('test/arquivos/textoComLink.md');
    expect(resultado).toEqual(arrayResultado);
  })

  it('deve retornar mensagem que "nao ha links"', async () => {
    const resultado = await pegaArquivo('test/arquivos/textoSemLink.md');
    expect(resultado).toEqual('não há links');
  })

  it('deve lançar um erro na falta de arquivo', async () => {
    await expect(pegaArquivo('/home/juliana/Documents/alura/lib-markdown/test/arquivos'))
      .rejects.toThrow(/não há arquivo no caminho/)
  })

  it('deve resolver a função com sucesso', async () => {
    await expect(pegaArquivo('test/arquivos/textoComLink.md'))
      .resolves.toEqual(arrayResultado)
  })

  it('deve conter alguma informacao', async () => {
    const resultado = await pegaArquivo('test/arquivos/textoComLink.md');
    expect(resultado).toEqual(expect.anything());
  })

})