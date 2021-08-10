/*
  Declaration files are how the Typescript compiler knows about the type information(or shape) of an object.
  They're what make intellisense work and make Typescript know all about your code.
  A wildcard module is declared below to allow third party libraries to be used in an app even if they don't
  provide their own type declarations.
*/
declare module '*.html'
declare module '*.scss'
declare module '*.jpg'
declare module '*.png'
declare module '*.wav'
declare module '*.svg'
declare module '*.json'
declare module 'angular'
declare module 'moment'
declare var require: {
  <T>(path: string): T
  (paths: string[], callback: (...modules: any[]) => void): void
  ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void
}