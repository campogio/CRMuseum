import { capSQLiteSet } from '@capacitor-community/sqlite';

export const databaseOne: string = "INSERT INTO artista VALUES(0,'Michelangelo','Uno degli artisti più famosi del rinascimento','/assets/media/michelangelo.jpg');"
export const databaseTwo: string  ="INSERT INTO artista VALUES(1,'Van Gogh','Vincent Willem van Gogh Fu autore di quasi novecento dipinti e di più di mille disegni',NULL);"
export const databaseThree: string  ="INSERT INTO artista VALUES(2,'Claude Monet','Pittore dell’ottocento è considerato il padre fondatore di uno dei maggiori movimenti artistici: l’impressionismo.',NULL);"

export const databaseOneRoom: string = "INSERT INTO stanza VALUES(0,'Stanza Del Rinascimento');"
export const databaseTwoRoom: string = "INSERT INTO stanza VALUES(1,'Stanza Dell Impressionismo');"
export const databaseOneArt: string = "INSERT INTO opera VALUES(0,0,0,'La Pietà','1498–1499','La Pietà di San Pietro è una scultura in marmo realizzata da Michelangelo Buonarroti e conservata nella basilica di San Pietro in Vaticano.','/assets/media/pieta-01.jpg');"
export const databaseTwoArt: string = "INSERT INTO opera VALUES(1,0,0,'David','1501-1504 ','Il David è una scultura realizzata in marmo (altezza 520 cm incluso il basamento di 108 cm) da Michelangelo Buonarroti, databile tra il 1501 e l inizio del 1504 e conservata nella Galleria dell Accademia a Firenze. ','/assets/media/David1.jpg');"


export const databaseOneEntry: string = "INSERT INTO guestbookEntry VALUES(0,'Questa è la prima entry nel guestbook, Lorem Ipsum Sim cum facit adhoram mestat',NULL);"
export const databaseTwoEntry: string = "INSERT INTO guestbookEntry VALUES(1,'Questa è la seconda entry nel guestbook, Lorem Ipsum Sim cum facit adhoram mestat',NULL);"
export const databaseThreeEntry: string = "INSERT INTO guestbookEntry VALUES(2,'Questa è la terza entry nel guestbook, Lorem Ipsum Sim cum facit adhoram mestat',NULL);"
export const databaseFourEntry: string = "INSERT INTO guestbookEntry VALUES(3,'Questa è la quarta entry nel guestbook, Lorem Ipsum Sim cum facit adhoram mestat',NULL);"
export const databaseFiveEntry: string = "INSERT INTO guestbookEntry VALUES(4,'Questa è la quinta entry nel guestbook, Lorem Ipsum Sim cum facit adhoram mestat',NULL);"
export const databaseSixEntry: string = "INSERT INTO guestbookEntry VALUES(5,'Questa è la sesta entry nel guestbook, Lorem Ipsum Sim cum facit adhoram mestat','/assets/media/pieta-01.jpg');"
export const databaseSevenEntry: string = "INSERT INTO guestbookEntry VALUES(6,'Questa è la settima entry nel guestbook, Lorem Ipsum Sim cum facit adhoram mestat',NULL);"
export const databaseEightEntry: string = "INSERT INTO guestbookEntry VALUES(7,'Questa è la ottava entry nel guestbook, Lorem Ipsum Sim cum facit adhoram mestat',NULL);"

export const databaseMediaOne: string = "INSERT INTO media VALUES (0,'jpg','/assets/media/pieta-01.jpg')"
export const databaseMediaTwo: string = "INSERT INTO media VALUES (1,'jpg','/assets/media/pieta-02.jpg')"
export const databaseMediaThree: string = "INSERT INTO media VALUES (2,'jpg','/assets/media/pieta-03.jpg')"
export const databaseMediaArtistOne: string = "INSERT INTO media VALUES (3,'jpg','/assets/media/michelangelo.jpg')"
export const databaseMediaFour: string = "INSERT INTO media VALUES (4,'jpg','/assets/media/David1.jpg')"



export const databaseArtMediaOne: string = "INSERT INTO opera_has_media VALUES(0,0)"
export const databaseArtMediaTwo: string = "INSERT INTO opera_has_media VALUES(0,1)"
export const databaseArtMediaThree: string = "INSERT INTO opera_has_media VALUES(0,2)"
export const databaseArtMediaFour: string = "INSERT INTO opera_has_media VALUES(1,4)"
export const databaseArtistMediaOne: string = "INSERT INTO artista_has_media VALUES(0,3)"



export const getArtistMediaIds: string = "SELECT * FROM artista_has_media WHERE artista_idartista = ?;"
export const getArtMediaIds: string = "SELECT * FROM opera_has_media WHERE opera_idopera = ?;"
export const getMediaById: string = "SELECT * FROM media WHERE idmedia = ?"


export const getAllArtist: string = "SELECT * FROM artista;"
export const getAllArt: string = "SELECT * FROM opera;"
export const getAllRooms: string= "SELECT * FROM stanza;"


export const getArtist: string = "SELECT * FROM artista WHERE idartista = ?;"
export const getArt: string = "SELECT * FROM opera WHERE idopera = ?;"
export const getEntries: string= "SELECT * FROM guestbookEntry WHERE idguestbookEntry BETWEEN ? AND ?"
export const getRoom: string= "SELECT * FROM stanza WHERE idstanza = ?"

export const newGuestbookEntry: string = "INSERT INTO guestbookEntry(testo,foto) VALUES(?,NULL)"
export const newGuestbookEntryMedia: string = "INSERT INTO guestbookEntry(testo,foto) VALUES(?,?)"


