import React, { useState } from 'react'

import api from '../../services/api'

const Login = ({ history }) => {
    const [email, setEmail] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()

        if (!email) {
            return
        }

        const res = await api.post('/session', { email })
        const { _id } = res.data

        localStorage.setItem('user', _id)

        history.push('/dashboard')
    }

    return (
        <>
            <p>
                Ofereça <strong>spots</strong> para programadores e encontre{' '}
                <strong>talentos</strong> para sua empresa
            </p>

            <form onSubmit={handleSubmit}>
                <label htmlFor='email'>Email *</label>
                <input
                    onChange={e => setEmail(e.target.value)}
                    type='email'
                    id='email'
                    value={email}
                    placeholder='Seu email'
                />

                <button type='submit' className='btn'>
                    Entrar
                </button>
            </form>
        </>
    )
}

export default Login
