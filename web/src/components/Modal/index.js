import React from 'react';
import {
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalBody,
  ModalOverlay,
} from './style';
import { useForm } from '../../hooks/useForm';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { handleTransaction } from '../../utils/api';
import { replaceCommaWithDot } from '../../utils/informationFormatters';

const defaultMaskOptions = {
  prefix: 'R$',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: '.',
  allowDecimal: true,
  decimalSymbol: ',',
  decimalLimit: 2,
  integerLimit: 7,
  allowNegative: false,
  allowLeadingZeroes: false,
};

const CurrencyInput = ({ maskOptions, ...inputProps }) => {
  const currencyMask = createNumberMask({
    ...defaultMaskOptions,
    ...maskOptions,
  });

  return <MaskedInput mask={currencyMask} {...inputProps} />;
};

CurrencyInput.defaultProps = {
  inputMode: 'numeric',
  maskOptions: {},
};

function Modal(props) {
  const [form, handleFormChange, resetForm] = useForm({
    amount: undefined,
    category: null,
  });

  if (!props.show) {
    return null;
  }

  const handleTransactionFormSubmit = async (event) => {
    event.preventDefault();

    const formattedAmount = replaceCommaWithDot(form.amount).replace('R$', '');
    const transaction = {
      amount: +formattedAmount,
      category: form.category,
      user_id: props.userId,
    };

    await handleTransaction(transaction);
    window.location.reload(false);
  };

  return (
    <ModalOverlay onClick={props.onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <h3>Realizar transação</h3>
        </ModalHeader>
        <ModalBody>
          <form onSubmit={handleTransactionFormSubmit}>
            <label>Valor da transação: </label>
            <CurrencyInput
              onChange={handleFormChange}
              value={form.amount}
              required
              name="amount"
            />
            <label htmlFor="category">Tipo de transação</label>
            <select name="category" onChange={handleFormChange} required>
              <option value={null}></option>
              <option value="withdrawl">Retirada</option>
              <option value="payment">Pagamento</option>
              <option value="deposit">Depósito</option>
            </select>
            <button type="submit">Salvar transação</button>
          </form>
        </ModalBody>
        <ModalFooter>
          <button onClick={props.onClose}>Fechar</button>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
}

export default Modal;
