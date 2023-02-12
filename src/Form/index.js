import "./style.css"


const Form = () => (
    <form className="form js-form">
        <fieldset className="form__fieldset">
            <p>
                <label>
                    <span className="form__labelText"> Amount in PLN* </span>
                    <input className="form__field js-amount" type="number" min="0.1" step="any" name="amount" required />
                </label>
            </p>
            <p>
                <label>
                    <span className="form__labelText">I want to exchange for:</span>
                    <select className="form__field js-currency" name="currency">
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="CHF">CHF</option>
                        <option value="GBP">GBP</option>
                    </select>
                </label>
            </p>
            <p>
                <button className="form__button">{"calculate".toUpperCase()}</button>
            </p>
            <p className="form__labelText form__labelText--result">Result:</p>
            <p className="form__result js-result"></p>
        </fieldset>
    </form>
);

export default Form;