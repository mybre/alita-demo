import {
  ProConfigProvider,
  ProLayout,
} from '@ant-design/pro-components';
import {
  ConfigProvider,
} from 'antd';
import routes from '@/routes';
import { Link, useKeepOutlets, useLocation } from 'alita';


export default () => {
  const MenuItem: ProLayoutProps['menuItemRender'] = (
    menuItemProps: MenuDataItem,
    defaultDom: ReactNode,
  ) => {
    if (!menuItemProps?.path) {
      return defaultDom;
    }

    return <Link to={menuItemProps.path}>{defaultDom}</Link>;
  };
  const element = useKeepOutlets();

  const { pathname } = useLocation();
  if (typeof document === 'undefined') {
    return <div />;
  }
  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <ProConfigProvider hashed={false}>
        <ConfigProvider
          getTargetContainer={() => {
            return document.getElementById('test-pro-layout') || document.body;
          }}
        >
          <ProLayout
            prefixCls="my-prefix"
            bgLayoutImgList={[
              {
                src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
                left: 85,
                bottom: 100,
                height: '303px',
              },
              {
                src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
                bottom: -68,
                right: -45,
                height: '303px',
              },
              {
                src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
                bottom: 0,
                left: 0,
                width: '331px',
              },
            ]}
            location={{
              pathname,
            }}
            route={{
              path: '/',
              routes,
            }}
            menuItemRender={MenuItem}
            onMenuHeaderClick={(e) => console.log(e)}
          >
            {element}
          </ProLayout>
        </ConfigProvider>
      </ProConfigProvider>
    </div>
  );
};
