import './App.css';
import styled from 'styled-components';
import UploadSite from './Sites/UploadSite/UploadSite';
import RecordSite from './Sites/RecordSite/RecordSite';
import ContactSite from './Sites/ConcactSite/ContactSite';

function App() {
  return (
    <Body>
      <Header></Header>
      <Title>GENDER RECOGNITION</Title>
      <Sites>
        <UploadSite />
        <RecordSite />
        <ContactSite />
      </Sites>
    </Body>
  );
}

export default App;

const Body = styled.div`
  margin: auto 5%;
`

const Header = styled.section`
  height: 5rem;
  background-color: rgb(104,131,132);
  margin: 0 auto;
`

const Title = styled.h1`
  font-size: 5rem;
  color: rgba(18,49,50);
  text-align: center;
  margin: 10rem 0rem;
`

const Sites = styled.section`
  display: flex;
  justify-content: space-around;
`