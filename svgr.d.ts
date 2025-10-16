// svgr.d.ts
declare module "*.svg" {
  import React from "react";
  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default content;
}

// mp4.d.ts
declare module "*.mp4" {
  const src: string;
  export default src;
}