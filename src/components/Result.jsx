import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../context/DataProvider';
import { Box } from '@mui/material';
import styled from '@emotion/styled';

const Container = styled(Box)`
  height: 41vh;
`;

function Result() {
  const [res, setRes] = useState('');

  const { html, css, js } = useContext(DataContext);
  const result = `
    <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
    </html>`;

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setRes(result);
    }, 1000);

    return () => clearInterval(timeOut);
  }, [result]);

  return (
    <Container>
      <iframe
        srcDoc={res}
        title="Output"
        sandbox="allow-scripts"
        width="100%"
        height="100%"
      />
    </Container>
  );
}

export default Result;
