

export interface searchResult {
  id: number;
  roomId: number;
  description: string;
  hasPic: boolean;
  location: string;
}

export interface fullItem{
  id: number;
  roomId: number;
  description: string;
  hasPic: boolean;
  location: string;
}

export interface searchResults {

  data: searchResult[];
}

export interface dataProvider {

  getItem(id:number): fullItem;

  getSearchResult(id: number): searchResult;

  getSearchResults(search: string): searchResults;

}
