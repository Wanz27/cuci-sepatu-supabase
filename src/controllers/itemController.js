import { getAllItems, addItem, editItem, removeItem } from "../models/itemModel.js";

export const getItems = async (req, res) => {
  try {
    const { status } = req.query; // ← ambil query dari URL
    const items = await getAllItems(status);
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createItem = async (req, res) => {
  try {
    const newItem = await addItem(req.body);
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateItem = async (req, res) => {
  try {
    const updated = await editItem(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteItem = async (req, res) => {
  try {
    const result = await removeItem(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
