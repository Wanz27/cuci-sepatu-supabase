import { readFile, writeFile } from "fs/promises";

const FILE_PATH = "./src/items.json";

// 🔹 Membaca seluruh item, dengan filter optional
export const getAllItems = async (status = null) => {
  const data = await readFile(FILE_PATH, "utf-8");
  const items = JSON.parse(data);

  if (status) {
    // Filter status case-insensitive
    return items.filter(
      (item) => item.status.toLowerCase() === status.toLowerCase()
    );
  }

  return items;
};

export const addItem = async (item) => {
  const data = await getAllItems();
  const newItem = {
    id: data.length ? data[data.length - 1].id + 1 : 1,
    ...item,
  };
  data.push(newItem);
  await writeFile(FILE_PATH, JSON.stringify(data, null, 2));
  return newItem;
};

export const editItem = async (id, updates) => {
  const data = await getAllItems();
  const index = data.findIndex((i) => i.id === parseInt(id));

  if (index === -1) throw new Error("Item tidak ditemukan");

  data[index] = { ...data[index], ...updates };
  await writeFile(FILE_PATH, JSON.stringify(data, null, 2));
  return data[index];
};

export const removeItem = async (id) => {
  const data = await getAllItems();
  const newData = data.filter((i) => i.id !== parseInt(id));

  await writeFile(FILE_PATH, JSON.stringify(newData, null, 2));
  return { message: "Item berhasil dihapus" };
};
