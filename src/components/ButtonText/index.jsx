import { Container } from './styles';
import PropTypes from 'prop-types';

export function ButtonText({ title, isActive,...rest }) {
  return (
    <Container 
      type="button"
      $isactive={isActive ? isActive.toString() : "false"} 
      {...rest}
      >
      {title}
    </Container>
  )
}

ButtonText.propTypes = {
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
}  