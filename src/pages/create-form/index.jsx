import React from 'react';
import { CreateForm } from 'sula';

export default class CreateFormDemo extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <CreateForm
          initialValues={{
            gender: ['male'],
          }}
          fields={[
            {
              name: 'name',
              label: '姓名',
              field: 'input',
            },
            {
              name: 'hobby',
              label: '爱好',
              field: 'select',
            },
          ]}
          submit={{
            url: 'https://www.mocky.io/v2/5185415ba171ea3a00704eed',
            method: 'POST',
          }}
        />
      </div>
    );
  }
}
