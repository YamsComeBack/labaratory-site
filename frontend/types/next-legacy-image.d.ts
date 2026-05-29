declare module 'next/legacy/image' {
  import { ComponentType } from 'react';
  import { ImageProps } from 'next/image';

  const Image: ComponentType<ImageProps>;
  export default Image;
}
