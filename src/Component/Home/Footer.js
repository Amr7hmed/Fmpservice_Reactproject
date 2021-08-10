import React from 'react';
import Logofooter from '../image/footer.png';

function Footer() {
    return (<footer className="footer mt-auto py-3 bg-light">
    <div className="container">
        <div className="d-flex justify-content-between">
            <img src={Logofooter} className="logonav"/>
            <span className="text-muted">Place sticky footer content here.</span>
        </div>
    </div>
  </footer>
    )
}

export default Footer;
