import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import Swal from 'sweetalert2';

import 'moment/locale/es';
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModal } from '../store/actions/ui';
import { eventAddNew, eventClearActiveEvent, eventUpdated } from '../store/actions/events';
moment.locale('es');

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');

const now = moment().minutes(0).seconds(0).add(1, 'hours');
const nowPlus1 = moment().minutes(0).seconds(0).add(2, 'hours');

const initEvent = {
    title: '',
    notes: '',
    start: now.toDate(),
    end: nowPlus1.toDate()
}

export const CalendarModal = () => {

    const openModal = useSelector(state => state.ui.modalOpen );
    const { activeEvent } = useSelector(state => state.calendar );
    const [titleValid, setTitleValid] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        if( activeEvent ){
            setFormValues( activeEvent );
        } else {
            setFormValues( initEvent );
        }
    }, [activeEvent])
    
    const closeModal = (e) => {
        dispatch( uiCloseModal() );
        dispatch( eventClearActiveEvent() );
        setFormValues( initEvent );
    }

    const handleStartDateChange = (e) => {
        setFormValues({
            ...formValues,
            start: e
        })
    }

    const handleEndDateChange = (e) => {
        setFormValues({
            ...formValues,
            end: e
        })
    }

    const [formValues, setFormValues] = useState( initEvent )
    
    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }
    
    const {notes, title, start, end } = formValues;
    
    const handleSubmitForm = (e) => {
        e.preventDefault();

        const momentStart = moment( start );
        const momentEnd = moment( end );
        
        if( momentStart.isSameOrAfter( momentEnd) ){
            Swal.fire('Error', 'La fecha de fin debe ser mayor a la fecha de inicio', 'error');
        }

        if( title.trim().length < 2){
            setTitleValid(false);
        }

        //TODO: Realizar grabación en DB
        
        if( activeEvent ){
            dispatch( eventUpdated( formValues ) );
        } else {
            dispatch( eventAddNew({
                ...formValues,
                id: new Date().getTime(),
                user: {
                    _id: '123',
                    name: 'Freddy'
                }
            }) );
        }

        setTitleValid( true );
        closeModal();
    }


    return (
        <Modal
            isOpen={ openModal }
            onRequestClose={ closeModal }
            style={ customStyles }
            contentLabel="Example Modal"
            closeTimeoutMS={ 200 }
            className="modal"
            overlayClassName="modal-fondo"
        >
            <h1> { activeEvent ? 'Editar evento' : 'Nuevo evento'} </h1>
            <hr />
            <form 
                className="container"
                onSubmit={ handleSubmitForm }
            >

                <div className="form-group">
                    <label>Fecha y hora inicio</label>
                    <DateTimePicker
                        onChange={ handleStartDateChange }
                        value={ start }
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label>Fecha y hora fin</label>
                    <DateTimePicker
                        onChange={ handleEndDateChange }
                        value={ end }
                        minDate={ start }
                        className="form-control"
                    />
                </div>

                <hr />
                <div className="form-group">
                    <label>Titulo y notas</label>
                    <input 
                        type="text" 
                        className={`form-control ${!titleValid && 'is-invalid'}`}
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        value={ title }
                        onChange={ handleInputChange }
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group">
                    <textarea 
                        type="text" 
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        value={ notes }
                        onChange={ handleInputChange }
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>
        </Modal>
    )
}
