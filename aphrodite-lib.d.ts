import { DefineComponent, Plugin } from 'vue';


declare const AphroditeLib: Exclude<Plugin['install'], undefined>;
export default AphroditeLib;

export const AphroditeLibSample: DefineComponent<{}, {}, any>;
