var pdf = require("html-pdf")
var ejs = require("ejs")

var nome = "Wagner Ribeiro Aranha dos Santos";

class PdfController {

    async gerar(req, response){

        var options = {
            format: "A4",
            type: "pdf",
            quality: 75,
            base: "file:///" + __dirname.replace(/\\/g, "/") + "/"
        };
        
        ejs.renderFile('./src/pdf/meupdf.ejs', {nome: nome}, (err, html) => {
            if(err){
                console.log("ERRO RENDER FILE");
            }else{
               // console.log(html);

                pdf.create(html, options).toFile("./src/pdf/meupdf2.pdf", (err, res) => {
                    if(err){
                        console.log("UM ERRO ACONTECEU");
                    }else{
                        console.log(res);
                        response.download('./src/pdf/meupdf2.pdf', 'meupdf2.pdf', function (err) {
                            if (err) {
                                console.log(err)
                            }
                        })
                    }
                })
            }
        });

    }

    

    
}

export default new PdfController();