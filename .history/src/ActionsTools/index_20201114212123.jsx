import './styles.scss'

export default ({onHowManyChanges, count, howManyTimes, stopOrContinue, restart, showThis5, stop}) =>
        <section className="ActionsTools">
            <input placeholder={'Cantidad'} type="number" onChange={onHowManyChanges}/>

            <div className="actionsButtons">
                {count !== howManyTimes && <button onClick={stopOrContinue}>{stop ? `${showThis5.length === 5 ? 'Iniciar' : 'Continuar'}` : 'Detener'}</button>}

                {showThis5.length >= 5 && count > howManyTimes && 
                    <button onClick={restart}>
                        Reiniciar
                    </button>}
            </div>
        </section>
