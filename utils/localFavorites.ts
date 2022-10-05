
export const getFavorites = (): number[] => {
    return JSON.parse(localStorage.getItem("favorites") || "[]");
  };
  
export const toggleFavorites = (id: number): void => {
  let localFavorites: number[] = getFavorites();
  if (localFavorites.includes(id)) {
    localFavorites = localFavorites.filter((item) => item !== id);
  } else {
    localFavorites.push(id);
  }
  localStorage.setItem("favorites", JSON.stringify(localFavorites));
};

export const isFavorite = (id: number): boolean => {
  return getFavorites().includes(id);
};


