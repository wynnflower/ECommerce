import React,  { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import cookie from 'universal-cookie'
import {resetUser} from './../1.actions'

const objCookie=new cookie()
class HeaderKu extends Component{

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
        isOpen: false
      };
    }
    toggle() {
       this.setState({
         isOpen: !this.state.isOpen
       });
    }

    onBtnLogout=()=>{
        objCookie.remove('userData')
        this.props.resetUser()
    }
    render(){ 
        // if (this.props.nama===""){
            return(
                <div style={{marginBottom:"75px"}}>
                    <Navbar color="light" light expand="md" fixed="top">
                        <NavbarBrand className="ml-2" ><Link to='/'> <img src="https://minamotoysjogja.files.wordpress.com/2016/10/minamologo.png?w=251&h=300" alt="brand" width="30px" /> </Link> </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                <div className="input-group border-right" style={{width:"350px"}}>
                                    <input type="text" ref="searchBook" className="form-control" placeholder="Masukkan kata kunci ... " />
                                    <div className="input-group-append mr-2">
                                        <button className="btn border-secondary" type="button" id="button-addon2"><i className="fas fa-search" /></button>
                                    </div>
                                </div> 
                                </NavItem>
                                {
                                    this.props.role==="admin"?
                                    <NavItem>
                                    <Link to="/manage"><NavLink className="btn btn-default border-secondary mr-1" style={{fontSize:"14px"}}><i class="fas fa-tasks"></i> Manage Product</NavLink></Link>
                                    </NavItem>
                                    :null
                                }
                                {
                                    this.props.nama==="" ?
                                       <NavItem>
                                        <Link to="/register"><NavLink className="btn btn-default border-secondary mr-1" style={{fontSize:"14px"}}><i className="fas fa-user-plus" /> Daftar</NavLink></Link>
                                        </NavItem>
                                :
                                        <NavItem>
                                        <NavLink>Hi, {this.props.nama}</NavLink>
                                        </NavItem>

                                }
                                {
                                    this.props.nama==="" ?
                                       
                                        <NavItem>
                                        <Link to="/login"><NavLink className="btn btn-default border-primary" style={{fontSize:"14px"}}><i className="fas fa-sign-in-alt" /> Masuk</NavLink></Link>
                                        </NavItem> 
                                      
                                :
                                        
                                        <NavItem>
                                            <Link to="/login"><NavLink className="btn btn-default border-primary" style={{fontSize:"14px"}}><i className="fas fa-shopping-cart"/> Cart</NavLink></Link>
                                        </NavItem>                                
                                }
                                {
                                    this.props.nama!==""?
                                    <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Menu
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                    <DropdownItem>
                                        Histori Transaksi
                                    </DropdownItem>
                                    <DropdownItem>
                                        Edit Profile
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem onClick={this.onBtnLogout}>
                                        Logout
                                    </DropdownItem>
                                    </DropdownMenu>
                                 </UncontrolledDropdown>
                                    : null
                                }
                                {/* <NavItem>
                                    <Link to="/register"><NavLink className="btn btn-default border-secondary mr-1" style={{fontSize:"14px"}}><i className="fas fa-user-plus" /> Daftar</NavLink></Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/login"><NavLink className="btn btn-default border-primary" style={{fontSize:"14px"}}><i className="fas fa-sign-in-alt" /> Masuk</NavLink></Link>
                                </NavItem> */}
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            );
        // } else{
        //     return(
        //         <div style={{marginBottom:"75px"}}>
        //             <Navbar color="light" light expand="md" fixed="top">
        //                 <NavbarBrand className="ml-2" ><Link to='/'> <img src="https://minamotoysjogja.files.wordpress.com/2016/10/minamologo.png?w=251&h=300" alt="brand" width="30px" /> </Link> </NavbarBrand>
        //                 <NavbarToggler onClick={this.toggle} />
        //                 <Collapse isOpen={this.state.isOpen} navbar>
        //                     <Nav className="ml-auto" navbar>
        //                         <NavItem>
        //                         <div className="input-group border-right" style={{width:"350px"}}>
        //                             <input type="text" ref="searchBook" className="form-control" placeholder="Masukkan kata kunci ... " />
        //                             <div className="input-group-append mr-2">
        //                                 <button className="btn border-secondary" type="button" id="button-addon2"><i className="fas fa-search" /></button>
        //                             </div>
        //                         </div> 
        //                         </NavItem>
                                
        //                         <NavItem>
        //                             <NavLink>Hi, {this.props.nama}</NavLink>
        //                         </NavItem>
        //                         <NavItem>
        //                             <Link to="/login"><NavLink className="btn btn-default border-primary" style={{fontSize:"14px"}}><i className="fas fa-shopping-cart"/> Cart</NavLink></Link>
        //                         </NavItem>
        //                         <UncontrolledDropdown nav inNavbar>
        //                             <DropdownToggle nav caret>
        //                                 Menu
        //                             </DropdownToggle>
        //                             <DropdownMenu right>
        //                             <DropdownItem>
        //                                 Histori Transaksi
        //                             </DropdownItem>
        //                             <DropdownItem>
        //                                 Edit Profile
        //                             </DropdownItem>
        //                             <DropdownItem divider />
        //                             <DropdownItem onClick={this.onBtnLogout}>
        //                                 Logout
        //                             </DropdownItem>
        //                             </DropdownMenu>
        //                         </UncontrolledDropdown>
        //                     </Nav>
        //                 </Collapse>
        //             </Navbar>
        //         </div>
        //     );
        // }
            
    }
}

const mapStateToProps=(state)=>{
    return{
        nama:state.user.username,
        role:state.user.role
    }
}

export default connect (mapStateToProps,{resetUser})(HeaderKu);