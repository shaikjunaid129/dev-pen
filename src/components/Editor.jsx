import styled from '@emotion/styled';
import { Box } from '@mui/material';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { Controlled as CodeMirror } from 'react-codemirror2';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { useState } from 'react';

const Container = styled(Box)`
  flex-grow: 1;
  flex-basic: 0;
  display: flex;
  flex-direction: column;
  padding: 0 8px 8px;
`;

const HeadingContainer = styled(Box)`
  background: #060606;
  display: flex;
  color: #aaaebc;
  justify-content: space-between;
  font-weight: 700;
`;

const Heading = styled(Box)`
  background: #1d1e22;
  display: flex;
  padding: 9px 12px;
`;

const StyledIcon = styled(Box)`
  color: #000;
  height: 20px;
  width: 20px;
  display: flex;
  place-content: center;
  border-radius: 5px;
  margin-right: 5px;
  padding-bottom: 2px;
`;

/* eslint-disable react/prop-types */
function Editor({ language, icon, color, value, onChange }) {
  const [open, setOpen] = useState(true);
  const handleChange = (editor, data, value) => {
    onChange(value);
  };
  const width = window.innerWidth;
  return (
    <Container style={open ? null : { flexGrow: 0 }}>
      <HeadingContainer>
        <Heading>
          <StyledIcon style={{ background: color }} component={'span'}>
            {icon}
          </StyledIcon>
          {language}
        </Heading>
        {width > 600 ? (
          <CloseFullscreenIcon
            fontSize="small"
            style={{ alignSelf: 'center', cursor: 'pointer' }}
            onClick={() => setOpen((prevState) => !prevState)}
          />
        ) : null}
      </HeadingContainer>

      <CodeMirror
        value={value}
        onBeforeChange={handleChange}
        options={{
          theme: 'material',
          lineNumbers: true,
          autocorrect: true,
        }}
      />
    </Container>
  );
}

export default Editor;
