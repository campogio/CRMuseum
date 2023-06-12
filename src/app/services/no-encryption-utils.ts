import { capSQLiteSet } from '@capacitor-community/sqlite';

export const databaseOne: string = "INSERT INTO artista VALUES(0,'Michelangelo','Uno degli artisti più famosi del rinascimento','/assets/instagram.png');"
export const databaseTwo: string  ="INSERT INTO artista VALUES(1,'Van Gogh','Vincent Willem van Gogh Fu autore di quasi novecento dipinti e di più di mille disegni',NULL);"
export const databaseThree: string  ="INSERT INTO artista VALUES(2,'Claude Monet','Pittore dell’ottocento è considerato il padre fondatore di uno dei maggiori movimenti artistici: l’impressionismo.',NULL);"

export const databaseOneRoom: string = "INSERT INTO stanza VALUES(0,'Stanza Del Rinascimento');"
export const databaseOneArt: string = "INSERT INTO opera VALUES(0,0,0,'La Pietà','1498–1499','La Pietà di San Pietro è una scultura in marmo realizzata da Michelangelo Buonarroti e conservata nella basilica di San Pietro in Vaticano.',NULL);"


export const getAllArtist: string = "SELECT * FROM artista;"
export const getAllArt: string = "SELECT * FROM opera;"


export const getArtist: string = "SELECT * FROM artista WHERE idartista = ?;"
export const getArt: string = "SELECT * FROM opera WHERE idopera = ?;"

