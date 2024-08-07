
import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
    constructor() { }

    public characters: Character[] = [
        {
            id: uuid(),
            name: 'Krillin',
            power: 1000
        },
        {
            id: uuid(),
            name: 'Goku',
            power: 20000
        }
    ];

    onNewCharacter(character: Character): void {
        const newCharacter: Character = {
            id: uuid(), ...character
        }
        console.log(newCharacter);
        this.characters.push(newCharacter);
    }

    // onDeleteCharacter(index: number): void {
    //     console.log('index main');
    //     console.log(index);
    //     this.characters.splice(index, 1);
    // }

    deleteCharacterById(id: string) {
        this.characters = this.characters.filter(character => character.id !== id);
    }
}