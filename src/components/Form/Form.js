import React from 'react'
import s from './Form.module.css'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "admin@admin.com",
      inputValue: "",
      error: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const inputValue = e.target.value
    this.setState({
      inputValue: inputValue
    })
    if (inputValue === this.state.email) {
      this.setState({
        error: false
      })
    } else {
      this.setState({
        error: true
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.error === false) {
      console.log('submit success');
      this.setState({
        inputValue: ''
       // error: true
      //  ТУТ ВОПРОС КАК СКИНУТЬ ФОРМУ,
        //  ТОИСТЬ КОГДА ЧЕЛ НАЖАЛ НА САБМІТ І ОНО ОТПРАВИЛО (ПОЛЕ ЧИСТИТСЯ) НО МОЖНА ОПЯТЬ НАЖАТЬ НА САБМИТ І ОНО ОПЯТЬ ПРОЙДЕТ ПРОВЕРКУ
        // ЕСЛИ НАПИСАТЬ СТ.38 ТО ПОСЛЕ ОТПРАВКИ ПОЛЕ СРАЗУ КРАСНОЕ

      })
    } else {
      console.log('NOT submit');
    }
  }


  render() {

    let stInput = s.email;
    let pTag = "";
    if (this.state.error) {
      stInput = s.emailError
      pTag = <p>Email is not admin@admin.com</p>
    } else {
      stInput = s.email
      pTag = ""
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit} className={s.form}>
          <input className={stInput} value={this.state.inputValue} onChange={this.handleChange} type="email"/>
          {pTag}
          <div className={s.btn}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Form;