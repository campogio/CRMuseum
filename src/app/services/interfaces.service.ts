

export interface searchResult {
  id: number;
  name: string;
  isArtist: boolean;
  roomId: number;
  description: string;
  hasPic: boolean;
}

export interface fullItem{
  id: number;
  name: string;
  roomId: number;
  artistId: number;
  description: string;
  hasMedia: boolean;
}

export interface guestEntry{
  id: number;
  description: string;
  hasMedia: boolean;
}

export interface dataProvider {

  getItem(isArtist: boolean,id:number): fullItem;

}
