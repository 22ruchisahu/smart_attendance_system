import React from "react";

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer">
          <div className="copyright">
            Copyright © 2023
            <b>
              <a href="https://www.ietdavv.edu.in/" className="davv">
                &nbsp; IET-DAVV
              </a>
            </b>
          </div>

          <div className="developer">
            Developed By:
            <b>
              <a className="aFooter" href="/developerPage">
                {" "}
                &nbsp;Team
              </a>
            </b>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
