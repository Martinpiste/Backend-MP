const {promises: fs} = require('fs')

class contenedor{
    constructor(ruta){
        this.ruta=ruta
    }

    async save(producto){
        let data
        try{
            data = await fs.readFile(this.ruta,'utf-8')
            .then(data => {
               // console.log(data)
                let id=0
                let dataObj=[]
                
                if(data.length == 0){
                    //console.log('if',data)
                    data=[]
                    id=1
                }else{
                    //console.log('else ',data)
                    dataObj=JSON.parse(data)
                    id=dataObj[dataObj.length-1].id+1;
                }
                const newObj={id:id, ...producto}
                dataObj.push(newObj)
                //console.log("si se hizo el push")
               
                fs.writeFile(this.ruta,JSON.stringify(dataObj,null,2) )
                

            }).catch( err => {
                console.log('\nError en la lectura \n ', err)
            }) 

        }catch(err){
            console.log(err);
        }
           
    }

    async getAll(){
        try{
            let dataAll = await fs.readFile(this.ruta,'utf-8')
            .then(contenido => {
                let infoAll=JSON.parse(contenido)
                console.log('Este es todo el contenido ',contenido,'\n')
                return infoAll

            })      
            

        }catch(err){ 
            return []
        }
    }


    async getById(num){
        try{
            let item = await fs.readFile(this.ruta,'utf-8')
            .then(data =>{
                let dataId = JSON.parse(data)
               // console.log('Este es todo el dataId',data)
                let resultado = dataId.find((el)=> el.id === num)
                console.log('\n','Id Solicitado',resultado,'\n')
            })
            .then(objId => objId);
            return item
        }
        catch(err){
            console.log('Error en la lectura', err)
            }

    }

    async deleteById(num){
        try{
            let item = await fs.readFile(this.ruta,'utf-8')
            .then(data =>{
                let dataId = JSON.parse(data)
                console.log('dataId a eliminar',dataId)
                let resultDelete=dataId.filter((el)=> el.id != num)
                fs.writeFile(this.ruta,JSON.stringify(resultDelete,null,2) )
                
            })      
        }catch(err){
            console.log(' \nError en al borrar el elemento \n\n', err)
        }

    }

    /*
    async deleteAll(){
        try{
            let item = await fs.readFile(this.ruta,'utf-8')
            .then(data =>{
                let dataId = JSON.parse(data)
                dataId=[]
                console.log(dataId)
                fs.writeFile(this.ruta,JSON.stringify( dataId,null,2) )
                console.log(data)
            })      
        }catch(err){
            console.log(' \nError en al borrar el elemento \n\n', err)
        }

    }
    */

    async deleteAll(){
        try{
            let item = await fs.readFile(this.ruta,'utf-8')
            .then(data =>{

                let dataId = JSON.parse(data)
                let newData=dataId.splice(dataId.length+1,dataId.length) 
                fs.writeFile(this.ruta,JSON.stringify( newData,null,2) )
            })      
        }catch(err){
            console.log(' \nError en al borrar el elemento \n\n', err)
        }

    }
    

       


}

const contenedor1= new contenedor('./productos.txt')


contenedor1.save({nombre:'limon',thumbnail:'./dir',precio:'18'})
contenedor1.save({nombre:'melon',thumbnail:'./dir',precio:'18'})
contenedor1.save({nombre:'sandia',thumbnail:'./dir',precio:'18'})
contenedor1.save({nombre:'manzana',thumbnail:'./dir',precio:'18'})
contenedor1.getById()
contenedor1.getAll()
contenedor1.deleteById(1)
contenedor1.deleteAll()

