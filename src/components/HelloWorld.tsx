import React from "react";
import { render as renderAmis } from 'amis'

export default class HelloWorld extends React.Component<any, any> {
  render(): React.ReactNode {
    return renderAmis({
      "type": "page",
      "data": {
        "text": "World"
      },
      "body": {
        "type": "tpl",
        "tpl": "Hello ${text}!"
      }
    }) 
  }
}