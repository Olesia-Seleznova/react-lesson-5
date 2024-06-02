import { RiExchangeDollarFill } from 'react-icons/ri';
import styles from './ExchangeForm.module.css';
import { useDispatch } from 'react-redux';
import { convertCurrency } from 'reduxState/currencyOps';

const validation = /^\d+(\.\d{1,2})?\s[a-zA-Z]{3}\sin\s[a-zA-Z]{3}$/;

export const ExchangeForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const value = form.currency.value;
    const isValid = validation.test(value);
    if (!isValid) {
      return alert('Please enter valid request! Example, 15 USD in UAH');
    }
    const [amount, from, , to] = value.split(' ');
    const data = { amount, from, to };
    dispatch(convertCurrency(data));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <button className={styles.button} type="submit">
        <RiExchangeDollarFill className={styles.icon} />
      </button>

      <input
        title="Request format 15 USD in UAH"
        name="currency"
        className={styles.input}
      />
    </form>
  );
};
