import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

function Update() {

    const { register, handleSubmit, setValue } = useForm()

    const { userId } = useParams()

    const navi = useNavigate()

    async function fetchData() {
        const result = await axios.get(`http://localhost:5000/user/${userId}`)
        setValue('name', result.data.name)
        setValue('cname', result.data.cname)
        setValue('add', result.data.add)

    }

    function saveData(data) {
        axios.put(`http://localhost:5000/user/${userId}`, data)
        navi('/show')
    }

    useEffect(() => {
        fetchData()
    }, [])



    return (
        <>
            <div className=" container border border-info mt-3 p-3">
                <center><b>Update Form </b></center>
                <form onSubmit={handleSubmit(saveData)}>
                    <label htmlFor='n'> Employee Name : </label>
                    <input type='text' id='n' className='form-control' {...register('name')} />

                    <label htmlFor='cname'> Employee Company Name : </label>
                    <input type='text' id='cname' className='form-control' {...register('cname')} />

                    <label htmlFor='sal'> Employee Salary : </label>
                    <input type='number' id='sal' className='form-control' {...register('sal')} />

                    <label htmlFor='add'> Employee Address : </label>
                    <input type='text' id='add' className='form-control' {...register('add')} />

                    <input type='submit' value={'Update'} className='mt-2' />
                    <input type='reset' value={'Reset'} className='float-end mt-2' />
                </form>

            </div>
        </>
    )
}

export default Update