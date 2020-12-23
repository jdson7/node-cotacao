import puppeteer from 'puppeteer';

class CotacaoController {
    async getAcoes(req, res) {
        try{
            let scrape = async () => {
                const browser = await puppeteer.launch();
                const page = await browser.newPage();
                await page.goto('https://www.fundamentus.com.br/detalhes.php?papel='+req.params.ticker);
                
                const result = await page.evaluate(() => {
                    return document.querySelector("body > div.center > div.conteudo.clearfix > table:nth-child(2) > tbody > tr:nth-child(1) > td.data.destaque.w3 > span").getText();
                });
            
                browser.close();
            
                return result;
            };
            
            scrape().then((valor) => {
                return res.json({ ticker: req.params.ticker, cotacao: valor });
            }).catch(function (e) {
                return res.status(400).json({ error: 'Erro ao tentar recuperar o ticker. - ' + e });
            });
        }catch(e){
            return res.status(400).json({ error: 'Erro ao tentar recuperar o ticker. - ' + e });
        }
    }

    async getFundos(req, res) {
        try{
            let scrape = async () => {
                const browser = await puppeteer.launch();
                const page = await browser.newPage();
                await page.goto('https://fiis.com.br/'+req.params.ticker+'/');
    
                const result = await page.evaluate(() => {
                    return document.querySelector("#quotations--infos-wrapper > div.item.quotation > span.value").innerHTML;
                });
            
                browser.close();
            
                return result;
            };
            
            scrape().then((valor) => {
                return res.json({ ticker: req.params.ticker, cotacao: valor });
            }).catch(function (e) {
                return res.status(400).json({ error: 'Erro ao tentar recuperar o ticker. - ' + e });
            });
        }catch(e){
            return res.status(400).json({ error: 'Erro ao tentar recuperar o ticker. - ' + e });
        }
    }
}

export default new CotacaoController();