import React, {Component} from 'react'
import "./form.css"
import axios from 'axios'

export default class Form extends Component {

    state={
        name: '',
        lastname:'',
        email:'',
        sent: false,
        message:'',
        urgent: false,
        roofing: false,
        siding: false,
        trim: false
    }

    handleName=(e)=>{
        this.setState({
            name:e.target.value
        })
    }

    handleTel=(e)=>{
        this.setState({
            tel:e.target.value
        })
    }

    handleEmail=(e)=>{
        this.setState({
            email:e.target.value
        })
    }

    handleMessage=(e)=>{
        this.setState({
            message:e.target.value
        })
    }

    changeRoofing = (e) => {
        this.setState(prevState =>({
            roofing: !prevState.roofing
        }))
    }

    changeSiding = (e) => {
        this.setState(prevState =>({
            siding: !prevState.siding
        }))
    }

    changeTrim = (e) => {
        this.setState(prevState =>({
            trim: !prevState.trim
        }))
    }

    changeUrgent = (e) => {
        this.setState(prevState =>({
            urgent: !prevState.urgent
        }))
    }

    formSubmit=(e)=>{
        e.preventDefault();
        let data={
            name: this.state.name,
            tel:this.state.tel,
            email:this.state.email,
            message:this.state.message,
            roofing: this.state.roofing? "Roofing": "",
            siding: this.state.siding? "Siding" : null,
            trim: this.state.trim? "Trim" : null,
            urgent: this.state.urgent? "Urgent" : null
        }

        axios.post('/api/forma',data)
        .then(res=>{
            this.setState({
                sent:true,
            },this.resetForm())
        }).catch(()=>{
            console.log('message not sent')
        })
    }

    resetForm=()=>{
        this.setState({
                name: '',
                tel:'',
                email:'',
                message:'',
                roofing: false,
                siding: false,
                trim: false,
                urgent: false
        })

        setTimeout(()=>{
            this.setState({
                sent:false,
            })
        },3000)
    }

    render (){
        return (
            <div className='container'>
                <form onSubmit={this.formSubmit}>
                    <div className='singleItem'>
                        {/* <label htmlFor='name'>Name</label> */}
                        <input type='text' name='name' className='name' placeholder='Full Name'
                        value={this.state.name}
                        onChange={this.handleName}
                        />
                    </div>
                        
                    <div className='singleItem'>
                        {/* <label htmlFor='lastname'>Lastname</label> */}
                        <input type='tel' name='tel' className='name' placeholder='Phone Number'
                        value={this.state.tel}
                        onChange={this.handleTel}
                        />
                    </div>

                    <div className='singleItem'>
                        {/* <label htmlFor='email'>Email</label> */}
                        <input type='email' name='email' className='name' placeholder='Email'
                         value={this.state.email}
                         onChange={this.handleEmail}
                        />
                    </div>    
                    <h3>Select the required service(s)</h3>

                    <div className='selections'>
                    <input type="radio" name="roofing" id="roofing" value="track" checked={this.state.roofing? true:false} onClick={this.changeRoofing}/><label for="track">Roofing</label>

                    <input type="radio" name="siding" id="siding" value="event" checked={this.state.siding? true:false} onClick={this.changeSiding} /><label for="event">Siding</label>

                    <input type="radio" name="trim" id="trim" value="message" checked={this.state.trim? true:false} onClick={this.changeTrim}/><label for="message">Trim</label><br />

                    </div>
                    <div className='textArea singleItem'>
                        {/* <label htmlFor='message'>Message</label> */}
                        <textarea name='message' id="" cols="30" rows="1" placeholder='Write A Message'
                        value={this.state.message}
                        onChange={this.handleMessage}
                        ></textarea>
                    </div>


                    <h3>Is this an emergency?</h3>
                    <div className='selections'>
                    <input type="radio" name="urgent" id="urgent" value="urgent" checked={this.state.urgent? true:false} onClick={this.changeUrgent}/><label for="urgent">Flag as urgent</label><br />
                    </div>
                    <div className={this.state.sent ? 'msg msgAppear':'msg'}>Message has been sent</div>
                    <div className="btn">
                        <button type="submit">Submit</button>
                    </div>     

                </form>
            </div>
        )
    }
}