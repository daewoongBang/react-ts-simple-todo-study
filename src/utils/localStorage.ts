export const loadJsonFromLocalStorage = <T>(key: string): T | null => {
  try {
    const data = localStorage.getItem(key);

    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.warn(`Failed to load from localStorage with key: ${key}`, error);
    return null;
  }
};

export const saveJsonToLocalStorage = <T>(key: string, data: T) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.warn(`Failed to save to localStorage with key: ${key}`, error);
  }
};
