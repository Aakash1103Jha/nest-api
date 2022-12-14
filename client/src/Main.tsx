import { ChangeEventHandler, FC, FormEventHandler, useState } from 'react';
import { Button, Card, Form, Input, Label } from './components';

const Main: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [apiToken, setApiToken] = useState('');

  const copyToClipboard = async (token: string) => {
    if (!token) return alert('Nothing to copy!');
    await navigator.clipboard.writeText(token);
  };

  const onEmailChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setError('');
    setEmail(e.target.value);
  };

  const onPasswordChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setError('');
    setPassword(e.target.value);
  };

  const onResetHandler = () => {
    setApiToken('');
    setError('');
    setEmail('');
    setPassword('');
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const _res = await fetch('http://localhost:4002/api/auth/login', {
      body: JSON.stringify({ email, password }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (_res.status === 500) return setError('Something went wrong!');
    const resData = await _res.json();
    setApiToken(resData.data);
    setEmail('');
    setPassword('');
  };

  return (
    <main className="_main_">
      <div>
        <Form onSubmit={onSubmit}>
          <h1>Generate API Token</h1>
          <Label label="Email" htmlFor="_email_" isMandatory={true} />
          <Input
            id="_email_"
            placeholder="name@example.com"
            required={true}
            value={email}
            onChange={onEmailChange}
          />
          <Label label="Password" htmlFor="_password_" isMandatory={true} />
          <Input
            type="password"
            id="_password_"
            placeholder="**********"
            required={true}
            value={password}
            onChange={onPasswordChange}
          />
          {error && (
            <div className="error">
              <p>{error}</p>
            </div>
          )}
          <div className={`auth_cta_container`}>
            <Button type="reset" label="Reset" onClick={onResetHandler} />
            <Button label="Generate Token" />
          </div>
        </Form>
      </div>
      <div>
        {apiToken && (
          <Card>
            <p>Add this to your request header like</p>
            <p>{`{ authorization: Bearer "<token_string>" }`}</p>
            <p style={{ color: 'var(--gray-light)', margin: '1rem 0rem' }}>
              {apiToken}
            </p>
            <Button
              label="Copy to Clipboard"
              style={{ marginTop: '1rem' }}
              onClick={copyToClipboard.bind(null, apiToken)}
            />
          </Card>
        )}
      </div>
    </main>
  );
};

export default Main;
