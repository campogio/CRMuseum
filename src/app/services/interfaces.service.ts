

export interface searchResult {
  id: number;
  name: string;
  isArtist: number;
  roomId: number;
  description: string;
  thumbnailPath: string;
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
