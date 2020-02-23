import { Specialties } from "../models/specialties";

export interface Vet {
    id: number;
    firstName: string;
    lastName: string;
    specialties: Specialties[];
}
