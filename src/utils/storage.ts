import AsyncStorage from '@react-native-async-storage/async-storage';

export async function setKey(key: string, value: string): Promise<void> {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error('Error al guardar la key en AsyncStorage:', error);
  }
}

// Leer datos de AsyncStorage
export async function getKey(key: string): Promise<string | null> {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    console.error('Error al obtener la key desde AsyncStorage:', error);
    return null;
  }
}

// Eliminar datos de AsyncStorage
export async function deleteKey(key: string): Promise<void> {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error al eliminar la key desde AsyncStorage:', error);
  }
}
