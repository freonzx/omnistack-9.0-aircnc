import React, { useState, useMemo } from 'react'
import camera from '../../assets/camera.svg'
import api from '../../services/api'
import './styles.css'

const New = ({ history }) => {
    const [company, setCompany] = useState('')
    const [techs, setTechs] = useState('')
    const [price, setPrice] = useState('')
    const [thumbnail, setThumbnail] = useState(null)

    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null
    }, [thumbnail])

    async function handleSubmit(e) {
        e.preventDefault()

        if (!company || !techs || !thumbnail) {
            return
        }

        const user_id = localStorage.getItem('user')
        const data = new FormData()

        data.append('thumbnail', thumbnail)
        data.append('techs', techs)
        data.append('company', company)
        data.append('price', price)

        await api.post('/spots', data, {
            headers: {
                user_id
            }
        })

        history.push('/dashboard')
    }

    return (
        <>
            <label
                id='thumbnail'
                style={{ backgroundImage: `url(${preview})` }}
                className={thumbnail ? 'has-thumbnail' : ''}
            >
                <input
                    type='file'
                    onChange={e => setThumbnail(e.target.files[0])}
                />
                <img src={camera} alt='Select' />
            </label>
            <form onSubmit={handleSubmit}>
                <label htmlFor='company'>EMPRESA *</label>
                <input
                    type='text'
                    id='company'
                    placeholder='Sua Empresa'
                    value={company}
                    onChange={e => setCompany(e.target.value)}
                />

                <label htmlFor='techs'>
                    TECNOLOGIAS * <span>(separadas por virgula)</span>
                </label>
                <input
                    type='text'
                    id='techs'
                    placeholder='Quais tecnologias usam'
                    value={techs}
                    onChange={e => setTechs(e.target.value)}
                />

                <label htmlFor='price'>
                    VALOR DA DIARIA * <span>(em branco para GRATUITO)</span>
                </label>
                <input
                    type='text'
                    id='price'
                    placeholder='Valor cobrado por dia'
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                />

                <button className='btn'>Cadastrar</button>
            </form>
        </>
    )
}

export default New
