import React, { useState, useEffect } from 'react'
import { Container, Row, Col, FormGroup, Label, Input } from 'reactstrap'
import { Btn2, Btn3 } from '../atoms/buttons'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setUserSelection } from '../../store/actions/customeruseAction'
import { Scrollbars } from 'react-custom-scrollbars';


const CustomersUse = (props) => {
    const { customer } = props

    const [Genral, setGenral] = useState([])
    const [CandC, setCandC] = useState([])
    const [Ent, setEnt] = useState([])
    const [OandV, setOandV] = useState([])

    const ptext = {
        fontSize: "18px",
        marginBottom: "10px",
    }

    useEffect(() => {
        console.log("customer", customer)
        customer.genral.length > 0 ? setGenral(customer.genral) : setGenral([])
        customer.coock.length > 0 ? setCandC(customer.coock) : setCandC([])
        customer.entertainment.length > 0 ? setEnt(customer.entertainment) : setEnt([])
        customer.outsideview.length > 0 ? setOandV(customer.outsideview) : setOandV([])

    }, [customer])

    const handleGenralCheck = (item) => {
        if (Genral.includes(item)) {
            setGenral(Genral.filter(i => i !== item))
        } else {
            setGenral([...Genral, item])
        }
    }

    const handleCandC = (item) => {
        if (CandC.includes(item)) {
            setCandC(CandC.filter(i => i !== item))
        } else {
            setCandC([...CandC, item])
        }
    }

    const HandleEnt = (item) => {
        if (Ent.includes(item)) {
            setEnt(Ent.filter(i => i !== item))
        } else {
            setEnt([...Ent, item])
        }
    }

    const HandleOandV = (item) => {
        if (OandV.includes(item)) {
            setOandV(OandV.filter(i => i !== item))
        } else {
            setOandV([...OandV, item])
        }
    }

    const handleUpdate = () => {
        let selecteditems = {
            genral: Genral,
            coock: CandC,
            entertainment: Ent,
            outsideview: OandV
        }
        props.dispatch(setUserSelection(selecteditems))

        setOandV([])
        setGenral([])
        setCandC([])
        setEnt([])
    }

    return (
        <>
            <Container style={{ width: "50%", height: "auto" }}>
                <Row className="mb-3 mt-5">
                    <h1 className="text-left" style={{ width: "85%", height: "auto" }}>What can your customers use at your place?</h1>
                </Row>
                <Row>
                    <Scrollbars autoHide style={{ height: 350 }}>
                        <Container className="ml-2 mr-2">

                            <Row>
                                <p className="text-left mb-3" style={ptext}>What if I don't see a facility I offer?</p>
                                <p className="text-left">the facilitys listed hear are the ones most searched for by guests. After you complete your registration, you can add more facilities for a larger list in the extrane, the platform you'll use to manage your property</p>
                            </Row>
                            <Row>
                                {/* Genral Coloumn  */}
                                <Col>
                                    <Row>
                                        <p style={ptext}>General</p>
                                    </Row>
                                    <Row>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" value="Air Conditioning" onChange={e => handleGenralCheck(e.target.value)} checked={Genral.includes("Air Conditioning")} />{' '}
          Air Conditioning
        </Label>
                                        </FormGroup>
                                    </Row>
                                    <Row>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" value="Heaating" onChange={e => handleGenralCheck(e.target.value)} checked={Genral.includes("Heaating")} />{' '}
          Heating
        </Label>
                                        </FormGroup>
                                    </Row>
                                    <Row>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" value="Free WiFi" onChange={e => handleGenralCheck(e.target.value)} checked={Genral.includes("Free WiFi")} />{' '}
          Free WiFi
        </Label>
                                        </FormGroup>
                                    </Row>
                                    <Row>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" value="Free on-site parking" onChange={e => handleGenralCheck(e.target.value)} checked={Genral.includes("Free on-site parking")} />{' '}
          Free on-site parking
        </Label>
                                        </FormGroup>
                                    </Row>
                                    <Row>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" value="Electric vehical charging station" onChange={e => handleGenralCheck(e.target.value)} checked={Genral.includes("Electric vehical charging station")} />{' '}
          Electric vehical charging station
        </Label>
                                        </FormGroup>
                                    </Row>
                                </Col>

                                <Col>
                                    { /* Cooking and cleaning coloumn */}
                                    <Row>
                                        <p style={ptext} >Cooking and cleaning</p>
                                    </Row>
                                    <Row>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" value="Kitchen" onChange={e => handleCandC(e.target.value)} checked={CandC.includes("Kitchen")} />{' '}
          Kitchen
        </Label>
                                        </FormGroup>
                                    </Row>
                                    <Row>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" value="Kitchenette" onChange={e => handleCandC(e.target.value)} checked={CandC.includes("Kitchenette")} />{' '}
          kitchenette
        </Label>
                                        </FormGroup>
                                    </Row>
                                    <Row>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" value="Washing mechine" onChange={e => handleCandC(e.target.value)} checked={CandC.includes("Washing mechine")} />{' '}
          Washing mechine
        </Label>
                                        </FormGroup>
                                    </Row>
                                </Col>
                            </Row><hr />
                            <Row>
                                <Col>
                                    {/*  Entertainment coloumn  */}
                                    <Row>
                                        <p style={ptext} >Entertainment</p>
                                    </Row>
                                    <Row>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" value="flat-screen TV" onChange={e => HandleEnt(e.target.value)} checked={Ent.includes("flat-screen TV")} />{' '}
          flat-screen TV
        </Label>
                                        </FormGroup>
                                    </Row>
                                    <Row>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" value="Swimming pool" onChange={e => HandleEnt(e.target.value)} checked={Ent.includes("Swimming pool")} />{' '}
          Swimming pool
        </Label>
                                        </FormGroup>
                                    </Row>
                                    <Row>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" value="Hot Tub" onChange={e => HandleEnt(e.target.value)} checked={Ent.includes("Hot Tub")} />{' '}
          Hot Tub
        </Label>
                                        </FormGroup>
                                    </Row>
                                    <Row>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" value="Minibar" onChange={e => HandleEnt(e.target.value)} checked={Ent.includes("Minibar")} />{' '}
          Minibar
        </Label>
                                        </FormGroup>
                                    </Row>
                                    <Row>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" value="Sauna" onChange={e => HandleEnt(e.target.value)} checked={Ent.includes("Sauna")} />{' '}
          Sauna
        </Label>
                                        </FormGroup>
                                    </Row>
                                </Col>
                                <Col>
                                    {/* Outside and View coloumn */}
                                    <Row><p style={ptext}>Outside and View</p></Row>
                                    <Row>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" value="Balcony" onChange={e => HandleOandV(e.target.value)} checked={OandV.includes("Balcony")} />{' '}
          Balcony
        </Label>
                                        </FormGroup>
                                    </Row>
                                    <Row>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" value="Garden view" onChange={e => HandleOandV(e.target.value)} checked={OandV.includes("Garden view")} />{' '}
          Garden view
        </Label>
                                        </FormGroup>
                                    </Row>
                                    <Row>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" value="Terrace" onChange={e => HandleOandV(e.target.value)} checked={OandV.includes("Terrace")} />{' '}
          Terrace
        </Label>
                                        </FormGroup>
                                    </Row>
                                    <Row>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" value="view" onChange={e => HandleOandV(e.target.value)} checked={OandV.includes("view")} />{' '}
          View
        </Label>
                                        </FormGroup>
                                    </Row>
                                </Col>
                            </Row >

                        </Container>
                    </Scrollbars>
                </Row>
                <Row className="mt-4 mb-5 pb-5">
                    <Col xs={4} className="pl-2 text-left">
                        <Link to='/customerselections'> < div onClick={() => handleUpdate()} > <Btn2 text="Update Calender & Continue" /> </div></Link>
                    </Col>
                    <Col xs={4} className=" text-left">
                        <Link to='/'><Btn3 text="Cancel" /></Link>
                    </Col>
                    <Col xs={4}>
                        <Btn3 icon text=" Help" > </Btn3>
                    </Col>
                </Row>

            </Container>
        </>
    )

}

const mapStateToProps = (state) => ({
    customer: state.customerUse.selectedItem
})

export default connect(mapStateToProps)(CustomersUse)