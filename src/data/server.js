let currentOffset = 0;
export let limit = 20;

export function updateCurrentOffset(nextOffset) {
  currentOffset = nextOffset;
}

export const baseUrl = "https://api.coincap.io/v2";

export async function getAssetsList() {
  let assetsUrl = `${baseUrl}/assets?offset=${currentOffset}&limit=${limit}`;

  let response = await fetch(assetsUrl);
  let body = await response.json();

  return body.data;
}

export async function getAsset(id) {
  const response = await fetch(`${baseUrl}/assets/${id}`);
  const data = await response.json();

  return data;
}

export async function getExchangesList() {
  const response = await fetch(`${baseUrl}/exchanges`);
  const body = await response.json();

  return body.data;
}

export async function getMarketsList() {
  const response = await fetch(`${baseUrl}/markets?limit=2000`);
  const body = await response.json();

  return body.data;
}
