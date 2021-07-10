import logo from './logo.svg';


import Button from '@atlaskit/button';
import Lozenge from '@atlaskit/lozenge';
import Avatar from '@atlaskit/avatar';

const primaryButton = () => <Button appearance="primary">Primary button</Button>;
const subtleButton = () => <Button appearance="subtle">Action button</Button>;
const successBold = () => (
  <>
    <div>
      <Lozenge appearance="success" isBold>
        Success bold
      </Lozenge>
    </div>
  </>
);
const AvatarDefaultExample = () => {
  return <Avatar />;
};

function App() {
  const button = primaryButton();
  const cancel = subtleButton();
  const currRare = successBold();
  const avatar = AvatarDefaultExample();

  return (
    <div className="App">
      <header className="App-header">

        {button}
        {cancel}
        {currRare}{currRare}{avatar}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
