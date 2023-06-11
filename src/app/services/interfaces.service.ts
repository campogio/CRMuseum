

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
  roomId: number;
  description: string;
  hasPic: boolean;
}

export interface searchResults {

  data: searchResult[];
}

export interface dataProvider {

  getItem(id:number): fullItem;

  getSearchResult(id: number): searchResult;

  getSearchResults(search: string): searchResults;

}
