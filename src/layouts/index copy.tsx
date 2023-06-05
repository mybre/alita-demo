import routes from '@/routes';
import type { MenuDataItem, ProLayoutProps } from '@ant-design/pro-components';
import { ProLayout } from '@ant-design/pro-components';
import { Link, useKeepOutlets, useLocation, history } from 'alita';
import type { ReactNode } from 'react';
import { FC } from 'react';
import Settings from 'config/defaultSettings';

const MenuItem: ProLayoutProps['menuItemRender'] = (
  menuItemProps: MenuDataItem,
  defaultDom: ReactNode,
) => {
  if (!menuItemProps?.path) {
    return defaultDom;
  }

  return <Link to={menuItemProps.path}>{defaultDom}</Link>;
};

const App: FC = () => {
  const { pathname } = useLocation();
  const element = useKeepOutlets();
  console.log(pathname, 'pathname');
  return (
    <ProLayout
      location={{
        pathname,
      }}
      route={{
        path: '/',
        routes,
      }}
      menuItemRender={MenuItem}
      contentStyle={{
        padding: '20px'
      }}
      onPageChange={() => {
        const { location } = history;
        console.log(location, 'location')
      }}
    >
      <div>1</div>
      {element}
    </ProLayout>
  );
};

export default App;
