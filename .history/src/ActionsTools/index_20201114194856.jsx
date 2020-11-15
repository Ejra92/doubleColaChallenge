export default ({onHowManyChanges, count, howManyTimes, stopOrContinue, restart, showThis5}) =>
        <section>
            <input type="number" onChange={onHowManyChanges}/>

            {count !== howManyTimes && <button onClick={showThis5.length === 5 ? init : stopOrContinue}>{stop ? `${showThis5.length === 5 ? 'Iniciar' : 'Continuar'}` : 'Detener'}</button>}

            {showThis5.length !== 5 && count > 1 && 
            <button onClick={restart}>
                Reiniciar
            </button>}
        </section>
