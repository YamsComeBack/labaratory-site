declare module 'react-liquid-glass' {
  import { ReactNode } from 'react';

  interface LiquidGlassProps {
    children?: ReactNode;
    blur?: number;
    opacity?: number;
    [key: string]: any;
  }

  const LiquidGlass: React.FC<LiquidGlassProps>;
  export default LiquidGlass;
}
