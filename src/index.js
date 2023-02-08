import React from "react";
import ReactDOM from "react-dom";
import { Form, Button } from "antd";
import FormBuilder from "antd-form-builder";

import "antd/dist/antd.css";
import "./styles.css";

const meta = {
  fields: [
    { key: "username", label: "Имя" },
    { key: "password", label: "Пароль", widget: "password" }
  ]
};

export class TicketForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();

    let data = this.props.form.getFieldsValue();

    console.log(data);
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit} layout={"horizontal"}>
          <FormBuilder meta={meta} form={this.props.form} />
          <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Отправить
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  }
}

const WrappedExampleForm = Form.create()(TicketForm);

function App() {
  return (
    <div>
      <WrappedExampleForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
