import 'antd/dist/antd.less';
import { history } from 'umi';
import {
  Icon,
} from 'sula';
import { EditOutlined, AppstoreOutlined } from '@ant-design/icons';

Icon.iconRegister({
  edit: {
    outlined: EditOutlined,
  },
  appstore: {
    outlined: AppstoreOutlined,
  },
});

document.body.style.background = '#f0f2f5';

window.onload = function () {
  const root = document.querySelector('#root');
  root.style.margin = '16px';

  const ul = document.createElement('ul');
  ul.style.height = '40px';
  ul.style.display = 'flex';
  ul.style.background = '#fff';
  ul.style.alignItems = 'center';
  ul.style.padding = '0 16px';
  ul.style.margin = '0';

  setTimeout(() => {
    ['create-form', 'query-table', 'step-form'].forEach((path) => {
      if (!path) {
        return;
      }
      const a = document.createElement('a');
      a.text = path;
      a.style.marginRight = '16px';
      a.onclick = () => {
        history.push(path);
      };
      ul.appendChild(a);
    });

    document.body.insertBefore(ul, root);
  }, 0);
};
