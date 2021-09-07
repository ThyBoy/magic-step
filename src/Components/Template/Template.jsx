import './Template.css';

export default function Template({heading,imageUrl,alt,children}) {
  return (
    <div className="container-fluid vh-95">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-9 col-lg-6 col-xl-5 log-img-sec">
          <img className="login-img" src={imageUrl} alt={alt} />
        </div>
        <div className="col-md-8 col-lg-6 offset-xl-1 align-media">
          <form className="login-container">
            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
              <p className="lead fw-normal mb-0 me-3 login-mess">{heading}</p>
            </div>
            {children}
          </form>
        </div>
      </div>
    </div>
  );
}
