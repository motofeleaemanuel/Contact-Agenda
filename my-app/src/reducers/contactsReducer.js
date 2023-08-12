import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contact: [],
};

export const contactSlice = createSlice({
  name: "Contacts",
  initialState,
  reducers: {
    fetchContacts: (state, action) => {
      state.contact = action.payload;
    },
    deleteContact: (state, action) => {
      const contactId = action.payload;
      state.contact = state.contact.filter(
        (contact) => contact._id !== contactId
      );
    },
    addContact: (state, action) => {
      state.contact.push(action.payload);
    },
    updateContact: (state, action) => {
      const { id, updatedValues } = action.payload;

      // Find the index of the contact with the provided id
      const contactIndex = state.contact.findIndex(
        (contact) => contact._id === id
      );

      if (contactIndex !== -1) {
        // Update the contact with the provided updatedValues
        state.contact[contactIndex] = {
          ...state.contact[contactIndex],
          ...updatedValues,
        };
      }
    },
    getContactById: (state, action) => {
      const { contactData } = action.payload;
      state.selectedContact = contactData;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  fetchContacts,
  deleteContact,
  addContact,
  updateContact,
  getContactById,
} = contactSlice.actions;

export default contactSlice.reducer;
