import { Injectable } from '@angular/core';
import { SQLiteObject,SQLite} from "@awesome-cordova-plugins/sqlite/ngx";
import {createSchema} from "./no-encryption-utils";


@Injectable({
  providedIn: 'root'
})
export class SqliteService {

  db: SQLiteObject;


  constructor(private sqlite: SQLite) {

    try {
      this.sqlite.create({
        name: 'mydb',
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.db= db;
        try {
          this.db.executeSql("CREATE TABLE IF NOT EXISTS artista(`idartista` INT NOT NULL,`nome` VARCHAR(45) NULL,`descrizione` TEXT(1000) NULL,PRIMARY KEY (`idartista`))", [])
            .then(() => console.log("EXECUTED SQL"));
        }catch (err:any){
          alert(err)
        }

      }).catch(e => console.log(JSON.stringify(e)));


    }catch (err:any){
      alert(err)
    }

  }

  test(){

    this.db.executeSql('SELECT * FROM artista',[]).then((result)=>{ alert(result.rows.length + ' Lines found') });

  }


}
