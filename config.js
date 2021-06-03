import * as __SNOWPACK_ENV__ from './_snowpack/env.js';

export const sha = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_GIT_SHA || "arandomsha";
export const title = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_TITLE || "NK React Datepicker";
export const basename = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_URL;
const ghUrl = "https://github.com/nataliekapitonova/nk_datepicker";
export const github = {sha: `${ghUrl}/commit/${sha}`, url: ghUrl};
