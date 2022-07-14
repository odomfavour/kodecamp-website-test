import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function Dean() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <input placeholder=" Select Gender" className ="form-control enroll-input bg-transparent text-muted" variant="primary" onClick={handleShow}/>
            <Modal
            
                backdrop="static"
                centered
                show={show}
                onHide={handleClose}
                animation={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body scrollable={true}>
                    <div className="form-check">
                            
                            <label className="form-check-label" >
                        <input className="form-check-input d-none" 
                        type="radio" 
                        name="flexRadioDefault"
                        // id="flexRadioDefault1" 
                        checked/>
                            <div><div className="custom-radio"></div> <div className=" text-position">Default checked radio</div>  </div>
                            </label>
                    </div>
                    <div className="form-check">
                            <label className="form-check-label" >
                        <input className="form-check-input d-none" 
                        name="flexRadioDefault"
                        type="radio" 
                        //id="flexRadioDefault2" 
                        checked/>
                            <div><div className="custom-radio"></div> <div className=" text-position">Default checked radio</div>  </div>
                            </label>
                    </div>
                    <div className="form-check">
                            <label className="form-check-label" >
                        <input className="form-check-input d-none" 
                        type="radio" 
                        name="flexRadioDefault"
                        //id="flexRadioDefault3" 
                        checked/>
                                <div>
                                    <div className="custom-radio"></div> 
                                    <div className=" text-position">Default checked radio</div>
                                </div>
                            </label>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Dean;
