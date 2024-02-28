import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";
export const FetchContacts = createAsyncThunk(
  "contacts/fetch",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  "contacts/delete",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addContact = createAsyncThunk(
  "contacts/add",
  async (contact, thunkAPI) => {
    try {
      const { name, number } = contact.values;
      const contacts = contact.contacts;

      const match = contacts.filter(
        (item) => item.name === name && item.phone === number
      );
      if (match.length > 0) {
        return thunkAPI.rejectWithValue("Contact already exists");
      }
      const response = await axios.post(`/contacts/`, {
        name: name,
        number: number,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const changeContact = createAsyncThunk(
  "contacts/change",
  async (contact, thunkAPI) => {
    try {
      console.log(contact.values);
      const { name, phone } = contact.values;
      // const contacts = contact.contacts;
      // console.log(contact.contacts);

      const response = await axios.put(`/contacts/${contact.id}`, {
        name: name,
        phone: phone,
      });
      console.log("response", response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
