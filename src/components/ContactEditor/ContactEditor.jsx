import { Component } from "react";
import PropTypes from 'prop-types';
import {Form, NameLabel, NameInput, NumberLabel, NumberInput, Button} from './ContactEditor.styled'

class ContactEditor extends Component {

    state = {
        name: "",
        number: ""
    }

    handleChange = ({currentTarget}) => {
        this.setState({[currentTarget.name]: currentTarget.value})
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.addContact({
            name: this.state.name,
            number: this.state.number
        });
        this.setState({ name: "",
        number: "" });
    }

    render() {
        return (
            <Form onSubmit = {this.handleSubmit}>
                <NameLabel >Name<NameInput
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    required
    value={this.state.name} onChange={this.handleChange}
/></NameLabel>
                <NumberLabel >Number<NumberInput
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    required
  value={this.state.number} onChange={this.handleChange}  
/></NumberLabel>
                <Button type="submit">Add Contact</Button>
            </Form>
        );

    }
}

export default ContactEditor;

ContactEditor.propTypes = {
onSubmit: PropTypes.func 
};
