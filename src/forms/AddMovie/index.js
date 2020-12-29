import React, { useEffect, useReducer, useState } from 'react'
import styles from './AddMovie.module.scss'
import classnames from 'classnames/bind'

import { formReducer } from '../../utils/formHandlers'

import CustomDatePicker from '../../components/CustomDatePicker'
import Button from '../../components/Button'
import TextField from '../../components/TextField'
import SelectGenreInput from '../../components/SelectGenreInput'

let cx = classnames.bind(styles)

const initialState = {
    title: '',
    releaseDate: null,
    movieUrl: '',
    genres: [
        {id: 1, value: "Crime", isChecked: false},
        {id: 2, value: "Documentary", isChecked: false},
        {id: 3, value: "Horror", isChecked: false},
        {id: 4, value: "Comedy", isChecked: false},
    ],
    overview: '',
    runtime: '',
}

const AddMovie = () => {
    
    const [state, updateState] = useReducer(formReducer, initialState)

    const initialErrorState = {
        titleHasError: false,
        movieUrlHasError: false,
        genreHasError: true,
        overviewHasError: false,
        runtimeHasError: false,
    }

    const [ errors, setErrors ] = useState(initialErrorState)

    const [ isValidForm, setIsValidForm ] = useState(false)
    
    const [ isSubmited, setIsSubmited ] = useState(false)
    
    const initialDate = new Date()
    
    const [startDate, setStartDate] = useState(initialDate);

    const errorMessages = {
        titleErrorMessage: 'Please enter a Title.',
        movieUrlErrorMessage: 'Please enter a valid URL.',
        genreErrorMessage: 'Please select at least one genre.',
        overviewErrorMessage: 'Please describe an overview.',
        runtimeErrorMessage: 'Please enter the movie runtime.',
    }

    const updateForm = React.useCallback(({target: { value, name, type, checked }}) => {
        const updatePath = name.split('.');
        if (type === 'checkbox') {
            let item = state.genres.find(item => item.value === value)
            let index = state.genres.indexOf(item)
            let checkboxes = state.genres
            checkboxes[index].isChecked = checked;

            updateState(() => ({
                genres: checkboxes,
            }))
            setErrors(prev=>{
                    return {
                        ...prev,
                        genreHasError: !(state.genres.some(genre => genre.isChecked === true))
                    }
            })
            return
        }
    
        if (updatePath.length === 1) {

            const [key] = updatePath;

            setErrors(prev=>{
                if(!value.length) {
                    return {
                        ...prev,
                        [`${key}HasError`]: true,
                    }
                } else {
                    return {
                        ...prev,
                        [`${key}HasError`]: false,
                    }
                }
            })

            updateState({
                [key]:value
            })
        }
    
        if (updatePath.length === 2) {
            updateState({
                _path: updatePath,
                _value: value,
            })
        }
    }, [])
    
    useEffect(()=>{
        updateState(prev => {
            return {
                ...prev,
                releaseDate: startDate,
            }
        })
    }, [startDate])

    const { title, movieUrl, overview, runtime } = state

    useEffect(()=>{
        if(
            title.length &&
            movieUrl.length &&
            overview.length &&
            runtime.length &&
            !(errors.genreHasError)
        ) {
            setIsValidForm(true)
        } else {
            setIsValidForm(false)
        }
        setIsSubmited(false)
    }, [state])

    function handleSubmit(e) {
        e.preventDefault();
        if(isValidForm && !isSubmited) {
            console.log('Submited: ', state)
        } else if (!isValidForm) {
            console.log('There are invalid inputs in the form')
        } else if (isSubmited) {
            console.log('form has been submitted already, please reset form or change values.')
        }
        setIsSubmited(true)
    }

    function handleReset() {
        setIsSubmited(false)
        updateState(initialState)
        setErrors(initialErrorState)
    }

    const {titleHasError, movieUrlHasError, genreHasError, overviewHasError, runtimeHasError } = errors

    return (
        <form onSubmit={handleSubmit} onReset={handleReset} className={cx('form')}>
            <h2 className={cx('form-heading')}>ADD MOVIE</h2>
            <TextField 
                name='title'
                label='title'
                placeholder='Movie title here' 
                handleChange={updateForm} 
                value={title}
                showError={titleHasError ? titleHasError : false}
                errorMessage={errorMessages.titleErrorMessage}
            />
            <CustomDatePicker  
                startDate={startDate} 
                setStartDate={setStartDate}
            />
            <TextField 
                name='movieUrl'
                label='movie url' 
                placeholder='www.moana.com' 
                handleChange={updateForm} 
                value={movieUrl} 
                errorMessage={errorMessages.movieUrlErrorMessage}
                showError={movieUrlHasError ? movieUrlHasError : false} 
            />
            <SelectGenreInput
                genres={state.genres}
                label='Select Genre'
                handleCheckChange={updateForm}
                errorMessage={errorMessages.genreErrorMessage}
                showError={genreHasError ? genreHasError : false}
            />
            <TextField 
                name='overview'
                label='overview' 
                placeholder='Overview text goes here' 
                handleChange={updateForm} 
                value={overview} 
                errorMessage={errorMessages.overviewErrorMessage}
                showError={overviewHasError ? overviewHasError : false} 
            />
            <TextField 
                name='runtime'
                label='runtime' 
                placeholder='Runtime goes here' 
                handleChange={updateForm} 
                value={runtime}  
                errorMessage={errorMessages.runtimeErrorMessage}
                showError={runtimeHasError ? runtimeHasError : false} 
            />
            <div className={cx('buttons')}>
                <Button
                    size='md'
                    style='outline'
                    type='reset'
                >
                reset
                </Button>
                <span className={cx('buttons-spacer')}></span>
               {isValidForm && <Button
                    size='md'
                    style='primary'
                    type='submit'
                >
                submit
                </Button>}
               {!isValidForm && <Button
                    size='md'
                    style='disabled'
                    type='submit'
                >
                submit
                </Button>}
            </div>  
        </form>
    )
}

export default AddMovie;
