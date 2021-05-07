import { Time } from "@angular/common";

export interface SeanceInterface {
    id: number;
    nom_Seance: String;
    debutSeance: Time;
    finSeance: Time;
    duree: any;
}