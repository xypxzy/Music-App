import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SearchProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
{
}

export interface ISearchInfo {
  items: ISearchAlbum[] | ISearchArtists[] | ISearchTracks[];
}

interface ISearchItem {
  type: string;
  images: IImageInfo[];
  id: string;
  name: string;
}

export interface ISearchAlbum extends ISearchItem {
  album_type: string;
  release_date: string;
  total_tracks: number;

  artists: IArtistInfo[];
}

export interface ISearchArtists extends ISearchItem {
  genres: string[];
}

export interface ISearchTracks extends ISearchItem {
  explicit: boolean;
  artists: IArtistInfo[];
}

export interface IArtistInfo {
  name: string;
}
interface IImageInfo {
  url: string;
}
