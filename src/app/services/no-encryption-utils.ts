import { capSQLiteSet } from '@capacitor-community/sqlite';

export const databaseOne: string = "INSERT INTO artista VALUES(0,'Michelangelo','Uno degli artisti più famosi del rinascimento','/assets/instagram.png');"
export const databaseTwo: string  ="INSERT INTO artista VALUES(1,'Van Gogh','Vincent Willem van Gogh Fu autore di quasi novecento dipinti e di più di mille disegni',NULL);"
export const databaseThree: string  ="INSERT INTO artista VALUES(2,'Claude Monet','Pittore dell’ottocento è considerato il padre fondatore di uno dei maggiori movimenti artistici: l’impressionismo.',NULL);"

export const databaseOneRoom: string = "INSERT INTO stanza VALUES(0,'Stanza Del Rinascimento');"
export const databaseOneArt: string = "INSERT INTO opera VALUES(0,0,0,'La Pietà','1498–1499','La Pietà di San Pietro è una scultura in marmo realizzata da Michelangelo Buonarroti e conservata nella basilica di San Pietro in Vaticano.',NULL);"

export const databaseOneEntry: string = "INSERT INTO guestbookEntry VALUES(0,'Questa è la prima entry nel guestbook, Lorem Ipsum Sim cum facit adhoram mestat',NULL);"
export const databaseTwoEntry: string = "INSERT INTO guestbookEntry VALUES(1,'Questa è la seconda entry nel guestbook, Lorem Ipsum Sim cum facit adhoram mestat',NULL);"
export const databaseThreeEntry: string = "INSERT INTO guestbookEntry VALUES(2,'Questa è la terza entry nel guestbook, Lorem Ipsum Sim cum facit adhoram mestat',NULL);"
export const databaseFourEntry: string = "INSERT INTO guestbookEntry VALUES(3,'Questa è la quarta entry nel guestbook, Lorem Ipsum Sim cum facit adhoram mestat',NULL);"
export const databaseFiveEntry: string = "INSERT INTO guestbookEntry VALUES(4,'Questa è la quinta entry nel guestbook, Lorem Ipsum Sim cum facit adhoram mestat',NULL);"
export const databaseSixEntry: string = "INSERT INTO guestbookEntry VALUES(5,'Questa è la sesta entry nel guestbook, Lorem Ipsum Sim cum facit adhoram mestat',NULL);"
export const databaseSevenEntry: string = "INSERT INTO guestbookEntry VALUES(6,'Questa è la settima entry nel guestbook, Lorem Ipsum Sim cum facit adhoram mestat',NULL);"
export const databaseEightEntry: string = "INSERT INTO guestbookEntry VALUES(7,'Questa è la ottava entry nel guestbook, Lorem Ipsum Sim cum facit adhoram mestat',NULL);"



export const getAllArtist: string = "SELECT * FROM artista;"
export const getAllArt: string = "SELECT * FROM opera;"
export const getAllRooms: string= "SELECT * FROM stanza;"


export const getArtist: string = "SELECT * FROM artista WHERE idartista = ?;"
export const getArt: string = "SELECT * FROM opera WHERE idopera = ?;"
export const getEntries: string= "SELECT * FROM guestbookEntry WHERE idguestbookEntry BETWEEN ? AND ?"

