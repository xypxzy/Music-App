import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CurrentTracksProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
{
}

export interface ICurrentPlaying {
  id: string;
  name: string;
  artists: IArtists[];
  album: IAlbum;
}

interface IArtists {
  name: string;
}

interface IAlbum {
  images: IImage[];
}

interface IImage {
  url: string;
}
