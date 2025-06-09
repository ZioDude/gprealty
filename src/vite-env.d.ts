/// <reference types="vite/client" />

// CSS modules support
declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}

// For regular CSS imports as side effects
declare module "*.css" {
  const content: string;
  export default content;
} 