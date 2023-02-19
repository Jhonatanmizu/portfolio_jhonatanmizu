import styled from 'styled-components'

interface LayoutProps {
  barTransform?: 'transform' | 'transformInverse' | 'opacity' | 'none'
}

export const transformations = {
  transform: 'translate(0, 11px) rotate(45deg)',
  transformInverse: ' translate(0, -11px) rotate(-45deg)',
  opacity: '0',
  none: ''
}

export const Wrapper = styled.div`
  display: inline-block;
  cursor: pointer;
`

export const Bar = styled.div<LayoutProps>`
  width: 3.6rem;
  height: 0.5rem;
  background-color: ${({ theme }) => theme.palette.common.white};

  margin: 0.6rem 0;
  transition: 0.4s;
  opacity: ${(props) =>
    props.barTransform === 'opacity'
      ? transformations[props.barTransform]
      : '1'};
  transform: ${(props) =>
    props.barTransform ? transformations[props.barTransform] : null};
`
