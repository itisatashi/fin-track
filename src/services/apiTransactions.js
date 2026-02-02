import supabase from "./supabase";

export async function getCategories() {
  const { data, error } = await supabase.from("categories").select("*");

  if (error) {
    console.error(error);
    throw new Error("Categories could not be loaded");
  }

  return data;
}

export async function getTransactions({ filterType, filterCategory, sortBy }) {
  let query = supabase.from("transactions").select("*");

  // Filter by type (income/expense)
  if (filterType && filterType !== "all") {
    query = query.eq("type", filterType);
  }

  // Filter by category
  if (filterCategory && filterCategory !== "all") {
    query = query.eq("category", filterCategory);
  }

  // Sort
  if (sortBy === "date-desc") {
    query = query.order("date", { ascending: false });
  } else if (sortBy === "date-asc") {
    query = query.order("date", { ascending: true });
  } else if (sortBy === "amount-desc") {
    query = query.order("amount", { ascending: false });
  } else if (sortBy === "amount-asc") {
    query = query.order("amount", { ascending: true });
  } else {
    query = query.order("date", { ascending: false });
  }

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Transactions could not be loaded");
  }

  return data;
}

export async function createTransaction(newTransaction) {
  const { data, error } = await supabase
    .from("transactions")
    .insert([newTransaction])
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Transaction could not be created");
  }

  return data;
}

export async function deleteTransaction(id) {
  const { error } = await supabase.from("transactions").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Transaction could not be deleted");
  }
}

export async function updateTransaction({ id, ...updateData }) {
  const { data, error } = await supabase
    .from("transactions")
    .update(updateData)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Transaction could not be updated");
  }

  return data;
}
