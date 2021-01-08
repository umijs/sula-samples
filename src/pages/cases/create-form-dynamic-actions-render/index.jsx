import React from 'react';
import { CreateForm } from 'sula';


const submitAction = 
  {
    type: 'button',
    props: {
      type: 'primary',
      children: '提交',
    },
    action: [
      'validateFields',
      {
        url: 'https://www.mocky.io/v2/5185415ba171ea3a00704eed',
        method: 'POST',
        params: ({ result }) => ({ ...result }),
        successMessage: '提交成功',
      },
      'resetFields',
    ],
  };

const backAction = {
  type: 'button',
  props: {
    children: '返回',
  },
  action: [
    () => {
      console.log('返回');
    },
  ],
};

export default class CreateFormDemo extends React.Component {
  state = {
    actions: [submitAction, backAction],
  }

  componentDidMount() {}

  handleValuesChange = (values) => {
    if(values.name === true) {
      this.setState({
        actions: [submitAction],
      })
    } else {
      this.setState({
        actions: [submitAction, backAction]
      })
    }

  }

  render() {
    const {actions} = this.state;

    return (
      <div>
        <CreateForm
          onValuesChange={this.handleValuesChange}
          fields={[
            {
              name: 'name',
              label: '切换',
              field: 'checkbox',
              valuePropName: 'checked',
            },
          ]}
          actionsRender={actions}
        />
      </div>
    );
  }
}
