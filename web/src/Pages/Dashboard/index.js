import React, { useEffect, useState } from 'react';
import Statement from '../Statement';
import Header from '../../components/Header';
import { Container, TransactionButton } from './style';
import Modal from '../../components/Modal';
import { getUserDetails, getUserStatement } from '../../utils/api';
import { statementFormatter } from '../../utils/informationFormatters';

function Dashboard(props) {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userStatement, setUserStatement] = useState(undefined);
  const [userInformation, setUserInformation] = useState(undefined);

  useEffect(() => {
    fetchAllIData();
  }, []);

  const fetchAllIData = async () => {
    await fetchUserStatement();
    await fetchUserInformation();
    setLoading(false);
  };

  const fetchUserInformation = async () => {
    const userInfo = await getUserDetails(process.env.REACT_APP_USER_ID);
    setUserInformation(userInfo.body);
  };

  const fetchUserStatement = async () => {
    const userStatementData = await getUserStatement(
      process.env.REACT_APP_USER_ID,
      0,
      10,
      1
    );
    const formattedStatement = userStatementData.body.map((statement) => {
      return statementFormatter(statement);
    });

    setUserStatement(formattedStatement);
  };

  return (
    <div>
      <Container>
        <Header loading={loading} userInformation={userInformation} />
        <Statement loading={loading} statement={userStatement} />
        <TransactionButton onClick={() => setShowModal(true)}>
          Fazer Transação
        </TransactionButton>
        <Modal
          show={showModal}
          onClose={() => setShowModal(false)}
          userId={userInformation && userInformation._id}
        />
      </Container>
    </div>
  );
}

export default Dashboard;
