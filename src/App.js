import './App.css';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UploadSite from './Sites/UploadSite/UploadSite';
import RecordSite from './Sites/RecordSite/RecordSite';
import ContactSite from './Sites/ConcactSite/ContactSite';
import MainSite from './Sites/MainSite.js/MainSite';



function App() {
  return (
    <Body>
      <Header></Header>
      <Title>GENDER RECOGNITION</Title>
      <Router>
        <Switch>
          <Route path='/' exact component={MainSite} />
          <Route path='/UploadRecording' exact component={UploadSite} />
          <Route path='/Record' exact component={RecordSite} />
          <Route path='/Contact' exact component={ContactSite} />
        </Switch>
      </Router>
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