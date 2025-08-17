export async function fetchPlantas() {
  const res = await fetch("https://perenual.com/api/species-list?key=Ysk-7Kzw68a20821b7dce11880&filter=plant");
  const data = await res.json();
  return data.data; 
}

export async function fetchFlores() {
  const res = await fetch("https://perenual.com/api/species-list?key=Ysk-7Kzw68a20821b7dce11880&filter=flower");
  const data = await res.json();
  return data.data;
}
