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
  id: string;
  name: string;
}

export interface ISearchAlbum extends ISearchItem {
  album_type: string;
  release_date: string;
  total_tracks: number;
  images: IImageInfo[];
  artists: IArtistInfo[];
}

export interface ISearchArtists extends ISearchItem {
  genres: string[];
  images: IImageInfo[];
}

export interface ISearchTracks extends ISearchItem {
  href: string;
  artists: IArtistInfo[];
  images: IImageInfo | undefined;
}

export interface IArtistInfo {
  name: string;
}
interface IImageInfo {
  url: string;
}
