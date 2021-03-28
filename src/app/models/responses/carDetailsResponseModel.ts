import { CarDetails } from "../entities/carDetails";
import { ResponseModel } from "./responseModel";

export interface CarDetailsResponseModel extends ResponseModel{
    data:CarDetails[]
}