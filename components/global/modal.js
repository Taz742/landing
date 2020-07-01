import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { ModalContainer, ModalStyled } from '../../styled/modal'

export default function Modal(props) {
    const { handleSubmit, register, errors } = useForm();
    const [file, setFile] = useState();
    
    const handleChange = (e) => {
        setFile(e.target.files[0]);
    }

    const onSubmit = (values) => {
        values['file'] = file;
        function makeRequest (method, url, done) {
            var xhr = new XMLHttpRequest();
            let formData = new FormData();
            Object.keys(values).forEach(item => {
                formData.append(item, values[item]); 
            }) 
              
            xhr.open(method, url);
            xhr.onload = function () {
              done(null, xhr.response);
            };
            xhr.onerror = function () {
              done(xhr.response);
            };
            xhr.send(formData);
        }
          
        makeRequest('POST', 'https://content.cryptx.com/wp-json/carrerSend/send', function (err, data) {
            if (err) { throw err; }
            if (data) {
                props.close(1);
            }
        });
    }

    return (
        <div style={{display: props.open ? 'block' : 'none' }}>
            <ModalContainer onClick={(e) => props.close()}></ModalContainer>
            <ModalStyled>
                <div className="modal-header">
                    Fill Out the Form
                    <img onClick={(e) => props.close()} src="/images/delete.svg" />
                </div>
                <form encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
                    <div className="modal-body">
                        <label>
                            <input 
                                style={{borderColor: errors.name ? 'red' : ''}}
                                name="name"
                                ref={register({
                                    required: true
                                })}
                                type="text" placeholder=" "/>
                            <span>Name / Last name</span>
                        </label>

                        <label>
                            <input 
                                style={{borderColor: errors.position ? 'red' : ''}}
                                name="position"
                                ref={register({
                                    required: true
                                })} type="text" placeholder=" "/>
                            <span>Enter position</span>
                        </label>

                        <label>
                            <input 
                                style={{borderColor: errors.phone ? 'red' : ''}}
                                name="phone"
                                ref={register({
                                    required: true
                                })} type="text" placeholder=" "/>
                            <span>Phone number</span>
                        </label>

                        <label>
                            <input 
                                style={{borderColor: errors.email ? 'red' : ''}}
                                name="email"
                                ref={register({
                                    required: true,
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: "invalid email address"
                                    }
                                })} type="text" placeholder=" "/>
                            <span>E.mail address</span>
                        </label>

                        <div className="clear"></div>

                        <label className="file">
                            <input 
                                accept="application/pdf"
                                name="file"
                                onChange={(e) => handleChange(e)}
                                ref={register({
                                    required: true
                                })} type="file"/>
                            <img src="/images/office-pin.svg"/> Attach your CV {" "}
                            <span style={{color: 'red'}}>
                                {errors.file ? ' Required' : ''}
                            </span>
                        </label>
                    </div>
                    <div className="modal-footer">
                        <button type="submit">Apply</button>
                    </div>
                </form>
            </ModalStyled>
        
        </div>
    )
}