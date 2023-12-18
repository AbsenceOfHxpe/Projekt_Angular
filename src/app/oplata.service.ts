import { Injectable } from '@angular/core';

@Injectable()
export class OplataService {
    getOplataStandardowa(dataWynajmu: Date, cena: number) : number {
        return  (new Date().getTime() - new Date(dataWynajmu).getTime()) / (3600 * 1000) * cena;
    }

    getDoplataZaWczesniejszyZwrot(dataWynajmu: Date, cena: number, liczbaGodzin: number) : number {
        let hoursBorrowed = (new Date().getTime() - new Date(dataWynajmu).getTime()) / (3600 * 1000);
        return (liczbaGodzin-hoursBorrowed)*(cena/2)
    }
    
    getKara(dataWynajmu: Date, cena: number, liczbaGodzin: number) : number {
        let hoursBorrowed = (new Date().getTime() - new Date(dataWynajmu).getTime()) / (3600 * 1000);
        if (hoursBorrowed < liczbaGodzin) return -1;
        return (hoursBorrowed-liczbaGodzin)*cena*2;
    }

    getDoZaplaty(dataWynajmu: Date, cena: number, liczbaGodzin: number) : number {
        let hoursBorrowed = (new Date().getTime() - new Date(dataWynajmu).getTime()) / (3600 * 1000);
        if (hoursBorrowed >= liczbaGodzin) return (hoursBorrowed * cena)+((hoursBorrowed-liczbaGodzin)*cena*2);
        return (hoursBorrowed * cena)+((liczbaGodzin-hoursBorrowed)*(cena/2));
    }
}