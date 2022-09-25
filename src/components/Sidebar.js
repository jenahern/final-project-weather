import React from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'


export default function Sidebar() {
  return (
    <div className="card bg-light">
        <Nav>
            <Nav.Item>
                <Nav.Link as={NavLink} to="/">New Prediction</Nav.Link>
                <Nav.Link as={NavLink} to="#">Today's Weather</Nav.Link>
                <Nav.Link as={NavLink} to="predictions">All Predictions</Nav.Link>
                <Nav.Link as={NavLink} to="predictions/sunny">Sunny</Nav.Link>
                <Nav.Link as={NavLink} to="predictions/rainy">Rainy</Nav.Link>
            </Nav.Item>
        </Nav>
    </div>
  )
}