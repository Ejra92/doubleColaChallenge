export default ({onHowManyChanges, count, howManyTimes, stopOrContinue, restart, showThis5, stop}) =>
        <section className="ActionsTools">
            <input placeholder={'Cantidad de Double Colas disponibles'} type="number" onChange={onHowManyChanges}/>

            {count !== howManyTimes && <button onClick={stopOrContinue}>{stop ? `${showThis5.length === 5 ? 'Iniciar' : 'Continuar'}` : 'Detener'}</button>}

            {showThis5.length !== 5 && count > 1 && 
            <button onClick={restart}>
                Reiniciar
            </button>}
        </section>
