

export interface searchResult {
  id: number;
  name: string;
  isArtist: number;
  roomId: number;
  description: string;
  thumbnailPath: string;
}

export interface room{
  id:number,
  name: string
}

export interface fullItem{
  id: number;
  name: string;
  roomId: number;
  roomName: string;
  artistId: number;
  description: string;
  hasMedia: boolean;
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}

export interface media{
  id:number;
  path: string;
}

export interface guestEntry{
  id: number;
  description: string;
  hasMedia: boolean;
  mediaPath: string;
}

export interface dataProvider {

  getFullItem(isArtist: number,id:number): Promise<fullItem>;
  getEntries(startIndex:number): Promise<guestEntry[]>;
  getMediaForItem(isArtist:number,id:number): Promise<media[]>;
  newComment(entry: guestEntry);


}
