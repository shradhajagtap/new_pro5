import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'

function Add() {
    const navi = useNavigate()

    const { register, handleSubmit } = useForm()

    function saveData(data) {
        axios.post('  http://localhost:5000/user', data)
        alert('Added')
        navi('/show')

    }

    return (
        <>
            <div className=" container border border-info mt-3 p-3">
                <center><b>Company</b></center>
                <form onSubmit={handleSubmit(saveData)}>
                    <label htmlFor='n'> Employee Name : </label>
                    <input type='text' id='n' className='form-control' {...register('name')} />

                    <label htmlFor='cname'> Employee Company Name : </label>
                    <input type='text' id='cname' className='form-control' {...register('cname')} />

                    <label htmlFor='sal'> Employee Salary : </label>
                    <input type='number' id='sal' className='form-control' {...register('sal')} />

                    <label htmlFor='add'> Employee Address : </label>
                    <input type='text' id='add' className='form-control' {...register('add')} />

                    <input type='submit' value={'Submit'} className='mt-2' />
                    <input type='reset' value={'Reset'} className='float-end mt-2' />
                </form>

            </div>
        </>
    )
}

export default Add