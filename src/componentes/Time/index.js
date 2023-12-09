import './Time.css'

const Time = (props) => {
    const css = { backgroundColor: props.corSecundaria,
                  borderColor: props.corPrimaria }
    return (
        <section className='time' style={css} >
            <h3 style={css} >{props.nome}</h3>
        </section>
    )
}

export default Time