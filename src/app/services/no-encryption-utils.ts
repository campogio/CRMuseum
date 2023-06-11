import { capSQLiteSet } from '@capacitor-community/sqlite';

export const databaseOne: string = "INSERT INTO artista VALUES(0,'Michelangelo','Uno degli artisti più famosi del rinascimento');"
export const databaseTwo: string  ="INSERT INTO artista VALUES(1,'Van Gogh','Vincent Willem van Gogh Fu autore di quasi novecento dipinti e di più di mille disegni');"
export const databaseThree: string  ="INSERT INTO artista VALUES(2,'Claude Monet','Pittore dell’ottocento è considerato il padre fondatore di uno dei maggiori movimenti artistici: l’impressionismo.');"

export const getArtist: string = "SELECT * FROM artista WHERE idartista = ?;"
export const getArt: string = "SELECT * FROM opera WHERE idopera = ?;"

