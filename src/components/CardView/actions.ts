import { fetchGetCarData } from "../../apis/getCars";
import { CarModel } from "./props";

export const loadCarData = async (
  id: number,
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
  try {
    const response = await fetchGetCarData(id);
    if (response) setCarData(response);
  } catch (error) {
    console.log("Erro ao buscar da api:", error);
    setCarData(null);
  }
};

export const handlePreviousItem = async (
  carData: CarModel | null,
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
  try {
    let response = null;

    if (carData && carData?.id > 1) {
      response = await loadCarData(carData.id - 1, setCarData);
    }

    if (response) setCarData(response);
  } catch (error) {
    console.log("Erro ao buscar da api:", error);
    setCarData(null);
  }
};

export const handleNextItem = async (
  carData: CarModel | null,
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
  try {
    let response = null;

    if (carData && carData?.id < 10) {
      response = await loadCarData(carData.id + 1, setCarData);
    }

    if (response) setCarData(response);
  } catch (error) {
    console.log("Erro ao buscar da api:", error);
    setCarData(null);
  }
};
