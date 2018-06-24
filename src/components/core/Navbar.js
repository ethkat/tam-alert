import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Nav, Navbar, NavItem, NavbarBrand } from 'reactstrap';
import CreatePostModal from '../post/CreatePostModal';

const StyledNavBrand = styled(NavbarBrand)`
  width: 100%;
  text-align: center;
`;

const NavItemStyled = styled(NavItem)`
  cursor: pointer;
`;

const NavbarStyled = styled(Navbar)`
  border-bottom: 1px solid rgba(0,0,0,.0975);
  background-color: #fff;
`;

class AppNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.close = this.close.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  close() {
    this.setState({ isOpen: false });
  }

  toggle() {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  render() {
    const { isOpen } = this.state;
    const { submitPost } = this.props;

    return (
      <NavbarStyled expand="md">
        <StyledNavBrand
          className="text-muted"
        >
          Tamaulipas Alerta
        </StyledNavBrand>
        <Nav
          className="ml-auto"
          navbar
        >
          <NavItemStyled onClick={this.toggle}>
           Crear
          </NavItemStyled>
        </Nav>
        <CreatePostModal
          close={this.toggle}
          submit={(data) => {
            submitPost(data, () => {
              this.close();
            });
          }}
          isOpen={isOpen}
        />
      </NavbarStyled>
    );
  }
}

AppNavbar.propTypes = {
  submitPost: PropTypes.func.isRequired,
};

export default AppNavbar;
