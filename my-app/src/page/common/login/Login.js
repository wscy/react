import { Form, Icon, Input, Button, Checkbox, AutoComplete } from 'antd';
import React,{Component} from 'react';
import 'antd/dist/antd.css';
import {setToken} from './storeToken'
 class NormalLoginForm extends React.Component { 
  constructor(props){
    super(props);
    const{history}=this.props
    this.state={
    isPasswordRight:false,
    history,
     user:
       [
       {username:'tom',password:'123',isAdmin:false},
       {username:'jerry',password:'123',isAdmin:false},
       {username:'admin',password:'admin',isAdmin:true}
      ] 
    }
  }
  //  alertWrongPassword=(rule,value,callback)=>{
  //    console.log("---->>>>")
  //    if (this.state.isPasswordRight) {
  //     console.log("-alertWrongPassword--",this.state.isPasswordRight)

  //         callback('Wrong Password or Wrong Username!')
  //     }
  //     callback()
  //  }

  handleSubmit = e => {
   e.preventDefault();
    this.props.form.validateFields((err, values) => {
      const{user,history}=this.state
      if (!err) {
        for(let i=0;i<user.length;i++){
          if(user[i].username===values.username && user[i].password===values.password){
            
            setToken(values)
               history.push('index' )
          }
          else{
            // alert('wrong password or username');
            console.log("==================",this.state.isPasswordRight)
            this.setState(
              {
              isPasswordRight:true
            })
          }
        }
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <div style={{width:'300px',margin:'auto'}}>
      <Form onSubmit={this.handleSubmit} className="login-form">
        <div style={{height:'200px'}}></div>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' },
            // {validator: this.alertWrongPassword}
          ],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
                   placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {this.state.isPasswordRight?<div style={{color:'red'}}>wrong password or username</div>:<></>}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
       
      </Form>
      </div>
    );
  }
}

export const Login = Form.create({ name: 'normal_login' })(NormalLoginForm);

