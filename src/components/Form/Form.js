import React from 'react'
import s from './Form.module.css'
class Form extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      email:"admin@admin.com",
      inputAdmin:""
    }
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({
      inputAdmin: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    console.log('submit success');
  }



  render() {

    const stLine = {
      border: this.state.inputAdmin !== this.state.email ? "2px solid red" : ""
    }

    return(
      <div>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <input style={stLine}  className={s.email} onChange={this.handleChange} type="email"/>
          <div className={s.btn}>
            <button >Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Form;