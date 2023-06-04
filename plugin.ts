import { IApi } from 'alita';

export default (api: IApi) => {
  api.onDevCompileDone((opts) => {
    // console.log('> onDevCompileDone', opts.isFirstCompile);
  });
  api.onBuildComplete((opts) => {
    // console.log('> onBuildComplete', opts.isFirstCompile);
  });


  const { REACT_APP_ENV } = process.env;

  const configDefaults: Record<string, any> = {
    define: {
      ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: '',
      REACT_APP_ENV: REACT_APP_ENV || false,
    },
    ...api.userConfig,
  };

  api.modifyConfig((memo: any) => {
    Object.keys(configDefaults).forEach((key) => {
      memo[key] = configDefaults[key];
    });
    return memo;
  });

};
