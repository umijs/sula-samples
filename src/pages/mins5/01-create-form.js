import React from 'react';
import { CreateForm } from 'sula';

export default (props) => {
  const id = props.location.query.id
  const config = {
    "mode": id ? "edit" : "create",
    "actionsPosition": "bottom",
    "container": {
      "type": "div",
      "props": {
        "style": {
          "maxWidth": 1920,
          "margin": "0 auto 72px"
        }
      }
    },
    "itemLayout": {
      "labelCol": {
        "span": 6
      },
      "wrapperCol": {
        "span": 8
      }
    },
    "fields": [
      {
        "name": "sender",
        "container": {
          "type": "card",
          "props": {
            "title": "发送",
            "style": {
              "padding": 0,
              "marginBottom": 16
            }
          }
        },
        "fields": [
          {
            "name": "senderName",
            "label": "发送人姓名",
            "field": {
              "type": "input",
              "props": {
                "placeholder": "请输入发送人姓名"
              }
            },
            "rules": [
              {
                "required": true,
                "message": "该项为必填项"
              }
            ]
          },
          {
            "name": "secrecy",
            "label": "是否保密",
            "field": {
              "type": "switch",
              "props": {
                "checkedChildren": "on",
                "unCheckedChildren": "off"
              }
            },
            "valuePropName": "checked"
          },
          {
            "name": "senderNumber",
            "label": "发送人号码",
            "field": {
              "type": "inputnumber",
              "props": {
                "placeholder": "请输入发送人号码",
                "style": {
                  "width": "80%"
                }
              }
            },
            "rules": [
              {
                "required": true,
                "message": "该项为必填项"
              }
            ]
          },
          {
            "name": "senderAddress",
            "label": "发送人地址",
            "field": {
              "type": "textarea",
              "props": {
                "placeholder": "发送人地址"
              }
            },
            "rules": [
              {
                "required": true,
                "message": "该项为必填项"
              }
            ]
          }
        ]
      },
      {
        "name": "recipient",
        "container": {
          "type": "card",
          "props": {
            "title": "接收",
            "style": {
              "padding": 0,
              "marginBottom": 16
            }
          }
        },
        "fields": [
          {
            "name": "recipientName",
            "label": "接收人姓名",
            "field": {
              "type": "select",
              "props": {
                "placeholder": "请选择接收人姓名"
              }
            },
            "remoteSource": {
              "url": "/api/manage/recipientList.json"
            },
            "rules": [
              {
                "required": true,
                "message": "该项为必填项"
              }
            ]
          },
          {
            "name": "recipientTime",
            "label": "接收时间",
            "field": {
              "type": "checkboxgroup"
            },
            "initialSource": [
              {
                "text": "Morning",
                "value": "morning"
              },
              {
                "text": "Afternoon",
                "value": "afternoon"
              },
              {
                "text": "Night",
                "value": "night"
              }
            ]
          },
          {
            "name": "recipientNumber",
            "label": "接收人号码",
            "field": {
              "type": "inputnumber",
              "props": {
                "placeholder": "请输入接收人号码",
                "style": {
                  "width": "80%"
                }
              }
            },
            "rules": [
              {
                "required": true,
                "message": "该项为必填项"
              }
            ]
          },
          {
            "name": "recipientAddress",
            "label": "接收人地址",
            "field": {
              "type": "textarea",
              "props": {
                "placeholder": "请输入接收人地址"
              }
            },
            "rules": [
              {
                "required": true,
                "message": "该项为必填项"
              }
            ]
          }
        ]
      },
      {
        "name": "basic",
        "container": {
          "type": "card",
          "props": {
            "title": "基础",
            "style": {
              "padding": 0,
              "marginBottom": 16
            }
          }
        },
        "fields": [
          {
            "name": "time",
            "label": "送货时间",
            "field": {
              "type": "rangepicker",
              "props": {
                "placeholder": [
                  "开始时间",
                  "结束时间"
                ]
              }
            },
            "rules": [
              {
                "required": true,
                "message": "该项为必填项"
              }
            ]
          },
          {
            "name": "priceProject",
            "label": "价格保护",
            "field": {
              "type": "slider",
              "props": {
                "min": 0,
                "max": 1000,
                "step": 100,
                "dots": true
              }
            },
            "remoteSource": {
              "url": "/api/manage/priceList.json"
            }
          },
          {
            "name": "description",
            "label": "其他信息",
            "field": {
              "type": "textarea",
              "props": {
                "placeholder": "请输入其他信息"
              }
            }
          }
        ]
      }
    ],
    "submit": {
      "url": "/api/manage/add.json",
      "method": "post"
    },
    "remoteValues": {
      "url": "/api/manage/detail.json",
      "method": "post",
      "params": {
        "id": 19
      }
    }
  }
  return <CreateForm {...config}/>
}