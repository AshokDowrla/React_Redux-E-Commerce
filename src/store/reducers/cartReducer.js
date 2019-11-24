const initialState={
    cart:[],
    modalOpen:{
        
        show:false,
        img:'',
        name:'',
        price:'',
               
    },
    subtotal:0
    
}

const cartReducer=(state=initialState,action)=>{

    switch(action.type){

        case 'CLEAR CART':
            return{
                ...state,
                cart:[],
                modalOpen:state.modalOpen,
                subtotal:0
            }
        case 'ADD TO CART':
             const addProduct ={
                 id:action.payload.id,
                 name:action.payload.name,
                 img:action.payload.img,
                 price:action.payload.price,
                 count:1,
                 totalprice:action.payload.price,
                 
                 
                 
             }

            

            return {

                ...state.cart,
                cart:state.cart.concat(addProduct),
                modalOpen:state.modalOpen,
                subtotal:state.subtotal+action.payload.price
                
            }

        case 'INCREMENT':
            let Inc;
           const newCart= state.cart.map((x) =>{

                if(x.id===action.payload){
                       Inc=x.price
                    //console.log(x.count)
                    return{
                        ...x,
                        count:x.count+1,
                        totalprice:x.totalprice + x.price

                    }
                }

                return x
            })



           // console.log(newCart)
           return{
               ...state.cart,
               cart:newCart,
               modalOpen:state.modalOpen,
               subtotal:state.subtotal+Inc
           }


        case 'DECREMENT':

        let Dec;
            const newdCart= state.cart.map((x) =>{
          
                if(x.id===action.payload){
                    //console.log(x.count)
                    Dec=x.price
                    return{
                         ...x,
                         count:x.count-1,
                          totalprice:x.totalprice - x.price
     
                     }
                     }
     
                 return x
                 })
     
     
     
                // console.log(newCart)
             return{
                 ...state.cart,
                 cart:newdCart,
                 modalOpen:state.modalOpen,
                 subtotal:state.subtotal-Dec
             }                    
        
        
        case 'OPEN MODAL':
              const modal={
                  show:true,
                  img:action.payload.img,
                  name:action.payload.name,
                  price:action.payload.price,
              }
        return{
            ...state,
            modalOpen:modal,
            cart:state.cart,
            subtotal:state.subtotal
        }

        case 'CLOSE MODAL':
            const clModal={
        
                show:false,
                img:'',
                name:'',
                price:'',
                       
            }

            return{
                ...state,
                 modalOpen:clModal,
                 cart:state.cart,
                 subtotal:state.subtotal
            }
            
        case 'DELETE':
           const updateCart= state.cart.filter((x) =>

                 x.id !== action.payload
                 
            )


            let sub=0
            state.cart.map((x)=>{
                if(x.id!==action.payload){

                    
                   sub=sub+x.totalprice
                  
                }

                return 0;
            })

            return{
                ...state,
                cart:updateCart,
                modalOpen:state.modalOpen,
                subtotal:sub
            }



        default:
            return state
    }

   
}

export default cartReducer