import React, { useState, useEffect } from 'react'
import Axios from 'axios'

function RegisterNewPartnerStore() {

  const [formStore, setFormStore] = useState('')
  const [formProduct, setFormProduct] = useState('')

  const submitRegister = () => {
    Axios.post('http://localhost:3001/api/insert', {
      formStore: formStore,
      formProduct: formProduct
    }).then(()=>{
      alert('Loja cadastrada com sucesso ;)')
    })
  }

  return (
    <div>
      <h1>Cadastre sua Loja</h1>
      <div className="form">
        <input type="text"
          name="formStore"
          placeholder="Nome da sua Loja"
          onChange={(e) => {
            setFormStore(e.target.value)
          }} />
        <input type="text"
          name="formProduct"
          placeholder="Seu Produto"
          onChange={(e) => {
            setFormProduct(e.target.value)
          }} />
      </div>
      <button className="formButton"
        cursor="pointer"
        onClick={submitRegister}>
        Enviar Cadastro
      </button>
    </div>
  )
}

export default RegisterNewPartnerStore

