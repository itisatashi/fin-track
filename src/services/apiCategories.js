import supabase from "./supabase";

export async function getCategories() {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .order("name");

  if (error) {
    console.error(error);
    throw new Error("Categories could not be loaded");
  }

  return data;
}

export async function createCategory(newCategory) {
  const { data, error } = await supabase
    .from("categories")
    .insert([newCategory])
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Category could not be created");
  }

  return data;
}

export async function deleteCategory(id) {
  const { error } = await supabase.from("categories").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Category could not be deleted");
  }
}
