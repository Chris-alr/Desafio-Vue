const vue = new Vue({


    el:'#app',
    data: {

        titulo: 'Productos',
        item:[],
        nuevoItem:'',
        descripcion:'',
        precio:''
    },
    methods:{

 
        

        editarItem:function(index){
            if(this.nuevoItem.length>3&&this.descripcion.length>3&&this.precio.length>3){
                this.item[index].nombre=this.nuevoItem;
                this.item[index].desc=this.descripcion;
                this.item[index].precio=this.precio;

                this.nuevoItem="";
                this.descripcion="";
                this.precio="";
               
               


            }
            else{
                alert("Ingrese todos los campos para modificar (Min 3 caracteres por campo)");
            }
            
           

           
        },
        eliminarItem:function(index){
            this.item.splice(index,1);
         
            
        },
        agregarItem:function(){
            if(this.nuevoItem.length>3&&this.descripcion.length>3&&this.precio.length>3){
                this.item.push({
                    
                    nombre: this.nuevoItem,
                    desc:this.descripcion,
                    precio:this.precio

                 
                });
  
                
            }
            else{
                alert("Ingrese todos los campos correctamente (Min 3 caracteres por campo)");
            }

      
            this.nuevoItem="";
            this.descripcion="";
            this.precio="";
           

        }
    },




});