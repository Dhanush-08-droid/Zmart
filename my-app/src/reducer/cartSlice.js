import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice(
    {
        name:'cart',
        initialState:{
            items:[]
        },
        reducers:{
            itemsAdded:(state,action)=>{
                const addedItem=state.items.find((x)=>x.id===action.payload.id);
                if(addedItem)
                    {
                        addedItem.quantity+=1
                    }
                else
                {
                    state.items.push({...action.payload,quantity:1})
                }
                },
                itemDeleted:(state,action)=>{
                    state.items=state.item.filter((x)=>x.id1==action.payload)
                
            }
        }
    }
)
export const {itemsAdded}=cartSlice.actions
export default cartSlice.reducer