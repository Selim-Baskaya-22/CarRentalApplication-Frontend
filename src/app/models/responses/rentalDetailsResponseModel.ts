import { RentalDetails } from "../entities/rentalDetails";
import { ResponseModel } from "./responseModel";

export interface RentalDetailResponseModel extends ResponseModel{
    data:RentalDetails[]
}