import React from 'react'
import { Sidenav, Nav, Icon, Input, Dropdown, InputGroup, Loader } from 'rsuite';
import 'rsuite/dist/styles/rsuite.min.css';

const SideNav = ({course, loaded, searchHandler}) => {
  
  return (
    <div className="side-nav--wrapper" >
      {!loaded && <Loader backdrop content="loading..." vertical />}
      <Sidenav defaultOpenKeys={['3', '4']}>
        <Sidenav.Header>
          <div className="side-nav--header" icon={<Icon icon="info" />}>
            <span>BSB10115</span>
            <p>Certificate I in Business</p> 
          </div>
        </Sidenav.Header>
        <Sidenav.Body>
          <Nav>
            <Nav.Item eventKey="1" icon={<Icon icon="info" />}>
              Course Overview
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<Icon icon="comment" />}>
              Accouncements
            </Nav.Item>
            <Nav.Item eventKey="3" icon={<Icon icon="map-marker" />}>
              Workshops
            </Nav.Item>
            <Nav.Item eventKey="4" icon={<Icon icon="group" />}>
              Learning
            </Nav.Item>
            <Nav.Item eventKey="5" icon={<Icon icon="building2" />}>
              Assesments
            </Nav.Item>
            <Nav.Item eventKey="6" icon={<Icon icon="file" />}>
              Resources
            </Nav.Item>
            <Dropdown eventKey="7" title="Units" icon={<Icon icon="bookmark" />} placement="right">
              <InputGroup inside style={{width: "90%", margin: "0 auto"}}>
                <Input onChange={searchHandler} />
                <InputGroup.Addon>
                  <Icon icon="search" />
                </InputGroup.Addon>
              </InputGroup>
              {
                course.map((course, i) => (
                  <Dropdown.Item key={i} eventKey={`7-${i+1}`}>
                    <div className="unit-wrapper">
                      <span>{course.unitCode} </span> 
                      <Icon icon='circle' style={{color: "#FFC107"}} />
                      <span> {course.status}</span> 
                      <p>{course.unitName}</p> 
                    </div>
                  </Dropdown.Item>
                ))
              }
            </Dropdown>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default SideNav;