import { history } from 'alita';
import { Button } from 'antd';
import { PageContainer } from '@ant-design/pro-components';

export default () => (
  <PageContainer header={{ title: '' }}
    footer={[
      <Button key="rest">重置</Button>,
      <Button key="submit" type="primary">
        提交
      </Button>,
    ]}>
    <Button
      type={'link'}
      onClick={() => {
        history.push('/users');
      }}
    >
      Hello Alita
    </Button>
  </PageContainer>

);
