import React, { Component } from 'react'
import { useNavigate } from "react-router-dom";
import "./form.css"
import axios from 'axios'




export default class Form extends Component {

    state = {
        name: '',
        lastname: '',
        email: '',
        sent: false,
        message: '',
        urgent: false,
        roofing: false,
        siding: false,
        trim: false,
        gutters: false,
        required: false,
        nameFocused: false,
        telFocused: false,
        emailFocused: false,
        radioFocused: false,
        modal: false
    }

    handleName = (e) => {
        this.setState({
            name: e.target.value
        })
    }


    handleTel = (e) => {
        this.setState({
            tel: e.target.value
        })
    }

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handleMessage = (e) => {
        this.setState({
            message: e.target.value
        })
    }

    changeRoofing = (e) => {
        this.setState(prevState => ({
            roofing: !prevState.roofing,
        }))
    }

    changeSiding = (e) => {
        this.setState(prevState => ({
            siding: !prevState.siding,
        }))
    }

    changeTrim = (e) => {
        this.setState(prevState => ({
            trim: !prevState.trim,
        }))
    }

    changeGutters = (e) => {
        this.setState(prevState => ({
            gutters: !prevState.gutters,
        }))
    }

    changeUrgent = (e) => {
        this.setState(prevState => ({
            urgent: !prevState.urgent
        }))
    }

    handleNameFocus = (e) => {
        this.setState({
            nameFocused: true
        })
    }

    handleTelFocus = (e) => {
        this.setState({
            telFocused: true
        })
    }

    handleEmailFocus = (e) => {
        this.setState({
            emailFocused: true
        })
    }

    handleRadioFocus = (e) => {
        if (this.state.roofing === false && this.state.siding === false && this.state.trim === false && this.state.gutters === false) {
            this.setState({
                radioFocused: true
            })
        }
    }

    handleModal = (e) => {
        if (e.target.classList.contains("dismiss")) {
            this.setState({
                modal: false
            });
            
            const navigate = useNavigate();
            navigate("/");
        }
    }
    


    formSubmit = (e) => {
        e.preventDefault();
        let data = {
            name: this.state.name,
            tel: this.state.tel,
            email: this.state.email,
            message: this.state.message,
            roofing: this.state.roofing ? "Roofing" : "",
            siding: this.state.siding ? "Siding" : null,
            trim: this.state.trim ? "Trim" : null,
            gutters: this.state.gutters ? "Gutters" : null,
            urgent: this.state.urgent ? "Urgent" : null
        }

        axios.post('https://all-info-sites-api-bypgj.ondigitalocean.app/saconst/contact', data)
            .then(res => {
                this.setState({
                    sent: true,
                }, this.resetForm())
            }).catch(() => {
                console.log('message not sent')
            })

        this.setState(prevState => ({
            modal: !prevState.modal
        }))

    }

    resetForm = () => {
        this.setState({
            name: '',
            tel: '',
            email: '',
            message: '',
            roofing: false,
            siding: false,
            trim: false,
            gutters: false,
            urgent: false,
            required: false,
            nameFocused: false,
            telFocused: false,
            emailFocused: false,
            radioFocused: false
        })

        setTimeout(() => {
            this.setState({
                sent: false,
            })
        }, 200)
    }



    render() {
        return (
            <div className='container'>
                <div className='form--wrapper'>
                    <form onSubmit={this.formSubmit}>
                        <div className='singleItem'>
                            <input required="true" id="inputs" pattern="^([A-Za-z]{1,}([\.,] |[-']| ))+[A-Za-z]+\.?$" onBlur={this.handleNameFocus} focused={this.state.nameFocused.toString()} type='text' name='name' className='name' placeholder='Full Name'
                                value={this.state.name}
                                onChange={this.handleName}
                            />
                            <span>Please enter first and last name.</span>
                        </div>

                        <div className='singleItem'>
                            <input required="true" type='tel' name='tel' className='name' placeholder='Phone Number' pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$" onBlur={this.handleTelFocus} focused={this.state.telFocused.toString()}
                                value={this.state.tel}
                                onChange={this.handleTel}
                            />
                            <span>Must be a valid phone number.</span>
                        </div>

                        <div className='singleItem'>
                            <input required="true" type='email' name='email' className='name' placeholder='Email' pattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$" onBlur={this.handleEmailFocus} focused={this.state.emailFocused.toString()}
                                value={this.state.email}
                                onChange={this.handleEmail}
                            />
                            <span>Must be a valid email address.</span>
                        </div>
                        <h3>Select the required service(s)</h3>

                        <div className='selections'>
                            <input type="radio" name="roofing" id="roofing" value="track" checked={this.state.roofing ? true : false} onClick={this.changeRoofing} onChange={this.handleRadioFocus} /><label for="track">Roofing</label>

                            <input type="radio" name="siding" id="siding" value="event" checked={this.state.siding ? true : false} onClick={this.changeSiding} onChange={this.handleRadioFocus} /><label for="event">Siding</label>

                            <input type="radio" name="trim" id="trim" value="message" checked={this.state.trim ? true : false} onClick={this.changeTrim} onChange={this.handleRadioFocus} /><label for="message">Trim</label>

                            <input type="radio" name="gutters" id="gutters" value="message" checked={this.state.gutters ? true : false} onClick={this.changeGutters} onChange={this.handleRadioFocus} /><label for="message">Gutters</label><br />

                        </div>
                        <span className="radio--alert" style={this.state.radioFocused && this.state.roofing === false && this.state.siding === false && this.state.trim === false && this.state.gutters === false ? { display: "block" } : { display: "none" }}>One service must be selected.</span>
                        <div className='textArea singleItem'>
                            <textarea name='message' id="" cols="30" rows="1" placeholder='Write A Message'
                                value={this.state.message}
                                onChange={this.handleMessage}
                            ></textarea>
                        </div>


                        <h3>Is this an emergency?</h3>
                        <div className='selections'>
                            <input type="radio" name="urgent" id="urgent" value="urgent" checked={this.state.urgent ? true : false} onClick={this.changeUrgent} /><label for="urgent">Flag as urgent</label><br />
                        </div>
                        <div className="btn">
                            <button type="submit">Submit</button>
                        </div>

                    </form>
                    <div style={this.state.modal ? { display: "block" } : { display: "none" }}>
                        <div className="overlaymodal dismiss" onClick={this.handleModal}>
                            <span className="dismiss" onClick={this.handleModal}>
                                X
                            </span>
                            <div className="modal--form">
                                <h1>Thank you for your submission!</h1>
                                <p>We will contact you shortly.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}