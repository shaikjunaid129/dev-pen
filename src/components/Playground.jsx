import styled from '@emotion/styled';
import Editor from './Editor';
import { Box } from '@mui/material';
import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';

const Container = styled(Box)`
  display: flex;
  background: #060606;
  height: 50vh;
  @media (max-width: 1020px) {
    flex-direction: column;
    height: 100%;
  }
`;

function Playground() {
  const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);
  return (
    <Container>
      <Editor
        language="HTML"
        icon="/"
        color="#ff3c41"
        value={html}
        onChange={setHtml}
      />
      <Editor
        language="CSS"
        icon="*"
        color="#0ebeff"
        value={css}
        onChange={setCss}
      />
      <Editor
        language="JS"
        icon="()"
        color="#fcd000"
        value={js}
        onChange={setJs}
      />
    </Container>
  );
}

export default Playground;
