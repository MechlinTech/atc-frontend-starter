import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Btn2 } from '../atoms/buttons'

import { Container, Row, Col } from 'reactstrap'

const CustomerSelections = (props) => {
    const { customer } = props

    console.log("props", props.customer)

    return (
        <Container>
            <Row>Customer use selected lists</Row>
            <Row>
                <Col>
                    <Row><h5>Genral</h5></Row>
                    {
                        customer.genral.map(item => <Row key={item}>{item}</Row>)
                    }
                </Col>
                <Col>
                    <Row><h5>Cooking and Cleaning</h5></Row>
                    {
                        customer.coock.map(item => <Row key={item}>{item}</Row>)
                    }
                </Col>
            </Row>
            <Row>
                <Col>
                    <Row><h5>Entertainment</h5></Row>
                    {
                        customer.entertainment.map(item => <Row key={item}>{item}</Row>)
                    }

                </Col>
                <Col>
                    <Row><h5>Outside and View</h5></Row>
                    {
                        customer.outsideview.map(item => <Row key={item}>{item}</Row>)
                    }
                </Col>
            </Row>
            <Link to='/customersuse'><Btn2 text='go to "Customer Usage page" ' /></Link>
        </Container>
    )
}

const mapStateToProp = (state) => ({
    customer: state.customerUse.selectedItem
})

export default connect(mapStateToProp)(CustomerSelections)