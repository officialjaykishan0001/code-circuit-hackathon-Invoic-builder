import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        clientData: {
            name: "Client Name",
            email: "client@example.com",
            address: "Client Address",
            issueDate: "05/17/2025",
            dueDate: "06/06/2025",
            invoiceNumber: "INV - 49554"
        },
        itemsData: [
            {
                description: "Item description",
                quantity: "1",
                price: "0.00"
            }
        ],
        summaryData: {
            taxRate: "0.00",
            discount: "0.00"
        },
        subtotal: 0
    },
    reducers: {
        updateClientData: (state, action) => {
            state.clientData = { ...state.clientData, ...action.payload };
        },
        addItemData: (state) => {
            state.itemsData.push({ description: "", quantity: "1", price: "0.00" });
        },
        updateItemData: (state, action) => {
            const { index, key, value } = action.payload;
            state.itemsData[index][key] = value;
        },
        removeItemData: (state, action) => {
            state.itemsData.splice(action.payload, 1);
        },
        updateSummaryData: (state, action) => {
            state.summaryData = { ...state.summaryData, ...action.payload };
        },
        updateSubtotal: (state, action) => {
            state.subtotal = action.payload
        },
        resetAllData: (state) => {
            state.clientData = {
                name: "Client Name",
                email: "client@example.com",
                address: "Client Address",
                issueDate: "05/17/2025",
                dueDate: "06/06/2025",
                invoiceNumber: "INV - 49554"
            };
            state.itemsData = [
                {
                    description: "",
                    quantity: "1",
                    price: "0.00"
                }
            ];
            state.summaryData = {
                taxRate: "0.00",
                discount: "0.00"
            };
        }
    }
});

export const {
    updateClientData,
    addItemData,
    updateItemData,
    removeItemData,
    updateSummaryData,
    updateSubtotal,
    resetAllData
} = dataSlice.actions;

export default dataSlice.reducer;
