import React from "react"
import { useForm, Controller } from "react-hook-form"
import NumberFormat from "react-number-format"
import "./App.css"

function App() {
  const { handleSubmit, register, control } = useForm({ defaultValues })

  const onSubmit = (data) => console.log(data)
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <header>
        <h1>Cadastre-se</h1>
      </header>
      <div>
        <section>
          <label>Nome</label>
          <input
            name="nome"
            className="input"
            ref={register}
            placeholder="Seu Nome Completo"
          />
        </section>
        <section>
          <label>Cpf</label>
          <Controller
            as={NumberFormat}
            label="CPF"
            name="cpf"
            placeholder="000.000.000-00"
            className="input"
            control={control}
            format="###.###.###-##"
          />
        </section>
        <button type="submit" className="button">
          cadastrar
        </button>
      </div>
    </form>
  )
}

export default App

const defaultValues = {
  nome: "",
  cpf: "",
}
