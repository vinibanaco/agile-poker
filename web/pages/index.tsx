import { useCallback, useState } from 'react';
import type { ChangeEvent } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import Layout from '../components/layout';
import Header from '../components/header';
import CreateRoomInput from '../components/create-room-input';

import styles from './index.module.css';

const usernameInputId = 'username';

const Home: NextPage = () => {
  const [usernameInputValue, setUsernameInputValue] = useState('');
  const [usernameInputLoading, setUsernameInputLoading] = useState(false);

  const handleUsernameInputValueChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setUsernameInputValue(value);
  }, []);

  const handleSubmit = useCallback((event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    setUsernameInputLoading(true);

    // TODO: send request
  }, []);

  return (
    <Layout>
      <Head>
        <title>Scrum Voting</title>
        <meta
          name="description"
          content="The easiest way for you and your team to vote user stories"
        />
      </Head>

      <Header />

      <main className={styles.content}>
        <form onSubmit={handleSubmit} style={{ display: 'inline-block' }}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor={usernameInputId} className={styles.field}>
            Please, enter your name to create the new room
          </label>

          <div className={styles.inputWrapper}>
            <CreateRoomInput
              id={usernameInputId}
              value={usernameInputValue}
              onChange={handleUsernameInputValueChange}
              loading={usernameInputLoading}
            />
          </div>
        </form>
      </main>
    </Layout>
  );
};

export default Home;
