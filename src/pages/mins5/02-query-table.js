import React from 'react';
import { QueryTable } from 'sula';

export default () => {
  const config = {
    "layout": "vertical",
    "rowKey": "id",
    "columns": [
      {
        "key": "id",
        "title": "ID",
        "sorter": true,
        "render": {
          "type": "button",
          "props": {
            "type": "link",
            "size": "small",
            "children": "SERIAL_NUMBER_#{text}",
            "href": "#/form/card/view/#{text}",
            "style": {
              "padding": 0
            }
          }
        }
      },
      {
        "key": "senderName",
        "title": "发送人",
        "filterRender": "search"
      },
      {
        "key": "recipientName",
        "title": "接收人",
        "filters": [
          {
            "text": "Jack",
            "value": "Jack"
          },
          {
            "text": "Lucy",
            "value": "Lucy"
          },
          {
            "text": "Lily",
            "value": "lily"
          },
          {
            "text": "Mocy",
            "value": "Mocy"
          }
        ]
      },
      {
        "key": "status",
        "title": "状态",
        "render": {
          "type": "tag",
          "props": {
            "children": "#{text}",
            "color": "#{text === \"dispatching\" ? \"#2db7f5\" : text === \"success\" ? \"#87d068\" : \"#f50\"}"
          }
        }
      },
      {
        "key": "operator",
        "title": "操作",
        "render": [
          {
            "type": "icon",
            "props": {
              "type": "edit"
            },
            "action": {
              "type": "route",
              "path": "/form/card/edit/#{record.id}"
            }
          },
          {
            "type": "icon",
            "props": {
              "type": "delete"
            },
            "tooltip": "删除",
            "confirm": "确定要删除吗？",
            "visible": "#{record.id % 3 === 0}",
            "action": [
              {
                "type": "request",
                "url": "/api/manage/delete.json",
                "method": "POST",
                "params": {
                  "rowKeys": "#{record.id}"
                }
              },
              "refreshtable"
            ]
          }
        ]
      }
    ],
    rowSelection: {},
    "actionsRender": [
      {
        "type": "button",
        "props": {
          "children": "新增",
          "type": "primary"
        },
        "action": {
          "type": "route",
          "path": "/mins5/01-create-form"
        }
      },
      {
        type: 'button',
        props: {
          children: '批量操作'
        },
        action(ctx) {
          alert(ctx.table.getSelectedRowKeys().join(', '))
        }
      }
    ],
    "fields": [
      {
        "name": "id",
        "label": "ID",
        "field": {
          "type": "input",
          "props": {
            "placeholder": "搜索Id"
          }
        }
      },
      {
        "name": "senderName",
        "label": "发送人姓名",
        "field": {
          "type": "input",
          "props": {
            "placeholder": "请输入发送人姓名"
          }
        }
      },
      {
        "name": "recipientName",
        "label": "请选择接收人姓名",
        "field": {
          "type": "select",
          "props": {
            "mode": "multiple",
            "allowClear": true,
            "placeholder": "请选择接收人姓名"
          }
        },
        "remoteSource": {
          "url": "/api/manage/recipientList.json"
        }
      }
    ],
    "remoteDataSource": {
      "url": "/api/manage/list.json",
      "method": "post"
    }
  };
  return <QueryTable {...config} />;
}