import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faPinterest, faGoogle, faYoutube, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Hobbycue</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="#!" className="text-dark">About Us</a></li>
              <li><a href="#!" className="text-dark">Our Services</a></li>
              <li><a href="#!" className="text-dark">Work with Us</a></li>
              <li><a href="#!" className="text-dark">FAQ</a></li>
              <li><a href="#!" className="text-dark">Contact Us</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">How Do I</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="#!" className="text-dark">Sign Up</a></li>
              <li><a href="#!" className="text-dark">Add a Listing</a></li>
              <li><a href="#!" className="text-dark">Claim Listing</a></li>
              <li><a href="#!" className="text-dark">Post a Query</a></li>
              <li><a href="#!" className="text-dark">Add a Blog Post</a></li>
              <li><a href="#!" className="text-dark">Other Queries</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="#!" className="text-dark">Listings</a></li>
              <li><a href="#!" className="text-dark">Blog Posts</a></li>
              <li><a href="#!" className="text-dark">Shop / Store</a></li>
              <li><a href="#!" className="text-dark">Community</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Social Media</h5>
            <div className="d-flex justify-content-center">
                <a href="#!" className="text-dark mx-2"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="#!" className="text-dark mx-2"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#!" className="text-dark mx-2"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#!" className="text-dark mx-2"><FontAwesomeIcon icon={faPinterest} /></a>
                <a href="#!" className="text-dark mx-2"><FontAwesomeIcon icon={faGoogle} /></a>
                <a href="#!" className="text-dark mx-2"><FontAwesomeIcon icon={faYoutube} /></a>
                <a href="#!" className="text-dark mx-2"><FontAwesomeIcon icon={faTelegram} /></a>
                <a href="#!" className="text-dark mx-2"><FontAwesomeIcon icon={faEnvelope} /></a>
            </div>
            <h5 className="text-uppercase mt-3">Invite Friends</h5>
            <form className="d-flex">
              <input type="email" className="form-control" placeholder="Email ID" />
              <button type="submit" className="btn ms-2" style={{background:'#8064A2', color:'white'}}>Invite</button>
            </form>
          </div>
        </div>
      </div>

      <div className="text-center p-3">
        © Purple Cues Private Limited
      </div>
    </footer>
  );
};

export default Footer;
